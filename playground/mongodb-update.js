// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
      return console.log("unable to connect Mongodb server");
  }
  console.log("Connected to MongoDB Server");
  const db =  client.db('TodoApp');
  
db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bedc486f162db11a42821b6')
},{
    $set: {
        completed : true
    }
 }, {
  returnOriginal : false
}).then((result) => {
  console.log(result);
});  
});

