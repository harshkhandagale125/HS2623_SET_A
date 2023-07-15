//Scroll to top button 
function initilizeUpArrow() {
    // Scroll to top button Starts here
    const scrbtn = document.querySelector('.scrbtn')
    const showhide = document.getElementById('top')
    const ScrollFunc = () => {
        const scroll = window.scrollY;
        if (scroll > 10) {
            showhide.className = "scrbtn show";
        } else {
            showhide.className = "scrbtn hide";
        }
    };

    window.addEventListener("scroll", ScrollFunc);
    scrbtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })
    // Scroll to top button Ends here
}


// Navbar background Starts

const navbar = document.querySelector('.navbar')
const active = document.getElementById('nav')
const scrollFunc = () => {
    const scroll = window.scrollY;


    if (scroll > 100) {
        active.className = "navbar show";
    } else {
        active.className = "navbar hide";
    }
};
window.addEventListener("scroll", scrollFunc);


// Navbar background ends


// Menu button Starts

const cta =document.querySelector('.cta');
const modal =document.querySelector('.modal');
const submit =document.querySelector('.submit');
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

document.addEventListener("mouseup", (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains("open")) {
        navbar.classList.toggle("open");
    }
});


cta.addEventListener('click',() => {
    modal.classList.toggle('open');
});

submit.addEventListener('click', () => {
    modal.classList.toggle('open');
});

document.addEventListener('mouseup', (e) => {
    if(!modal.contains(e.target) && modal.classList.contains('open')){
        modal.classList.remove('open');
    }
    
});

// Menu button Ends

function main() {
    initilizeUpArrow();
}


main();