import Fluxible from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';

import registerStores from './config/stores';
import Main from './containers/main.jsx';

const app = new Fluxible({
  component: Main
});

app.plug(fetchrPlugin({
  xhrPath: '/services',
  xhrTimeout: 6000,
}));

registerStores(app);

export default app;
