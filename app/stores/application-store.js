import BaseStore from 'fluxible/addons/BaseStore';
import routeStore from './route-store';

const GLOBAL_ERROR = 'applicationStore/globalError';

class ApplicationStore extends BaseStore {
  static get storeName() {
    return 'ApplicationStore';
  }

  static get handlers() {
    return {
      NAVIGATE_SUCCESS: 'handleNavigateSuccess',
      NAVIGATE_FAILURE: 'handleNavigateFailure',
      [GLOBAL_ERROR]: 'setGlobalError',
    };
  }

  constructor(dispatcher) {
    super(dispatcher);
    this.pageTitle = '';
    this.error = null;
  }

  handleNavigateSuccess(currentRoute) {
    this.error = null;
    this.dispatcher.waitFor(routeStore, () => {
      if (currentRoute && currentRoute.title) {
        this.pageTitle = currentRoute.title;
        this.emitChange();
      }
    });
    this.emitChange();
  }

  handleNavigateFailure(err) {
    this.error = err;
    this.emitChange();
  }

  getGlobalError() {
    return this.error;
  }

  getPageTitle() {
    return this.pageTitle;
  }

  dehydrate() {
    return {
      errorMessage: this.error && this.error.message,
      errorCode: this.error && this.error.statusCode,
      errorStack: this.error && this.error.stack,
      pageTitle: this.pageTitle,
    };
  }

  rehydrate(state) {
    const message = state.errorMessage;
    if (message) {
      this.error = new Error(message);
      this.error.statusCode = state.errorCode;
      this.error.stack = state.errorStack;
    } else {
      this.error = null;
    }
    this.pageTitle = state.pageTitle;
  }

  }

export default ApplicationStore;
