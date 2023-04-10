const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');
const sliderItem = document.querySelectorAll('.slider__item');
let activeSlide = document.querySelector('.slider__item_active');
let nextItem;
const dots = document.querySelectorAll('.slider__dot');
let dotActive = document.querySelector('.slider__dot_active');

buttonPrev.addEventListener('click', () => {
    changeSlide('left');
});

buttonNext.addEventListener('click', () => {
    changeSlide('right');
});

function changeSlide(direction) {
    if (direction === 'left') {
        nextItem = activeSlide.previousElementSibling || sliderItem[sliderItem.length - 1];
    } else if (direction === 'right') {
        nextItem = activeSlide.nextElementSibling || sliderItem[0];
    }

    activeSlide.classList.remove('slider__item_active');
    nextItem.classList.add('slider__item_active');
    activeSlide = nextItem;

    const activeDot = document.querySelector('.slider__dot_active');
    if (activeDot) {
        activeDot.classList.remove('slider__dot_active');
    }
    const nextDotIndex = Array.from(sliderItem).indexOf(nextItem);
    dotActive = dots[nextDotIndex];
    dotActive.classList.add('slider__dot_active');
}

dots.forEach((dot, index) => {
    dot.dataset.slideIndex = index;
});

function changeActiveSlideByDot(index) {
    const slide = sliderItem[index];

    if (slide !== activeSlide) {
        activeSlide.classList.remove('slider__item_active');
        slide.classList.add('slider__item_active');
        activeSlide = slide;
    }
    if (dotActive) {
        dotActive.classList.remove('slider__dot_active');
    }
    dotActive = dots[index];
    dotActive.classList.add('slider__dot_active');
}

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.slideIndex);
        changeActiveSlideByDot(index);
    });
});
