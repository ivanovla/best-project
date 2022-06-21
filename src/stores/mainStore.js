import {observable, action, makeAutoObservable} from 'mobx';

class MainStore {
    countries = [];

    constructor() {
        makeAutoObservable(this)
    }

    setCountries(countries) {
        this.countries = countries;
    }

    listCountries (){
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((countries) => this.setCountries(countries));
    }
}

export default new MainStore();
