(function ciclo(){

let contenedor = document.getElementById('contenedor');

let row = document.createElement('div');
row.classList.add('row');
row.classList.add('mt-4')
contenedor.appendChild(row);

let col = document.createElement('div');
col.classList.add('col-md-3');
row.appendChild(col);

let card = document.createElement('div');
card.classList.add('card')
col.appendChild(card);

let img = document.createElement('img');
img.setAttribute('src', 'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=ais');
img.classList.add('img-fluid');
card.appendChild(img);

let card_body = document.createElement('div');
card_body.classList.add('card-body')
card.appendChild(card_body);

let titulo = document.createElement('h1');
titulo.innerText = 'Titulo Carta';
card_body.appendChild(titulo);


let parrafo = document.createElement('p');
parrafo.innerText = 'informacion de la carta jajajajajajaja';
card_body.appendChild(parrafo)


let boton = document.createElement('button');
boton.classList.add('btn');
boton.classList.add('btn-danger');
boton.innerText = 'comprar';
card_body.appendChild(boton);





}) ();

let text = [
    
];

text.forEach(function(valor){

})


