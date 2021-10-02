const products = [
    { id: 1, title: 'Laptop MacBook Air 13', price: 90000, img: 'https://img.mvideo.ru/Big/30053777bb.jpg' },
    { id: 2, title: 'TV Samsung', price: 44000, img: ' https://img.mvideo.ru/Big/10024599bb.jpg' },
    { id: 3, title: 'Smartphone IPhone 13 mini', price: 70000, img: 'https://img.mvideo.ru/Big/30059012bb.jpg' },
    { id: 4, title: 'Console Sony Playstation 5', price: 50000, img: 'https://img.mvideo.ru/Big/40073270bb.jpg' },
];

const renderProduct = (title = 'Product', price = "undefined", img = 'http://www.stoimen.com/wp-content/uploads/2011/10/question.mark_.jpg') => {
    return `<div class="product-item">
                  <h3>${title}</h3>
                  <p>${price}rub</p>
                  <img src="${img}" alt="product-img">
                  <button class="buy-btn">Купить</button>
              </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price, item.img)).join('');
};

renderPage(products);