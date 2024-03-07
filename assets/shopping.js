const input = document.querySelector('input');

const list = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', buttonClick )

let inputText = '';


function buttonClick (){
let inputText;
}
 
 const listItem = document.createElement('li');

 const span = document.createElement('span');

 const delButton = document.createElement('button');

 list.appendChild(span);

 list.appendChild(delButton);

 span.textContent = '';

 delButton.textContent = 'delete';

 list.appendChild(listItem);

 function deleteItem(){
    list = '';
 }

 delButton.addEventListener('click' ,deleteItem);
