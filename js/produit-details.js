// On attend que le DOM soit chargé pour éviter les erreurs
document.addEventListener('DOMContentLoaded', function() {
    // Catalogue des produits
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

    // Logique pour la navbar dynamique selon produits
    const dropdownMenu = document.getElementById('dropdown-products');

    if (dropdownMenu && typeof catalogue !== 'undefined') {
        // On vide le menu (sécurité)
        dropdownMenu.innerHTML = "";

        Object.keys(catalogue).forEach(id => {
            const p = catalogue[id];
            
            // On crée l'élément de liste <li>
            const li = document.createElement('li');
            
            // On injecte le lien avec le nom du produit
            li.innerHTML = `
                <a class="dropdown-item" href="produit.html?id=${id}">
                    ${p.name}
                </a>
            `;
            
            dropdownMenu.appendChild(li);
        });
    }

    // Page catalogue qui liste les produits
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

    // Page détails d'un produit unique
    const pNameElem = document.getElementById('p-name');
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
            p.specs.forEach(spec => {
                let li = document.createElement('li');
                li.innerText = spec;
                specsList.appendChild(li);
            });
        } else {
            document.body.innerHTML = "<div class='text-center py-5'><h1>Produit non trouvé</h1><a href='index.html'>Retour</a></div>";
        }
    }
});