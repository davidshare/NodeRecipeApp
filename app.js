import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import consolidate from 'consolidate';
import dust from 'dustjs-helpers';
import pg from 'pg';


let app = express();

app.get('/', (req, res)=>{
	res.send('I got you now');
});

app.listen(3000, ()=>{
	console.log('Server started on port 3000');
});