class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
        console.log(this.calcSum());
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Laptop MacBook Air 13', price: 90000, img: 'https://img.mvideo.ru/Big/30053777bb.jpg' },
            { id: 2, title: 'TV Samsung', price: 44000, img: ' https://img.mvideo.ru/Big/10024599bb.jpg' },
            { id: 3, title: 'Smartphone IPhone 13 mini', price: 70000, img: 'https://img.mvideo.ru/Big/30059012bb.jpg' },
            { id: 4, title: 'Console Sony Playstation 5', price: 50000, img: 'https://img.mvideo.ru/Big/40073270bb.jpg' },
        ];
    }
    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    calcSum() {
        return this.allProducts.reduce((sum, item) => sum += item.price, 0);
    }
}

class ProductItem {
    constructor(product, img = 'http://www.stoimen.com/wp-content/uploads/2011/10/question.mark_.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item" data-id="item-${this.id}">
                <h3>${this.title}</h3>
                <p>${this.price}rub</p>
                <img src="${this.img}" alt="product-img">
                <button class="buy-btn">Купить</button>
              </div>`
    }
}

new ProductsList();

class Cart {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
    }
}

class CartItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }
}