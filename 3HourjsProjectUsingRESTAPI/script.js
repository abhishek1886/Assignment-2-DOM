let productPrice = document.getElementById('productPrice');
let productName = document.getElementById('productName');
let sub = document.getElementById('submit');
let list = document.getElementById('products');
let totalAmount = document.getElementById('totalAmount');

let total = 0;

//submit event
sub.addEventListener('click', onSubmit);

//adding products
function onSubmit(e) {
    e.preventDefault();

    //create an object of data
    let obj = {
        price: productPrice.value,
        name: productName.value
    }

    let productData;
    //passing data in crud crud
    axios.post('https://crudcrud.com/api/4cc318b9b2db499287a256a34abc0f29/products', obj)
        .then((res) => {
            showProudctsOnScreen(res.data);
        })
        .catch((err) => console.log(err));
    


}

//show the products on screen
function showProudctsOnScreen(obj) {
    //create a list of products
    let li = document.createElement('li');
    li.id = obj._id;
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`${productPrice.value} - ${productName.value}`));

    

    //create a delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete Product'));
    li.appendChild(deleteBtn);

    //add it to the list
    list.appendChild(li);

    showTotalAmount(obj);
}

//display total amount
function showTotalAmount(obj) {
    let amount = parseFloat(obj.price);
    total += amount;
    totalAmount.textContent = `Rs. ${total}`;
}

//to delete a product
list.addEventListener('click', delProduct);

async function delProduct(e) {
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;

        //get the crud crud id of the product stored in id
        const id = li.id;
        let amount;
        await axios.get(`https://crudcrud.com/api/4cc318b9b2db499287a256a34abc0f29/products/${id}`)
            .then((res) => amount=res.data.price)
            .catch((err) => console.log(err));

        //delete from crud crud database
        axios.delete(`https://crudcrud.com/api/4cc318b9b2db499287a256a34abc0f29/products/${id}`).catch(err => console.log(err));

        //delete from the list
        list.removeChild(li);

        total -= amount;
        totalAmount.textContent = `Rs. ${total}`;

    }
}