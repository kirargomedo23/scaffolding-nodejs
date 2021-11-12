const dataResponse = (res, data = null, msg = null) => {

    res.status(200).json({
        success: true,
        msg,
        data,
        code:200
    });

};
  
const dataErrorResponse = (res, msg = null,code = 500) => {

    res.status(code).json({
        success: false,
        msg,
        data : null,
        code
    });
    
};

module.exports = { dataResponse, dataErrorResponse };



