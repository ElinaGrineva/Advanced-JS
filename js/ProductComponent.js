Vue.component('products', {
    data() {
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
            if (!this.filtered.length) {
                alert('Такого товара в каталоге нет');
                this.filtered = this.products;
            }
            console.log(this.filtered);
        }
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    el.imgSrc = `images/${el.id}.png`;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
            <div class="goods-list">
                <product v-for="item of filtered" 
                :product="item" :img ="item.imgSrc"></product>
            </div>
        `
});
Vue.component('product', {
    props: ['img', 'product'],
    template: `
                <div class="cart">
                    <img :src="img" class="img_products" alt="photo">
                    <h4 class="title">{{ product.title }}</h4>
                    <p class="price">{{ product.price }} рублей</p>
                    <button class="buy-cart" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                </div>
         `
})
