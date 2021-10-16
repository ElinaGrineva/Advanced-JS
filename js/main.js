// const API = 'https://raw.githubusercontent.com/ElinaGrineva/Advanced-JS/main';

const app = new Vue({
    el: '#app',
    data() {
        return {
            showError: false,
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.showError = true;
                })
        },
    }
})