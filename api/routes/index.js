import express from 'express';
import authRoute from './auth.route';
import commentsRoute from './comments.route';

const router = express.Router();

const routes = [
  { path: '/auth', route: authRoute },
  { path: '/comments', route: commentsRoute },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
