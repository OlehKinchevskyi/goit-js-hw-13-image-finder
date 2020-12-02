const API_KEY = '19300951-2c2d75eff20259270e7e78a2b';
const BASE_URL = 'https://pixabay.com/api/';

export default class ApiService {

    constructor() {
        this.searchQuery = '';
        this.page = 1;

    }

    getQuery() {

        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(response => {
                return response.json();
            })
            .then(data => { 
                this.incrementPage();
                return data.hits
            })
            .catch(error => {
            console.log(error);
        })
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get inputQuery() {
        return this.searchQuery; 
    }

    set inputQuery(newInputQuery) {
        this.searchQuery = newInputQuery;
    }
}

