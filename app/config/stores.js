import { RouteStore } from 'fluxible-router';
import routes from '../config/routes.js';

import applicationStore from '../stores/application-store.js'

export default function registerStores(app) {
  app.registerStores(RouteStore.withStaticRoutes(routes));
  app.registerStores(applicationStore)
}
