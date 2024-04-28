document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    //welcome
    const welcomeBtn = document.querySelector(".welcome__btn");
    welcomeBtn.addEventListener("click", function(){
        document.querySelector("#welcome").classList.remove("show")

    })

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 45) {
            navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
            navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    });

    // Dropdown on mouse hover
    var dropdowns = document.querySelectorAll(".dropdown");
    function toggleDropdown(e) {
        var _this = this;
        var event = e.type;
        var isHover = event === "mouseenter";
        _this.classList.toggle(showClass, isHover);
        _this.querySelector(".dropdown-toggle").setAttribute("aria-expanded", isHover);
        _this.querySelector(".dropdown-menu").classList.toggle(showClass, isHover);
    }
    var showClass = "show";
    function handleDropdown() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener("mouseenter", toggleDropdown);
                dropdown.addEventListener("mouseleave", toggleDropdown);
            });
        } else {
            dropdowns.forEach(function (dropdown) {
                dropdown.removeEventListener("mouseenter", toggleDropdown);
                dropdown.removeEventListener("mouseleave", toggleDropdown);
            });
        }
    }
    window.addEventListener("load", handleDropdown);
    window.addEventListener("resize", handleDropdown);

    // sliderx
    const slider = document.querySelector('.sliderx');
    function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);
    }
    document.addEventListener('click',activate,false);

    // Back to top button
    // window.addEventListener("scroll", function () {
    //     var backToTop = document.querySelector('.back-to-top');
    //     if (window.scrollY > 300) {
    //         backToTop.style.display = "block";
    //     } else {
    //         backToTop.style.display = "none";
    //     }
    // });

    // document.querySelector('.back-to-top').addEventListener("click", function () {
    //     var scrollDuration = 1500;
    //     var scrollStep = -window.scrollY / (scrollDuration / 15);
    //     var scrollInterval = setInterval(function () {
    //         if (window.scrollY !== 0) {
    //             window.scrollBy(0, scrollStep);
    //         } else {
    //             clearInterval(scrollInterval);
    //         }
    //     }, 15);
    // });
    let scrollButton =document.querySelector(".back-to-top")
    window.addEventListener("scroll", function() {
        if (window.scrollY >= 700) {
            scrollButton.style.display = "block"
        } else {
            scrollButton.style.display = "none"
    
        }
    })
    scrollButton.addEventListener("click", function(e) {
        window.scrollTo({
            left:0,
            top : 0,
            behavior : "smooth"
        })
    })
    
    // Select the testimonial carousel container
    var testimonialCarousel = document.querySelector(".testimonial-carousel");

    // Initialize the carousel settings
    var testimonialSettings = {
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };
    
    // Initialize the carousel
    // Select the testimonial carousel container
    var testimonialCarousel = document.querySelector(".testimonial-carousel");

    // Check if testimonialCarousel exists before initializing
    if (testimonialCarousel) {
        initializeCarousel();
    }

    // Function to initialize the carousel
    function initializeCarousel() {
        // Initialize OwlCarousel
        var testimonialSettings = {
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        };

        // Initialize the testimonial carousel
        $(testimonialCarousel).owlCarousel(testimonialSettings);
    }

});

