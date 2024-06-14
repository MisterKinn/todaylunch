import MobileBanner from "../../../components/mobile/Banner";
import MobileFooter from "../../../components/mobile/Footer";

function Desktop() {
    return (
        <div>
            <h2 className="mobile-instagram-introduce" data-aos="fade-up">
                Add TodayLunch Instagram Account
            </h2>

            <p className="mobile-about-title" data-aos="fade-up">
                <span className="white">TodayLunch</span> Instagram 계정을
                <br />
                추가하려면{" "}
                <span className="white">
                    TodayLunch
                    <br />
                    개발진들
                </span>
                에게
                <span className="white">요청</span>해야 합니다.
                <br />
                <br />
                <span className="white">페이지 하단부</span>에 개발진들의
                <br />
                <span className="white">Instagram 계정</span>이{" "}
                <span className="white">명시</span>되어 있습니다.
            </p>

            <h2 className="mobile-checklist-introduce" data-aos="fade-up">
                계정 생성 요청 시 확인 사항
            </h2>

            <h3 className="mobile-checklist-list" data-aos="fade-up">
                학교 측 공식 계정 생성 요청일 경우
            </h3>

            <p className="mobile-about-text" data-aos="fade-up">
                <span className="white">1. 계정 운영 주체 확인</span>
                <br />
                - 학교 OR TodayLunch
                <br />- TodayLunch에서 계정을 직접
                <br /> 운영하는 것을 우선적으로 함
                <br />
                <br />
                <span className="white">
                    2. 기존 계정이 있는 경우
                    <br /> 계정 이관 가능 여부 확인
                </span>
                <br />- 이관 불가능하면 가급적
                <br /> 기존 계정 탈퇴 후 새로 생성
                <br />- 급식 계정이 여러 개면
                <br /> 혼동 가능성이 다분함
                <br />
                <br />
                <span className="white">3. Instagram 계정 정보 변경 요청</span>
                <br />
                - 소개 메시지 수정 요청 시 수정 가능
                <br />
                (단, TodayLunch 개발진들 정보 유지)
                <br />
                - 학교 시그니처(로고) 등 별도
                <br /> 프로필 사진 적용 요청 시 적용 가능
                <br />
                - 스토리 커스텀 탬플릿 요청 가능
                <br /> - TodayLunch 로고 축소 및<br /> 이동은 가능하지만 제거
                불가
                <br />
                <br />
                <span className="white">4. 업로드 항목 검토 요청</span>
                <br /> - 업로드 요청 사항은 TodayLunch
                <br /> 개발진들 Instagram DM으로 요청
                <br />- 매일 00:05 급식 메뉴 스토리 업로드
                <br />- 오류 발생 수동 업로드
                <br /> - Instagram 하이라이트에
                <br /> 급식 메뉴 아카이브
                <br /> - 매주 주말에 다음 주 주요 급식
                <br /> 메뉴 미리 보기 업로드 예정
                <br /> - TodayLunch 앱 광고(월 1회 미만 예정)
                <br /> - 급식실 공지 사항 업로드 가능
                <br />- 업로드될 사항은 TodayLunch
                <br /> 개발진들 Instagram DM으로 요청
            </p>

            <h3 className="mobile-checklist-list" data-aos="fade-up">
                재학생의 비공식적인 요청일 경우
            </h3>

            <p className="mobile-about-text" data-aos="fade-up">
                <span className="white">1. 해당 학교의 수요 확인</span>
                <br />
                - 수요가 적다고 판단되면 계정 생성 불가
                <br />
                <br />
                <span className="white">
                    2. 해당 학교의 운영 중인 급식 알림 계정 존재 여부 확인
                </span>
                <br />- 공식적인 급식 알림 계정이
                <br /> 있으면 계정 생성 불가
                <br />
                <br />
                <span className="white">3. 계정 정보 수정 불가</span>
                <br />- 학교 측의 공식적인 요청이 아닐 경우
                <br /> TodayLunch 템플릿 적용
            </p>

            <h3 className="mobile-checklist-list" data-aos="fade-up">
                TodayLunch 개발진 Instagram
            </h3>
            <p className="click-explain2" data-aos="fade-up">
                카드 클릭 시 각 인스타그램
                <br />
                페이지로 이동됩니다.
            </p>

            <div data-aos="fade-up">
                <div className="container">
                    <a
                        href="https://www.instagram.com/kinn__sy"
                        target="_blank"
                        title="kinn__sy"
                    >
                        <div className="spec">
                            <div className="card-container spec">
                                <div className="column-center">
                                    <img
                                        loading="lazy"
                                        src="https://kinn-kr.vercel.app/img/instagram.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>kinn__sy</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container">
                    <a
                        href="https://www.instagram.com/hello.jsna"
                        target="_blank"
                        title="hello.jsna"
                    >
                        <div className="spec">
                            <div className="card-container spec">
                                <div className="column-center">
                                    <img
                                        loading="lazy"
                                        src="https://kinn-kr.vercel.app/img/instagram.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>hello.jsna</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <MobileBanner />
            <MobileFooter />
        </div>
    );
}

export default Desktop;
