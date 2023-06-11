// TRAVERSING THE DOM //

const itemList=document.querySelector('#items');

//  parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//  parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='red';
// console.log(itemList.parentElement.parentElement.parentElement);

//  childNode

// // console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.color='blue';

// FirstChild

// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello world!';

//  lastChild

// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello world!';

// // nextElementSibling

// console.log(itemList.nextElementSibling);

// // previousSibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';

// createElement

const newDiv=document.createElement('div');

// Add class
newDiv.className='hello';

// Add id
newDiv.id='hello1';

// Add attribute
newDiv.setAttribute('title', 'hello div');

// Create text node
const newDivText=document.createTextNode('Hello World!');

// Add text/node to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

// Inserting before item1

const newElement=document.createElement('li');
newElement.className='list-group-items';
// newElement.id='newItem1';

var newNodeforNewElement=document.createTextNode('Hello World!');
newElement.appendChild(newNodeforNewElement);

// console.log(newElement);
// console.log(document.querySelector('li:first-child'));

var itemsElement = document.querySelector('.list-group');
var item1Element = document.querySelector('.list-group-item:nth-of-type(1)');

itemsElement.insertBefore(newElement, item1Element);
