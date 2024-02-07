import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Main.css';
import logo from './asopi_logo.png';
import main_image from './asopi_main_image.png';
import main_image2 from './asopi_main_image_2.png';
import mypage from './mypage_icon.png';

function Main() {
    const toLogin = () => {
        window.location.href = 'login.html';
    };

    const toLoginOMypage = () => {
        // 로컬 스토리지에서 엑세스 토큰을 가져옵니다.
        const accessToken = localStorage.getItem('userToken');
        if (accessToken) {
            // 엑세스 토큰이 있는 경우, 로그인을 한 상태입니다.
            window.location.href = 'mypage.html'; // 진단 페이지로 이동합니다.
        } else {
            // 엑세스 토큰이 없는 경우, 로그인을 하지 않은 상태입니다.
            toLogin(); // 로그인 페이지로 이동합니다.
        }
    };

    const toLoginOrDiagnosis = () => {
        // 로컬 스토리지에서 엑세스 토큰을 가져옵니다.
        const accessToken = localStorage.getItem('userToken');
        if (accessToken) {
            // 엑세스 토큰이 있는 경우, 로그인을 한 상태입니다.
            window.location.href = 'diagnosis.html'; // 진단 페이지로 이동합니다.
        } else {
            // 엑세스 토큰이 없는 경우, 로그인을 하지 않은 상태입니다.
            toLogin(); // 로그인 페이지로 이동합니다.
        }
    };

    return (
        <div>
            <header>
                <div id="logo">
                    <Link to="/">
                        <img src={logo} alt="로고" width="100%" />
                    </Link>
                </div>

                <div id="mypage_logo" onClick={toLoginOMypage}>
                    <img src={mypage} alt="로고" width="100%" />
                </div>
            </header>

            <main className="contents">
                <div id="slogan">
                    <p>
                        AI로 빠르게 진단하는 <br /> ‘우리 아이 피부 질환’
                    </p>
                </div>

                <div id="information">
                    <img id="main_image1" src={main_image} alt="메인" width="100%" />
                    <div id="info_text1">
                        30가지의 복잡한 피부 질환을
                        <br />
                        병원에 가지 않고
                        <br />
                        언제 어디서나 확인할 수 있어요.
                        <br /> <br />
                        아이의 피부 상태를 확인하고 기록하여,
                        <br />
                        차도를 알 수 있어요.
                    </div>
                    <img id="main_image2" src={main_image2} alt="메인2" width="100%" />
                    <div id="info_text2">
                        자체 개발한 AI 모델이
                        <br />
                        피부의 상태를 진단해드려요.
                        <br />
                        <br />
                        내 주변 가까운 병원까지
                        <br />
                        함께 확인할 수 있어요.
                    </div>
                </div>

                <br />
                <br />
                <div id="button" onClick={toLoginOrDiagnosis}>
                    <button className="button" type="button">
                        아소피 시작하기
                    </button>
                </div>
            </main>

            <br />

            <footer>
                <div id="cs_center">
                    <div id="cs_center_title">
                        <h3>고객센터</h3>
                    </div>
                    <div id="cs_detail">
                        <p>
                            전화 0507-1353-7302
                            <br /> 이메일 aspoioffocial@gmail.com
                            <br /> 운영 시간 09:00 ~ 18:00
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
