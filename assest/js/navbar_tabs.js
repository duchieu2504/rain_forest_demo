
const navbarTabsMenuTitle = document.querySelectorAll('.navbar_tabs_menu_title')

const navbarHeader = document.querySelector('.navbar_header')

const navbasTabsMenuListWrapper = document.querySelectorAll('.navbar_tabs_menu_wrapper_list')
const navbarItem =document.querySelectorAll('.navbar_item')

const navbarTabsItem = document.querySelectorAll('.navbar_tabs_item')

const navbarsTabs = () => {
    const navbarTabsMenuTitleNews = [...navbarTabsMenuTitle]
    const navbarItemNews = [...navbarItem]
    const navbarTabsItemNews = [...navbarTabsItem]

    // hover tabs
    navbarHeader.addEventListener('mouseenter', () => {
        // hover navbar_header 
        navbarItemNews.forEach((item, k) => {
            item.addEventListener('mouseenter', () => {
                
                // khi di chuột trên thanh navbar thì sẽ thay đổi navbar_tabs
                const navbarTabsItemActive = document.querySelector('.navbar_tabs_item.active')
                if (navbarTabsItemActive) navbarTabsItemActive.classList.remove('active')
                
                // khi di chuyển 
                const dataMenu = item.dataset.menu
                if(dataMenu) {
                    const className = `.navbar_tabs_item.${dataMenu}`
                    const navbarTabsItemA = document.querySelector(className)
                    navbarTabsItemA.classList.add('active')
                }
            })
        })

        // hover vào navbarItem Menu Title
        navbarTabsMenuTitleNews.forEach((item, k) => {
            item.addEventListener('mouseenter', (e) => {
                const classMenuWrapper = e.target.dataset.menu

                // const navbasTabsMenuListWrapperActive = document.querySelector('.navbar_tabs_menu_wrapper_list.active')
                // if(navbasTabsMenuListWrapperActive) navbasTabsMenuListWrapperActive.classList.remove('active')

                // const navbarTabsMenuTitleNewsActive = document.querySelector('.navbar_tabs_menu_title.active')
                // if(navbarTabsMenuTitleNewsActive) navbarTabsMenuTitleNewsActive.classList.remove('active')

                for (var i = 0 ; i < navbasTabsMenuListWrapper.length ; i ++) {
                    navbasTabsMenuListWrapper[i].classList.remove('active')
                    navbarTabsMenuTitle[i].classList.remove('active')
                }
                e.target.classList.add('active')
                if(classMenuWrapper) {
                    const className = `.navbar_tabs_menu_wrapper_list.${classMenuWrapper}`
                    const tabsMenuWrapperActive = document.querySelector(className)
                    tabsMenuWrapperActive && tabsMenuWrapperActive.classList.add('active')
                }
            })
        })
    })

    navbarHeader.addEventListener('mouseleave', () => {
        const navbarTabsItem = document.querySelector('.navbar_tabs_item.active')
        if(navbarTabsItem) navbarTabsItem.classList.remove('active')
    })
}

window.addEventListener('DOMContentLoaded', navbarsTabs())