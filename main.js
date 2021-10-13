const API = 'https://raw.githubusercontent.com/ElinaGrineva/Advanced-JS/main';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalog.json',
        products: [],
        filtered: [],
        cartItems: [],
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.filtered.filter(item => regexp.test(item.title));
            if (!this.filtered.length) {
                alert('Такого товара в каталоге нет');
                this.filtered = this.products;
            }
            console.log(this.filtered);
        },
        addProduct(item) {
            let find = this.cartItems.find(el => el.title == item.title);
            if (find) {
                find.quantity++;
                find.price *= find.quantity;
            } else {
                this.cartItems.push(item);
            }
            console.log(this.cartItems);
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.products.push(item);
                    this.filtered.push(item);
                }
                console.log(this.products);
                console.log(this.filtered);
            });
    }
})