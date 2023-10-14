/* const $ = (selector) => document.querySelector(selector); */

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCartIconResponsive = document.querySelector('.navbar-shopping-cart-responsive');
const menuCartIconDesktop = document.querySelector('.navbar-shopping-cart-desktop');

/* Selecionar menuHamIcon y MenuCartIcon */

const arrowBackResponsive = document.querySelector('.arrow-back-responsive');
const arrowBackDesktop = document.querySelector('.arrow-back-desktop');
const productDetailSecondary = document.querySelector('.product-detail-secondary-close');
const cartMenu = document.querySelector('.product-detail');
const cardsContainerResponsive = document.querySelector('#cardsContainerResponsive');
const cardsContainerDesktop = document.querySelector('#cardsContainerDesktop');

const mainContentProducts = document.querySelector('.main-container')

const productDetailContainerDesktop = document.querySelector('#productDetail');
const productDetailContainerResponsive = document.querySelector('#productDetail');

const iconCloseProductDetailResponsive = document.querySelector('.product-detail-secondary-close-responsive');
const iconClosProductDetailDesktop = document.querySelector('.product-detail-secondary-close-desktop');

/* const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu'); */

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCartIconResponsive.addEventListener('click', toggleCartShoppingResponsive);
menuCartIconDesktop.addEventListener('click', toggleCartShoppingDesktop);
arrowBackResponsive.addEventListener('click', toggleCartShoppingResponsive);
arrowBackDesktop.addEventListener('click', toggleCartShoppingDesktop);

iconCloseProductDetailResponsive.addEventListener('click', toggleProductDetailAsideResponsive);
iconClosProductDetailDesktop.addEventListener('click', closeProductDetailAsideDesktop);

/* clickNavbarResponsive.addEventListener('click', toggleMainContent); */
/* NavbarResponsive.addEventListener('click', toggleMainContent); */


function toggleDesktopMenu() {
    const isCartMenu = cartMenu.classList.contains('inactive');
    
    if (!isCartMenu) {
        cartMenu.classList.add('inactive')
    }
    
    productDetailContainerDesktop.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleCartShoppingDesktop() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainerDesktop.classList.contains('inactive');
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    } else if (!isProductDetailClosed) {
        productDetailContainerDesktop.classList.add('inactive');
    }
    
    cartMenu.classList.toggle('inactive');
}
function openProductDetailAsideDesktop() {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
    if(!isCartMenuClosed){
        cartMenu.classList.toggle('inactive');
    }

    productDetailContainerDesktop.classList.remove('inactive');

    const productId = event.target.getAttribute('data-id');
    const product = productList.find(p => p.id === productId);
    
    if (product) {
        const imgProducts = document.getElementById('imgProduct');
        imgProducts.setAttribute('src', product.image);

        const infoProducts = document.getElementById('informationProduct');
        infoProducts.textContent = product.infoproduct;

        const nameProducts = document.getElementById('nameProduct');
        nameProducts.textContent = product.name;

        const priceProducts = document.getElementById('priceProduct');
        priceProducts.textContent = product.price;
    }
}
function closeProductDetailAsideDesktop() {
    
    productDetailContainerDesktop.classList.add('inactive');
}


function toggleMobileMenu() {
    const isCartMenuClosed = cartMenu.classList.contains('inactive')
    
    if(!isCartMenuClosed) {
        mobileMenu.classList.add('inactive')
    } else {
        mainContentProducts.classList.toggle('inactive')
    }
    
    productDetailContainerResponsive.classList.add('inactive');
    cartMenu.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}
function toggleCartShoppingResponsive() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    if(!isMobileMenuClosed) {
        cartMenu.classList.add('inactive')
    } else {
        mainContentProducts.classList.toggle('inactive')
    }
    
    productDetailContainerResponsive.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    cartMenu.classList.toggle('inactive');
}
function toggleProductDetailAsideResponsive() {

    mainContentProducts.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')
    cartMenu.classList.toggle('inactive');

    productDetailContainerResponsive.classList.toggle('inactive');

    const productId = event.target.getAttribute('data-id');
    const product = productList.find(p => p.id === productId);
    
    if (product) {
        const imgProducts = document.getElementById('imgProduct');
        imgProducts.setAttribute('src', product.image);

        const infoProducts = document.getElementById('informationProduct');
        infoProducts.textContent = product.infoproduct;

        const nameProducts = document.getElementById('nameProduct');
        nameProducts.textContent = product.name;

        const priceProducts = document.getElementById('priceProduct');
        priceProducts.textContent = product.price;
    }
}

