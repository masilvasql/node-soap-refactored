const soap = require('./lib/soap.js')

soap.createClient('https://eproc-ws.trf2.jus.br/eproc/wsdl.php?srv=intercomunicacao2.2', (err, client) => {
    console.log("client: ", client)
})