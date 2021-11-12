require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const {cors} = require("./src/middlewares/cors.js");
const router = require("./src/routes/index");
const HTTP_STATUS_CODE = require('./src/utils/httpStatusCode');
const app = express();
const Utils = require('./src/utils/response');




const port = process.env.PORT || 3525;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);


app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
});

app.use('/api', router);

app.all('*', function(req, res){
	let code = HTTP_STATUS_CODE["NOT-FOUND"].code;
	Utils.dataErrorResponse(res,'Endpoint no encontrado.',code);
	return;
});
