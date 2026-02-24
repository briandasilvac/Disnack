// On attend que le DOM soit chargé pour éviter les erreurs
document.addEventListener('DOMContentLoaded', function() {
    const catalogue = {
        'distributeur-proteine': {
            name: "Distributeur à boissons protéinées",
            description: "La solution idéale pour offrir des shakes frais et onctueux à vos membres dès la fin de leur entraînement.",
            img: "assets/img/distrib1.webp",
            sku: "DIS-PRO-01",
            specs: ["Écran tactile 15\"", "Jusqu'à 8 saveurs", "Nettoyage automatique", "Paiement sans contact"],
            dimensions: "183cm (H) x 80cm (L) x 75cm (P)"
        },
        'combo-nutrition': {
            name: "Distributeur Automatique Combo",
            description: "Un large choix de barres énergétiques, compléments et boissons isotoniques dans une seule machine.",
            img: "assets/img/distrib2.webp",
            sku: "DIS-COM-02",
            specs: ["Froid ventilé", "Système anti-coincement", "Éclairage LED basse conso"],
            dimensions: "180cm (H) x 90cm (L) x 85cm (P)"
        },
        'fontaines-eau': {
            name: "Fontaines à eau filtrée",
            description: "Une hydratation pure et illimitée pour vos sportifs.",
            img: "assets/img/fontaines.webp",
            sku: "DIS-WAT-03",
            specs: ["Filtration charbon actif", "Option eau pétillante", "Débit haute performance"],
            dimensions: "150cm (H) x 40cm (L) x 40cm (P)"
        }
    };

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const p = catalogue[productId];

    if (p) {
        document.getElementById('p-name').innerText = p.name;
        document.getElementById('p-description').innerText = p.description;
        document.getElementById('p-img').src = p.img;
        document.getElementById('p-img').alt = p.name;
        document.getElementById('p-sku').innerText = p.sku;
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
});