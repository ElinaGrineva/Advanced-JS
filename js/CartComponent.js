Vue.component('cart', {
    data() {
        return {
            // cartUrl: "/userCart.json",
            cartItems: [],
            showCart: false,
        }
    },
    methods: {
        postJson(url, data) {
            console.log(url)

            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        putJson(url, data) {
            console.log(url)
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(item) {
            let find = this.cartItems.find(el => el.id === item.id);
            if (find) {
                this.putJson(`/api/cart/${find.id}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        remove(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => {
                    result.json()
                    this.$parent.getJson('/api/cart')
                        .then(data => {
                            console.log(data)
                            this.cartItems.push({ amount: data.amount, countGoods: data.countGoods });
                            this.cartItems = data.contents;
                        });
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteItem(id) {
            let remove = this.remove;
            let cart = this.cartItems;
            let find = cart.find(el => el.id === id);
            remove(`/api/cart/${id}`, find);
        }

    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let el of data.contents) {
                    el.imgSrc = `images/${el.id}.png`;
                    this.cartItems.push(el);
                }
            });
    },
    template: `
            <div>
                <button class="cart-button" type="button" @click="showCart=!showCart">Корзина</button>
                <div class="cart-block" v-show="showCart">
                    <p v-if="!cartItems.length" class="cart-msg">Корзина пуста</p>
                    <cart-item v-for="item of cartItems" :cart-item="item" :img="item.imgSrc">
                    </cart-item>
                </div>
             </div>`
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
                <div class="cart-product">
                    <img :src="img" class="img-cart" alt="photo">
                    <div class="right">
                        <h4 class="title cart-text">{{ cartItem.title }}</h4>
                        <p class="price cart-text"">Кол-во: {{ cartItem.quantity }}</p>
                        <p class="price cart-text"">Цена: {{ cartItem.price }} руб.</p>
                    </div>
                    <div class="block-btn-remove">
                    <button class="btn-remove" @click="$parent.deleteItem(cartItem.id)">&times</button>
                    </div>
                </div>
            `
})