(function ($) {
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
    });

    // Sous-menu
    $('.clic-sub-menu').on('click', function () {

        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }
    });

    // Texte presentation
    var $description = $(".description-presentation");
    var $seeMore = $("#seeMore2");
    var $seeLess = $("#seeLess2");

    // Affichage ou disparition du bouton en fonction du nombre de lignes
    function checkDescription() {
        // Créer un clone temporaire pour mesurer la hauteur totale
        var $clone = $description.clone().css({
            'position': 'absolute',
            'visibility': 'hidden',
            'height': 'auto',
            'overflow': 'visible'
        }).appendTo('body');

        // Calculer la hauteur totale et la hauteur visible
        var fullHeight = $clone.height();
        var visibleHeight = $description.height();

        // Nettoyer le clone
        $clone.remove();

        // Si la hauteur totale est supérieure à la hauteur visible, afficher le bouton "Voir plus"
        if (fullHeight > visibleHeight) {
            $seeMore.show();
        } else {
            $seeMore.hide();
            $seeLess.hide();
        }
    }

    // Appeler la fonction au chargement
    checkDescription();

    // Voir plus presentation
    $seeMore.on('click', function (e) {
        e.preventDefault();
        $description.css('height', 'auto').addClass("expanded");
        $seeMore.hide();
        $seeLess.show();
    });

    // Voir moins presentation
    $seeLess.on('click', function (e) {
        e.preventDefault();
        $description.css('height', 'auto').removeClass("expanded");
        $seeMore.show();
        $seeLess.hide();
    });

    // Voir plus SCEA
    $(".options-scea").hide();
    $(".options-scea").slice(0, 10).show();

    $("#seeMore").on('click', function (e) {
        e.preventDefault();

        $(".options-scea:hidden").slideDown();

        $("#seeMore").hide();
        $("#seeLess").show();
    });

    // Voir moins SCEA
    $("#seeLess").on('click', function (e) {
        e.preventDefault();

        $(".options-scea").not(":lt(10)").slideUp();

        $("#seeMore").show();
        $("#seeLess").hide();
    });

    // Laisser en active le lien de la page sur lequel on a cliqué.
    // URL page
    var currentUrl = window.location.href;

    // Liens de la navigation
    var navLinks = document.querySelectorAll('.navbar a');

    // Voir lien actif
    var activeLinkFound = false;

    // Parcourir chaque lien
    navLinks.forEach(function (link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
            activeLinkFound = true;
            
            var parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                parentDropdown.querySelector('a').classList.add('active');
            }
        }
    });

    // Vérifiez les sous-liens aussi
    if (!activeLinkFound) {
        navLinks.forEach(function (link) {
            if (currentUrl.startsWith(link.href)) {
                link.classList.add('active');
                var parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('a').classList.add('active');
                }
            }
        });
    }

    // Masquer "Pourquoi nous vous le recommandons" dans Around si pas de contenu 
    $('.comment-item-w').each(function () {
        var $textOpinion = $(this).find('.text-opinion');
        
        if ($.trim($textOpinion.text()) === "") {
            $(this).hide();
        }
    });

    // Clics sur les liens des prix chèques cadeaux
    $('.all-prices-vouchers a').on('click', function (event) {
        event.preventDefault();

        var targetId = $(this).attr('id');

        // Trouver l'élément correspondant dans le slider
        var targetElement = $(targetId);
        if (targetElement.length) {
            var index = $('.vouchers-slider').find('.owl-item').filter(function () {
                return $(this).find(targetId).length > 0;
            }).index();

            // Si un index valide est trouvé, déplacer le slider
            if (index !== -1) {
                $('.vouchers-slider').trigger('to.owl.carousel', [index, 600]);
            } else {
                console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
            }
        } else {
            console.error("Cible non trouvée pour :", targetId);
        }
    });
})(jQuery);

$(document).ready(function () {
    $('.home-slider_img').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.specials-offers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        items: 1,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.avis-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: true,
            },
            768: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: true,
            },
            1400: {
                items: 3,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.offer-detail-slider').owlCarousel({
        loop: true,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 3,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
                center: true,

            },
            1400: {
                items: 3,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
                center: true,
            },
        }
    });
    $('.vouchers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 20,
        items: 1,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: false,
            },
        }
    });
});