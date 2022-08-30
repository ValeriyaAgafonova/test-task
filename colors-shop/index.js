const selectButton = document.querySelector(".custom-button");
const overflow = document.querySelector(".overflow");
const optionList = document.querySelector(".custom-list");
const body = document.querySelector("body");
const options = Array.from(document.querySelectorAll(".custom-item"));
const basket = document.querySelector(".basket-container");
const basketButton = document.querySelector(".basket-icon");
const closeBasket = document.querySelector(".close-button");
let totalCounter = 0;
const iconCounter = document.querySelector(".basket-icon");
iconCounter.textContent = totalCounter;

// Добавление товаров на страницу

const dataUrl = "https://63072ea13a2114bac75b87db.mockapi.io/api/test/data/";
let data = [];
const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(`Ошибка ${response.status}`);
  }
};

const getItemsRequest = () => {
  return fetch(dataUrl).then(checkResponse);
};
function getData() {
  getItemsRequest()
    .then((res) => {
      if (res) {
        console.log(res);
        data = res;
        addCards(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();

const cardsContainer = document.querySelector(".cards");

function getEnding(length) {
  console.log("get");
  if (length % 10 === 1) {
    return "товар";
  } else if (length % 10 < 5 && length % 10 > 1) {
    return "товара";
  } else {
    return "товаров";
  }
}

function addCards(data) {
  cardsContainer.innerHTML = "";
  let ending = getEnding(data.length);
  document.querySelector(
    ".catalog-number"
  ).innerHTML = `${data.length} ${ending}`;

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.price = `${data[i].price}`;
    card.dataset.new = `${data[i].new}`;
    card.dataset.popular = `${data[i].popular}`;
    card.innerHTML = `
    <img src="${data[i].photo}" alt="color">
    <p class="name">${data[i].name}</p>
    <div class="last-line flex-container">
        <p>${data[i].price} <span>P</span></p>
        <button class="add-item toggled-button" id=${data[i].id}>+</button>
        
 
</div>`;

    cardsContainer.append(card);
  }
  sortItems(selectButton.dataset.option);
}

// Открытие/закрытие модальных окон

selectButton.addEventListener("click", function () {
  openOptions(optionList);
});
basketButton.addEventListener("click", function () {
  openOptions(basket);
});

closeBasket.addEventListener("click", function () {
  closeOptions(basket);
});
function openOptions(popAp) {
  overflow.style.display = "block";
  popAp.style.display = "block";
  body.style.overflow = "hidden";
}

optionList.addEventListener("click", selectOptions);

function selectOptions(event) {
  if (event.target.textContent) {
    removeClass();
    event.target.classList.add("custom-active");
    selectButton.innerHTML = event.target.textContent;
    selectButton.dataset.option = event.target.dataset.option;
  }
  sortItems(selectButton.dataset.option);
  closeOptions(optionList);
}

function removeClass() {
  options.map(function (item) {
    if (item.classList.contains("custom-active")) {
      item.classList.remove("custom-active");
    }
  });
}

function closeOptions(popAp) {
  overflow.style.display = "none";
  popAp.style.display = "none";
  body.style.overflow = "scroll";
}

// изменение состояния добавленной карточки

cardsContainer.addEventListener("click", changeStateProduct);

function changeStateProduct(e) {
  if (e.target.classList.contains("add-item")) {
    e.target.classList = "remove-item toggled-button";
    e.target.textContent = "-";
    plusTotalCounter(1);
    addItemToBasket(e.target.id);
  } else if (e.target.classList.contains("remove-item")) {
    e.target.classList = "add-item toggled-button";
    e.target.textContent = "+";
    minusTotalCounter(1);
    removeItemFromBasket(e.target.id);
  }
}

function plusTotalCounter(n) {
  totalCounter += n;
  iconCounter.textContent = totalCounter;
  countItemsNumber(totalCounter);
}
function minusTotalCounter(n) {
  totalCounter -= n;
  iconCounter.textContent = totalCounter;
  countItemsNumber(totalCounter);
}

//Добавление/удаление товара в/из корзину
function addItemToBasket(id) {
  const item = data.filter((item) => item.id === id);
  const basketItem = document.createElement("div");
  basketItem.classList.add("basket-item");
  basketItem.id = id;
  basketItem.innerHTML = `
    <img class="basket-image" src=${item[0].photo} alt="photo" />
    <div class="description">
      <p class="name">
        ${item[0].name}
      </p>
      <p class="item-price">${item[0].price} <span>₽</span></p>
    </div>
    <div class="amount-counter">
      <button class="minus amount-button">-</button>
      <p class="item-amount">1</p>
      <button class="plus amount-button">+</button>
    </div>
    <img src="./assets/images/svg/x.svg" alt="delete" class="delete-icon"/>
  `;
  document.querySelector(".basket-items").appendChild(basketItem);
  countTotalPrice(item[0].price, "add");
  stateOrderButton();
}

function removeItemFromBasket(id) {
  const itemsInBasket = document.querySelectorAll(".basket-item");
  itemsInBasket.forEach((item) => {
    if (item.id === id) {
      document.querySelector(".basket-items").removeChild(item);
      countTotalPrice(data.filter((item) => item.id === id)[0].price, "remove");
    }
  });
  stateOrderButton();
}

//Пересчет суммы заказа
let totalPrice = 0;

function countTotalPrice(value, flag) {
  if (flag === "add") {
    totalPrice += Number(value);
    document.querySelector(".price").textContent = `${totalPrice} ₽`;
  } else {
    totalPrice -= Number(value);
    document.querySelector(".price").textContent = `${totalPrice} ₽`;
  }
}
//изменение состояния кнопки отправки заказа
function stateOrderButton() {
  if (!document.querySelectorAll(".basket-item").length) {
    document.querySelector(".order-button").disabled = true;
  } else {
    document.querySelector(".order-button").disabled = false;
  }
}
//обнуление корзины
document.querySelector(".clean").addEventListener("click", function () {
  document.querySelector(".basket-items").innerHTML = "";
  stateOrderButton();
  totalPrice = 0;
  totalCounter = 0;
  document.querySelector(
    ".items-number"
  ).textContent = `${totalCounter} товаров`;
  document.querySelector(".price").textContent = `${totalPrice} ₽`;
  document.querySelector(".basket-icon").textContent = totalPrice;
  document.querySelectorAll(".toggled-button").forEach((button) => {
    if (button.classList.contains("remove-item")) {
      button.classList.remove("remove-item");
      button.classList.add("add-item");
      button.textContent = "+";
    }
  });
});

function countItemsNumber(totalCounter) {
  let ending = getEnding(totalCounter);
  document.querySelector(
    ".items-number"
  ).innerHTML = `${totalCounter} ${ending}`;
}

//Фильтрация товаров
const filters = document.querySelectorAll("#toggle-button");

let filtersArray = [];
function getFilteredData(e) {
  if (e.target.checked) {
    filtersArray.push(e.target.value);
  } else {
    filtersArray.splice(filtersArray.indexOf(e.target.value), 1);
  }
  filterData();
}
function filterData() {
  resultData = [];
  if (!filtersArray.length) {
    addCards(data);
  } else {
    data.forEach((item) => {
      if (filtersArray.every((filter) => item[filter])) {
        resultData.push(item);
      }
    });
    addCards(resultData);
  }
}

filters.forEach((filter) => {
  filter.addEventListener("click", getFilteredData);
});

//слайдер
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  grabCursor: true,
});

// Cортировка карточек

function sortItems(value) {
  const list = document.querySelector(".cards");
  const listElements = [...list.children];
  if (value === "expensive") {
    const sortedListElements = listElements.sort(
      (a, b) => +b.dataset.price - +a.dataset.price
    );
    list.innerHTML = "";
    sortedListElements.forEach((el) => list.appendChild(el));
  } else if (value === "cheap") {
    const sortedListElements = listElements.sort(
      (a, b) => +a.dataset.price - +b.dataset.price
    );
    list.innerHTML = "";
    sortedListElements.forEach((el) => list.appendChild(el));
  } else if (value === "new") {
    const newArray = listElements.filter((a) => a.dataset.new === "true");
    const notNewArray = listElements.filter((a) => a.dataset.new !== "true");

    const sortedListElements = newArray.concat(notNewArray);
    list.innerHTML = "";
    sortedListElements.forEach((el) => list.appendChild(el));
  } else if (value === "popular") {
    const newArray = listElements.filter((a) => a.dataset.popular === "true");
    const notNewArray = listElements.filter(
      (a) => a.dataset.popular !== "true"
    );

    const sortedListElements = newArray.concat(notNewArray);
    list.innerHTML = "";
    sortedListElements.forEach((el) => list.appendChild(el));
  }
}

// Изменение количества отдельного товара в корзине

document
  .querySelector(".basket-items")
  .addEventListener("click", changeItemInBasket);
function changeItemInBasket(e) {
  if (e.target.classList.value === "delete-icon") {
    deleteItem(e.target);
  }
  if (e.target.classList.contains("amount-button")) {
    changeAmountBasketItem(e.target);
  }
}

function deleteItem(target) {
  document.querySelector(".basket-items").removeChild(target.parentNode);
  console.log(target.parentNode.id);
  console.log(target.previousElementSibling.children[1].textContent);
  minusTotalCounter(
    Number(target.previousElementSibling.children[1].textContent)
  );
  countTotalPrice(
    data.filter((item) => item.id === target.parentNode.id)[0].price *
      target.previousElementSibling.children[1].textContent,
    "remove"
  );
}

function changeAmountBasketItem(target) {
  if (target.classList.contains("minus")) {
    if (target.nextElementSibling.textContent >= 1) {
      target.nextElementSibling.textContent =
        Number(target.nextElementSibling.textContent) - 1;
      minusTotalCounter(1);
      countTotalPrice(
        data.filter((item) => item.id === target.parentNode.parentNode.id)[0]
          .price,
        "remove"
      );
    } else {
      target.nextElementSibling.textContent = 0;
    }
  } else {
    console.log(target.parentNode.parentNode.id);
    target.previousElementSibling.textContent =
      Number(target.previousElementSibling.textContent) + 1;
    plusTotalCounter(1);
    countTotalPrice(
      data.filter((item) => item.id === target.parentNode.parentNode.id)[0]
        .price,
      "add"
    );
  }
}

// Мобильная версия - блок с фильтрами

document.querySelector(".filter-button").addEventListener("click", openFilters);

function openFilters() {
  overflow.style.display = "block";
  document.querySelector("aside").classList.add("open-filter");

  body.style.overflow = "hidden";
}
document.querySelector(".button-slice").addEventListener("click", closeFilters);

function closeFilters() {
  overflow.style.display = "none";
  document.querySelector("aside").classList.remove("open-filter");

  body.style.overflow = "scroll";
}
