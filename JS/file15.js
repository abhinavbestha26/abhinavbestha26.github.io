//json      
const student = '{ "name":"Abhinav" , "age":21}'        //from serevr we recive data in json format .. we convert into strnig  
const obj = JSON.parse(student)             //converted string into JSON format(in api data moves in json format) 
console.log(obj)
console.log(JSON.stringify(obj))    //converted From json format to string   
