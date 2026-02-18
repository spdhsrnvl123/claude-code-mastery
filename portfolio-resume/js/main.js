// ==========================================
// 상수 정의
// ==========================================
const SCROLL_THRESHOLD = 100; // 네비게이션 스타일 변경 기준 스크롤 거리 (px)

// ==========================================
// DOM 요소 선택
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ==========================================
// 1. 부드러운 스크롤 기능
// ==========================================
const initSmoothScroll = () => {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // href 속성에서 타겟 섹션 ID 가져오기
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // 부드러운 스크롤 실행
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // 모바일 메뉴가 열려있으면 닫기
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          toggleMobileMenu();
        }
      }
    });
  });
};

// ==========================================
// 2. 햄버거 메뉴 토글 기능
// ==========================================
const toggleMobileMenu = () => {
  if (!mobileMenu || !hamburger) return;

  // 모바일 메뉴 표시/숨김 토글
  mobileMenu.classList.toggle('hidden');

  // 햄버거 아이콘 애니메이션 (X 모양으로 변경)
  hamburger.querySelector('.hamburger-icon').classList.toggle('hamburger-active');

  // ARIA 속성 업데이트 (접근성)
  const isExpanded = !mobileMenu.classList.contains('hidden');
  hamburger.setAttribute('aria-expanded', isExpanded);
  hamburger.setAttribute('aria-label', isExpanded ? '메뉴 닫기' : '메뉴 열기');
};

// ==========================================
// 3. 스크롤 시 네비게이션 바 스타일 변경
// ==========================================
const handleNavScroll = () => {
  if (!navbar) return;

  // 현재 스크롤 위치 확인
  const scrollY = window.scrollY;

  // 스크롤이 임계값을 넘으면 스타일 추가, 아니면 제거
  if (scrollY > SCROLL_THRESHOLD) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
};

// ==========================================
// 4. 스크롤 애니메이션 (선택 기능)
// ==========================================
const initScrollAnimation = () => {
  // Intersection Observer를 사용한 스크롤 애니메이션
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 요소의 10%가 보이면 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // .fade-in 클래스를 가진 모든 요소 관찰
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
};

// ==========================================
// 5. 현재 섹션 강조 표시 (선택 기능)
// ==========================================
const highlightCurrentSection = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    // 현재 스크롤 위치가 섹션 내에 있는지 확인
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // 해당 섹션의 네비게이션 링크 강조 (코랄 색상)
      navLinks.forEach(link => {
        link.classList.remove('text-coral-500', 'font-bold');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('text-coral-500', 'font-bold');
        }
      });
    }
  });
};

// ==========================================
// 6. 경력/프로젝트 토글 기능
// ==========================================
const initToggleFeature = () => {
  // 경력 토글 버튼
  const experienceToggleBtns = document.querySelectorAll('.toggle-details-btn');
  experienceToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      const btnText = btn.querySelector('.btn-text');
      const toggleIcon = btn.querySelector('.toggle-icon');

      if (targetElement && btnText && toggleIcon) {
        targetElement.classList.toggle('hidden');

        if (targetElement.classList.contains('hidden')) {
          btnText.textContent = '더 보기';
          toggleIcon.classList.remove('rotate-180');
        } else {
          btnText.textContent = '접기';
          toggleIcon.classList.add('rotate-180');
        }
      }
    });
  });

  // 프로젝트 토글 버튼
  const projectToggleBtns = document.querySelectorAll('.toggle-project-btn');
  projectToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      const btnText = btn.querySelector('.btn-text');
      const toggleIcon = btn.querySelector('.toggle-icon');

      if (targetElement && btnText && toggleIcon) {
        targetElement.classList.toggle('hidden');

        if (targetElement.classList.contains('hidden')) {
          btnText.textContent = '상세보기';
          toggleIcon.classList.remove('rotate-180');
        } else {
          btnText.textContent = '접기';
          toggleIcon.classList.add('rotate-180');
        }
      }
    });
  });
};

// ==========================================
// 이벤트 리스너 등록
// ==========================================
const initEventListeners = () => {
  // 햄버거 메뉴 클릭 이벤트
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  // 스크롤 이벤트 (throttle 적용 권장)
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        handleNavScroll();
        highlightCurrentSection();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // 윈도우 리사이즈 시 모바일 메뉴 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
  });
};

// ==========================================
// 초기화 함수
// ==========================================
const init = () => {
  console.log('Portfolio Resume - JavaScript Initialized');

  // 부드러운 스크롤 초기화
  initSmoothScroll();

  // 스크롤 애니메이션 초기화 (선택 기능)
  initScrollAnimation();

  // 토글 기능 초기화
  initToggleFeature();

  // 이벤트 리스너 등록
  initEventListeners();

  // 페이지 로드 시 네비게이션 스타일 확인
  handleNavScroll();
};

// ==========================================
// DOMContentLoaded 이벤트
// ==========================================
document.addEventListener('DOMContentLoaded', init);

// ==========================================
// 외부에서 사용할 함수들 export (선택)
// ==========================================
// ES6 모듈을 사용할 경우 export 가능
// export { toggleMobileMenu, handleNavScroll };
