new Swiper('.projects__container', {
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 80,
    },
    768: {
      spaceBetween: 60,
    },
    500: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    320: {
      spaceBetween: 15,
      slidesPerView: 2,
    }
    
  }
});

AOS.init({
  duration: 1000,
})

document.body.style.height = `${(document.body.offsetHeight - 45)}px`;

const moreBtn = document.querySelector('.view-more');

function toggleContent(maxHeightValue) {
  const cardsContainer = document.querySelector('.team__cards');

  if (cardsContainer.classList.contains('hidden')) {
    cardsContainer.classList.remove('hidden');
    cardsContainer.style.maxHeight = cardsContainer.scrollHeight + 'px';
    moreBtn.innerHTML = 'View Less';
  } else {
    cardsContainer.classList.add('hidden');
    cardsContainer.style.maxHeight = `${maxHeightValue}px`;
    moreBtn.innerHTML = 'View More';
  }
}

moreBtn.addEventListener('click', () => {
  toggleContent(465);
});

const timelineButtons = document.querySelectorAll('.timeline__year');

function scrollToParagraph(paragraphYear) {
  timelineButtons.forEach(timelineButton => {
    timelineButton.classList.remove('active');
  });

  const currentButton = document.getElementById(paragraphYear);
  const container = document.querySelector('.timeline__content');
  const paragraph = document.getElementById(`${paragraphYear}-content`);
  const containerRect = container.getBoundingClientRect();
  const paragraphRect = paragraph.getBoundingClientRect();
  const scrollLeft = paragraphRect.left - containerRect.left + container.scrollLeft;
  const triangle = document.querySelector('.timeline__triangle');
  const buttonRect = currentButton.getBoundingClientRect();
  const buttonCenter = buttonRect.left - containerRect.left + buttonRect.width / 2;
  const triangleLeft = buttonCenter - triangle.offsetWidth / 2;

  currentButton.classList.add('active');
  container.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
  triangle.style.left = `${triangleLeft}px`;
}


const headerMobileButton = document.querySelector('.header__mobile-button');
const mobileList = document.querySelector('.header__mobile-nav');

headerMobileButton.addEventListener('click', function() {
  headerMobileButton.classList.toggle('open');
  mobileList.classList.toggle('open');
})
