const map = L.map('mapid').setView([-23.5790786,-46.5806549], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

//create pop up overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240   
}).setContent('Lar das meninas <a href="orphanage.html?1id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

L.marker([-23.5790786,-46.5806549], {icon: icon})
    .addTo(map)
    .bindPopup(popup)
  