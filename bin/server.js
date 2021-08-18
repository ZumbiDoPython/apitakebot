//Servidor API REST
const app = require('../src/app');

//Porta em que API será levantada
const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
   if (port >= 0) {
         return port;
      }
   return false;
}

//Levantar API
app.listen(port, function () {
    console.log(`API Takebot online ${port}`)

});