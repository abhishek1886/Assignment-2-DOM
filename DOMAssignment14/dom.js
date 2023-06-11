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
    li.id=email.value;
    li.appendChild(document.createTextNode(`${name.value} : ${email.value} : ${number.value}`));

    list.appendChild(li);

    // create delete button
    let deleteButton = document.createElement('button');
    deleteButton.id='deleteId';
    deleteButton.className = 'deleteClass'
    deleteButton.appendChild(document.createTextNode('Delete'));

    //create edit button
    let editButton = document.createElement('button');
    editButton.id = 'editId';
    editButton.className = 'editClass';
    editButton.appendChild(document.createTextNode('Edit'));

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    

    //storing data in local storage
    let thisObj = {
        name: name.value,
        email: email.value,
        number: number.value
    }

    //object to string
    thisObj_string = JSON.stringify(thisObj);

    localStorage.setItem(email.value, thisObj_string);

    //reset the input variables

}

//event trigger
list.addEventListener('click', checkItem);


// check what action we wanna perform
function checkItem(e) {
    //delete
    if(e.target.classList.contains('deleteClass')){
        let li = e.target.parentElement;

        // removing from local storage
        let key = li.id; //key is stored as id of each list element
        localStorage.removeItem(key);

        //remove it from the list
        list.removeChild(li);

    }
    //edit
    else if(e.target.classList.contains('editClass')){
        let li = e.target.parentElement;

        // get the key stored in id of li
        let key = li.id;

        //parse it from string to object to access the data
        let parsedData = JSON.parse(localStorage.getItem(key));

        //set the value of list in input boxes
        name.value = parsedData.name;
        email.value = parsedData.email;
        number.value = parsedData.number;

        //delete it from local storage
        localStorage.removeItem(key);

        //delete it from the list
        list.removeChild(li);

    }
    
}
