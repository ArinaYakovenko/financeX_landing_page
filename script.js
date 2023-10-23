let menu1 = document.querySelector('.menu1');
let menu2 = document.querySelector('.menu2');
let menu3 = document.querySelector('.menu3');
let menu4 = document.querySelector('.menu4');
let signUp = document.querySelector('.sign-up');
let servicesBlock = document.querySelectorAll('.services-block');
let globalpayBlock = document.querySelectorAll('.globalpay-block');

let reviews = document.querySelector('.reviews');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

left.addEventListener('click', () => {
    reviews.scrollTo({
        left: -100,
        behavior: 'smooth'
    })
})
right.addEventListener('click', () => {
    reviews.scrollTo({
        left: 500,
        behavior: 'smooth'
    })
})

let services = document.querySelector('.services');
let benefits = document.querySelector('.benefits');
let transaction = document.querySelector('.transaction');
let businesses = document.querySelector('.businesses');
let footer = document.querySelector('footer');

menu1.addEventListener('click', () => {
    services.scrollIntoView({ behavior: 'smooth' });
})
menu2.addEventListener('click', () => {
    benefits.scrollIntoView({ behavior: 'smooth' });
})
menu3.addEventListener('click', () => {
    transaction.scrollIntoView({ behavior: 'smooth' });
})
menu4.addEventListener('click', () => {
    businesses.scrollIntoView({ behavior: 'smooth' });
})
signUp.addEventListener('click', () => {
    footer.scrollIntoView({ behavior: 'smooth' });
})

servicesBlock.forEach(ser => {
    ser.addEventListener('click', () => {
        deleteActiveClass();
        ser.classList.add('services-active');
    })
})

function deleteActiveClass(){
    servicesBlock.forEach(ser => {
        ser.classList.remove('services-active')
    })
}

globalpayBlock.forEach(glob => {
    glob.addEventListener('click', () => {
        deleteActiveGlob();
        glob.classList.add('active');
    })
})

function deleteActiveGlob(){
    globalpayBlock.forEach(glob => {
        glob.classList.remove('active')
    })
}