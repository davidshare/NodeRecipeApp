import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import consolidate from 'consolidate';
import dust from 'dustjs-helpers';
import {Client} from 'pg';


let app = express();

//Create DB connection string
//postgres://username:password@localhost/database;
// let conn = "postgresql://knowshare:gemshare@localhost:46713/recipebookdb";
const client = new Client({
	user: 'Knowshare',
	host: 'localhost',
	database: 'recipebookdb',
	password: 'gemshare',
	port: 3005
});
client.connect();

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
	console.log('i got here');
	client.query('SELECT * from recipes', (dbErr, dbRes)=>{
		if(dbErr){
			console.log(dbErr);
		}else{
			res.render('index', {recipes: dbRes.rows});
		}
		client.end();
	});
});

app.listen(3000, ()=>{
	console.log('Server started on port 3000');
});