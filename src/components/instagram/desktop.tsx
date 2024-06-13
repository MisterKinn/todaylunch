function Desktop() {
    return (
        <div>
            <h2 className="instagram-introduce" data-aos="fade-up">
                TodayLunch in Instagram
            </h2>
            <p className="click-explain" data-aos="fade-up">
                카드 클릭 시 각 인스타그램 페이지로 이동됩니다.
            </p>

            <div className="container" data-aos="fade-up">
                <a
                    href="https://www.instagram.com/gmsh_lunch"
                    target="_blank"
                    title="TodayLunch in GMSH"
                >
                    <div className="spec">
                        <div className="card-container spec2">
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/gmsh.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 경기영상과학고</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://www.instagram.com/gjhs_lunch"
                    target="_blank"
                    title="TodayLunch in Gajwa"
                >
                    <div className="spec">
                        <div className="card-container spec2">
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/gajwa.webp"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 가좌고등학교</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://www.instagram.com/daejin_lunch"
                    target="_blank"
                    title="TodayLunch in Gajwa"
                >
                    <div className="spec">
                        <div className="card-container spec2">
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/daejin.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 대진전자통신고</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://www.instagram.com/shinjin_lunch"
                    target="_blank"
                    title="TodayLunch in Gajwa"
                >
                    <div className="spec">
                        <div className="card-container spec2">
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/shinjin.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 신진과학기술고</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="add-insta">
                <a
                    href="/instagram/add"
                    target="_blank"
                    title="학교 추가하기"
                >
                    <button className="join2">학교 추가하기</button>
                </a>
            </div>
        </div>
    );
}

export default Desktop;
