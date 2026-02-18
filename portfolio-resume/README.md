# Portfolio Resume

HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Resume+Preview)

## 📋 프로젝트 소개

이 프로젝트는 개발자를 위한 현대적이고 반응형인 웹 이력서입니다. 모바일 퍼스트 접근 방식으로 설계되었으며, 깔끔한 UI/UX와 부드러운 인터랙션을 제공합니다.

### 주요 특징

✨ **반응형 디자인** - 모바일, 태블릿, 데스크톱 모든 화면 크기 지원
🎨 **현대적인 UI** - TailwindCSS를 활용한 깔끔하고 세련된 디자인
⚡ **부드러운 인터랙션** - 스크롤 애니메이션, 메뉴 토글 등 다양한 인터랙티브 요소
🔗 **SNS 통합** - GitHub, YouTube, Instagram, LinkedIn 등 소셜 미디어 링크 포함
♿ **접근성** - 키보드 네비게이션, 스크린 리더 호환, WCAG 준수
🚀 **빠른 로딩** - 정적 HTML, CDN 사용으로 빠른 페이지 로드

## 🛠 기술 스택

### Frontend
- **HTML5** - 시맨틱 태그 사용
- **CSS3** - 커스텀 스타일 및 애니메이션
- **JavaScript (ES6+)** - Vanilla JS로 구현된 인터랙션
- **TailwindCSS** - 유틸리티 퍼스트 CSS 프레임워크 (CDN 방식)

### 라이브러리
- **Font Awesome 6.5.1** - 아이콘
- **Google Fonts (Noto Sans KR)** - 한글 폰트

## 📁 프로젝트 구조

```
portfolio-resume/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS 스타일
├── js/
│   └── main.js            # JavaScript 인터랙션
├── assets/
│   └── images/            # 이미지 파일 (프로필 사진 등)
└── README.md              # 프로젝트 설명 문서
```

## 🚀 실행 방법

### 1. 브라우저로 직접 열기
`index.html` 파일을 더블 클릭하여 브라우저로 바로 열 수 있습니다.

### 2. Live Server 사용 (권장)

#### npm 방식
```bash
cd portfolio-resume
npx live-server
```

#### VSCode 확장 사용
1. VSCode에서 "Live Server" 확장 설치
2. `index.html` 파일 우클릭
3. "Open with Live Server" 선택

## 💡 주요 기능

### 1. 반응형 네비게이션
- 데스크톱: 가로 메뉴 바
- 모바일: 햄버거 메뉴 (토글 가능)
- 스크롤 시 네비게이션 바 스타일 자동 변경

### 2. 부드러운 스크롤
- 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤
- `scroll-behavior: smooth` CSS 속성 활용

### 3. 섹션 구성
- **Hero**: 프로필 이미지, 이름, 직함, 소개, SNS 링크
- **About**: 상세한 자기소개 및 연락처 정보
- **Skills**: 기술 스택 (Frontend, Backend, Database, Tools)
- **Experience**: 경력 사항 (타임라인 레이아웃)
- **Projects**: 주요 프로젝트 (카드 그리드 레이아웃)
- **Education**: 학력 및 교육 이력
- **Contact**: 이메일 및 SNS 링크 버튼
- **Footer**: 저작권 및 소셜 미디어 아이콘

### 4. SNS 통합
- GitHub, YouTube, Instagram, LinkedIn 링크
- Hero, Contact, Footer 섹션에 배치
- 새 탭에서 열기 (`target="_blank"`)
- 보안 속성 (`rel="noopener noreferrer"`)

### 5. 스크롤 애니메이션 (선택 기능)
- Intersection Observer API 사용
- 요소가 뷰포트에 들어오면 페이드인 효과

### 6. 현재 섹션 강조
- 스크롤 위치에 따라 네비게이션 링크 자동 강조

## 🎨 커스터마이징 가이드

### 1. 개인 정보 수정
`index.html` 파일에서 다음 정보를 수정하세요:
- 이름, 직함, 소개
- 이메일, 전화번호, 주소
- SNS 링크 URL
- 기술 스택
- 경력 및 프로젝트 정보
- 학력

### 2. 프로필 이미지 변경
1. `assets/images/` 폴더에 이미지 업로드
2. `index.html`의 Hero 섹션에서 이미지 경로 수정:
```html
<img src="assets/images/your-profile.jpg" alt="프로필 사진">
```

### 3. 색상 테마 변경
TailwindCSS 클래스를 수정하여 색상 변경:
- Primary 색상: `blue-600` → 원하는 색상으로 변경 (예: `purple-600`)
- Accent 색상: `indigo-500` → 원하는 색상으로 변경

### 4. 폰트 변경
`index.html`의 Google Fonts 링크를 수정:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;700&display=swap" rel="stylesheet">
```

## 📱 반응형 브레이크포인트

| 화면 크기 | TailwindCSS 접두사 | 설명 |
|-----------|-------------------|------|
| < 640px   | (기본)             | 모바일 |
| ≥ 640px   | `sm:`             | 큰 모바일/작은 태블릿 |
| ≥ 768px   | `md:`             | 태블릿 |
| ≥ 1024px  | `lg:`             | 데스크톱 |
| ≥ 1280px  | `xl:`             | 큰 화면 |

## ♿ 접근성

이 프로젝트는 웹 접근성을 고려하여 제작되었습니다:

- ✅ 시맨틱 HTML 태그 사용
- ✅ ARIA 속성 추가 (`aria-label`, `aria-expanded`)
- ✅ 모든 이미지에 `alt` 속성 포함
- ✅ 키보드 네비게이션 지원 (Tab, Enter)
- ✅ 포커스 스타일 명확하게 표시
- ✅ 색상 대비 비율 준수 (WCAG AA 기준)

## 🌐 배포 방법

### GitHub Pages
1. GitHub 레포지토리 생성
2. 코드 푸시
```bash
git add .
git commit -m "초기 커밋: 웹 이력서 업로드"
git push origin main
```
3. Repository Settings → Pages → Source: main branch 선택
4. 배포된 URL 확인

### Netlify
1. [Netlify](https://www.netlify.com/) 접속
2. "Add new site" → "Deploy manually" 선택
3. `portfolio-resume` 폴더 드래그 앤 드롭

### Vercel
```bash
npm install -g vercel
cd portfolio-resume
vercel deploy
```

## 📝 브라우저 지원

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ✅ 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 🤝 기여

이 프로젝트에 기여하고 싶으시다면 Pull Request를 보내주세요!

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 👤 제작자

**홍길동**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: example@email.com

## 🙏 감사의 말

- [TailwindCSS](https://tailwindcss.com/) - 유틸리티 퍼스트 CSS 프레임워크
- [Font Awesome](https://fontawesome.com/) - 아이콘 라이브러리
- [Google Fonts](https://fonts.google.com/) - 웹 폰트

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
