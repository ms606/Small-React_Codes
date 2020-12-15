const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://todo:todo123@cluster-1.00leg.mongodb.net/todo?retryWrites=true&w=majority';

	
console.log('connecting to Database..');

MongoClient.connect(connectionString, {useUnifiedTopology: true})
	.then(client => {
		console.log('Connected to Database');
		const db = client.db('todo');
		app.use();
		app.get();
		app.post();
		app.listen();
	})
	.catch(error => console.log(error));

// Always place body parser before CRUD handlers!!
app.use(bodyParser.urlencoded({extended: true}));


// All handlers
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/todo', (req, res) => {
	console.log(req.body);
});

app.listen(3000, function(){
	console.log('listening to port 3000');
})
