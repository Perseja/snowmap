/**
 * Created by tsaraeva on 11/11/16.
 */
const MAP_CENTER = {lat: 45.467, lng: 15.690};

class SnMap {

    constructor(element) {
        this.map = new google.maps.Map(element, {
            center: MAP_CENTER,
            scrollwheel: false,
            zoom: 6
        });

        this.markers = [];
    }

    placeMarker(snMarker) {
        const marker = new google.maps.Marker({
            map: this.map,
            position: snMarker.position,
            title: snMarker.title
        });

        google.maps.event.addListener(marker, 'click', () => {
             const infoWindow = new google.maps.InfoWindow({
                 content: `${snMarker.title} ${snMarker.description ? `<br/>${snMarker.description}` : ''}`
             });
             infoWindow.open(this.map, marker);
         });

        this.markers.push(marker);
    }
}

export default SnMap;
