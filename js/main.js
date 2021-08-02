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
        quantity = $("").val;
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
    $("form").submit(function(event){
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
// -------------------End-----------------------------------