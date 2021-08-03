// --------------------------User interface-------------------
function MenuItem(pizzaName,price,quantity){
    this.pizzaName=pizzaName;
    this.price=price;
    this.quantity=quantity
}
var cheesePizza = new MenuItem(
    $(document).ready(function(){
        pizzaName = "cheese pizza";
        price = 1000;
        quantity = $("#cheese-value").val();
        return console.log(`This ${pizzaName} is worth ${price}`);
    })
);
var veggiePizza = new MenuItem(
    $(document).ready(function(){
        pizzaName = "veggie-Pizza";
        price = 1200;
        return console.log(`This ${pizzaName} is worth ${price}`);
    })
);
var chickenPizza = new MenuItem(
    $(document).ready(function(){
        pizzaName = "chicken-pizza";
        price = 1400;
        return console.log(`This ${pizzaName} is worth ${price}`);
    })
);
var pepperoniPizza = new MenuItem(
    $(document).ready(function(){
        pizzaName = "pepperoni-pizza";
        price = 1100;
        return console.log(`This ${pizzaName} is worth ${price}`);
    })
);
var meatPizza = new MenuItem(
    $(document).ready(function(){
        pizzaName = "meat-pizza";
        price = 1500;
        return console.log(`This ${pizzaName} is worth ${price}`);
    })
);

var margheritaPizza = new MenuItem(
    $(document).ready(function(){
        pizzaName = "margherita-pizza";
        price = 2000;
        return console.log(`This ${pizzaName} is worth ${price}`);
    })
);


// ------------------------------End---------------------------


// backend logic/business logic
// forms data collection

$(document).ready(function(){
    $("form#collect").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        // acquiring inputed values
        let firstName = $("#mce-FNAME").val();
        let lastName = $("#mce-LNAME").val();
        let email = $("#mce-EMAIL").val();
        let comments = $("#comments").val();
        
        alert("Thank You" + " " + firstName + " " + lastName + " " + "for reaching you us.")
    });
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';}(jQuery));var $mcj = jQuery.noConflict(true)
});

// menu items form data collection


$(document).ready(function(){
    $("form#cheese-form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        var qnt = $("#cheese-value").val()
        console.log(qnt);
        var prc = $("#cheese-price").change(function(){
            var selectedCheesePizza = $("#cheese-price option:selected")
            var cheesePrice = selectedCheesePizza.val();
            return cheesePrice;
        });
        console.log(prc.val());
        alert(`You have ordered Cheese Pizza worth ${prc.val()*qnt}`);
    });
});

$(document).ready(function(){
    $("form#Veggie-form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        var qnt = $("#Veggie-value").val()
        console.log(qnt);
        var prc = $("#Veggie-price").change(function(){
            var selectedVeggiePizza = $("#Veggie-price option:selected")
            var veggiePrice = selectedCheesePizza.val();
            return veggiePrice;
        });
        console.log(prc.val());
        alert(`You have ordered Veggie Pizza worth ${prc.val()*qnt}`);
    });
});

$(document).ready(function(){
    $("form#Chicken-form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        var qnt = $("#Chicken-value").val()
        console.log(qnt);
        var prc = $("#Chicken-price").change(function(){
            var selectedChickenPizza = $("#Chicken-price option:selected")
            var chickenPrice = selectedChickenPizza.val();
            return chickenPrice;
        });
        console.log(prc.val());
        alert(`You have ordered Chicken Pizza worth ${prc.val()*qnt}`);
    });
});

$(document).ready(function(){
    $("form#Pepperoni-form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        var qnt = $("#Pepperoni-value").val()
        console.log(qnt);
        var prc = $("#Pepperoni-price").change(function(){
            var selectedPepperoniPizza = $("#Pepperoni-price option:selected")
            var pepperoniPrice = selectedPepperoni.val();
            return pepperoniPrice;
        });
        console.log(prc.val());
        alert(`You have ordered Pepperoni Pizza worth ${prc.val()*qnt}`);
    });
});

$(document).ready(function(){
    $("form#Meat-form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        var qnt = $("#Meat-value").val()
        console.log(qnt);
        var prc = $("#Meat-price").change(function(){
            var selectedMeatPizza = $("#Meat-price option:selected")
            var meatPrice = selectedMeatPizza.val();
            return meatPrice;
        });
        console.log(prc.val());
        alert(`You have ordered Meat Pizza worth ${prc.val()*qnt}`);
    });
});

$(document).ready(function(){
    $("form#Margherita-form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();

        var qnt = $("#Margherita-value").val()
        console.log(qnt);
        var prc = $("#Margherita-price").change(function(){
            var selectedMargheritaPizza = $("#Margherita-price option:selected")
            var margheritaPrice = selectedMargheritaPizza.val();
            return margheritaPrice;
        });
        console.log(prc.val());
        alert(`You have ordered Margherita Pizza worth ${prc.val()*qnt}`);
    });
});
// -------------------End-----------------------------------