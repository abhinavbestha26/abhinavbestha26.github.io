db.employees.find({name:{$regex:"a"}})  //server??
db.employees.find({name:{$regex:"Avinash"}})
db.employees.find({name:{$regex:"Aviash",$options:"i"}})
db.employees.find({name:{$regex:"^M",$options:"k"}})
db.employees.find({name:{$regex:"a$",$options:"k"}})


