const map = L.map('map').setView([-20.88117, 55.45946], 14);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a> & OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);


const lieux = [
  { nom: "Cité des Arts",
    lat: -20.885157,
    lng: 55.468768,
    icon:"https://cdn-icons-png.flaticon.com/128/9252/9252432.png",
    image:"https://cdn.discordapp.com/attachments/1303599756320444417/1388935878230933755/images_cite1.jpg?ex=68637396&is=68622216&hm=c5ad8702f7b378605e262b638d0a904d6be306ceb49c185dacd25eaa5f1c05fb&",
    description:"« Titan pierre et univers »<BR>- 2016, façade Est<BR>Cité des Arts"},
    { nom: "Bas de la Rivière",
    lat: -20.876095,
    lng: 55.444895,
    icon:"https://cdn-icons-png.flaticon.com/128/3322/3322490.png",
    image:"https://cdn.discordapp.com/attachments/1303599756320444417/1388935692444241992/dans-le-bas-de-la-rivic3a8re.jpg?ex=6863736a&is=686221ea&hm=1b1308e4a0a52b654f61819e6603eff807912d8bff37bee6b2430c28c4697de3&",
    description:"« Géant univers »<BR>- 2013, rue de la Boulangerie,<BR>Bas de la Rivière"},
  { nom: "Camélia",
    lat: -20.893657,
    lng: 55.463124,
    icon:"https://cdn-icons-png.flaticon.com/128/15238/15238912.png",
    image:"https://cdn.discordapp.com/attachments/1303599756320444417/1388935809737949325/sans-titre-titan-cosmique-la-cite-des-arts-la-shlmr-2017-5914-2048x1560-q80.jpg?ex=68637386&is=68622206&hm=4dedebdf2702c82ee2a55441c33f4c28e62a49477435af8f4e241b414e9d646b&",
    description:"« Titan pierre et univers »<BR>-2017, façade immeuble SHLMR,<BR>Le Butor"},
  { nom: "Parking du grand marché",
    lat: -20.880917,
    lng: 55.447848,
    icon:"https://cdn-icons-png.flaticon.com/128/75/75905.png",
    image:"https://cdn.discordapp.com/attachments/1303599756320444417/1388935748111044719/sans-titre-lile-lumiere-noire-saint-denis-ile-de-la-reunion-fev-2022-5212-1440x1080-q80.jpg?ex=68637377&is=686221f7&hm=88b91da531f3bf39e8f9ea68b1d799d32d85658a7e6c6eae0da23e385b0d29ea&",
    description:"L’Île lumière noire, 2022"}
];


lieux.forEach(lieu => {

    const iconePerso = L.icon({
    iconUrl: lieu.icon,
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const contenuPopup = `
    <div style="text-align:center;">
      <h3 style="margin:5px 0;">${lieu.nom}</h3>
      <img src="${lieu.image}" alt="${lieu.nom}" style="width:150px;height:auto;border-radius:8px;" />
      <p style="margin:5px 0;">${lieu.description}</p>
    </div>
  `;

  L.marker([lieu.lat, lieu.lng],{ icon: iconePerso })
    .addTo(map)
    .bindPopup(contenuPopup);

    const marker = L.marker([lieu.lat, lieu.lng], { icon: iconePerso }).addTo(map);

  const popup = L.popup({
    closeButton: false,
    autoClose: false,
    closeOnClick: false
  }).setContent(contenuPopup);

  marker.on('mouseover', () => {
    marker.bindPopup(popup).openPopup();
  });

  marker.on('mouseout', () => {
    marker.closePopup();
  });
});

