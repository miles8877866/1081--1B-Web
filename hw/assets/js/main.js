!(function($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 20;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                return false;
            }
        }
    });
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: false,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);
const d = new Date();

function test_now() {
    alert("今天星期" + d.getDay());
}


function text() {
    var iElement = prompt("輸入星期幾(0-6)")

    if (iElement == 1) {
        alert("Mon");
    }
    if (iElement == 2) {
        alert("Yue");
    }
    if (iElement == 3) {
        alert("Wen");
    }
    if (iElement == 4) {
        alert("Thur");
    }
    if (iElement == 5) {
        alert("Fri");
    }
    if (iElement == 6) {
        alert("Sat");
    }
    if (iElement == 0) {
        alert("Sun");
    }

}

function add_book() {

    var book = document.getElementById("book");
    if (book.value == '') {
        alert("請填寫書名");
    } else {
        var txtNode = document.createTextNode(book.value);

        var li = document.createElement("li");
        li.appendChild(txtNode);

        var list = document.getElementById("list");

        list.appendChild(li);

        document.getElementById("bookCount").innerText = list.children.length;
    }

}

function clean() {

    document.getElementById("list").innerHTML = ""; //清空畫面文字
    document.getElementById("bookCount").innerText = 0;
}


function t() {
    var flag = true;
    var h = document.getElementById("height");
    var w = document.getElementById("weight");
    var height = h.value / 100;
    var weight = w.value;

    if (h.value == '' && w.value == '') {
        alert("please input height & weight");
        flag = false;
        return;
    }
    if (h.value == '') {
        alert("請填寫身高");
        flag = false;
        return;
    }
    if (w.value == '') {
        alert('please input weight');
        flag = false;
        return;
    }
    if (flag) {
        var bmi = weight / (height * height);
        document.getElementById("BMICount").innerText = bmi.toString().substr(0, 4);
    }
}



// var swiper = new Swiper('.swiper-container', {
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });