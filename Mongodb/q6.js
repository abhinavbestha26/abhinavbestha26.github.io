db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {
    
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    },
  },
  {$unwind: "$orders"},
  {$project: {name: 1}}
])

db.empcountry.insertMany([
    {empId:ObjectId('685bc6472ea2ee394d748a66'), country: "AP"},
    {empId:ObjectId('685bc6cc2ea2ee394d748a68'), country: "TG"},
    {empId:ObjectId('685bc6cc2ea2ee394d748a69'), country: "KA"},
    {empId:ObjectId('685bca932ea2ee394d748a6a'), country: "BR"},
    {empId:ObjectId('685bcf24c0a6a4afca20240c'), country: "PJ"},
])
db.employees.aggregate([
    {$lookup:{
        from: "empcountry",
        localField: "_id",
        foreignField: "empId",
        as: "country"
    }},
    {$lookup:{
        from: "orders",
        localField: "_id",
        foreignField: "empId",
        as: "order"
    }}
    
])



