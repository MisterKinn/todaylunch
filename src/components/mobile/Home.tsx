function Home() {
    return (
        <div id="home">
            <header className="header">
                <img
                    src="img/header.png"
                    alt="TodayLunch"
                    className="header-img"
                />
                <div className="header-container" data-aos="fade-up">
                    <h1 className="mobile-title">TodayLunch</h1>
                </div>
                <div className="img-container" data-aos="fade-up">
                    <img
                        loading="lazy"
                        src="img/arrow.png"
                        className="mobile-arrow"
                    />
                </div>
            </header>
        </div>
    );
}

export default Home;
