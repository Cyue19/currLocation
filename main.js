let map;

function initMap() {
  //create default map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: 270 },
    zoom: 5,
  });

  //create the button
  const button = document.createElement("button");
  button.textContent = "Go to My Location";
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(button);

  //button action listener
  button.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //move to current location
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(pos);
          //zoom into location
          map.setZoom(18);
          //place marker at current location
          const marker = new google.maps.Marker({
            position: pos,
            map: map,
          });
        },
      );
    } else {
      console.log("Error occurred");
    }
  });
}
