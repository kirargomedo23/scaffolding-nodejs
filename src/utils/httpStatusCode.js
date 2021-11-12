
module.exports = {
    "OK":{
        "code":200,
        "description":"El servidor ha actuado de manera correcta."
    },
    "CREATED":{
        "code":201,
        "description":"El servidor ha cumplido con la petición del navegador y, como resultado, ha creado un nuevo recurso."
    },
    "BAD":{
        "code":400,
        "description":"El servidor no puede devolver una respuesta debido a un error del cliente."
    },
    "UNAUTHORIZED":{
        "code":401,
        "description":"Se devuelve este código cuando faltaba la información de autorización en la solicitud o no tiene la autorización suficiente."
    },
    "NOT-FOUND":{
        "code":404,
        "description":"Indica que el recurso de destino no existe."
    },
    "INTERNAL-SERVER-ERROR":{
        "code":500,
        "description":"Se ha producido un error interno en el servidor."
    }
}
  