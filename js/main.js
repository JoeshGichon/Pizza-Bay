// backend logic/business logic
// Order data collection

function Order (size,crust,topping,number,acquisition){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number = number;
    this.acquisition = acquisition;
}
  
var sizePrice = {
    small : 600,
    medium : 800,
    large : 1000,
    extraLarge : 1400,
};
  
var crustPrice = {
    cheeseStuffed : 200,
    flatBread : 200,
    thin : 100,
    glutenFree : 340,
};
  
var toppingPrice = {
    chicken : 200,
    Veggie : 300,
    pepperoni : 400,
    Meat: 500,
};

let totalPrice = function(size,crust,topping,number) {
    return (size + crust + topping)*number;
}

String.prototype.addSign = function () {
    return "Ksh." + this;
}

//user interface
$(document).ready(function(){
$("form#ordered").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("#pizza-size").val();
    var pizzaCrust = $("#pizza-crust").val();
    var pizzaTopping = $("#pizza-topping").val();
    var numberOrdered = parseInt($("#number-of-pizza").val());
    var acquisitionMethod = $("#acquisition-method").val();

    var orderMade = new Order (pizzaSize,pizzaCrust,pizzaTopping,numberOrdered,acquisitionMethod);

    var price = totalPrice(sizePrice[orderMade.size],crustPrice[orderMade.crust],toppingPrice[orderMade.topping],orderMade.number);

    $("#total-charge").text(price.toString().addSign());

    $("#output").append("<tr>" + "<td>" + orderMade.size + "</td>" + 
                        "<td>" + orderMade.crust + "</td>" +  
                        "<td>" + orderMade.topping + "</td>" +  
                        "<td>" + orderMade.number + "</td>" + 
                        "</tr>");

    resetFields();
    
    if (orderMade.acquisition === "delivered") {
    var location = prompt("Input delivery location.ie estate/street,County");
    alert ("Your order will be delivered to your location.");
    } else {
    return false;
    }

    
    resetFields();

});

function resetFields () {
    $("#pizza-size").val("");
    $("#pizza-crust").val("");
    $("#pizza-topping").val("");
    $("#number-of-pizza").val("");
    $("#acquisition-method").val("");
}

});

