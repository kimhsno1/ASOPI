const oracledb = require('oracledb');
oracledb.autoCommit = true;
require('dotenv').config();

const connectDB = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_PATH,
};

// Oracle 데이터베이스 연결
async function connectToDB() {
    try {
        await oracledb.createPool(connectDB);
        console.log('Connected to Oracle Database!');
    } catch (err) {
        console.error('Error connecting to Oracle DB:', err.message);
    }
}

// 데이터베이스에 modelResult 저장하는 함수
async function saveModelResult(modelResult) {
    const connection = await oracledb.getConnection();
    try {
        const currentDate = new Date();

        //modelResult를 사용해 disease 테이블에서 질병 정보 가져오기
        const diseaseQuery = `SELECT SYMPTOM, DESCRIPTION FROM DISEASE WHERE DISEASE_CODE = :modelResult`;
        const diseaseInfo = await connection.execute(diseaseQuery, [modelResult]);

        if (diseaseInfo.rows.length === 0) {
            console.error('Disease not found for code:', modelResult);
            return;
        }

        const [symptom, desc] = diseaseInfo.rows[0];

        // USER_RECORD 테이블에 modelResult, symptom, desc 및 현재 시간을 삽입하는 쿼리
        const recordData = {
            modelResult,
            symptom,
            desc,
        };

        // USER_RECORD 테이블에 modelResult 및 현재 시간을 삽입하는 쿼리
        const sql = 'INSERT INTO USER_RECORD (RECORD, DATE) VALUES (:record, :currentDate)';
        // 쿼리에 바인딩할 값들 정의
        const binds = {
            record: JSON.stringify(recordData), // JSON 형식으로 저장
            currentDate,
        };
        // 연결을 사용해 sql 쿼리 실행
        await connection.execute(sql, binds);
        console.log('Model result saved to database!');
    } catch (err) {
        console.error('Error saving model result to database:', err.message);
        throw err;
    } finally {
        // 연결 닫기
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing database connection:', err.message);
            }
        }
    }
}

async function getSymptom(modelResult) {
    const connection = await oracledb.getConnection();
    try {
        const sql = 'SELECT SYMPTOM, DESCRIPTION FROM disease WHERE DISEASE_CODE = :modelResult';
        const binds = [modelResult];

        const result = await connection.execute(sql, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT });

        // 결과가 있는지 확인하고 있다면 symptom과 description 반환, 없다면 null 반환
        if (result.rows.length > 0) {
            const { symptom, description } = result.rows[0];
            const jsonData = JSON.stringify({ symptom, description });
            return jsonData;
        } else {
            return null;
        }
    } catch (err) {
        console.error('Error getting symptom from database:', err.message);
        throw err;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing database connection:', err.message);
            }
        }
    }
}

module.exports = {
    connectToDB,
    saveModelResult,
    getSymptom,
};
