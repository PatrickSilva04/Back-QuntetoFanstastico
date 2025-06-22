import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes';
import rechargeRoutes from './routes/rechargeRoutes';
import historicoRoutes from './routes/historicoRoutes';
import linhasRoutes from './routes/linhasRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', rechargeRoutes);
app.use('/api', historicoRoutes);
app.use('/api', linhasRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
