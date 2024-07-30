let serachFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    serachFrom.classList.toggle('active');
}

let shopingCart = document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shopingCart.classList.toggle('active');
}


let logingFrom = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    logingFrom.classList.toggle('active');
}


