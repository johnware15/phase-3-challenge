export default class Database
import load-data from 'load-data'

const allItems = database.any('SELECT * FROM grocery')
allItems.then(grocery => {
assert.deepEqual(allItems.length, 42)
console.log(allItems);
}).catch(error => {
console.log('No items available', error);
});

const itemsInSection = database.query('SELECT id, name FROM grocery GROUP BY section')
itemsInSection.then(grocery => {
console.log(itemsInSection);
});

const cheapItems = database.query('SELECT id, price FROM grocery WHERE price < 10 ORDER BY price')
cheapItems.then(grocery => {
console.log(cheapItems);
});

const countItemsInSection = database.query('SELECT name, COUNT(*) FROM grocery GROUP BY section')
countItemsInSection.then(grocery => {
console.log(countItemsInSection);
});

const mostRecentOrders = database.query('SELECT id, order_date FROM grocery_store ORDER BY order_date')
mostRecentOrders.then(grocery => {
console.log(mostRecentOrders);
});

const lastShopperName = database.query('SELECT shopper_lastname FROM grocery ORDER BY order_date AND GROUP BY shopper_name')
lastShopperName.then(grocery => {
console.log(lastShopperName);
});

const orderTotal = database.query('SELECT price, SUM(*) FROM grocery GROUP BY id_order ORDER BY id')
orderTotal.then(grocery => {
console.log(orderTotal);
});
