import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});

router.post('/cidades', CidadesController.createBodyValidator, CidadesController.createQueryValidator, CidadesController.createList);

export { router };