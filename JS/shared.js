
//Click logo to go to INDEX

const logo = document.querySelector("#logo");
logo.addEventListener("click", goHome);

function goHome(){
    window.location.href='about.html'
}

//click works to open filter options

const works = document.querySelector(".workMenu");
const worksDetail = document.querySelector(".worksDetail");

works.addEventListener("click", openMenu);

function openMenu(){
    worksDetail.classList.toggle("hidden");
    console.log("hi");

}


//Open Close Burger Menu
const burgerMenu = document.querySelector(".burgerMenu");
const navBar = document.querySelector(".navBar");


burgerMenu.addEventListener("click", openMenu);

function openMenu(){
    navBar.classList.toggle("moveTo");
    navBar.classList.remove("hidden");
    burgerMenu.classList.toggle("change");

}

function closeMenu(){
    navBar.classList.toggle("moveFrom");
    closeBurger.classList.add("hidden");
    burger.classList.remove("hidden");
}


//When menu item is active, add text decoration underline
