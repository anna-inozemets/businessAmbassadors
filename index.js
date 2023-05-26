new Swiper('.projects__container', {
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 3,
  spaceBetween: 80,
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

document.body.style.height = (window.innerHeight - 45) + 'px';
