import loadHome from '../actions/load-home';
import HomeContainer from '../containers/home-container';

export default {
  index: {
    method: 'GET',
    path: '/',
    handler: HomeContainer,
    page: 'home',
    title: 'Home',
//    action: loadHome,
  }
}
