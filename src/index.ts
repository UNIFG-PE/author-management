import express from 'express';
import authorRoutes from './routes/author.routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/authors', authorRoutes);

app.get('/', (req, res) => {
  res.send('API de Gerenciamento de Autores online! Acesse /authors para começar.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
  console.log(`Rotas de autores disponíveis em http://localhost:${PORT}/authors`);
});