var express = require('express');
var app = express();
var readline = require('readline');
var readlineSync = require('readline-sync');

let a = readlineSync.question('What is the price of your first item? ');
let b = readlineSync.question('What is the price of your second item? ');
let zero = 0;
let add = a + b;
let subtract = a - b;
let double = a * 2;

if (readlineSync.keyInYN('Do you want to clear your cart? ')) {
app.get('/zero', function(req, res){
  res.send(zero);
  return zero;
});
} else if(readlineSync.keyInYN('Do you want to checkout? ')) {
app.get('/add', function(req, res){
  res.send(a + b);
  return add;
});
} else if(readlineSync.keyInYN('Do you want to remove your last item? ')) {
app.get('/subtract', function(req, res){
  res.send(subtract);
  return subtract;
});
} else if(readlineSync.keyInYN('Do you want one more of the same item? ')) {
app.get('/double', function(req, res){
  res.send(double);
  return double;
});
}
