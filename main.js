const elBtn = document.querySelector('.menu-btn')
const elNavigation = document.querySelector('.navigation')
const elNavigationItems = document.querySelectorAll('.navigation a')

elBtn.addEventListener('click' , ()=>{
    elBtn.classList.toggle('active')
    elNavigation.classList.toggle('active')
})
elNavigationItems.forEach(navItem => {
    navItem.addEventListener('click' , () =>{
        elBtn.classList.remove('active')
        elNavigation.classList.remove('active')
    })
})

