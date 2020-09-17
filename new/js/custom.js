function menuDisplay() {
    let menuButtons = document.querySelectorAll(".menu li a");

    menuButtons.forEach(function(button){
        button.addEventListener("click", function(e){
            menuButtonsInactive();
            e.currentTarget.classList.add("active");
        });
    });
};



function mobileMenu(){
    let menuButton = document.querySelector('.bars');
    let mobileMenuContent = document.querySelector(".mobile_menu_content");
    let mobileMenu = document.querySelector(".mobile_menu");
    let mobileMenuButtons = document.querySelectorAll(".mobile_menu_content li a");

    menuButton.onclick = function() {
        mobileMenuContent.classList.toggle('active');
        mobileMenu.classList.toggle("active");
    };

    mobileMenuButtons.forEach(function(button){
        button.addEventListener("click", function(e){
            mobileMenuButtonsInactive();
            e.currentTarget.classList.add("active");
            mobileMenu.classList.remove('active');
            mobileMenuContent.classList.remove('active');
        });
    });
};



function sliderClassChange(){
    let sliderButton1 = document.querySelector(".slider_button1");
    let sliderButton2 = document.querySelector(".slider_button2");
    let firstSlider = document.querySelector(".first_slider");  
    let secondSlider = document.querySelector(".second_slider");
    let sliderButton1A = document.querySelector(".slider_button1 a");
    let sliderButton2A = document.querySelector(".slider_button2 a");

    sliderButton1.addEventListener("click", function(){
        if (firstSlider.classList.contains("active")){
            return;
        } else {
            firstSlider.classList.add("active");
            sliderButton1A.classList.add("active");
            secondSlider.classList.remove("active");
            sliderButton2A.classList.remove("active");
        };
    });

    sliderButton2.addEventListener("click", function(){
        if (secondSlider.classList.contains("active")){
            return;
        } else {
            secondSlider.classList.add("active");
            sliderButton2A.classList.add("active");
            firstSlider.classList.remove("active");
            sliderButton1A.classList.remove("active");
        };
    });
};



const menuButtons = document.querySelectorAll(".menu li a");

function menuButtonsInactive() {
    menuButtons.forEach(function(button){
        button.classList.remove("active");
    });
}



const mobileMenuButtons = document.querySelectorAll(".mobile_menu_content li a");

function mobileMenuButtonsInactive() {
    mobileMenuButtons.forEach(function(button){
        button.classList.remove("active");
    });
}



function scrollMenu(){
    const home = document.querySelector(".home");
    const about = document.querySelector(".aboutm");
    const project = document.querySelector(".project");
    const contact = document.querySelector(".contacts");
    const homeM = document.querySelector(".homem");
    const aboutM = document.querySelector(".aboutmm");
    const projectM = document.querySelector(".projectm");
    const contactM = document.querySelector(".contactsm");


    window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight < 850) {
            menuButtonsInactive();
            mobileMenuButtonsInactive();
            home.classList.add("active");
            homeM.classList.add("active");

        } else if (scrollHeight >= 850 && scrollHeight < 1700) {
            menuButtonsInactive();
            mobileMenuButtonsInactive();
            about.classList.add("active");
            aboutM.classList.add("active");

        } else if (scrollHeight >= 1700 && scrollHeight < 2550) {
            menuButtonsInactive();
            mobileMenuButtonsInactive();
            project.classList.add("active");
            projectM.classList.add("active");

        } else if (scrollHeight >= 2550 && scrollHeight < 3400) {
            menuButtonsInactive();
            mobileMenuButtonsInactive();
            contact.classList.add("active");
            contactM.classList.add("active");
        }
    });
};

menuDisplay();
mobileMenu();
sliderClassChange();
scrollMenu();
