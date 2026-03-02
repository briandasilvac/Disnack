/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // --- CATALOGUE DES PRODUITS ---
    const catalogue = {
        'di-shake': {
            name: "DI-SHAKE",
            description: "Distributeur de boissons protéinées & sportives de haute qualité.",
            img: "assets/img/di-shake.webp",
            specs: [
                "Ecran LCD de 19\"",
                "Jusqu'à 10 boissons possibles",
                "Capacité de 400 gobelets",
                "Modification des prix de vente, par le gérant de façon facile et pratique",
                "Statistique de vente accessible au gérant",
                "Recherche automatique d'anomalies",
                "Large vitrine sécurisée anti-vandalisme, accueillante et très lumineuse",
                "Système de paiement Nayax"
            ],
            dimensions: "183cm (H) x 60cm (L) x 65cm (P) - 180kg"
        },
        'di-sport': {
            name: "DI-SPORT",
            description: "Le distributeur automatique de référence pour les complexes sportifs ! Covering personnalisé possible.",
            img: "assets/img/di-sport.webp",
            specs: [
                "Interface à écran tactile de 7\"",
                "Automate à spirales. Jusqu'à 5 plateaux de 6 spirales",
                "Espace réfrigéré pour rangement et stock",
                "Modification des prix de vente, par le gérant de façon facile et pratique",
                "Statistique de vente accessible au gérant",
                "Recherche automatique d'anomalies. Capteur de chute. (ex : spirale vide)",
                "Large vitrine sécurisée anti-vandalisme, accueillante et très lumineuse",
                "Monnayeur acceptant les Frs et €",
                "Couleur gris et noire",
                "Système de paiement Nayax",
                "Covering personnalisé possible"
            ],
            dimensions: "170cm (H) x 72cm (L) x 83cm (P)"
        },
        'di-sport-plus': {
            name: "DI-SPORT+",
            description: "Le distributeur automatique de référence pour les complexes sportifs, version XXL ! Covering personnalisé possible.",
            img: "assets/img/di-sport.webp",
            specs: [
                "Interface à écran tactile de 7\"",
                "Automate à spirales. Jusqu'à 6 plateaux de 10 spirales",
                "Espace réfrigéré pour rangement et stock",
                "Statistique de vente accessible au gérant",
                "Recherche automatique d'anomalies. Capteur de chute. (ex : spirale vide)",
                "Large vitrine sécurisée anti-vandalisme, accueillante et très lumineuse",
                "Couleur gris et noire",
                "Système de paiement Nayax",
                "Covering personnalisé possible"
            ],
            dimensions: "183cm (H) x 85cm (L) x 89cm (P)"
        },
        'fontaine-eau-minerale': {
            name: "Fontaine à eau minérale",
            description: "Cette fontaine à eau vous propose toutes les fonctionnalités essentielles que vous pouvez attendre d'une fontaine à eau minérale : facilité d'utilisation, simple à entretenir et de multiples options pour le choix des températures ! Offrez-vous une pause rafraîchissante avec cette fontaine esthétiques et fonctionnelle !",
            img: "assets/img/fontaine-eau-minerale.webp",
            specs: [
                "Modèle sur pied",
                "Duo : Tempéré / Froid",
                "Design robuste",
                "Distributeur neutre en carbone",
                "Porte-gobelet externe",
                "Bac à égouttures facile à retirer pour le vider",
                "Facile à nettoyer et à entretenir",
                "Alimentation : 230 V / 50 Hz"
            ],
            dimensions: "99cm (H) x 31cm (L) x 33cm (P) - Sans bonbonne d'eau"
        },
        'fontaine-eau-reseau': {
            name: "Fontaine à eau de réseau",
            description: "Cette gamme a été pensée pour régner dans tout type d'environnement - de la salle de conférence à celle de sport. Son design épuré, sa taille compacte, sa large zone de distribution et ses options d'eau flexible en font une solution de choix.",
            img: "assets/img/fontaine-eau-minerale.webp",
            specs: [
                "Panneau à commandes tactiles",
                "Distributeur de gobelets intégré dans le socle",
                "Zone de distribution à éclairage automatique de haute capacité",
                "Température froid min 2°C / max 11°C",
                "Débit 23 litres/heure",
                "Eau froide 3/8\" mâle et 230V",
                "Consommation électrique maximale 150W",
                "Hauteur de la niche de distribution : 27cm"
            ],
            dimensions: "132cm (H) x 47cm (L) x 32cm (P)"
        }
    };

    // --- INJECTION DE LA NAVBAR DYNAMIQUE SELON PRODUITS ---
    const navContainer = document.getElementById('navbar-container');
    const isIndex = window.location.pathname === '/';

    if (navContainer && typeof catalogue !== 'undefined') {
        const prefix = isIndex ? "" : "./";

        // Génération de la liste de produits
        const productLinks = Object.keys(catalogue).map(id => `
            <li>
                <a class="dropdown-item" href="produit.html?id=${id}">
                    ${catalogue[id].name}
                </a>
            </li>
        `).join('');

        navContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="${prefix}" id="logo-navbar"><img class="img-logo" src="assets/img/Logo_Disnack.webp" alt="Logo" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="${prefix}#a-propos">A propos</a></li>
                        <li class="nav-item dropdown dropdown-hover">
                            <a class="nav-link dropdown-toggle" href="${prefix}#produits" id="navbarDropdown" role="button">
                                Produits
                            </a>
                            <ul id="dropdown-products" class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                ${productLinks}
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="${prefix}#partenaires">Partenaires</a></li>
                        <li class="nav-item"><a class="nav-link" href="${prefix}#form-section">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }

    // Défilement vers le haut de l'accueil
    const logoLink = document.getElementById('logo-navbar');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            if (isIndex) {
                // Empêche le rechargement de la page
                e.preventDefault(); 
                
                window.scrollTo({
                    top: 0
                });

                // On nettoie l'URL (retire les #ancres)
                history.replaceState(null, null, window.location.pathname);
            }
        });
    }

    // --- INJECTION DU FOOTER ---
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        // Récupération de l'année actuelle pour un affichage dynamique
        const year = new Date().getFullYear(); 

        footerContainer.innerHTML = `
        <footer class="footer bg-black small text-center text-white-50">
            <div class="social mb-3 d-flex justify-content-center">
                <a class="mx-2" href="https://www.instagram.com/disnack.ch" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="mx-2" href="https://www.facebook.com/people/Disnackch/100083677744951/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </div>
            <div class="container px-4 px-lg-5">&copy; ${year} Disnack. Tous droits réservés.</div>
        </footer>`;
    }
  
    // --- SECTION CATALOGUE POUR LISTER LES PRODUITS ---
    const productListContainer = document.getElementById('liste-produits');
    if (productListContainer) {
        Object.keys(catalogue).forEach(id => {
            const p = catalogue[id];
            const col = document.createElement('div');
            col.className = 'col mb-5';
            col.innerHTML = `
                <div class="card h-100 product-card shadow-sm">
                    <img class="card-img-top" src="${p.img}" alt="${p.name}">
                    <div class="card-body p-4 text-center">
                        <h5 class="fw-bolder">${p.name}</h5>
                        <p class="text-muted small">${p.description}</p>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-primary mt-auto" href="produit.html?id=${id}">Caractéristiques</a>
                        </div>
                    </div>
                </div>
            `;
            productListContainer.appendChild(col);
        });
    }

    // --- LOGIQUE POUR LA CARTE DES PARTENAIRES ---
    // Détections de la carte pour éviter de la manipuler sur les pages de produits
    const svgMap = document.querySelector('.swiss-map'); // Pour SVG

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
    }

    // --- PAGE DETAILS D'UN PRODUIT UNIQUE ---
    const pNameElem = document.getElementById('p-name');
    const productImg = document.getElementById('p-img');
    const modalImg = document.getElementById('modal-img');

    if (productImg && modalImg) {
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        
        productImg.closest('.product-img-wrapper').addEventListener('click', () => {
            modalImg.src = productImg.src;
            imageModal.show();
        });
    }

    if (pNameElem) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const p = catalogue[productId];

        if (p) {
            document.getElementById('p-name').innerText = p.name;
            document.getElementById('p-description').innerText = p.description;
            document.getElementById('p-img').src = p.img;
            document.getElementById('p-img').alt = p.name;
            document.getElementById('p-dims').innerText = p.dimensions;
            
            const specsList = document.getElementById('p-specs');
            specsList.innerHTML = "";

            p.specs.forEach(spec => {
                let li = document.createElement('li');
                li.className = "col-md-6 py-2";
                li.innerHTML = `<i class="fas fa-check text-primary me-2 small"></i> ${spec}`;
                specsList.appendChild(li);
            });
        } else {
            document.body.innerHTML = "<div class='text-center py-5'><h1>Produit non trouvé</h1><a href='./#produits'>Retour</a></div>";
        }
    }

    // --- FONCTIONS BOOTSTRAP ---
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

    // --- ANIMATION DES COMPTEURS ---
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