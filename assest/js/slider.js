
// slider_header
let counter = 0
const sliderItem = document.getElementsByClassName('slider_header_item')
const sliderList = document.querySelector('.slider_header_list')
const sliderHeader =  () => {
    counter++
    if(counter >= sliderItem.length) counter = 0
    sliderList.style.transition = `transform .6s linear`
    sliderList.style.transform = `translateX(-${counter * 100}%)`
    setTimeout(sliderHeader, 4000);
}
sliderList.addEventListener('transitionend', () => {
    if(counter === sliderItem.length - 1) {
        sliderList.style.transition = 'none'
        counter = 0
        sliderList.style.transform = `translateX(-${counter * 100}%)`
    }
})

window.addEventListener('DOMContentLoaded', sliderHeader())


// slider_slicks
let index = 1 
let autoTime = 5000;
const sliderSlickList = document.querySelector('.slider_slick_list')
const sliderSlickElement = document.querySelector('.slider_slick')
const sliderSlickItem = document.querySelectorAll('.slider_slick_item')
const btnSlideSlickNext = document.querySelector('.slider_slick_button_next')
const btnSlideSlickPrev = document.querySelector('.slider_slick_button_prev')


const getWidth = sliderSlickElement.clientWidth
sliderSlickList.style.width = `${sliderSlickItem.length * 100}%`
sliderSlickList.style.transform = `translateX(-${getWidth}px)`

const nextSlider = () => {
    index++;
    if(index >= sliderSlickItem.length) index = 1
    sliderSlickList.style.transition = `transform .6s linear`
    sliderSlickList.style.transform = `translateX(-${getWidth * index}px)`
}

const autoSliderSlick = () => {
    console.log('auto', autoTime);
    if(autoTime > 0) {
        nextSlider()
    }
}

btnSlideSlickNext.addEventListener('click', () => {
    autoTime = 0
    console.log('click next', autoTime);
    nextSlider()
})
btnSlideSlickPrev.addEventListener('click', () => {
    autoTime = 0
    index--;
    if(index < 0) return;
    sliderSlickList.style.transition = `transform .6s linear`
    sliderSlickList.style.transform = `translateX(-${getWidth * index}px)`
})
sliderSlickList.addEventListener('transitionend', () => {
    autoTime = 5000
    console.log('transitionend', autoTime);
    if(index === sliderSlickItem.length - 1) {
        sliderSlickList.style.transition = 'none'
        index = 1;
        sliderSlickList.style.transform = `translateX(-${getWidth * index}px)`
    }
    if(index === 0) {
        sliderSlickList.style.transition = 'none'
        index = sliderSlickItem.length - 2;
        sliderSlickList.style.transform = `translateX(-${getWidth * index}px)`
    }
})
sliderSlickList.addEventListener('transitionstart', () => {
    autoTime = 0
    console.log('transitionstart time', autoTime);
})
sliderSlickList.addEventListener('transitionrun', () => {
    autoTime = 0
    console.log('transitionrun time', autoTime);
})
    // autoSliderSlick()
window.addEventListener('DOMContentLoaded', () => {
    const autoPlay = setInterval(autoSliderSlick, autoTime)
    return () => clearInterval(autoPlay)
})

// slider_reviews
let indexWrapepr = 0

const sliderWrapperListElement = document.querySelectorAll('.slider_wrapper_list')
const sliderWrapperItemElement = document.querySelectorAll('.slider_wrapper_item')
const sliderWrapper = () => {
    for(var i = 0; i < sliderWrapperItemElement.length; i++) {
        sliderWrapperItemElement[i].classList.remove('active')
    }
    indexWrapepr++
    if(indexWrapepr > sliderWrapperItemElement.length) indexWrapepr = 1
    // if(indexWrapepr === 4) {
    //     for(var i = 0; i < sliderWrapperItemElement.length; i++) {
    //         sliderWrapperItemElement[i].style.backgroundColor = '#f5ebe0'
    //     }
    //     return;
    // }
    // if(indexWrapepr !== 3) {
    //     for(var i = 0; i < sliderWrapperItemElement.length; i++) {
    //         sliderWrapperItemElement[i].style.backgroundColor = 'transparent'
    //     }
    // }

    sliderWrapperItemElement[indexWrapepr - 1].classList.add('active')
    setTimeout(sliderWrapper, 3500)
}
window.addEventListener('DOMContentLoaded', sliderWrapper())

