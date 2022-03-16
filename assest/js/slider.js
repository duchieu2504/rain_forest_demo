
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
let index = 0 
const sliderSlickList = document.querySelector('.slider_slick_list')
const sliderSlickElement = document.querySelector('.slider_slick')
const sliderSlickItem = document.querySelectorAll('.slider_slick_item')


const getWidth = sliderSlickElement.clientWidth - 1
const sliderSlick = () => {
    sliderSlickList.style.width = `${sliderSlickItem.length * 100}%`
    index++;
    
    
    if(index >= sliderSlickItem.length) index = 0
    sliderSlickList.style.transition = `transform .6s linear`
    sliderSlickList.style.transform = `translateX(-${getWidth * index}px)`
    setTimeout(sliderSlick, 3500);
}
sliderSlickList.addEventListener('transitionend', () => {
    if(index === sliderSlickItem.length - 1) {
        sliderSlickList.style.transition = 'none'
        index = 0;
        sliderSlickList.style.transform = `translateX(-${getWidth * index}px)`
    }
})
window.addEventListener('DOMContentLoaded', sliderSlick())

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

