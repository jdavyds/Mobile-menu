const btn = document.querySelector(".nav-btn")
const hNav = document.querySelector(".header-nav")
const navs = document.querySelectorAll(".nav")
const links = document.querySelectorAll("a")

btn.addEventListener("mouseover", () => {
    btn.style.cssText = "transform: scale(2)"
    hNav.style.cssText = "display: flex; flex-Direction: column; justify-Content: center; align-Items: center; height: 30vh; width: 30vw; border-Radius: 10px"
    
    navs.forEach(nav => {
        nav.style.cssText = "height: 100%; width: 30vw; border-Radius: 10px; height: 1fr"
    })
    links.forEach(link => {
        link.style.cssText = " background: white"
    })

})
