let serachFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    serachFrom.classList.toggle('active');   //active only

    
    shopingCart.classList.remove('active');
    logingFrom.classList.remove('active');
    navbar.classList.remove('active');
}

let shopingCart = document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shopingCart.classList.toggle('active');


    serachFrom.classList.remove('active');
    logingFrom.classList.remove('active');
    navbar.classList.remove('active');
}


let logingFrom = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    logingFrom.classList.toggle('active');


    serachFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');

    serachFrom.classList.remove('active');
    logingFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    

    
}


window.onscroll = () =>
{
    serachFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    logingFrom.classList.remove('active');
    navbar.classList.remove('active');
    
    
}

