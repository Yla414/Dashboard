const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector(".theme-toggler");

//sideMenu functionality//
//show sidebar
menuBtn.addEventListener('click', function(){
    sideMenu.style.display = "block";
});
//hide sidebar
closeBtn.addEventListener("click", function(){
    sideMenu.style.display = "none"
});

//theme toggler functionality
themeToggler.addEventListener("click", function(){
    document.body.classList.toggle('dark-theme')

    themeToggler.querySelector('span i:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span i:nth-child(2)').classList.toggle('active')
});