const Utils = require('../utils/response');
const HTTP_STATUS_CODE = require('../utils/httpStatusCode');


exports.cors = (req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('GET, POST, OPTIONS, PUT, DELETE');

    
    if(req.method!='GET' && req.method!='POST' &&  req.method!='OPTIONS' &&  req.method!='PUT'  &&  req.method!='DELETE' ){
        const code = HTTP_STATUS_CODE["NOT-FOUND"].code;
        Utils.dataErrorResponse(res,'Método HTTP no disponible',code);
        return;
    }

    next();
}
