// create variables needed first
const  list = document.querySelector('ul');

const inputBox = document.querySelector('input');

const  addButton = document.querySelector('button');


function addProduct(){
    const  product = inputBox.value;
    inputBox.value = '';


const listItem= document.createElement('li');

const listText = document.createElement('span');

const listButton = document.createElement('button');



listItem.appendChild(listText);

list.appendChild(listButton);

listText.textContent = product;

listItem.appendChild(listButton);

listButton.textContent = 'delete';

list.appendChild(listItem);

listButton.addEventListener('click',removeProduct);

function removeProduct(){
    list.removeChild(listItem);

    
};

inputBox.focus();
}



addButton.addEventListener('click',addProduct);


