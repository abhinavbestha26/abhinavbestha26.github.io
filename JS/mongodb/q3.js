debugger.employees.find()
debugger.employees.skip(1)
db.employees.find().limit(1)
db.employees.find({sub:"pilla"})
db.employees.find({age:{$gt:50}},{_id:0,name:1,sub:1})
