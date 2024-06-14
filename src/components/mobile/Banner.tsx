function Banner() {
    return (
        <div id="banner" className="body">
            <a href="https://kinn.kr/" target="_blank" title="Kinn's Lounge">
                <img
                    loading="lazy"
                    src="kinn-kr.vercel.app/img/kinn-banner.png"
                    alt="Kinn's Lounge"
                    className="mobile-banner margin10"
                />
            </a>
        </div>
    );
}

export default Banner;
