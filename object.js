var student = {
    name: "Rony", 
    age: 25, 
    height: "5 feet 8 inch", 
    food: "Beriany", 
}

var mobile = {
    brand: "Samsung", 
    camera: "4MP", 
    price: 1000, 
    color: "blue"
}

var computer = {
    brand: "Lenovo", 
    color: "black", 
    price: 100000, 
    processor: 'i7', 
}

console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(typeof mobile); 
console.log(computer.brand); 
computer.brand = "Asus"; 
console.log(computer.brand);