import routeStore from '../stores/route-store';
import applicationStore from '../stores/application-store.js'

export default function registerStores(app) {
  app.registerStore(routeStore);
  app.registerStore(applicationStore)
}
