function About() {
    return (
        <div>
            <h2 className="introduce" data-aos="fade-up">
                What is TodayLunch?
            </h2>
            <p className="about-title" data-aos="fade-up">
                <span className="white">TodayLunch</span>는 전국 초, 중,
                고등학교의 <span className="white">급식 알림 서비스</span>
                입니다.
                <br />
                <span className="white">iPhone</span>과{" "}
                <span className="white">Apple Watch</span> 앱으로 일주일 간의
                급식을 확인할 수 있으며,
                <br />
                <span className="white">Instagram</span> 계정으로 각 학교의
                급식을 매일 확인할 수 있습니다.
            </p>
            <div data-aos="fade-up">
                <div className="success-button">
                    <a
                        href="https://apps.apple.com/kr/app/todaylunch/id6443977069"
                        target="_blank"
                        title="TodayLunch 앱 설치하기"
                    >
                        <button className="learn-more" role="button">
                            TodayLunch 앱 설치하기
                        </button>
                    </a>

                    <div className="margin"></div>

                    <a
                        href="/instagram"
                        target="_blank"
                        title="Instagram 계정 둘러보기"
                    >
                        <button className="learn-more" role="button">
                            Instagram 계정 둘러보기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
