import "../../styles/todaylunch.css";

function Instagram() {
    return (
        <div>
            <h2 className="introduce" data-aos="fade-up">
                TodayLunch in Instagram
            </h2>

            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <img
                                loading="lazy"
                                src="img/handcuffs.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong> 형사사건</strong>
                            </span>
                            <div className="card-text">
                                <strong>
                                    수사단계부터 재판까지 의뢰인의 편에서
                                    <br />
                                    <span className="white">최선의 결과</span>를
                                    위해 노력합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <img
                                loading="lazy"
                                src="img/civil.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong> 민사소송</strong>
                            </span>
                            <div className="card-text">
                                <strong>
                                    의뢰인의 소중한 권리와 자산 보호를 위해
                                    <br />
                                    <span className="white">
                                        체계적
                                    </span>이고{" "}
                                    <span className="white">전략적</span>으로
                                    접근합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instagram;
