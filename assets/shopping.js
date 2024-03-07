// create variables needed first
const  list = document.querySelector('ul');

const inputBox = document.querySelector('input');

const  addButton = document.querySelector('button');


function addProduct(){
    let product;
product.textContent = '';
}

addButton.addEventListener('click',addProduct);

const listItem= document.createElement('li');

const span = document.createElement('span');

const delButton = document.createElement('button');

function removeProduct(){
    product.textContent = '';
    inputBox.focus(focus);
}

list.appendChild(span);
list.appendChild(delButton);

span.textContent = product;
delButton.textContent = 'delete';

list.appendChild(listItem);

delButton.addEventListener('click',removeProduct);


