# 개발자 웹 이력서 개발 로드맵

## 프로젝트 개요
HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서 제작

---

## Phase 1: 프로젝트 설정 (30분)

### 1.1 프로젝트 구조 생성
```
resume-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       └── profile.jpg
└── README.md
```

### 1.2 TailwindCSS 설정
- [ ] CDN 방식으로 TailwindCSS 추가
- [ ] 또는 npm 설치 후 빌드 설정
- [ ] 커스텀 색상 및 폰트 설정

---

## Phase 2: HTML 구조 작성 (1시간)

### 2.1 기본 HTML 구조
- [ ] DOCTYPE, meta 태그 설정
- [ ] 시맨틱 HTML 태그 사용 (header, main, section, footer)
- [ ] 접근성 고려 (aria-label, alt 속성)

### 2.2 섹션 구성
- [ ] **Header**: 네비게이션 메뉴
- [ ] **Hero Section**: 프로필 사진, 이름, 직함, 간단한 소개
- [ ] **About**: 자기소개 및 연락처 정보
- [ ] **Skills**: 기술 스택 목록
- [ ] **Experience**: 경력 사항
- [ ] **Projects**: 주요 프로젝트
- [ ] **Education**: 학력
- [ ] **Footer**: 저작권, 소셜 미디어 링크

---

## Phase 3: TailwindCSS 스타일링 (2시간)

### 3.1 레이아웃 설계
- [ ] 컨테이너 및 그리드 시스템 적용
- [ ] 여백 및 패딩 조정
- [ ] 색상 팔레트 적용

### 3.2 컴포넌트 스타일링
- [ ] 네비게이션 바 디자인
- [ ] 프로필 카드 디자인
- [ ] 스킬 태그 디자인
- [ ] 타임라인 형식의 경력 섹션
- [ ] 프로젝트 카드 레이아웃
- [ ] 버튼 및 링크 스타일

### 3.3 타이포그래피
- [ ] 헤딩 스타일 (h1, h2, h3)
- [ ] 본문 텍스트 스타일
- [ ] 폰트 사이즈 및 간격 조정

---

## Phase 4: 반응형 디자인 (1.5시간)

### 4.1 모바일 퍼스트 접근
- [ ] 모바일 레이아웃 (< 640px)
- [ ] 태블릿 레이아웃 (640px ~ 1024px)
- [ ] 데스크톱 레이아웃 (> 1024px)

### 4.2 브레이크포인트 적용
- [ ] TailwindCSS의 sm:, md:, lg:, xl: 활용
- [ ] 네비게이션 메뉴 햄버거 메뉴로 전환 (모바일)
- [ ] 그리드 컬럼 수 조정

---

## Phase 5: JavaScript 인터랙션 (2시간)

### 5.1 네비게이션
- [ ] 부드러운 스크롤 (Smooth Scroll)
- [ ] 모바일 햄버거 메뉴 토글
- [ ] 스크롤 시 네비게이션 바 스타일 변경

### 5.2 애니메이션
- [ ] 스크롤 애니메이션 (Scroll Reveal)
- [ ] 스킬 프로그레스 바 애니메이션
- [ ] 호버 효과

### 5.3 동적 컨텐츠
- [ ] 프로젝트 필터링 기능 (선택사항)
- [ ] 다크 모드 토글 (선택사항)
- [ ] 타이핑 효과 (선택사항)

---

## Phase 6: 컨텐츠 작성 (1시간)

### 6.1 개인 정보
- [ ] 이름, 직함, 이메일, 전화번호
- [ ] 프로필 사진 추가
- [ ] 간단한 자기소개 (2-3문장)

### 6.2 기술 스택
```
예시:
- Frontend: HTML, CSS, JavaScript, React, Vue.js
- Backend: Node.js, Python, Java
- Database: MySQL, MongoDB
- Tools: Git, Docker, AWS
```

### 6.3 경력 사항
```
예시:
- 회사명: ABC Tech
- 기간: 2022.03 - 현재
- 직책: Frontend Developer
- 담당 업무: 웹 애플리케이션 개발 및 유지보수
```

### 6.4 프로젝트
```
예시:
- 프로젝트명: E-Commerce Platform
- 기간: 2023.01 - 2023.06
- 기술: React, Node.js, MongoDB
- 설명: 온라인 쇼핑몰 플랫폼 개발
- 링크: GitHub, 데모 사이트
```

### 6.5 학력
```
예시:
- 학교명: 한국대학교
- 전공: 컴퓨터공학
- 기간: 2018.03 - 2022.02
```

---

## Phase 7: 최적화 및 테스트 (1시간)

### 7.1 성능 최적화
- [ ] 이미지 최적화 (압축, WebP 포맷)
- [ ] CSS/JS 파일 minify
- [ ] 불필요한 코드 제거

### 7.2 브라우저 테스트
- [ ] Chrome, Firefox, Safari, Edge 테스트
- [ ] 모바일 브라우저 테스트

### 7.3 접근성 검사
- [ ] 키보드 네비게이션 테스트
- [ ] 스크린 리더 호환성 확인
- [ ] 색상 대비 확인

---

## Phase 8: 배포 (30분)

### 8.1 배포 플랫폼 선택
- [ ] GitHub Pages (무료, 간단)
- [ ] Netlify (무료, CI/CD 지원)
- [ ] Vercel (무료, 빠른 배포)

### 8.2 도메인 설정
- [ ] 커스텀 도메인 연결 (선택사항)
- [ ] HTTPS 설정

### 8.3 SEO 최적화
- [ ] meta 태그 추가 (description, keywords)
- [ ] Open Graph 태그 추가
- [ ] sitemap.xml 생성

---

## 추가 개선 사항 (선택)

### 다크 모드
- [ ] 다크/라이트 모드 토글 버튼
- [ ] 색상 테마 전환 애니메이션

### 다국어 지원
- [ ] 한국어/영어 전환 기능

### 인쇄 최적화
- [ ] 인쇄용 CSS 스타일 추가
- [ ] PDF 다운로드 버튼

### 애널리틱스
- [ ] Google Analytics 연동

---

## 예상 소요 시간
- **총 소요 시간**: 약 9-10시간
- **최소 기능**: 약 5-6시간 (Phase 1-3, 6)
- **풀 기능**: 약 9-10시간 (모든 Phase)

---

## 체크리스트

### 필수 항목
- [ ] 반응형 디자인
- [ ] 깔끔한 UI/UX
- [ ] 빠른 로딩 속도
- [ ] 브라우저 호환성

### 선택 항목
- [ ] 애니메이션 효과
- [ ] 다크 모드
- [ ] 프로젝트 필터링
- [ ] 다국어 지원

---

## 참고 자료

### TailwindCSS
- 공식 문서: https://tailwindcss.com/docs
- 컴포넌트 예제: https://tailwindui.com/components

### 디자인 영감
- Dribbble: https://dribbble.com/tags/resume
- Behance: https://www.behance.net/search/projects?search=resume

### 무료 아이콘
- Font Awesome: https://fontawesome.com/
- Heroicons: https://heroicons.com/

### 무료 이미지
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/

---

## 시작하기

1. 프로젝트 폴더 생성
2. index.html 파일 생성
3. TailwindCSS CDN 추가
4. 기본 구조 작성
5. 단계별로 체크리스트 완료

**Happy Coding!** 🚀
