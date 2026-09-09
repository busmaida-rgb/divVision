(() => {
  const STORAGE_KEY = "kiehlsCart";
  const DEFAULT_CART = {
    name: "키엘 칼렌듈라 꽃잎 진정 토너",
    size: "250ml",
    unitPrice: 54000,
    quantity: 1,
  };

  const product = document.querySelector("[data-cart-product]");
  const empty = document.querySelector("[data-cart-empty]");
  const itemCheck = document.querySelector("[data-cart-item-check]");
  const selectAll = document.querySelector("[data-cart-select-all]");
  const deleteSelectedButton = document.querySelector("[data-cart-delete-selected]");
  const removeButton = document.querySelector("[data-cart-remove]");
  const decreaseButton = document.querySelector("[data-cart-decrease]");
  const increaseButton = document.querySelector("[data-cart-increase]");
  const checkoutButton = document.querySelector("[data-cart-checkout]");

  if (!product || !empty || !itemCheck || !selectAll || !checkoutButton) return;

  const sizeElement = document.querySelector("[data-cart-size]");
  const unitPriceElement = document.querySelector("[data-cart-unit-price]");
  const quantityElement = document.querySelector("[data-cart-quantity]");
  const orderPriceElement = document.querySelector("[data-cart-order-price]");
  const totalPriceElement = document.querySelector("[data-cart-total-price]");
  const won = new Intl.NumberFormat("ko-KR");

  const loadCart = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved) return { ...DEFAULT_CART };

      return {
        ...DEFAULT_CART,
        ...saved,
        unitPrice: Number(saved.unitPrice),
        quantity: Number(saved.quantity),
      };
    } catch {
      return { ...DEFAULT_CART };
    }
  };

  let cart = loadCart();

  const formatPrice = (price) => `${won.format(price)}원`;

  const saveCart = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  };

  const render = () => {
    const hasItem = cart.quantity > 0;
    const isSelected = hasItem && itemCheck.checked;
    const selectedTotal = isSelected ? cart.unitPrice * cart.quantity : 0;

    product.hidden = !hasItem;
    empty.hidden = hasItem;
    selectAll.checked = isSelected;
    selectAll.disabled = !hasItem;
    checkoutButton.disabled = !isSelected;

    sizeElement.textContent = cart.size;
    unitPriceElement.textContent = formatPrice(cart.unitPrice);
    quantityElement.textContent = cart.quantity;
    orderPriceElement.textContent = formatPrice(selectedTotal);
    totalPriceElement.textContent = formatPrice(selectedTotal);
  };

  const removeCart = () => {
    cart.quantity = 0;
    itemCheck.checked = false;
    saveCart();
    render();
  };

  itemCheck.addEventListener("change", render);

  selectAll.addEventListener("change", () => {
    itemCheck.checked = selectAll.checked;
    render();
  });

  decreaseButton.addEventListener("click", () => {
    if (cart.quantity <= 1) return;
    cart.quantity -= 1;
    saveCart();
    render();
  });

  increaseButton.addEventListener("click", () => {
    cart.quantity += 1;
    saveCart();
    render();
  });

  removeButton.addEventListener("click", removeCart);

  deleteSelectedButton.addEventListener("click", () => {
    if (itemCheck.checked) removeCart();
  });

  checkoutButton.addEventListener("click", () => {
    if (!itemCheck.checked || cart.quantity < 1) return;
    window.location.href = "./order.html";
  });

  render();
})();
