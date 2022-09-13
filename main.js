const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeproductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}
const productList = []
productList.push({
    name: 'Pokeball',
    price: 120,
    image: 'https://images.pexels.com/photos/7772559/pexels-photo-7772559.jpeg?auto=compress&cs=tinysrgb&w=1600'
})
productList.push({
    name: 'Superball',
    price: 180,
    image: 'http://pm1.narvii.com/6236/820a372ef9ddfec1c347a3eb228fa23777a85181_00.jpg'
})
productList.push({
    name: 'Ultraball',
    price: 220,
    image: 'https://static.wikia.nocookie.net/espokemon/images/c/c9/Ultra_Ball_%28Ilustraci%C3%B3n%29.png'
})
productList.push({
    name: 'Masterball',
    price: 320,
    image: 'https://m.media-amazon.com/images/I/61Pbz0-zyXL._AC_SX522_.jpg'
})
productList.push({
    name: 'Ceboball',
    price: 100,
    image: 'https://static.wikia.nocookie.net/espokemon/images/b/bc/Cebo_Ball_%28Ilustraci%C3%B3n%29.png'
})

function openProductDetail() {
    productDetailContainer.classList.remove('inactive')
}
function closeproductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

function renderProducts(arr) {
    for (product of arr) {
        const productCart = document.createElement('div')
        productCart.classList.add('product-card')

        const productimg = document.createElement('img')
        productimg.setAttribute('src', product.image)
        productimg.addEventListener('click', openProductDetail)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCart.appendChild(productimg)
        productCart.appendChild(productInfo)

        cardsContainer.appendChild(productCart)
    }
}

renderProducts(productList)