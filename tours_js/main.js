// Окно покупки
let popup = document.querySelector('.tours__popup');
let buyBtns = document.querySelectorAll('.tours__item-btn');
let firstBuyBtn = document.querySelector('.tours__item-btn--first');
let secondBuyBtn = document.querySelector('.tours__item-btn--second');
let thirdBuyBtn = document.querySelector('.tours__item-btn--third');
let confirmBtnFirst = document.querySelector('.tours__popup-btn--first');
let confirmBtnSecond = document.querySelector('.tours__popup-btn--second');
let confirmBtnThird = document.querySelector('.tours__popup-btn--third');
let closeBtn = document.querySelector('.tours__popup-close');
let popupPrice = document.querySelector('.tours__popup-price');
let popupQuestionDay = document.querySelector('.tours__popup-question-day');
let popupQuestionPhone = document.querySelector('.tours__popup-question-phone');
let popupText = document.querySelector('.tours__popup-text');
let popupInput = document.querySelector('.tours__popup-input');
let totalPrice = 0;
let hiddenBlocks = document.querySelectorAll('.hidden-section');

// Открытие меню покупки
buyBtns.forEach((btn) => {
  btn.addEventListener('click', function() {
    popup.classList.toggle('active');
    totalPrice = btn.dataset.price;
    console.log(totalPrice);
  });
});

// Закрытие меню покупки
closeBtn.addEventListener('click', function() {
  popup.classList.toggle('active');
  popupQuestionDay.textContent = "На сколько дней вы планируете остаться?";
});

// Закрытие меню покупки кликом вне этого окна
document.addEventListener('click', function(event) {
  let isBuyButtonClicked = false;

  // Проверяем, является ли цель клика одной из кнопок "купить"
  buyBtns.forEach((btn) => {
    if (btn.contains(event.target)) {
      isBuyButtonClicked = true;
    }
  });

  // Если цель клика не кнопка "купить" и не находится внутри окна popup
  if (!isBuyButtonClicked && !popup.contains(event.target)) {
    popup.classList.remove('active');
    popupQuestionDay.textContent = "На сколько дней вы планируете остаться?";
  }
});

confirmBtnFirst.addEventListener('click', function() {
  popupQuestionDay.classList.add('fade-in');
  popupQuestionDay.addEventListener('transitionend', function() {
    popupQuestionDay.style.display = "none";
    popupQuestionPhone.style.display = "block";
    popupQuestionPhone.classList.add('visible');
  });
  popupInput.style.maxWidth = "170px";
  confirmBtnFirst.style.display = "none";
  confirmBtnSecond.style.display = "block";
  let inputPrice = document.querySelector('.tours__popup-input').value;
  console.log(inputPrice);
  totalPrice = inputPrice * totalPrice;
  console.log(totalPrice);
  popupPrice.textContent = "Итоговая стоимость: " + totalPrice + " рублей";
  popupInput.value = "";
});

confirmBtnSecond.addEventListener('click', function() {
  popupQuestionPhone.classList.remove('visible');
  popupQuestionPhone.addEventListener('transitionend', function() {
    popupQuestionPhone.style.display = "none";
    popupText.style.display = "block";
    popupText.classList.add('visible');
    popupInput.style.display = "none";
    confirmBtnSecond.style.display = "none";
    confirmBtnThird.style.display = "block";
    popupPrice.classList.remove('hidden');
  });
});

confirmBtnThird.addEventListener('click', function() {
  popup.classList.toggle('active');
});

// // Подтверждение покупки
// confirmBtn.addEventListener('click', function() {
//   popupQuestion.classList.toggle('fade-in');
//   popupQuestion.addEventListener('transitionend', removeEventPopupQuestion);
//   popupInput.style.display = "none";
//   popupPrice.classList.toggle('hidden');
//   let inputPrice = document.querySelector('.tours__popup-input').value;

//   buyBtns.forEach((btn) => {
//     let btnValue = btn.getAttribute('data-price');
//     console.log(btn.getAttribute('data-price'));
    
//     if (btn.dataset.price == 8000) {
//       totalPrice = +inputPrice * 8000;
//     } else if (btn.dataset.price == 3000) {
//       totalPrice = +inputPrice * 3000;
//     } else if (btn.dataset.price == 1500) {
//       totalPrice = +inputPrice * 1500;
//     }

//     // Установить текст содержимого после расчета totalPrice
//     popupPrice.textContent = totalPrice + " рублей";
//   });

//   popupInput.addEventListener('transitionend', function() {
//     popupPrice.classList.toggle('hidden');
//   });
// });

// // 
// function removeEventPopupPrice() {
//   popupPrice.classList.toggle('hidden');
// }

// // Функция, удаляющая событие у popupQuestion
// function removeEventPopupQuestion() {
//   popupQuestion.textContent = "Ваша итоговая стоимость";
//   popupQuestion.classList.toggle('fade-in');
//   popupQuestion.removeEventListener('transitionend', removeEventPopupQuestion);
// }