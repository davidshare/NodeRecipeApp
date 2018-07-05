import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import consolidate from 'consolidate';
import dust from 'dustjs-helpers';
import pg from 'pg';


let app = express();

//Create DB connection string
//postgres://username:password@localhost/database;
let conn = "postgres://knowshare:gemshare@localhost/recipebookdb";

//assign Dust Engine to .dust files
app.engine('dust', consolidate.dust);

//Set default extension to .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//set public filder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res)=>{
	res.render('index');
});

app.listen(3000, ()=>{
	console.log('Server started on port 3000');
});