const mobile_nav = document.querySelector(".nav-toggle");
const nav_header = document.querySelector(".navi");

const toggleNavbar = () => {
    // alert("hello world");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener('click' , () => toggleNavbar());