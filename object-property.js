var shoppingCart = {
    mouse: 15,
    keyboard : 40, 
    soundbox : 90,
    headphone: 50
}
// console.log(shoppingCart);

// 3 ways to access object property
// access with dot notation 
var mouse = shoppingCart.mouse;
console.log(mouse);
console.log(shoppingCart);

//access like array
shoppingCart['mouse'] = 115;
console.log(shoppingCart);

//access with declare a new variable
var objectName = 'mouse';
shoppingCart[objectName] = 215;
console.log(shoppingCart);