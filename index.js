const formItem = document.querySelectorAll(".form._input");
const formError = document.querySelectorAll(".form.-errorMessage");

$('.Nav').click(function () {
    $('.Nav').toggleClass("open");
    $('.navbar-nav').toggleClass("bg-white");
    $('.btn').toggleClass("disabled");
    $("input[type='email']").attr('disabled',function(_,attr){
        return !attr;
    });
});


$(document).ready(function () {
    
        $('.Nav').removeClass('open');
        $('.navbar-nav').removeClass("bg-white");
        $('.btn').removeClass("disabled");
        $("input[type='email']").attr('disabled',false);
    
});

let w = window.innerWidth;
$(window).resize(function () {

    if (window.innerWidth > 576) {
        $('.Nav').removeClass('open');
        $('.navbar-nav').removeClass("bg-white");
        $('.navbar-collapse').removeClass("show");
        $('.btn').removeClass("disabled");
        $("input[type='email']").attr('disabled',false);

    }
});

function formCheck(event) {

    for (let i = 0; i < formItem.length; i++) {

        console.log(formItem[i].checkValidity())
        if (!formItem[i].checkValidity()) {

            if (formItem[i].type == 'email') {
                formError.innerHTML = 'Looks like this is not an email';
            }


            if (!formError[i].classList.contains('-active')) {
                formError[i].classList.toggle('-active');
                formItem[i].classList.toggle('-error');
            }


        } else {
            formItem[i].value = '';
            formError[i].classList.remove('-active');
            formItem[i].classList.remove('-error');
        }

    }
}
$('form button').click(formCheck)
$('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        575: {
            items: 2,
            dots: true
        },
        860: {
            items: 3,
            dots: false
        }
    }
});

