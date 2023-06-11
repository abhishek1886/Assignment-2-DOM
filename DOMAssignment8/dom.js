var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);



// Add item
function addItem(e) {
    e.preventDefault();

    // get input value
    const newItem=document.getElementById('item').value;

    // create a new li element
    const li=document.createElement('li');
    li.className='list-group-item';

    // add text node with input vlue
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    var deleteButton=document.createElement('button');
    deleteButton.className='btn btn-danger btn-sm float-right delete';
    // add text node 
    deleteButton.appendChild(document.createTextNode('X'));

    //create an edit button element
    var editButton=document.createElement('button');
    editButton.className='btn btn-primary btn-sm float-right mr-1 edit';
    editButton.appendChild(document.createTextNode('Edit'));

    //Append delete and edit button to li
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    //append li to itemlist
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

// Filter items
function filterItems(e) {
    //covert text to lowercase
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemList.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
        
    });

}

// Add edit buttons to existing li
var items = document.getElementsByTagName('li');

Array.from(items).forEach(function(item){
    
    var editButton=document.createElement('button');
    editButton.className='btn btn-primary btn-sm float-right mr-1 edit';
    editButton.appendChild(document.createTextNode('Edit'));

    item.appendChild(editButton);
});