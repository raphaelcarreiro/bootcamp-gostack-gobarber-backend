import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Raphael M Carreiro',
    email: 'camilacarreiro@hotmail.com',
    password_hash: '1234567489',
  });

  res.json(user);
});

export default routes;
