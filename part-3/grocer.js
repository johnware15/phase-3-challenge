var express = require('express');
var bodyParser = require('body-parser');

var app = express();

let addToCart
let shoppingCart = []
let item = {itemName, itemPrice}
let itemName = document.getElementByClassName('item-name');
let itemPrice = document.getElementByClassName('item-price');

addToCart() {
  for(i = 0, addToCart.length, i++){
  let addToCart = (document.getElementById('cart-item-count') + 1);
  let shoppingCart = shoppingCart.add(item);
  }
}

cartModal() {
  let cartButton = document.getElementById('cart-button');
  btn.onclick = function {
    modal.style.display = "block";
  }
  close() {
  let span = document.getElementByClassName("close")[0];
  span.onclick = function {
    modal.style.display = "none";
  }
}
  total() {
    app.use(bodyParser.text({ type: 'text/html' }))
    //Got stuck on using body-parser to calculate total
    if(itemName.length > 0) {
      shoppingCart.push(item)
      return shoppingCart
    }
  }

  clear() {
    let clear = document.getElementByClassName("clear")
    shoppingCart.empty();
    shoppingCart.update();
    return shoppingCart
  }
}

exports = module.exports = app
