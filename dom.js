//Examine The DOCUMENT OBJECT//
/*
//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title= 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent='Hello';
console.log(document.forms);
console.log(document.links);
*/

// GETELEMENTBYID

//sole.log(document.getElementById("header-title"));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent="Hell";
// headerTitle.innerText='hell';
//console.log(headerTitle.textContent); //Item Lister 123 (shows 123 even though its style is hidden)
//console.log(headerTitle.innerText);   ///Item Liset (doesnt show 123 as it takes style into considerataion)
//headerTitle.innerHTML='<h3>Hello</h3>'
//header.style.borderBottom='solid 3px #000'

// GETELEMENTSBYCLASSNAME

/* 
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello';
*/

const main=document.getElementById('main-header');
main.style.borderBottom='solid 3px #000'

const formHeader = document.getElementsByClassName('title');
console.log(formHeader);
formHeader[0].style.fontWeight='bold';
formHeader[0].style.background='blue';
