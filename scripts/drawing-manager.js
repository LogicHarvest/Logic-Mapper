// Initialize the map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2
    });

    // Initialize DrawingManager
    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'polygon', 'circle']
        }
    });

    drawingManager.setMap(map);
}

// Load the map when the page is loaded
google.maps.event.addDomListener(window, 'load', initMap);

google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
    if (event.type == 'marker') {
        // Handle marker creation
        var marker = event.overlay;
        // Do something with the marker...
    } else if (event.type == 'polygon') {
        // Handle polygon creation
        var polygon = event.overlay;
        // Do something with the polygon...
    } else if (event.type == 'circle') {
        // Handle circle creation
        var circle = event.overlay;
        // Do something with the circle...
    }
});
