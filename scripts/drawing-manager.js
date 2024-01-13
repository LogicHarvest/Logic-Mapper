var map;

        function GetMap() {
            map = new Microsoft.Maps.Map(document.getElementById('map'), {
                center: new Microsoft.Maps.Location(-22.559722, 17.083611), // Center on Windhoek, Namibia
                zoom: 10
            });
        }

        function searchLocation() {
            var locationInput = document.getElementById('locationInput').value;

            // Use the Bing Maps Autosuggest API for location search
            Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
                var options = {
                    maxResults: 5,
                    country: 'NA', // Country code for Namibia
                    callback: onSuggestionSelected
                };
                var manager = new Microsoft.Maps.AutosuggestManager(options);
                manager.getSuggestions(locationInput);
            });
        }

        function onSuggestionSelected(result) {
            if (result && result.location) {
                map.setView({ center: result.location, zoom: 12 });

                // Clear existing entities (e.g., markers)
                map.entities.clear();

                // Add a pushpin at the selected location
                var pushpin = new Microsoft.Maps.Pushpin(result.location, {
                    title: result.formattedSuggestion
                });

                map.entities.push(pushpin);
            }
        }