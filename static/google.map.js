function initMap() {
  const kyiv = {lat: 50.453131, lng: 30.521012};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: kyiv
  });
  const marker = new google.maps.Marker({
    position: kyiv,
    map: map
  });
}