const li=document.querySelector('li:nth-child(2)');
li.style.color='green';

const odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}