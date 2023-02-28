// array vs object 
var friendsAge = [ 22, 25, 31, 27, 44, 47 ];
var myFriends = {
    sahil : 22, 
    sabbir: 25, 
    galib: 31, 
    robi: 27, 
    boby: 44, 
    nevy: 47,
}

var shoppingCart = ['mouse', 'keyboard', 'soundbox', 'book', 'watch', 'mobile', 'bottle'];
var shoppingCart = {
    mouse: 10, 
    keyboard: 5, 
    soundbox: 3,
    book: 2, 
    watch: 1, 
    mobile: 11,
}

var keys = Object.keys(shoppingCart);
console.log(keys);
var values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'mouse', 'keyboard', 'soundbox', 'book', 'watch', 'mobile' ]
for(var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var values = shoppingCart[propertyName];
    // console.log(propertyName, values);
}

// for in loop
for(var propertyName in shoppingCart) {
    var values = shoppingCart[propertyName];
    console.log(propertyName, values);
}
