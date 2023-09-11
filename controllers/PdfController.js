const puppeteer = require('puppeteer');

async function crearFactura(url) {

    try {
        let navegador = await puppeteer.launch();
        let pagina = await navegador.newPage();
        await pagina.goto(url)
        let pdf = await pagina.pdf();    
        navegador.close();
        return pdf;
    } catch (error) {
        console.log(error);
        throw error;
    }


}

module.exports = {
    
    factura(req, res) {
        res.render('pdfs/factura', { layout: "pdf" });
    },

    async descargar(req, res) {
        try{
            let pdf = await crearFactura("http://localhost:3000/factura");
            res.contentType('application/pdf');
            res.send(pdf);
        } catch {
            console.error('Error en descargar:', error);
            res.status(500).send('Error al descargar la factura');
        }

    }
}