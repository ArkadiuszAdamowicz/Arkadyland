const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')
const footerYear = document.querySelector('.footerYear')
const navs = document.querySelector('.navbar-collapse')
const nav = document.querySelector('.navbar')
const allNavItems = document.querySelectorAll('.nav-link')
const navList = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => 
{
    if(navs.classList.contains('show')) {
        navs.classList.remove('show')
    }
}
)


document.addEventListener('DOMContentLoaded', function(){
    
    function addShadow() {
    if (window.scrollY >= 300) {
        nav.classList.add('shadow-bg')
    } else {
        nav.classList.remove('shadow-bg')
    }
    }
    
    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
    
    window.addEventListener('scroll', addShadow)
    })


    const showCookie = () => {
        const cookieEaten = localStorage.getItem('cookie')
        
        if (cookieEaten) {
            cookieBox.classList.add('hide')
        }
    }
    
    const handleCookieBox = () => {
        localStorage.setItem('cookie', 'true')
        cookieBox.classList.add('hide')
    } 
    
    cookieBtn.addEventListener('click', handleCookieBox)
    showCookie()

    const handleCurrentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
    }

    handleCurrentYear();

 