/**
 * Created by tsaraeva on 11/11/16.
 */

class SnMarker {
    constructor({ country, town, lat, lng, site, desc } ) {
        this.country = country;
        this.town = town;
        this.lat = Number(lat);
        this.lng = Number(lng);
        this.site = site;
        this.desc = desc;
    }

    get position() {
        return { lat: this.lat, lng: this.lng};
    }

    get title() {
        return `${this.town}, ${this.country}`;
    }

    get siteLink() {
        return `<a href='http://${this.site}' target='_blank'>${this.site}</a>`
    }

    get description() {
        //return `${this.siteLink ? `${this.siteLink}` : ''}
        //        ${this.desc ? `</br>${this.desc}` : ''}`
        return `${this.siteLink ? `${this.siteLink}</br>${this.desc}` : `${this.desc}`}`
    }

    //get ab() {
    //    this.a = 'a';
    //    this.b = 'b';
    //    return `${this.a ? `${this.a}</br>${this.b}` : `${this.b}`}`
    //}
}

export default SnMarker;
