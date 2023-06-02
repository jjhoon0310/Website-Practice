// Icon 
function icon() {
    document.getElementById("icon-option").style.width = "250px";
    document.getElementByClass("main").style.marginLeft = "250px";
}

function iconClose() {
    document.getElementById("icon-option").style.width = "0";
    document.getElementByClass("main").style.marginLeft= "0";
}



// Cart
function cartOpen() {
    document.getElementById("cart-list").style.width = "350px";    
    if (window.innerWidth < 800) {
        document.getElementById("cart-list").style.width = "250px"; 
    }
}

function cartClose() {
    document.getElementById("cart-list").style.width = "0";    
}



// Slides
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


// Next Slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }    

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


// Scroll change
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("myTopnav");
    var cart = document.getElementById("cart")
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navbar.style.backgroundColor = "#ffffff";
        navbar.style.color = "#000000";
        cart.src='shopping-bag-black.png'
    } else {
        navbar.style.backgroundColor = "";
        navbar.style.color = "#ffffff";
        cart.src='shopping-bag-white.png'
    }
}

function hover(x) {
    x.style.backgroundColor = "#ffffff";
    x.style.color = "#000000"
    cart.src='shopping-bag-black.png'
}

function notHover(x) {
    x.style.backgroundColor = "";
    x.style.color = "#ffffff"
    cart.src='shopping-bag-white.png'
}