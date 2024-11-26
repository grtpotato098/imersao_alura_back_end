
//importar o framework express
import express from 'express';

import routes from './src/config/routes/PostsRoutes.js';






//variável auxiliar para subir o servidor
const app = express();
app.use(express.static("uploads"));

routes(app);

/*função utilizada para subir o servidor, informando a porta de comunicação como parâmetro. També há uma arrow function sem parãmetro,
no qual utilizamos para informar uma mensagem de sucesso na subida do servidor 
*/
app.listen(3000, () =>{
    console.log("Servidor escutando....");
});

