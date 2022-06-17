describe:function PizzaOrder(orderName, orderId, type, Price)
test: "creat object that can be called on to make a new pizza"
Code:function PizzaOrder(orderName, orderId, type, Price)
  this.orderName = orderName;
  this.orderId = orderId
  this.orderNum = orderNum;
  this.type = type;
  this.price = Price;
}
pizza = new pizzaOrder("mark","seventeen", "supreme", '19.50')
Expected Output: pizza (mark, seventeen, supreme, 19.50)