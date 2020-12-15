const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Always place body parser before CRUD handlers!!
app.use(bodyParser.urlencoded({extended: true}));



// All handlers
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
	console.log("Hitting todo");
})

app.listen(3000, function(){
	console.log('listening to port 3000');
})
