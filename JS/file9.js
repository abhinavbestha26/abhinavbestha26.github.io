//Arrays

// const score = [1,2,3,4,5,6,8];
// console.log(score)
// score.push(88)
// console.log(score)
// console.log(score.length)



// const score1 = [24,56,6,3]
// const newscore = [...score1,7777]
// console.log(newscore)

// const cart = {
//     1:2,
//     3:6,
//     7:9,
// };
// const newcart = ({...cart, 10:10,55:4}) //... = this is an spread operator which stores the previous valuess
// console.log(newcart)
let cart = {};
const products = [
    {id:1, name:"santoor", price:32},
    {id:2, name:"Lux", price:45},
    {id:3, name:"Dove", price:67},
]
// console.log(products[0])
// const newproduct  = [...products,{id:4,name:"mysoor sandle",price:50}]
function addtocart(id){
    cart = { ...cart,[id]:1}; // we used [id] to assign the value to property name
}
addtocart(1)
addtocart(6)
console.log(cart)
