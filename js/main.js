const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// VARIABILI
const itemsCont = document.querySelector(".items")
const thumbsCont = document.querySelector(".thumbs")
let item = "";
let thumb = "";

// STO ANDANDO A CREARE UN CICLO IN MODO TALE CHE MI CREA I DIV PER L'HTML
for (let i = 0; i < items.length; i++) {
    item += `
    <div class="item">
        <img src="${items[i]}" alt="01">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;

    thumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="01">
    </div>
    `
}

// STO AGGIUNGENDO LA CLASSE ACTIVE PER VISUALIZZARE SU HTML
itemsCont.innerHTML = item;
document.getElementsByClassName("item")[0].classList.add("active");

thumbsCont.innerHTML += thumb;
document.getElementsByClassName("thumb")[0].classList.add("active");

// PER GESTIRE IL CLICK CREO UNA VARIABILE
let activePosition = 0;

// CREO UN EVENTO SUL PULSANTE FRECCIETTA SOTTO
const down = document.querySelector(".next");
down.addEventListener('click',
    function(){
        activePosition = activePosition + 1;
        

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");

    }
);
