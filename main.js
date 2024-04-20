const feature = document.querySelectorAll(".main-nav > li");
const mainUl = document.querySelector(".main-nav");
const burgerIcon = document.querySelector(".icon-burger img");
const closeIcon = document.querySelector(".main-nav > img");
console.log(closeIcon);
let ulOne = feature[0].children[1];
let ulTwo = feature[1].children[1];

feature[0].children[0].addEventListener('click', () => {
    ulOne.classList.toggle('show');
    if (!ulOne.classList.contains('show')) {
        feature[0].children[0].children[0].src = "./images/icon-arrow-down.svg"
    } else {
        feature[0].children[0].children[0].src = "./images/icon-arrow-up.svg"
    }
});

feature[1].children[0].addEventListener('click', () => {
    ulTwo.classList.toggle('show');
    if (!ulTwo.classList.contains('show')) {
        feature[1].children[0].children[0].src = "./images/icon-arrow-down.svg"
    } else {
        feature[1].children[0].children[0].src = "./images/icon-arrow-up.svg"
    }
});

burgerIcon.addEventListener('click', () => {
    mainUl.classList.add("main-nav-mobile");
    document.body.classList.add("overlay");
})

closeIcon.addEventListener('click', () => {
    mainUl.classList.remove("main-nav-mobile");
})

document.addEventListener('click', (e) => {
    if (e.target.tagName != 'A') {
        ulOne.classList.remove('show');
        ulTwo.classList.remove('show');
        feature[0].children[0].children[0].src = "./images/icon-arrow-down.svg"
        feature[1].children[0].children[0].src = "./images/icon-arrow-down.svg"
    }
});

