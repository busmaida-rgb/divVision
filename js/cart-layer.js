/* 기존 product.js 다음에 실행되도록 연결 */
(() => {
  const STORAGE_KEY = "kiehlsCart";
  const addButton = document.querySelector(".btn-cart");
  const drawer = document.querySelector("#productCartDrawer");
  const overlay = document.querySelector(".product-cart-overlay");

  if (!addButton || !drawer || !overlay) return;

  const closeButtons = document.querySelectorAll("[data-product-cart-close]");
  const count = drawer.querySelector("[data-cart-count]");
  const empty = drawer.querySelector("[data-cart-empty]");
  const item = drawer.querySelector("[data-cart-item]");
  const size = drawer.querySelector("[data-cart-size]");
  const unitPrice = drawer.querySelector("[data-cart-unit-price]");
  const quantity = drawer.querySelector("[data-cart-quantity]");
  const total = drawer.querySelector("[data-cart-total]");
  const decreaseButton = drawer.querySelector("[data-cart-decrease]");
  const increaseButton = drawer.querySelector("[data-cart-increase]");
  const removeButton = drawer.querySelector("[data-cart-remove]");
  const buyButton = drawer.querySelector("[data-cart-buy]");

  const state = {
    name: "키엘 칼렌듈라 꽃잎 진정 토너",
    size: "250ml",
    unitPrice: 54000,
    quantity: 1,
    lastFocusedElement: null,
  };

  const won = new Intl.NumberFormat("ko-KR");
  const formatPrice = (price) => `${won.format(price)}원`;

  const getSelectedOption = () =>
    document.querySelector(".size-list > li.on button") ||
    document.querySelector(".size-list button[data-price]");

  const saveCart = () => {
    const { name, size, unitPrice, quantity } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, size, unitPrice, quantity }));
  };

  const render = () => {
    const hasItem = state.quantity > 0;

    count.textContent = hasItem ? "1" : "0";
    empty.hidden = hasItem;
    item.hidden = !hasItem;
    buyButton.disabled = !hasItem;
    total.textContent = formatPrice(hasItem ? state.unitPrice * state.quantity : 0);

    if (!hasItem) return;

    size.textContent = state.size;
    unitPrice.textContent = formatPrice(state.unitPrice);
    quantity.textContent = state.quantity;
  };

  const openDrawer = () => {
    state.lastFocusedElement = document.activeElement;
    overlay.hidden = false;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("product-cart-lock");
    requestAnimationFrame(() => overlay.classList.add("is-open"));
    drawer.querySelector(".product-cart-close")?.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-open");
    document.body.classList.remove("product-cart-lock");

    window.setTimeout(() => {
      overlay.hidden = true;
      state.lastFocusedElement?.focus();
    }, 360);
  };

  addButton.addEventListener("click", () => {
    const selectedOption = getSelectedOption();
    if (!selectedOption) return;

    state.size = selectedOption.textContent.trim();
    state.unitPrice = Number(selectedOption.dataset.price);
    state.quantity = 1;
    saveCart();
    render();
    openDrawer();
  });

  decreaseButton.addEventListener("click", () => {
    if (state.quantity <= 1) return;
    state.quantity -= 1;
    saveCart();
    render();
  });

  increaseButton.addEventListener("click", () => {
    state.quantity += 1;
    saveCart();
    render();
  });

  removeButton.addEventListener("click", () => {
    state.quantity = 0;
    saveCart();
    render();
  });

  buyButton.addEventListener("click", () => {
    window.location.href = "./order.html";
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeDrawer));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  render();
})();
