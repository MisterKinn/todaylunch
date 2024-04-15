function Explain() {
    return (
        <div id="explain">
            <h2 className="introduce" data-aos="fade-up">
                How to use
            </h2>

            <div className="explain-container" data-aos="fade-up">
                <img src="img/iphone.png" className="explain-img" />
                <p className="explain-text">
                    <span className="white">App Store</span>에서{" "}
                    <span className="white">TodayLunch</span>앱 설치 후
                    <br />
                    학교를 지정하시면 <span className="white">
                        iPhone
                    </span>과 <span className="white">Apple Watch</span>에서
                    <br />
                    전국의 모든 초, 중, 고등학교의{" "}
                    <span className="white">급식</span>을
                    <br />
                    휴대폰 안에서 <span className="white">간편하게 확인</span>할
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
