function Insta() {
    return (
        <div>
            <h2 className="mobile-introduce" data-aos="fade-up">
                TodayLunch
                <br />
                in Instagram
            </h2>

            <div className="mobile-explain-container" data-aos="fade-up">
                <img
                    src="img/todaylunch_insta.png"
                    className="mobile-explain-img"
                />
                <p className="mobile-explain-text">
                    <span className="white">Instagram</span>에 있는
                    <br /> 여러 학교의 TodayLunch 계정에서
                    <br />각 학교의 급식을{" "}
                    <span className="white">스토리로 업로드</span>
                    합니다.
                    <br />
                    <br />
                    <a
                        href="/instagram"
                        target="_blank"
                        title="Instagram 확인하기"
                    >
                        <button className="join">Instagram 확인하기</button>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Insta;
