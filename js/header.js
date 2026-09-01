/* =========================================================
   헤더와 2뎁스 메가 메뉴 동작
   - 데스크톱: 마우스 호버 또는 키보드 포커스로 열림
   - 모바일: 메뉴 버튼을 눌러 아코디언 방식으로 열림
   ========================================================= */

// 자주 사용하는 요소를 한 번만 찾아 변수에 저장합니다.
const header = document.querySelector('.header-inner');
const navigation = document.querySelector('.main-navigation');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const megaMenuItems = [...document.querySelectorAll('.has-mega-menu')];
const desktopMedia = window.matchMedia('(min-width: 761px)');

/**
 * 하나의 메가 메뉴 열림 상태를 변경합니다.
 * 클래스뿐 아니라 aria 속성도 같이 바꿔 접근성을 유지합니다.
 */
function setMegaMenuState(item, isOpen) {
  item.classList.toggle('is-active', isOpen);
}

/**
 * 열려 있는 모든 메가 메뉴를 닫습니다.
 * except에 항목을 전달하면 그 항목만 닫지 않습니다.
 */
function closeAllMegaMenus(except = null) {
  megaMenuItems.forEach((item) => {
    if (item !== except) setMegaMenuState(item, false);
  });
}

/**
 * 데스크톱에서 마우스가 메뉴에 올라오거나 키보드 포커스가 들어오면
 * 다른 메뉴는 닫고 현재 메뉴만 엽니다.
 */
function openDesktopMegaMenu(item) {
  if (!desktopMedia.matches) return;

  closeAllMegaMenus(item);
  setMegaMenuState(item, true);
  header?.classList.add('menu-open');
}

// 메가 메뉴가 있는 각 1뎁스 항목에 이벤트를 연결합니다.
megaMenuItems.forEach((item) => {
  const button = item.querySelector('.mega-menu-button');

  item.addEventListener('mouseenter', () => openDesktopMegaMenu(item));
  item.addEventListener('mouseleave', () => {
    if (!desktopMedia.matches) return;

    setMegaMenuState(item, false);
    header?.classList.remove('menu-open');
  });
  button?.addEventListener('focus', () => openDesktopMegaMenu(item));

  // 클릭은 모바일 아코디언과 데스크톱 키보드 사용을 모두 지원합니다.
  button?.addEventListener('click', () => {
    if (desktopMedia.matches) return;

    const willOpen = !item.classList.contains('is-active');

    closeAllMegaMenus(item);
    setMegaMenuState(item, willOpen);
    header?.classList.toggle('menu-open', willOpen);
  });
});

// 데스크톱에서 헤더 영역을 완전히 벗어나면 열린 메뉴를 닫습니다.
header?.addEventListener('mouseleave', () => {
  if (!desktopMedia.matches) return;

  closeAllMegaMenus();
  header.classList.remove('menu-open');
});

// 키보드 사용자가 헤더 밖으로 이동했을 때도 메뉴를 닫습니다.
header?.addEventListener('focusout', (event) => {
  if (header.contains(event.relatedTarget)) return;

  closeAllMegaMenus();
  header.classList.remove('menu-open');
});

// 모바일 전체 메뉴 버튼을 열고 닫습니다.
mobileMenuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('is-open') ?? false;

  if (!isOpen) {
    closeAllMegaMenus();
    header?.classList.remove('menu-open');
  }
});

// 모바일 메뉴 안의 실제 링크를 선택하면 전체 메뉴도 닫습니다.
navigation?.addEventListener('click', (event) => {
  if (!event.target.closest('a') || event.target.closest('.mega-menu-button') || desktopMedia.matches) return;

  navigation.classList.remove('is-open');
  closeAllMegaMenus();
  header?.classList.remove('menu-open');
});

// Escape 키로 메가 메뉴와 모바일 메뉴를 한 번에 닫을 수 있습니다.
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  closeAllMegaMenus();
  navigation?.classList.remove('is-open');
  header?.classList.remove('menu-open');
});

// 화면 크기가 데스크톱/모바일 기준을 넘나들 때 남은 상태를 초기화합니다.
desktopMedia.addEventListener('change', () => {
  closeAllMegaMenus();
  navigation?.classList.remove('is-open');
  header?.classList.remove('menu-open');
});
