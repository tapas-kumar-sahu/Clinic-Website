// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = ()=>{
    document.documentElement.scrollTop > 100 ?
        nav.classList.add("header-scrolled") :
        nav.classList.remove("header-scrolled")
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(element=>{
    element.addEventListener("click",()=>
        navCollapse.classList.remove("show")
    )
})
