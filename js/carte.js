const map = L.map('map', {
  center: [-20.88117, 55.45946],
  zoom: 14,
  minZoom: 14, // 🔐 Zoom minimum fixé
  maxZoom: 15, // 🔓 Zoom maximum autorisé
  scrollWheelZoom: true,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  touchZoom: false,
  zoomControl: false
});

L.tileLayer('https://tile.jawg.io/228d6bb1-a26d-4dbf-9618-c221457468d3/{z}/{x}/{y}{r}.png?access-token=YZ9SZPVitYXjlfbAjTZoyoRNJerDqbFTjmpoL3Bogn8Cfe8xxV7GW16ohyQJtBC6', {
  attribution: '&copy; <a href="https://www.jawg.io" target="_blank">Jawg</a> & contributors | <a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>',
  maxZoom: 18
}).addTo(map);

const lieux = [
  {
    nom: "Cité des Arts",
    lat: -20.885157,
    lng: 55.468768,
    icon: "https://cdn-icons-png.flaticon.com/128/3749/3749704.png",
    image: "../src/images_cite2.jpg",
    description: "« Titan pierre et univers »<br>- 2016, façade Est<br>Cité des Arts"
  },
  {
    nom: "Bas de la Rivière",
    lat: -20.876095,
    lng: 55.444895,
    icon: "https://cdn-icons-png.flaticon.com/128/9760/9760647.png",
    image: "../src/5.jpg",
    description: "« Géant univers »<br>- 2013, rue de la Boulangerie,<br>Bas de la Rivière"
  },
  {
    nom: "Camélia",
    lat: -20.893657,
    lng: 55.463124,
    icon: "https://cdn-icons-png.flaticon.com/128/15238/15238871.png",
    image: "../src/3.jpg",
    description: "« Titan pierre et univers »<br>- 2017, SHLMR, Le Butor"
  },
  {
    nom: "Parking du grand marché",
    lat: -20.880917,
    lng: 55.447848,
    icon: "https://cdn-icons-png.flaticon.com/128/3420/3420275.png",
    image: "../src/4.jpg",
    description: "L’Île lumière noire<br>2022"
  }
];

lieux.forEach(lieu => {
  const iconePerso = L.icon({
    iconUrl: lieu.icon,
    iconSize: [50, 50],
    className: 'custom-icon'
  });

  const contenuPopup = `
    <div style="text-align:center;">
      <h3>${lieu.nom}</h3>
      <img src="${lieu.image}" alt="${lieu.nom}" style="width:150px;border-radius:8px;" />
      <p>${lieu.description}</p>
    </div>
  `;

  const marker = L.marker([lieu.lat, lieu.lng], { icon: iconePerso }).addTo(map);

  const popup = L.popup({
    closeButton: false,
    autoClose: false,
    closeOnClick: false,
    autoPan: false
  }).setContent(contenuPopup);

  marker.on('mouseover', () => {
    const iconEl = marker.getElement();
    if (iconEl) iconEl.classList.add('hovered');
    marker.bindPopup(popup).openPopup();
  });

  marker.on('mouseout', () => {
    const iconEl = marker.getElement();
    if (iconEl) iconEl.classList.remove('hovered');
    marker.closePopup();
  });
});
