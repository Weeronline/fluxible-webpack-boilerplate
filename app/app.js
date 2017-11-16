import Fluxible from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';

import registerStores from './config/stores';
import MainComponent from './containers/Main.jsx';

const app = new Fluxible({
  component: Main
})

app.plug(fetchrPlugin({
  xhrPath: '/api',
  xhrTimeout: 6000,
}));


export default registerStores(app);
