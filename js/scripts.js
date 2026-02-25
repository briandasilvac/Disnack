/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Détections des cartes pour éviter de les manipuler sur les pages de produits
    const mapElement = document.getElementById('map'); // Pour Leaflet
    const svgMap = document.querySelector('.swiss-map'); // Pour ton SVG

    // Condition pour éviter la manipulation des cartes sur les pages de produits
    if (mapElement || svgMap) {
        // --- Test pour SVG ---
        const markers = document.querySelectorAll('.marker');
        const tooltip = document.getElementById('map-tooltip');
        const tooltipCity = document.getElementById('tooltip-city');
        const tooltipContent = document.getElementById('tooltip-content');

        markers.forEach(marker => {
            marker.addEventListener('click', function(e) {
                // 1. Récupérer les données
                const city = this.getAttribute('data-city');
                const count = this.getAttribute('data-count');

                // 2. Remplir la bulle
                tooltipCity.textContent = city;
                tooltipContent.innerHTML = `<strong>${count} partenaire${count > 1 ? 's' : ''}`;

                // 3. Positionner la bulle
                // On récupère la position du clic par rapport au conteneur
                const rect = document.querySelector('.map-container').getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                tooltip.style.left = x + "px";
                tooltip.style.top = y + "px";
                tooltip.style.display = "block";
            });
        });

        // Fermer la bulle si on clique ailleurs sur la carte
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.marker')) {
                tooltip.style.display = "none";
            }
        });

        // --- Test pour Leaflet ---
        // Etapes 1 à 5 pour map Leaflet
        // 1. Initialisation de la carte avec options de verrouillage
        var map = L.map('map', {
            zoomControl: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            dragging: false,
            touchZoom: false,
            boxZoom: false,
            keyboard: false
        });

        // 2. Chargement du fond de carte (Style sombre pour coller à ton thème)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // 3. Création d'une icône personnalisée verte
        var markerGroup = L.featureGroup().addTo(map);

        function createIcon(number) {
            return L.divIcon({
                className: 'custom-div-icon',
                html: `<div style='background-color:#00cf2e; color:white; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; border:2px solid #f8f9fa; font-weight:bold; box-shadow: 0 2px 5px rgba(0,0,0,0.1);'>${number}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
        }

        // 4. Ajout des marqueurs
        const partners = [
            { name: "Genève", coords: [46.2044, 6.1432], count: 2 },
            { name: "Lausanne", coords: [46.5197, 6.6323], count: 1 },
            { name: "Bienne", coords: [47.1367, 7.2468], count: 1 },
            { name: "Jura", coords: [47.3667, 7.3444], count: 2 },
            { name: "Bâle", coords: [47.5596, 7.5886], count: 2 },
            { name: "Zürich", coords: [47.3769, 8.5417], count: 3 }
        ];

        partners.forEach(partner => {
            L.marker(partner.coords, { icon: createIcon(partner.count) })
                .addTo(markerGroup)
                .bindPopup(`<b>${partner.name}</b><br>${partner.count} Partenaire${partner.count > 1 ? 's' : ''}.`);
        });
        
        // 5. Ajustement automatique
        map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });

        window.onresize = function() {
            map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });
        };
    }

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