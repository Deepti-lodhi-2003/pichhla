const express = require('express');
const { contact, student, teacher } = require('../controllers/contact.controller');
const router = express.Router();

router.post('/Cform',contact);
 router.post('TSform',student);
 router.post('/TSform',teacher);
module.exports = router;
