const shoppingList = [
    'pasta',
    'prosciutto',
    'provola',
    'uova',
    'CocaCola',
    'tritato',
    'latte',
    'spezie',
    'pane'
];
const length = shoppingList.length;
let i=0;

let listItem = '';

while(i<length){
    console.log(shoppingList[i]);
    listItem += `<li>${shoppingList[i]}</li>`
    i++;
}
const list = document.querySelector('ul');
list.innerHTML += listItem;