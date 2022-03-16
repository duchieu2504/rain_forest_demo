
const itemReview = document.querySelectorAll('.slider_reivew_item')
const listReview = document.querySelector('.slider_review_list')
const btnNext = document.querySelector('.button_review_next')
const btnPrev = document.querySelector('.button_review_prev')
const getWidthItem = itemReview[0].clientWidth

let indexReview = 1

const sliderReview = () => {
    listReview.style.width = `${getWidthItem * itemReview.length}px`
}



btnNext.addEventListener('click', () => {
    indexReview++
    if( indexReview > itemReview.length - 5 ) indexReview = 0
    listReview.style.transition = 'transform .6s ease'
    listReview.style.transform = `translateX(-${indexReview * getWidthItem}px)`
})
btnPrev.addEventListener('click', () => {
    indexReview--
    if( indexReview < 0 ) indexReview = itemReview.length - 6
    listReview.style.transition = 'transform .6s ease'
    listReview.style.transform = `translateX(-${indexReview * getWidthItem}px)`
})

listReview.addEventListener('transitionend', () => {
    if(itemReview[indexReview + 4].id === 'last_slider_review') {
        listReview.style.transition = 'none'
        indexReview = 1
        listReview.style.transform = `translateX(-${indexReview * getWidthItem}px)`
    }
    if(itemReview[indexReview].id === 'first_slider_review') {
        listReview.style.transition = 'none'
        indexReview = itemReview.length - 6
        listReview.style.transform = `translateX(-${indexReview * getWidthItem}px)`
    }
})
window.addEventListener('DOMContentLoaded', sliderReview());