
const wook = () => {
    const wookCard = document.querySelectorAll('.work_wook_card')
    const wookTabCard = document.querySelectorAll('.work_wook_tab_wrapper')
    const wookArray = [...wookCard]
    wookArray.map((item, k) => {
        item.addEventListener('click', () => {
            for(var i = 0; i < wookCard.length; i++) {
                wookCard[i].classList.remove('active')
                wookTabCard[i].style.display = 'none'
            }
            item.classList.add('active')
            wookTabCard[k].style.display = 'flex'
        })
    })
}
window.addEventListener('DOMContentLoaded', wook())