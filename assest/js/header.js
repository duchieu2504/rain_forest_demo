const headerElement = document.querySelector('#header')
const imageMobile = document.querySelector('.site-header__logo-image-mobile')
const imageLatop = document.querySelector('.site-header__logo-image-laptop')

const header = () => {

}
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop < 120) {
        headerElement.classList.remove('active')
    }
    if(scrollTop >= 120) {
        headerElement.classList.add('active')
    }
})

window.addEventListener('DOMContentLoaded', header())