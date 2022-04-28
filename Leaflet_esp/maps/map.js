//
//See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
}).addTo(map)

/* var popup = L.popup();

function onMapClick(e) {
  popup.setLatLng(e.latlng).setContent("Fetching weather info").openOn(mymap);

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      e.latlng.lat +
      "&lon=" +
      e.latlng.lng +
      "&appid=" +
      yourApiKey
  )
    .then((r) => r.json())
    .then((data) => {
      // Change this line to show exactly the info you need
      popup.setContent(data.weather.map((w) => w.description).join(", "));
    });
}

mymap.on("click", onMapClick); */