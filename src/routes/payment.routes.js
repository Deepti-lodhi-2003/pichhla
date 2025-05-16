const express = require('express');
const { paymentcreate, paymentverify } = require('../controllers/payment.controller');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('index');
// });

router.post('/paymentcreate',paymentcreate);





router.post('/paymentverify', paymentverify);


module.exports = router;

