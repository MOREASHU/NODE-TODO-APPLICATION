// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
      return console.log("unable to connect Mongodb server");
  }
  console.log("Connected to MongoDB Server");
  const db =  client.db('TodoApp');

db.collection('Todos').insertOne({
    text : "something 1",
    completed : false
  }, (err, result) => {
      if(err){
          return console.log(" unable to insert todo",err);
      }
      console.log(JSON.stringify(result.ops,undefined,2));
  });  
});

