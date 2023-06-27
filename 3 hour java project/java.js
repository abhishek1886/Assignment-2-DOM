let expense = document.getElementById('amount');
let description = document.getElementById('description');
let typeOfExpense = document.getElementById('typeOfExpense');
let sub = document.getElementById('submit');
let list = document.getElementById('items');

//submit event
sub.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //create an li to store the data
    let li = document.createElement('li');
    li.id=expense.value;
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`Expense: ${expense.value} Description: ${description.value} type: ${typeOfExpense.value}`));

    list.appendChild(li);

    //create delete button
    deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    //create edit button
    editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success btn-sm float-end me-1 edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);

    //storing data in local sotrage
    let thisObj = {
        totalExpense : expense.value,
        descrip : description.value,
        type : typeOfExpense.value,
    }

    //object to string to store into local storage
    const thisObj_string = JSON.stringify(thisObj);

    //storing the data in local storage using the expense value as key for easy access later on
    localStorage.setItem(expense.value, thisObj_string);

}

//event trigger to either delete or edit the value
list.addEventListener('click', checkItem);

//check what action to perform
function checkItem(e) {
    //delete
    if(e.target.classList.contains('delete')) {
        console.log('delte');
        let li = e.target.parentElement;

        //removing from local storage
        let key = li.id; //we are storing the key in the id of each list item
        localStorage.removeItem(key);

        //remove item from list
        list.removeChild(li);
    }
    //edit
    else if(e.target.classList.contains('edit')) {
        let li = e.target.parentElement;

        //get the key stored in id of li
        const key = li.id;

        //parse the data from the local storage to edit them
        const parsedData = JSON.parse(localStorage.getItem(key));

        //set the value of the list in the input boxes
        expense.value = parsedData.totalExpense;
        description.value = parsedData.descrip;
        typeOfExpense.value = parsedData.type;

        //remove it from the local storage
        localStorage.removeItem(key);

        //remove from the list
        list.removeChild(li);

    }
}