const productList = []
productList.push({
    id: "producto1",
    name: "Bike",
    price: "$120",
    image: "https://media.istockphoto.com/id/482965873/es/foto/bicicleta-de-monta%C3%B1a-de-29-pulgadas-con-ruedas-sobre-blanco.jpg?s=1024x1024&w=is&k=20&c=LPHFQ8-e0KIDRBS1AdztC7kKZon-GMedhevjM-CZ7_M=",
    infoproduct: "RoadMaster Hurricane 29 Stainless Steel Frame, with YS Code paint Fork: RoadMaster Steel 28.6 * 25.4* with Suspension Lockout Suspension with Shoulder Lock Handlebar: RoadMaster Swallow 22.2*640MM"
});
productList.push({
    id: "producto2",
    name: "Casual Shoes ",
    price: "$40",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_961962-MCO53969482763_022023-F.webp",
    infoproduct: "Our products are manufactured for everyday use with high quality and at an affordable price for the entire community. We seek to impact our customers, guided by the quality and comfort of our products to generate a constant, long-term relationship and on the best terms."
});
productList.push({
    id: "producto3",
    name: "Computer",
    price: "$635",
    image: "https://http2.mlstatic.com/D_NQ_NP_962770-MLM54029806942_022023-O.webp",
    infoproduct: "Powered by the Intel Core processor, the Victus by HP 16.1-inch laptop has all the features to handle your gaming and daily needs. Increase your gaming flexibility with a multi-use gaming keyboard and enjoy a fast refresh rate display without image defects."
});
productList.push({
    id: "producto4",
    name: "Chair",
    price: "$45",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_699538-MCO69510888045_052023-F.webp",
    infoproduct: "Remember that to issue the electronic invoice you have a maximum period of 10 calendar days after receiving the purchase to request it. You must send us the following information: name/company name, CC/NIT, address and email."
});
productList.push({
    id: "producto5",
    name: "Desktop Gamer",
    price: "$130",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_924794-MLA54287479221_032023-F.webp",
    infoproduct: "Program your play area! Resistant and spacious, the Madesa desk is perfect for those looking for a spacious piece of furniture that can support the weight of consoles, televisions, large screens and other devices required for playing long hours."
});
productList.push({
    id: "producto6",
    name: "Diapers",
    price: "$50",
    image: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/184673-1600-1600?v=637813974873170000&width=1600&height=1600&aspect=true",
    infoproduct: "Like most modern disposable diapers, Pampers diapers have a layer of materials that allows the transfer and distribution of liquid to an absorbent center where the liquid is away from the baby, keeping him dry and comfortable."
});
productList.push({
    id: "producto7",
    name: "Electric Stove",
    price: "$110",
    image: "https://http2.mlstatic.com/D_NQ_NP_734749-MLU71092971649_082023-O.webp",
    infoproduct: "This Challenger stove will help you show off and surprise all your guests. Its design and functionality guarantee the best performance so that you can prepare your dishes in a comfortable and practical way."
});
productList.push({
    id: "producto8",
    name: "Mistery Box",
    price: "$50",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_861151-MCO52815488323_122022-F.webp",
    infoproduct: "Mystery box that offers you the opportunity at a low price to obtain watch products; jewelery (necklaces, bracelets, rings) of this price range, take advantage of this opportunity to take this box containing discounted products"
});
productList.push({
    id: "producto9",
    name: "Sports Clothing",
    price: "$40",
    image: "https://http2.mlstatic.com/D_NQ_NP_847095-MCO51526024647_092022-O.webp",
    infoproduct: "JOGGER + SWIMSUIT set in brushed cotton to be used on all occasions, casual or as sports, very comfortable and resistant, does not become speckled, top quality fabric."
});
productList.push({
    id: "producto10",
    name: "Toys",
    price: "$25",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_739740-MCO47849335494_102021-F.webp",
    infoproduct: "With hobby toys you can let your imagination fly with the most fun and magical creations. You will learn by playing, explore your creative side and put your motor and memory skills into practice. Are you ready to become an architect of your own adventures?"
});
productList.push({
    id: "producto11",
    name: "Weight Kit",
    price: "$25",
    image: "https://http2.mlstatic.com/D_NQ_NP_772995-MCO52821182277_122022-O.webp",
    infoproduct: "Muscles are strengthened and simultaneously shaped with the use of weights. Therefore, weight training not only has a sporting effect but also an aesthetic effect."
});
productList.push({
    id: "producto12",
    name: "Xbox One S",
    price: "$420",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_641295-MLA69573719686_052023-F.webp",
    infoproduct: "The new generation of consoles is led by the Xbox Series that came to the market to surprise everyone. Its power and high performance will allow you to reduce the hours of downloading games and content considerably compared to other consoles."
});


