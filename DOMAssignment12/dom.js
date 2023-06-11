let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let sub = document.getElementById('submit');
let list = document.getElementById('list');

//Submit event
sub.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //create an li element to store the data
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value} : ${number.value}`));

    list.appendChild(li);

    //storing data in local storage
    let thisObj = {
        name: name.value,
        email: email.value,
        number: number.value
    }

    //object to string
    thisObj_string = JSON.stringify(thisObj);

    localStorage.setItem(email.value, thisObj_string);
}