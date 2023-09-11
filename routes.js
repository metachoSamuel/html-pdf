const express = require('express');
const router = express.Router();
const pdf = require('./controllers/PdfController')

router.get('/', (req, res) => {
    res.render('home')
});

//Facturas
router.get('/factura', pdf.factura);
router.get('/descargar', pdf.descargar);


module.exports = router;