function renderProductsResponsive(arr) {
    for(product of productList) {
        const productCardResponsive = document.createElement('div');
        productCardResponsive.classList.add('product-card-responsive');

        const productImgResponsive = document.createElement('img');
        productImgResponsive.setAttribute('src', product.image);
        productImgResponsive.setAttribute('data-id', product.id);
        productImgResponsive.addEventListener('click', toggleProductDetailAsideResponsive);

        const productInfoResponsive = document.createElement('div');
        productInfoResponsive.classList.add('product-info-responsive');
    
        const productInfoDivResponsive = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDivResponsive.appendChild(productPrice);
        productInfoDivResponsive.appendChild(productName);
    
        const productInfoFigureResponsive = document.createElement('figure');
        const productImgCartResponsive = document.createElement('img');
        productImgCartResponsive.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigureResponsive.appendChild(productImgCartResponsive);
    
        productInfoResponsive.appendChild(productInfoDivResponsive);
        productInfoResponsive.appendChild(productInfoFigureResponsive);

        productCardResponsive.appendChild(productImgResponsive);
        productCardResponsive.appendChild(productInfoResponsive);

        cardsContainerResponsive.appendChild(productCardResponsive);
    }
}

function renderProductsDesktop(arr) {
    for(product of productList) {
        const productCardDesktop = document.createElement('div');
        productCardDesktop.classList.add('product-card-desktop');

        const productImgDesktop = document.createElement('img');
        productImgDesktop.setAttribute('src', product.image);
        productImgDesktop.addEventListener('click', openProductDetailAsideDesktop);
        productImgDesktop.setAttribute('data-id', product.id);

        const productInfoDesktop = document.createElement('div');
        productInfoDesktop.classList.add('product-info-desktop');
    
        const productInfoDivDesktop = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDivDesktop.appendChild(productPrice);
        productInfoDivDesktop.appendChild(productName);
    
        const productInfoFigureDesktop = document.createElement('figure');
        const productImgCartDesktop = document.createElement('img');
        productImgCartDesktop.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigureDesktop.appendChild(productImgCartDesktop);
    
        productInfoDesktop.appendChild(productInfoDivDesktop);
        productInfoDesktop.appendChild(productInfoFigureDesktop);

        productCardDesktop.appendChild(productImgDesktop);
        productCardDesktop.appendChild(productInfoDesktop);

        cardsContainerDesktop.appendChild(productCardDesktop);
    }
}

renderProductsDesktop(productList);
renderProductsResponsive(productList);

function insertContentInfo() {
    productList.forEach(product => {
        const imgProducts = document.getElementById('imgProduct');
        imgProducts.setAttribute('src', product.image);
    });
    
    productList.forEach(product => {
        const infoProducts = document.getElementById('informationProduct');
        infoProducts.textContent = product.infoproduct
    });
    
    productList.forEach(product => {
        const nameProducts = document.getElementById('nameProduct');
        nameProducts.textContent = product.name
    });
    
    productList.forEach(product => {
        const priceProducts = document.getElementById('priceProduct');
        priceProducts.textContent = product.price
    });
}

insertContentInfo()
