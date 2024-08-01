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







var swiper = new Swiper(".product-slider", {
 //   slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoPlay: 
    {
        delay : 7500,
        disableOnInteraction:false,
    },
   
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        //spaceBetween: 20,
      },
    //   "@1.00": {
    //     slidesPerView: 3,
    //     //spaceBetween: 40,
    //   },
      1020: {
        slidesPerView: 3,
        //spaceBetween: 50,
      
    },
  }
});


















// var swiper = new Swiper(".product-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay: 
//     {
//         delay:7500,
//         disableOnInteraction:false,

//     }

//     breakpoints: {
//       "0": {
//         slidesPerView: 1,

//       },
    
//       "768": {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//       "1020": {
//         slidesPerView: 3,
        
//       },
//     },
// });
  

