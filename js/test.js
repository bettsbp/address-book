var pdx = { name: "Portland" };
var sfo = { name: "San Francisco" };
var sea = { name: "Seattle" };
var cso = { name: "Aktau" };
var dzn = { name: "Zhezkazgan" };

var usa = { name: "United States of America", cities: [pdx, sfo, sea] };
var kazakhstan = { name: "Kazakhstan", cities: [cso, dzn] };
var uruguay = { name: "Uruguay", cities: [] };

usa.cities.forEach(function(city) {
  console.log("Let's go to " + city.name + "!");
});
var mlz = { name: "Melo" };
uruguay.cities.push(mlz);

uruguay.cities.forEach(function(city) {
  console.log("Let's go to " + city.name + " " + uruguay.name + "!");
});
//-----------------------------
var tomatoes = { name: "Tomatoes", price: 2.99 };
var cucumbers = { name: "Cucumbers", price: 0.99 };
var onions = { name: "Onions", price: 0.79 };

var groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

var iPhone = { name: "iPhone", price: 699 };
var android = { name: "Android", price: 499 };
var windowsPhone = { name: "Windows Phone", price: 399 };

var phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

var stores = [groceryStore, phoneStore];

stores.forEach(function(store) {
  console.log(store.name + " sells:");
  store.products.forEach(function(product) {
    console.log(product.name);
  });
  console.log("\n");
});
