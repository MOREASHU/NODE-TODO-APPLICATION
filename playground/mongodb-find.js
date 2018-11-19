const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
   if(err) {
       return console.log("unable to connect to mongodb server");
   }
   console.log("Connected to MongoDB Server");
   const db =  client.db('TodoApp');

   db.collection('Todos').find({
      _id: new ObjectId('5bd4bf71d76c131ca8f67e7f')
    }).toArray().then((docs) => {
       console.log(JSON.stringify(docs,undefined,2));
   },(err) =>{
     console.log("uaable to fetch the data",err);
   });
});

