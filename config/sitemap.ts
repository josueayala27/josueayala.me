import getRoutes from '../utils/get-routes';

export default {
  hostname: process.env.BASE_URL,
  routes() {
    return getRoutes();
  },
};
