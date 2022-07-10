import express, { Express, Request, Response } from 'express';
import sequelize from './database/sequelize';

import films from './api/controllers/FilmController';

const app: Express = express();
const port: number = 3332;

app.use('/films', films)

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World Express + TypeScript")
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

sequelize();