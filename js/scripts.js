var orderNum = 0
var type = new Array["plain", "supreme", "meat lovers"]
function PizzaOrder(orderName, orderId, type, Price) {
  this.orderName = orderName;
  this.orderId = orderId
  this.orderNum = orderNum;
  this.type = type;
  this.price = Price;
}

PizzaOrder.prototype.give = function(type, orderName){
  orderTag = orderNum + 1;

  if(type === "plain"){
    price = 10
  }
  else if(type === "supreme"){
    price = 18
  }
  else() {
    price === 25
  }
}
console.log(pizzaOrder.prototype.give)
