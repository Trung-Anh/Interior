function openNav() {
    document.getElementById('myNav').style.height = '100%';
}
function closeNav() {
    document.getElementById('myNav').style.height = '0';
}


$ (document).ready(function() {
    $("#js_btn").on("click", function(e) {
        e.preventDefault();
        let top = $("#js_portfolio").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
    });
});
$ (document).ready(function() {
    $("#js_btn2").on("click", function(e) {
        e.preventDefault();
        let top = $("#js_for_life").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
    });
});
$ (document).ready(function() {
    $("#js_btn3").on("click", function(e) {
        e.preventDefault();
        let top = $("#js_blog").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
    });
});
$ (document).ready(function() {
    $("#js_btn4").on("click", function(e) {
        e.preventDefault();
        let top = $("#js_contact").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
    });
});

$ (document).ready(function() {
    $("#btn_2").on("click", function(e) {
        e.preventDefault();
        let top = $("#js_contact").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
    });
});





new WOW().init();

$('.list_text_1').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_1.jpg"
    }, {
        src: "images/projects/photo_1.1.jpg"
    }, {
        src: "images/projects/photo_1.2.jpg"
    }, {
        src: "images/projects/photo_1.3.jpg"
    }, {
        src: "images/projects/photo_1.4.jpg"
    }, {
        src: "images/projects/photo_1.5.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_2').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_2.jpg"
    }, {
        src: "images/projects/photo_2.1.jpg"
    }, {
        src: "images/projects/photo_2.2.jpg"
    }, {
        src: "images/projects/photo_2.3.jpg"
    }, {
        src: "images/projects/photo_2.4.jpg"
    }, {
        src: "images/projects/photo_2.5.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_3').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_3.jpg"
    }, {
        src: "images/projects/photo_3.1.jpg"
    }, {
        src: "images/projects/photo_3.2.jpg"
    }, {
        src: "images/projects/photo_3.3.jpg"
    }, {
        src: "images/projects/photo_3.4.jpg"
    }, {
        src: "images/projects/photo_3.5.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_4').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_4.jpg"
    }, {
        src: "images/projects/photo_4.1.jpg"
    }, {
        src: "images/projects/photo_4.2.jpg"
    }, {
        src: "images/projects/photo_4.3.jpg"
    }, {
        src: "images/projects/photo_4.4.jpg"
    }, {
        src: "images/projects/photo_4.5.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_5').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_5.jpg"
    }, {
        src: "images/projects/photo_5.1.jpg"
    }, {
        src: "images/projects/photo_5.2.jpg"
    }, {
        src: "images/projects/photo_5.3.jpg"
    }, {
        src: "images/projects/photo_5.4.jpg"
    }, {
        src: "images/projects/photo_5.5.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_6').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_6.jpg"
    }, {
        src: "images/projects/photo_6.1.jpg"
    }, {
        src: "images/projects/photo_6.2.jpg"
    }, {
        src: "images/projects/photo_6.3.jpg"
    }, {
        src: "images/projects/photo_6.4.jpg"
    }, {
        src: "images/projects/photo_6.5.jpg"
    }, {
        src: "images/projects/photo_6.6.jpg"
    }, {
        src: "images/projects/photo_6.7.jpg"
    }, {
        src: "images/projects/photo_6.8.jpg"
    }, {
        src: "images/projects/photo_6.9.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_7').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_7.jpg"
    }, {
        src: "images/projects/photo_7.1.jpg"
    }, {
        src: "images/projects/photo_7.2.jpg"
    }, {
        src: "images/projects/photo_7.3.jpg"
    }, {
        src: "images/projects/photo_7.4.jpg"
    }, {
        src: "images/projects/photo_7.5.jpg"
    }, {
        src: "images/projects/photo_7.6.jpg"
    }, {
        src: "images/projects/photo_7.7.jpg"
    }, {
        src: "images/projects/photo_7.8.jpg"
    }, {
        src: "images/projects/photo_7.9.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_8').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_8.jpg"
    }, {
        src: "images/projects/photo_8.1.jpg"
    }, {
        src: "images/projects/photo_8.2.jpg"
    }, {
        src: "images/projects/photo_8.3.jpg"
    }, {
        src: "images/projects/photo_8.4.jpg"
    }, {
        src: "images/projects/photo_8.5.jpg"
    }, {
        src: "images/projects/photo_8.6.jpg"
    }],
    gallery: {
        enabled: true
    }
});
$('.list_text_9').magnificPopup({
    type: 'image',
    items: [{
        src: "images/projects/photo_9.jpg"
    }, {
        src: "images/projects/photo_9.1.jpg"
    }, {
        src: "images/projects/photo_9.2.jpg"
    }, {
        src: "images/projects/photo_9.3.jpg"
    }, {
        src: "images/projects/photo_9.4.jpg"
    }, {
        src: "images/projects/photo_9.5.jpg"
    }, {
        src: "images/projects/photo_9.6.jpg"
    }, {
        src: "images/projects/photo_9.7.jpg"
    }],
    gallery: {
        enabled: true
    }
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // items: 2,
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});