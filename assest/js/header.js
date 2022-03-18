const headerElement = document.querySelector('#header')
const imageMobile = document.querySelector('.site-header__logo-image-mobile')
const imageLatop = document.querySelector('.site-header__logo-image-laptop')
const slider = document.querySelector('#slider')

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop < 120) {
        headerElement.classList.remove('active')
        slider.style.marginTop = '0px'
    }
    if(scrollTop >= 120) {
        headerElement.classList.add('active')
        slider.style.marginTop = '182px'
    }
})
