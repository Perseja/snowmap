/**
 * Created by tsaraeva on 11/11/16.
 */
import SnMap from './SnMap';
import SnMarker from './SnMarker';
import { processData } from './csvparser';

window.main = () => {

    const map = new SnMap(document.getElementById('map'));
    loadMarkers(map);
}

const loadMarkers = (map) => {
//document.addEventListener('DOMContentLoaded', function() {
    var file = new XMLHttpRequest();
    file.onload = function(e) {
        const markers = processData(file.response);
        markers.forEach(marker => map.placeMarker(new SnMarker(marker)));

        //var event = new CustomEvent('addMarkers', { detail: markers });
        //document.dispatchEvent(event);

    };
    file.open('GET', 'resources/data.csv', true);
    file.send();
};


//document.addEventListener('addMarkers', function(e) {
//    console.log(e.detail);
//
//})

console.log('start app');
