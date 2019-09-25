//Js OOP app
//alert("Hey");

//Class to model the Product object
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Class ui to interact with the html of the app
class UI{

    /**
     * @param {product} product 
     */
    addProducts(product){
        //holds the product-list 
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        
        //Insert a card with the product data in the html div created
        element.innerHTML = `
        <div class="card text-center mb-2">
            <div class="card-body">
                <strong>Product name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <a name="delete" href="#" class="btn btn-danger">Delete</a>
            </div>
        </div> 
        `;
        //add the element (product card) to the list and reset the form
        productList.appendChild(element);
        this.clearForm();

    }

    clearForm(){
        //reset the product form
        document.getElementById('product-form').reset();
    }

    deleteProducts(element){
        if(element.name == 'delete'){
            console.log(element.parentElement.parentElement.remove());
        }
    }

    //TODO
    showMsj(msj, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(msj));
        //showing the msj in the dom.
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

/*
DOM EVENTS
*/
//Submit form event
document.getElementById('product-form').addEventListener('submit', function(e){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;
   //console.log(name, price, year);

   const product = new Product(name,price,year);
   const ui = new UI();

   if(name == '' | price == ''){
       return ui.showMsj("Completa los campos, por favor",'info');
   }
    ui.addProducts(product);
    //ui.clearForm();
    ui.showMsj("Product added!", 'success'); 

    //prevent the default reloadin of the form
    e.preventDefault();
});

//event delete 
document.getElementById('product-list').addEventListener('click', function(e){
    //console.log(e.target);
    const ui = new UI();
    ui.showMsj("Product deleted!", 'danger');

    ui.deleteProducts(e.target);
});


