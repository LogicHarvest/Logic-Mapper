var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.559722, lng: 17.083611 }, // Center on Windhoek, Namibia
        zoom: 10
    });
}

function searchLocation() {
    var locationInput = document.getElementById('locationInput').value;

    // Use the Google Places API for location search
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': locationInput }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;

            // Clear existing markers
            map.data.forEach(function (feature) {
                map.data.remove(feature);
            });

            // Set map center to the searched location
            map.setCenter(location);
            map.setZoom(12);

            // Add a marker at the searched location
            var marker = new google.maps.Marker({
                map: map,
                position: location,
                title: results[0].formatted_address
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// Load the map when the page is loaded
google.maps.event.addDomListener(window, 'load', initMap);