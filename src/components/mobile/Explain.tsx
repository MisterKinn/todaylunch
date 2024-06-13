function Explain() {
    return (
        <div id="explain">
            <h2 className="mobile-introduce" data-aos="fade-up">
                How to use
            </h2>

            <div className="mobile-explain-container" data-aos="fade-up">
                <img src="img/iphone.png" className="explain-img" />
                <p className="mobile-explain-text">
                    <span className="white">App Store</span>에서{" "}
                    <span className="white">TodayLunch</span> 앱
                    <br />
                    설치 후 학교를 지정하시면
                    <br />
                    <span className="white">iPhone</span>과{" "}
                    <span className="white">Apple Watch</span>에서
                    <br />
                    전국의 모든 초, 중, 고등학교의{" "}
                    <span className="white">급식</span>을
                    <br />
                    휴대폰으로 <span className="white">간편하게 확인</span>
                    할
                    <br />
                    수 있습니다.
                    <br />
                    <br />
                    <a
                        href="https://apps.apple.com/kr/app/todaylunch/id6443977069"
                        target="_blank"
                        title="앱 설치하기"
                    >
                        <button className="join">앱 설치하기</button>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Explain;
