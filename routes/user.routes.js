const { Router } = require('express');
const { userPost, userGet, userPut, userDelete } = require('../controllers/user.controller');

const router = Router();

//Definimos las rutasa para el objeto router
router.get('/', userGet);

router.post('/', userPost);

router.put('/:id', userPut);    //Con :id decimos que aqui va un query param

router.delete('/:id', userDelete);

//Lo exportamos y lo usamos en server.js
module.exports = router;