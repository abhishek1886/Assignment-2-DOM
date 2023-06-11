
//console.log(document.getElementById('my-form'));
//onsole.log(document.querySelector('h1'))

//multiple
//console.log(document.querySelectorAll('.item'));   //for a anything fpr id use # for class .
//console.log(document.getElementsByClassName('item'));  //only for class

//const items=document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

//const ul=document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerHTML='<h1>HEADER</h1>';

/*const btn=document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    //document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('#my-form').classList.remove('my-form');
});

const li=document.querySelector('.items');

li.firstElementChild.textContent='HELLO';
li.children[0].style.background='green';

li.children[1].style.color='yellow'; */

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

const btn=document.querySelector('.btn');

btn.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        setTimeout(function resetMsgElement() {
            msg.classList.remove('error');
            msg.innerHTML='';
        }, 3000);
    } 
    else {
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.append(li);

        //storing the data in local storage
        localStorage.setItem(emailInput.value, nameInput.value);

        //clear fields
        nameInput.value='';
        emailInput.value='';
    }
}

btn.addEventListener('mouseover', (e) => {
    console.log('mouseover');
    document.querySelector('#my-form').style.background='#ccc';
    btn.style.background='green';
    
});

btn.addEventListener('mouseout', (e) => {

    console.log('mouseout');
    document.querySelector('#my-form').style.background='#f4f4f4';
    btn.style.background='#333';
});






// localStorage.setItem('name', 'bob');
// console.log(localStorage.getItem('name'));

// sessionStorage.setItem('name', 'John');
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
// console.log(sessionStorage.getItem('name'));

// document.cookie = 'name=kyle; expires=' + new Date(2024, 0, 1).toUTCString()


