const oracledb = require('oracledb');
oracledb.autoCommit = true;
require('dotenv').config();
const { app } = require('./app');

const connectDB = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_PATH,
    poolAlias: 'default',
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
async function saveModelResult(disease, symptom, description, userEmail, childName, childAge) {
    const connection = await oracledb.getConnection();
    try {
        const currentDate = new Date();

        const recordData = {
            disease,
            symptom,
            description,
            childName,
            childAge,
        };

        // USER_RECORD 테이블에 modelResult 및 현재 시간을 삽입하는 쿼리
        const sql = 'INSERT INTO USER_RECORD (RECORD, DATE, EMAIL) VALUES (:recordData, :currentDate, :userEmail)';
        // 쿼리에 바인딩할 값들 정의
        const binds = {
            record: JSON.stringify(recordData), // JSON 형식으로 저장
            userEmail,
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

// 병명을 호출하는 함수
async function getDisease(modelResult) {
    const connection = await oracledb.getConnection();
    try {
        const sql = 'SELECT NAME FROM DISEASE WHERE NAME = :modelResult';
        const binds = { modelResult };

        const result = await connection.execute(sql, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT });

        // 결과가 있는지 확인하고 있다면 name 반환, 없다면 null 반환
        if (result.rows.length > 0) {
            const { NAME } = result.rows[0];
            const jsonData = JSON.stringify(NAME);
            return jsonData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting symptom from database:', error.message);
        throw error;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('Error closing database connection:', error.message);
            }
        }
    }
}

// 증상을 데이터베이스에서 가져오는 함수
async function getSymptom(modelResult) {
    const connection = await oracledb.getConnection();
    try {
        const sql = 'SELECT SYMPTOM FROM DISEASE WHERE NAME = :modelResult';
        const binds = { modelResult };

        const result = await connection.execute(sql, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT });

        // 결과가 있는지 확인하고 있다면 symptom과 description 반환, 없다면 null 반환
        if (result.rows.length > 0) {
            const symptom = result.rows[0].SYMPTOM;
            const jsonData = JSON.stringify(symptom);
            return jsonData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting symptom from database:', error.message);
        throw error;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('Error closing database connection:', error.message);
            }
        }
    }
}

// 설명을 데이터베이스에서 가져오는 함수
async function getDescription(modelResult) {
    const connection = await oracledb.getConnection();
    try {
        const sql = 'SELECT DESCRIPTION FROM DISEASE WHERE NAME = :modelResult';
        const binds = { modelResult };

        const result = await connection.execute(sql, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT });

        // 결과가 있는지 확인하고 있다면 symptom과 description 반환, 없다면 null 반환
        if (result.rows.length > 0) {
            const description = result.rows[0].DESCRIPTION;
            const jsonData = JSON.stringify(description);
            return jsonData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting description from database:', error.message);
        throw error;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('Error closing description connection:', error.message);
            }
        }
    }
}

module.exports = {
    connectToDB,
    saveModelResult,
    getSymptom,
    getDisease,
    getDescription,
};
