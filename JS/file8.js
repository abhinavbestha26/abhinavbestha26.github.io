//Objects  
// const student = {
//     name:"abhi",
//     age:21,
// }
// console.log(student)
// console.log(student.name)
// console.log(student["name"])
// student.city = "HYD"
// console.log(student)
// delete student.age
// console.log(student)


// const keys  = Object.keys(student)
// console.log(keys)
// const value  = Object.values(student)
// console.log(value)


//********* */
const cart = {
    1:2,
    3:2,
    5:1,
}
const items = Object.keys(cart).length // obj.keys == array // array.lemgth = method
console.log(items)
cart[3] = 99
console.log(cart)
cart[3] = cart[3] +1
console.log(cart)