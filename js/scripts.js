/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Animation des compteurs
    const counters = document.querySelectorAll('.counter');
    const DUREE_ANIMATION = 1500; // Durée totale en millisecondes

    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const prefix = counter.getAttribute('data-prefix') || "";
                
                let startTime = null;

                const animate = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const progress = currentTime - startTime;
                    
                    // Calcul du pourcentage de progression (de 0 à 1)
                    const fraction = Math.min(progress / DUREE_ANIMATION, 1);
                    
                    // Calcul de la valeur actuelle en fonction de la progression
                    const currentValue = Math.floor(fraction * target);

                    counter.innerText = prefix + currentValue.toLocaleString();

                    if (fraction < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        counter.innerText = prefix + target.toLocaleString();
                    }
                };

                requestAnimationFrame(animate);
                observer.unobserve(counter);
            }
        });
    };

    const counterObserver = new IntersectionObserver(startCounting, { threshold: 0.5 });
    counters.forEach(counter => counterObserver.observe(counter));

});