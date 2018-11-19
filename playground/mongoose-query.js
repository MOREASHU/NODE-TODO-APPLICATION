const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bf2a495e13b840ae8783f9d11';

if(!ObjectID.isValid(id)) {
    console.log('ID not vaild');
}

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todos) => {
//     console.log('Todos one',todos);
// });

Todo.findById(id).then((todos) => {
    if(!todos){
        return console.log('Id not found');
    }
    console.log('Todos id',todos);
}).catch((e) => console.log(e));


