// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
      return console.log("unable to connect Mongodb server");
  }
  console.log("Connected to MongoDB Server");
  const db =  client.db('TodoApp');

db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
   console.log(result);
  })

db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
    console.log(result);
   })  

db.collection('Todos').findOneAnddelete({text : 'Eat lunch'}).then((result) => {
    console.log(result);
   })  
   
});

