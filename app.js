import express from 'express';

let app = express();

app.get('/', (req, res)=>{
	res.send('I got you now');
});

app.listen(3000, ()=>{
	console.log('Server started on port 3000');
});