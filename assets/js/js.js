$(function() {

    var header = $("#header"),
        scrolloffset = $(window).scrollTop();
    /*Fixed Header*/
    checkScroll(scrolloffset);

    $(window).on("scroll", function (){

        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });


    function checkScroll(scrolloffset) {
        if( scrolloffset > 0 ) {
            header.addClass("active");
        }else {
            header.removeClass("active");
        }
    }
})


/*Burger*/
const navSlide = () => {
    const  burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li')

    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index)=> {
            if (link.style.animation){
                link.style.animation = ''
            }
            else  {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        //Burger Animates
        burger.classList.toggle('toggle');


    });

}

navSlide();

