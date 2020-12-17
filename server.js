const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://todo:todo123@cluster-1.00leg.mongodb.net/todo?retryWrites=true&w=majority';

app.set('view engine', 'ejs');

	
console.log('connecting to Database..');

MongoClient.connect(connectionString, {useUnifiedTopology: true})
	.then(client => {
		console.log('Connected to Database');
		const db = client.db('todo');
		const todoCollection = db.collection('todo-list');


		// All handlers goin here 
		// app.use();
		app.get('/', (req,res) => {
			db.collection('todo-list').find().toArray()
			  .then(todo => {
				console.log(todo); 
				res.render('index.ejs', {todo: todo}) 	
			  })
			  .catch(error => console.error(error))	;

		});

		app.post('/todo', (req, res) => {
		  todoCollection.insertOne(req.body)
		    .then(result => {
		      res.redirect('/');
		    })
		    .catch(error => console.error(error))
		})
		app.listen();
	})
	.catch(error => console.log(error));

// Always place body parser before CRUD handlers!!
app.use(bodyParser.urlencoded({extended: true}));





app.listen(3000, function(){
	console.log('listening to port 3000');
})
