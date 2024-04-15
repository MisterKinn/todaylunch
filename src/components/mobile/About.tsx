function About() {
    return (
        <div id="about">
            <h2 className="mobile-introduce" data-aos="fade-up">
                What is
                <br />
                TodayLunch?
            </h2>
            <p className="mobile-about-title" data-aos="fade-up">
                <span className="white">TodayLunch</span>는 전국
                <br /> 초, 중, 고등학교의 <br />
                <span className="white">급식 알림 서비스</span>
                입니다.
                <br />
                <br />
                <span className="white">iPhone</span>과{" "}
                <span className="white">Apple Watch</span> 앱으로
                <br /> 일주일 간의 급식을 확인할 수 있으며,
                <br />
                <br />
                <span className="white">Instagram</span> 계정으로 각 학교의
                <br />
                급식을 매일 확인할 수 있습니다.
            </p>

            <div data-aos="fade-up">
                <div className="about-button blank">
                    <a
                        href="https://apps.apple.com/kr/app/todaylunch/id6443977069"
                        target="_blank"
                        title="TodayLunch 앱 설치하기"
                    >
                        <button className="learn-more" role="button">
                            앱 설치하기
                        </button>
                    </a>

                    <div className="margin"></div>

                    <a
                        href="/instagram"
                        target="_blank"
                        title="Instagram 계정 둘러보기"
                    >
                        <button className="learn-more" role="button">
                            Instagram 둘러보기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
