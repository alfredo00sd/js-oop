//Js OOP app
//alert("Hey");

class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//interact with the html
class UI{

    addProducts(product){
        const productList = document.getElementById('products-list');
        const element = document.createElement('div');
        
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <a name="delete" href="#" class="btn btn-danger">Delete</a>
            </div>
        </div> 
        `;

        productList.appendChild(element);
        this.clearForm();
    }

    clearForm(){
        document.getElementById('product-form').reset();
    }

    deleteProducts(element){
        if(element.name == 'delete'){
            console.log(element.parentElement.parentElement.remove());
        }
    }

    //TODO
    showMsj(msj, cssClass){
        

    }
}

//DOM EVENTS
//Submit form event
document.getElementById('product-form').addEventListener('submit', function(e){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;
   //console.log(name, price, year);

   const product = new Product(name,price,year);
   const ui = new UI();

   ui.addProducts(product);
   //ui.clearForm();

    //prevent the default reloadin of the form
    e.preventDefault();
});

//event delete 
document.getElementById('products-list').addEventListener('click', function(e){
    //console.log(e.target);
    const ui = new UI();

    ui.deleteProducts(e.target);
});


