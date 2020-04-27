function initAnselmo() {

   /* $('body').bind("contextmenu", function (e) {
        alert('The content on this website is copywrited!');
        return false;
    }); 
    */
    //Pre-Loader
    $(".loading").text("Loading");
    $(".load-progress-wrap").fadeOut(300, function () {
        $("#main-content").animate({
            opacity: "1"
        }, 1000);
    });

    
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    
    

    // Share   ------------------
    $(".share-container").share({
        networks: ['facebook', 'googleplus', 'twitter', 'linkedin', 'pinterest',]
    });
    var shrcn = $(".share-overlay"),
        ssb = $(".socialshare");
    function socialShare() {
        hideMenu();
        shrcn.fadeIn(500).removeClass("isShare").addClass("invis-share");
        $(".share-title span").shuffleLetters({});
        ssb.addClass("clshbt");
        setTimeout(function () {
            $(".soa").each(function (a) {
                var b = $(this);
                setTimeout(function () {
                    b.addClass("soavis")
                }, 150 * a);
            });

        }, 300);
    }
    function hideShare() {
        shrcn.fadeOut(400).addClass("isShare").removeClass("invis-share");
        $(".soa").removeClass("soavis");
        ssb.removeClass("clshbt");
    }
    $(".close-share").on("click", function () {
        hideShare();
    });
    ssb.on("click", function () {

        if (shrcn.hasClass("isShare")) socialShare();
        else hideShare();
        return false;
    });

    //   menu ------------------
    $("#menu").menu();
    $(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
    var nbw = $(".nav-toggle"),
        nhw = $(".nav-slidein-overlay"),
        nho = $(".navigation-overlay");
    function showMenu() {
        hideShare();
        nho.fadeIn(500);
        nhw.animate({
            left: "0",
            opacity: 1
        }, {
            queue: false,
            duration: 600,
            easing: "easeInOutExpo"
        });
        nbw.removeClass("but-hol").addClass("cmenu");
        setTimeout(function () {
            $(".nav-title span").shuffleLetters({});
        }, 300);
    }
    function hideMenu() {
        nhw.animate({
            left: "-1064px",
            opacity: 0
        }, {
            queue: false,
            duration: 600,
            easing: "easeInOutExpo"
        });
        nbw.addClass("but-hol").removeClass("cmenu");
        nho.fadeOut(500);
    }
    nbw.on("click", function () {
        if (nbw.hasClass("but-hol")) showMenu();
        else hideMenu();
        return false;
    });
    nho.on("click", function () {
        hideMenu();
        return false;
    });
    $(".sliding-menu a ").mousemove(function (e) {
        $(this).shuffleLetters({});
    });
    var tooltips = document.querySelectorAll('.navigation-overlay .tooltip');
    window.onmousemove = function (e) {
        var x = (e.clientX + 20) + 'px',
            y = (e.clientY + 20) + 'px';
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = y;
            tooltips[i].style.left = x;
        }
    };

    //   scrollToFixed 
    
    
    //   scroll to------------------
    $(".custom-scroll-link, .contact-btn").on("click", function () {
        var a = 80;
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    

    //   clone ------------------
    $.fn.duplicate = function (a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    $("<div class='container full-height'></div>").appendTo(".sec-lines");
    $("<div class='line-item'></div>").duplicate(4).appendTo(".sec-lines .container");

    $("<div class='half-bg-dec-item'></div>").duplicate(12).appendTo(".half-bg-dec");
    $("<div class='hidden-works-item-dec'><i class='fal fa-arrow-left'></i></div>").appendTo(".hidden-works-item");
    var cr2 = $(".card-popup-rainingvis");
    cr2.each(function (cr) {
        var starcount2 = $(this).attr("data-starrating2");
        $("<i class='fas fa-star'></i>").duplicate(starcount2).prependTo(this);
    });
    //   hero parallax hover 
    var $one = $(".mm-parallax"),
        browserPrefix = "",
        usrAg = navigator.userAgent;
    if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) browserPrefix = "-webkit-";
    else if (usrAg.indexOf("Opera") > -1) browserPrefix = "-o";
    else if (usrAg.indexOf("Firefox") > -1) browserPrefix = "-moz-";
    else if (usrAg.indexOf("MSIE") > -1) browserPrefix = "-ms-";
    $(".hero-wrap").mousemove(function (a) {
        var b = Math.ceil(window.innerWidth / 1.5),
            c = Math.ceil(window.innerHeight / 1.5),
            d = a.pageX - b,
            e = a.pageY - c,
            f = e / c,
            g = -(d / b),
            h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)),
            i = 10 * h;
        $one.css(browserPrefix + "transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
    });
    function heroAnim() {
        function a(a) {
            var b = a.length,
                c, d;
            while (b) {
                d = Math.floor(Math.random() * b--);
                c = a[b];
                a[b] = a[d];
                a[d] = c;
            }
            return a;
        }
        var b = $(".half-bg-dec-item");
        $(a(b).slice(0, $(".half-bg-dec").data("ran"))).each(function (a) {
            var bc = $(this);
            b.removeClass("half-bg-dec-vis")
            bc.addClass("half-bg-dec-vis");

        });
    }
    setInterval(function () {
        heroAnim();
    }, 2000);


    //   Home Services
    $('.home-services').rotaterator({ fadeSpeed: 1000, pauseSpeed: 1200 });


    //   Horizontal navigation wrap
    $(".horizontal-nav-wrap").scrollToFixed({
        minWidth: 569,
        zIndex: 12,
        preUnfixed: function () {
            $(this).css("margin-top", "0");
        },
        preFixed: function () {
            if ($(window).width() < 1064) $(this).css("margin-top", "80px");
        }
    });

    //   Horizontal menu scroll
    $(".scroll-init  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 80,
        threshold: 120,
        speed: 1200,
        currentClass: "active"
    });

    //  Section Subtitle
    $(".section-subtitle").fitText(0.85);
    $(".section-subtitle-dark").fitText(0.85);


    //   appear------------------
    $(".stats").appear(function () {
        $(".num").countTo();
    });
    $(".piechart-holder").appear(function () {
        $(this).find(".chart").each(function () {
            var cbc = $(".piechart-holder").attr("data-skcolor");
            $(".chart").easyPieChart({
                barColor: cbc,
                trackColor: "#eee",
                scaleColor: "#eee",
                size: "150",
                lineWidth: "40",
                lineCap: "butt",
                animate: 3500,
                easing: "easeInBounce",
                onStep: function (a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(".skillbar-box").appear(function () {
        $(this).find("div.skillbar-bg").each(function () {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });

    //   slick  ------------------
    var sbp = $(".sp-cont-prev"),
        sbn = $(".sp-cont-next"),
        ccsi = $(".cur_carousel-slider-container"),
        scw = $(".slider-carousel-wrap"),
        fetcarCounter = $(".fet_pr-carousel-counter"),
        fpr = $('.fet_pr-carousel'),
        scs = $('.show-case-slider'),
        fcshinit = $('.fullscreen-slider'),
        ssn = $('.slider-nav'),
        ssnc = $('.slider-nav-counter'),
        fssc = $('.fullscreenslider-counter'),
        fshc = $('.fs-carousel');
    scs.on("init", function (event, slick) {
        fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);

    });
    scs.slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        centerMode: true,
        arrows: true,
        variableWidth: true,
    });
    scs.on("afterChange", function (event, slick, currentSlide) {
        var scsc = $(".show-case-item.slick-active").data("curtext");
        var $captproject = $(".single-project-title .caption");
        $captproject.text(scsc).shuffleLetters({});
        fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $('.single-slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true
    });
    fcshinit.on("init", function (event, slick) {
        fssc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    fcshinit.slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: false
    });
    fcshinit.on("afterChange", function (event, slick, currentSlide) {
        fssc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $('.slideshow-container').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        fade: true,
        cssEase: 'ease-in',
        infinite: true,
        speed: 1000
    });
    fshc.on("init", function (event, slick) {
        ssnc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    fshc.slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        arrows: false,
        centerMode: false,
        responsive: [{
            breakpoint: 1224,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
        ]

    });
    fshc.on("afterChange", function (event, slick, currentSlide) {
        ssnc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $(".fs-carousel-title h3 , .fs-carousel-link").on({
        mouseenter: function () {
            $(this).parents(".fs-carousel-item").find(".bg").addClass("hov-rot");
        },
        mouseleave: function () {
            $(this).parents(".fs-carousel-item").find(".bg").removeClass("hov-rot");
        }
    });
    $('.serv-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        arrows: false,
        centerMode: false,
        responsive: [{
            breakpoint: 1224,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
        ]

    });
    $('.half-slider-img').slick({
        arrows: false,
        infinite: true,
        fade: false,
        speed: 1000,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav'
    });
    ssn.on("init", function (event, slick) {
        ssnc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.half-slider-img',
        dots: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: false,
        fade: true,
    });
    ssn.on("afterChange", function (event, slick, currentSlide) {
        ssnc.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $('.text-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerPadding: "0",
        centerMode: true,
        responsive: [{
            breakpoint: 1224,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
        ]

    });
    fpr.on("init", function (event, slick) {
        fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    fpr.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        slickCurrentSlide: 2,
        centerPadding: "0",
        centerMode: true,
        responsive: [{
            breakpoint: 1224,
            settings: {
                slidesToShow: 3,
                centerMode: true,
            }
        },

        {
            breakpoint: 1084,
            settings: {
                slidesToShow: 2,
                centerMode: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
        ]

    });
    fpr.on("afterChange", function (event, slick, currentSlide) {
        fetcarCounter.text(Number(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    sbp.on("click", function () {
        $(this).closest(scw).find(ccsi).slick('slickPrev');
    });
    sbn.on("click", function () {
        $(this).closest(scw).find(ccsi).slick('slickNext');
    });

    // Styles ------------------
    function csselem() {
        $(".height-emulator").css({
            height: $(".fixed-footer").outerHeight(true)
        });
        $(".show-case-slider .show-case-item").css({
            height: $(".show-case-slider").outerHeight(true)
        });
        $(".fullscreen-slider-item").css({
            height: $(".fullscreen-slider").outerHeight(true)
        });
        $(".half-slider-item").css({
            height: $(".half-slider-wrap").outerHeight(true)
        });
        $(".half-slider-img-item").css({
            height: $(".half-slider-img").outerHeight(true)
        });
        $(".hidden-info-wrap-bg").css({
            height: $(window).outerHeight(true) - 80 + "px"
        });
        $(".slideshow-item").css({
            height: $(".slideshow-container").outerHeight(true)
        });
        $(".fs-carousel-item").css({
            height: $(".fs-carousel").outerHeight(true)
        });
    }
    csselem();
    var $window = $(window);
    $window.resize(function () {
        csselem();
    });


    //footer animation ------------------
    var n = $(".partcile-dec").data("parcount");
    $(".partcile-dec").jParticle({
        background: "rgba(255,255,255,0.0)",
        color: "rgba(255,255,255,0.081)",
        particlesNumber: n,
        particle: {
            speed: 20
        }
    });


    //   Contact form------------------
    $("#contactform").on("submit", function (e) {
        e.preventDefault();
        if ($("#contactform [name='name']").val() === '') {
            $("#contactform [name='name']").css("border", "1px solid red");
        }
        else if ($("#contactform [name='email']").val() === '') {
            $("#contactform [name='email']").css("border", "1px solid red");
        }
        else if (IsEmail($("#contactform [name='email']").val()) == false) {
            $("#contactform [name='email']").css("border", "1px solid red");
        }
        else if ($("#contactform textarea").val() === '') {
            $("#contactform textarea").css("border", "1px solid red");
        }
        else {
            $("#loading-img img").css("display", "block");
            var sendData = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "assets/php/get_response.php",
                data: sendData,
                success: function (data) {
                    $("#loading-img img").css("display", "none");
                    setTimeout(function () { swal(data, "", "info") }, 1000);
                }
            });
        }
    });
    $("#contactform input, #contactform select, textarea").blur(function () {
        var checkValue = $(this).val();
        if (checkValue != '') {
            $(this).css("border", "1px solid #067F0B");
        }
    });
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        } else {
            return true;
        }
    }
    $('.chosen-select').selectbox();



 //   Scroll to top------------------
    $(".to-top").on("click", function (a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $("<div class='to-top-letter'>t</div><div class='to-top-letter'>o</div><div class='to-top-letter'>p</div>").appendTo(".to-top span");

}

$(function () {
    initAnselmo()
});