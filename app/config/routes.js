import loadHome from '../actions/load-home';
import HomeContainer from '../containers/Home';

export default {
  index: {
    method: 'GET',
    path: '/',
    handler: HomeContainer,
    page: 'home',
    title: 'Home',
  }
}
