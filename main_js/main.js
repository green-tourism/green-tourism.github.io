$(document).ready(function(){
  $('.hero__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
});

// Плавное проявление первого блока на странице при загрузке
let hiddenBlocks = document.querySelectorAll('.hidden')
window.addEventListener('load', function() {
  hiddenBlocks.forEach((block) => {
    if (isElementInViewport(block)) {
      block.classList.add('visible');
    }
  });
});

// Плавное проявление блоков на странице при скролле
window.addEventListener('scroll', function() {
  hiddenBlocks.forEach((block) => {
    if (isElementInViewport(block)) {
      block.classList.add('visible');
    }
  });
});

// Функция, проверяющая находится ли секция на экране пользователя
function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
      rect.top <= window.innerHeight && rect.bottom >= 0
  );
}