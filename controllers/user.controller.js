const { response, request } = require('express');

const userGet = (req = request, res = response) => {      //Lo de res=response se hace para poder hacer ctrl+space y que sallgan las sugerencias

    const { id, name, page = 1, limit } = req.query;

    res.json({
        "msg": 'This is the GET method',
        id,
        name,
        page,
        limit
    });
}

const userPost = (req = request, res = response) => {

    const body = req.body;  //Recuperar el body
    const { id, name } = req.body

    res.status(201).json({
        "msg": 'This is the POST method',
        "user": body,
        "id": id,
        "name": name
    });
}

const userPut = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        "msg": 'This is the PUT method',
        "id": id
    });
}

const userDelete = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        "msg": 'This is the DELETE method',
        "id": id
    });
}

module.exports = {
    userGet: userGet,
    userPost: userPost,
    userPut: userPut,
    userDelete: userDelete
}
