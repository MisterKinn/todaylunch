function Desktop() {
    return (
        <div>
            <h2 className="instagram-introduce" data-aos="fade-up">
                Add TodayLunch Instagram Account
            </h2>

            <p className="about-title" data-aos="fade-up">
                <span className="white">TodayLunch</span> Instagram 계정을 추가하려면 <span className="white">TodayLunch 개발진들</span>에게 <span className="white">요청</span>해야 합니다.
                <br />
                <span className="white">페이지 하단부</span>에 개발진들의 <span className="white">Instagram 계정</span>이 <span className="white">명시</span>되어 있습니다.
            </p>

            <h2 className="checklist-introduce" data-aos="fade-up">
                계정 생성 요청 시 확인 사항
            </h2>
            <h3 className="checklist-list" data-aos="fade-up">
                학교(학생회 등) 측 공식 계정 생성 요청일 경우
            </h3>

            <p className="about-title" data-aos="fade-up">
            1. 계정 운영 주체 확인
                - 학교 OR TodayLunch?
                - TodayLunch에서 계정을 직접 운영하는 것을 우선적으로 함.
            2. 기존 계정이 있는 경우 계정 이관 가능한지 확인.
                - 이관 불가능하면 기존 계정 탈퇴(가능한 경우) 후 새로 생성
                - 급식 계정이 두 개면 하나만 활동 중이더라도 혼동 가능성 있음.
            3. [계정 브랜딩 가이드라인](https://www.notion.so/09b29a478e4443789129cd1c0ac1b047?pvs=21) 에서 변경하고 싶은(적용할 수 없는) 부분이 있는지 검토 요청
                - 소개 메시지 수정 요청 시 수정 가능 (단, 만든 사람들 정보 유지)
                - 학교 시그니처(로고) 등 별도 프로필 사진 적용 요청 시 적용 가능
                - 스토리 커스텀 탬플릿 요청 가능
                    - TodayLunch 로고 축소 및 이동은 가능하지만 제거 불가(꼭 없어야 한다면 검토 필요)
                    - 학교 로고 추가 가능
            4. 업로드 항목 검토 요청 - 업로드하지 않았으면 하는 것 또는 추가 업로드 요청
                - 매일 00:05 급식 메뉴 업로드(시간 오차 있을 수 있음) - 오류 발생 시 확인하는 대로 수동 업로드
                - 급식 메뉴 하이라이트에 아카이브
                - 매주 주말에 다음 주 주요 급식 메뉴 미리 보기 업로드 예정
                - 가끔 생각날 때(?) TodayLunch 앱 광고 - 월 1회 미만 예정
                - 급식실 공지 사항 있다면 업로드 가능함. 근데 실시간 업로드는 어려울 듯.
                    - 현실적으로 가능할지 모르겠음. 급식실 → 학생회 → TodayLunch ??
            5. 학생회 계정 등 맞팔로우 해야 하는 계정
            </p>

        </div>
    );
}

export default Desktop;
