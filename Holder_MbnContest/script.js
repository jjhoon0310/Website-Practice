// Icon 
function icon() {
    document.getElementById("icon-option").style.width = "100%";
    document.getElementByClass("main").style.marginLeft = "250px";
}

function iconClose() {
    document.getElementById("icon-option").style.width = "0";
    document.getElementByClass("main").style.marginLeft= "0";
}

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("myTopnav");
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navbar.style.backgroundColor = "rgb(226, 232, 250)";
        navbar.style.color = "#000000";
    } else {
        navbar.style.backgroundColor = "";
        navbar.style.color = "#000000";
    }
}

function hover(x) {
    x.style.backgroundColor = "rgb(226,	232, 250)";
}

function notHover(x) {
    x.style.backgroundColor = "";
}