# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서 제작 프로젝트입니다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어~
- **코드 주석**: 한국어
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택

- HTML5 (시맨틱 태그 사용)
- CSS3 (커스텀 스타일)
- JavaScript (Vanilla JS, ES6+)
- TailwindCSS (유틸리티 퍼스트 CSS 프레임워크)

## 프로젝트 구조

```
resume-website/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS 스타일
├── js/
│   └── main.js            # JavaScript 인터랙션
├── assets/
│   └── images/
│       └── profile.jpg    # 프로필 이미지
├── ROADMAP.md             # 개발 로드맵
└── CLAUDE.md              # Claude Code 가이드
```

## 개발 명령어

### TailwindCSS CDN 방식 (권장 - 빠른 시작)
- `index.html`에 TailwindCSS CDN 링크 추가
- 브라우저로 `index.html` 직접 열기
- Live Server 사용: `npx live-server` 또는 VSCode Live Server 확장

### TailwindCSS npm 방식 (프로덕션 환경)
```bash
# 의존성 설치
npm install

# 개발 서버 실행 (파일 변경 감지)
npm run dev

# 프로덕션 빌드
npm run build

# TailwindCSS 컴파일 (watch 모드)
npm run watch
```

## HTML 구조

이력서는 다음 섹션으로 구성됩니다:

1. **Header**: 네비게이션 메뉴
2. **Hero Section**: 프로필 사진, 이름, 직함, 간단한 소개
3. **About**: 자기소개 및 연락처
4. **Skills**: 기술 스택 (TailwindCSS 태그 형식)
5. **Experience**: 경력 사항 (타임라인 레이아웃)
6. **Projects**: 주요 프로젝트 (카드 레이아웃)
7. **Education**: 학력
8. **Footer**: 저작권, 소셜 미디어 링크

## 반응형 디자인 원칙

- **모바일 퍼스트** 접근 방식 사용
- TailwindCSS 브레이크포인트:
  - 기본 (< 640px): 모바일
  - `sm:` (≥ 640px): 태블릿
  - `md:` (≥ 768px): 작은 데스크톱
  - `lg:` (≥ 1024px): 데스크톱
  - `xl:` (≥ 1280px): 큰 화면

## JavaScript 기능

### 필수 기능
- 부드러운 스크롤 (Smooth Scroll)
- 모바일 햄버거 메뉴 토글
- 스크롤 시 네비게이션 바 스타일 변경

### 선택 기능
- 스크롤 애니메이션 (Intersection Observer API 사용)
- 스킬 프로그레스 바 애니메이션
- 다크 모드 토글
- 프로젝트 필터링

## 코딩 스타일 가이드

### HTML
- 시맨틱 태그 사용 (`<header>`, `<main>`, `<section>`, `<footer>`)
- 접근성 속성 추가 (`aria-label`, `alt`, `role`)
- 들여쓰기: 2 스페이스

### CSS/TailwindCSS
- TailwindCSS 유틸리티 클래스 우선 사용
- 커스텀 스타일은 `style.css`에 작성
- 클래스명 순서: 레이아웃 → 크기 → 색상 → 타이포그래피 → 기타

### JavaScript
- ES6+ 문법 사용
- `const`/`let` 사용, `var` 사용 금지
- 화살표 함수 사용
- 함수명: camelCase (예: `toggleMobileMenu`)
- 상수명: UPPER_SNAKE_CASE (예: `SCROLL_THRESHOLD`)

## 성능 최적화

- 이미지 최적화 (WebP 포맷, 압축)
- CSS/JS 파일 minify (프로덕션 빌드 시)
- Lazy loading 적용 (이미지, 섹션)
- 불필요한 TailwindCSS 클래스 제거 (PurgeCSS)

## 배포

### GitHub Pages
```bash
git add .
git commit -m "커밋 메시지"
git push origin main
```
- Repository Settings → Pages → Source: main branch

### Netlify
- `netlify.toml` 설정 파일 사용
- 또는 드래그 앤 드롭 배포

### Vercel
```bash
vercel deploy
```

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 접근성 체크리스트

- 키보드 네비게이션 가능
- 스크린 리더 호환
- 색상 대비 비율 준수 (WCAG AA 기준)
- 모든 이미지에 `alt` 속성
- 시맨틱 HTML 구조

## 개발 워크플로우

1. ROADMAP.md의 Phase별 체크리스트 확인
2. HTML 구조 먼저 작성
3. TailwindCSS로 스타일링
4. JavaScript 인터랙션 추가
5. 브라우저 테스트 (데스크톱, 모바일)
6. 성능 최적화
7. 배포

## Git 커밋 메시지 규칙

```
타입: 제목

본문 (선택사항)
```

### 타입
- `추가`: 새로운 기능, 섹션 추가
- `수정`: 기존 기능 수정
- `스타일`: 디자인, CSS 변경
- `리팩토링`: 코드 구조 개선
- `문서`: 문서 수정
- `배포`: 배포 관련

### 예시
```
추가: Hero 섹션 프로필 이미지 및 소개 텍스트 추가

- TailwindCSS 그리드 레이아웃 적용
- 반응형 디자인 구현
```

## 참고 사항

- ROADMAP.md 파일에 전체 개발 로드맵 및 체크리스트 포함
- TailwindCSS 공식 문서: https://tailwindcss.com/docs
- 프로젝트는 정적 웹사이트이므로 별도의 빌드 도구 없이 개발 가능 (CDN 방식 사용 시)
