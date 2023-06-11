var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter')

// Submit form event
form.addEventListener('submit', addItem);
// Delete node
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

//Adding edit buttons
const items=document.getElementsByTagName('li');
Array.from(items).forEach(function(item){
    //create new element
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-primary btn-sm float-right mr-1 edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    item.appendChild(editBtn);
});

//add item
function addItem(e) {
    e.preventDefault();

    // get the entered values
    var itemNum=document.getElementById('item').value;
    var itemDes=document.getElementById('description').value;

    //create new li
    const lis=document.createElement('li');
    lis.className='list-group-item';
    
    // add the values of input
    lis.appendChild(document.createTextNode(itemNum + ' ' + itemDes));

    //create delete button
    var deletebutton=document.createElement('button');
    deletebutton.className='btn btn-danger btn-sm float-right delete';
    deletebutton.appendChild(document.createTextNode('X'));

    //create edit button
    var editButton=document.createElement('button');
    editButton.className='btn btn-primary btn-sm float-right mr-1 edit';
    editButton.appendChild(document.createTextNode('Edit'));

    lis.appendChild(deletebutton);
    lis.appendChild(editButton)
    

    //append li to itemlist
    itemList.appendChild(lis);
    
}

// Remove event
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
        
}

//filter items
function filterItems(e) {
    //convert input to lowercase
    var text=e.target.value.toLowerCase();
    //get li
    var items=document.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemText=item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}
