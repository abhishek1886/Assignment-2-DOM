let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let sub = document.getElementById('submit');
let list = document.getElementById('list');

//refresh event
document.addEventListener('DOMContentLoaded', loadPage);

//Loading the page
async function loadPage() {
    let previousData;
    let route = localStorage.getItem('key');
    console.log(route);
    if(route){
        await axios.get(route)
        .then((res) => (previousData=res.data))
        .catch((err) => console.log(err));
        for(let data of previousData){
            showOutputOnScreen(data);
        }
    }
}

//Submit event
sub.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //storing data in local storage
    let thisObj = {
        name: name.value,
        email: email.value,
        number: number.value
    }


    //passing the data in crudcrud
    axios.post("https://crudcrud.com/api/17f6a2a9831a452a843ddbc8c0431388/appointmentData", thisObj)
        .then((res) => showOutputOnScreen(res.data))
        .catch((err) => console.log(err));

    //saving the route once 
    storeRouteOnce("https://crudcrud.com/api/17f6a2a9831a452a843ddbc8c0431388/appointmentData");
}

//storing the route once in local storage
const once = (fn) => {
    let result;

    return (...args) => result || (result = fn(...args))
};

function storeRoute(route) {
    localStorage.setItem('key', route);
}

const storeRouteOnce = once(storeRoute);


//showing the data on screen
function showOutputOnScreen(obj) {
        //create an li element to store the data
        let li = document.createElement('li');
        li.id=obj._id;
        li.appendChild(document.createTextNode(`${obj.name} : ${obj.email} : ${obj.number}`));
    
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
        //remove it from the crud crud data base
        axios.delete(`https://crudcrud.com/api/17f6a2a9831a452a843ddbc8c0431388/appointmentData/${key}`);

        //remove it from the list
        list.removeChild(li);

    }
    //edit
    else if(e.target.classList.contains('editClass')){
        let li = e.target.parentElement;

        // get the key stored in id of li
        let key = li.id;

        editData(key);

        //delete it from the list
        list.removeChild(li);

    } 
    
}

//edit
async function editData(key) {
    try {
        
        //get the data from axios
        let axiosData = await axios.get(`https://crudcrud.com/api/17f6a2a9831a452a843ddbc8c0431388/appointmentData/${key}`)
            .catch(err => console.log(err));

        //set the value of list in input boxes
        name.value = axiosData.data.name;
        email.value = axiosData.data.email;
        number.value = axiosData.data.number;

        //delete it from crud crud
        await axios.delete(`https://crudcrud.com/api/17f6a2a9831a452a843ddbc8c0431388/appointmentData/${key}`).catch(err => console.log(err));

    } catch(err) {
        console.log(err);
      };
}