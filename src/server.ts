import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')));
app.use(errorHandler);

app.listen(3333);







// rota = conjunto

// recurso = usuario

// metodos HTTP = GET, POST, PUT, DELETE
// GET = Buscar uma informacao
// POST = Criando uma informacao
//  PUT = Editando uma informacao
// DELETE = Deletando uma informacao

// parametros
// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1   (identificar um recurso)
// Body: http://localhost:3333/users   (identificar um recurso)

// Driver nativo (sqlite3), Query builder (knex), ORM
