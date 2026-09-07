(() => {
  "use strict";

  const artboard = document.querySelector("#artboard");
  const design = document.querySelector("#about-page-design");
  const errorMessage = document.querySelector("#load-error");
  const mobileMedia = window.matchMedia("(max-width: 402px)");
  const padMedia = window.matchMedia("(max-width: 1024px)");

  if (!(artboard instanceof HTMLElement) || !(design instanceof HTMLImageElement)) {
    return;
  }

  const markAsLoaded = () => {
    artboard.setAttribute("aria-busy", "false");
    errorMessage?.setAttribute("hidden", "");
    document.documentElement.dataset.ready = "true";
  };

  const markAsFailed = () => {
    artboard.setAttribute("aria-busy", "false");
    errorMessage?.removeAttribute("hidden");
  };

  const layouts = {
    desktop: { width: 1920, height: 6135, label: "PC" },
    pad: { width: 1024, height: 5371, label: "태블릿" },
    mobile: { width: 402, height: 4708, label: "모바일" },
  };

  const syncLayout = () => {
    const layoutName = mobileMedia.matches
      ? "mobile"
      : padMedia.matches
        ? "pad"
        : "desktop";
    const layout = layouts[layoutName];

    artboard.dataset.layout = layoutName;
    document.documentElement.dataset.layout = layoutName;
    design.width = layout.width;
    design.height = layout.height;
    design.alt = `어바웃 페이지 ${layout.label} 전체 디자인`;
  };

  syncLayout();

  mobileMedia.addEventListener("change", syncLayout);
  padMedia.addEventListener("change", syncLayout);

  design.addEventListener("load", markAsLoaded);
  design.addEventListener("error", markAsFailed);

  if (design.complete) {
    design.naturalWidth > 0 ? markAsLoaded() : markAsFailed();
  }
})();
