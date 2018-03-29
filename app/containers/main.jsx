import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { handleHistory } from 'fluxible-router';
import { provideContext, connectToStores } from "fluxible-addons-react";

import  styles from '../assets/styles/main.scss';

// Wrap Root with the fluxible context.
@provideContext

// Wrap with fluxible-router's history handler (required for routing)
// This also passes `currentRoute` as prop to the component
@handleHistory
@connectToStores(['ApplicationStore'], context => ({
  error: context.getStore('ApplicationStore').getGlobalError(),
  pageTitle: context.getStore('ApplicationStore').getPageTitle(),
}))

export default class Main extends Component {
  static get propTypes() {
    return {
      isNavigateComplete: PropTypes.bool,
      currentRoute: PropTypes.object,
      currentNavigateError: PropTypes.shape({
        statusCode: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired
      }),
      error: PropTypes.object,
      pageTitle: PropTypes.string,
    }
  }

  render() {
    const { currentRoute, currentNavigateError, isNavigateComplete } = this.props;
    const Handler = currentRoute && currentRoute.handler;
    let content;

    if (currentNavigateError && currentNavigateError.statusCode === 404) {
      // This "not found" error comes from a page init actions
      // content = <NotFoundPage />;
      content = null;
    }  else if (currentNavigateError) {
      // Generic error, usually always with statusCode 500
      // content = <ErrorPage err={ currentNavigateError } />;
        content = null;
    } else if (!Handler) {
      // No handler: this is another case where a route is not found (e.g.
      // is not defined in the routes.js config)
      // content = <NotFoundPage />;
      content = null;
    } else if (!isNavigateComplete) {
      // Render a loading page while waiting the route's action to finish
      // content = <LoadingPage />;
      content = null;
    } else {
      // Render the Handler (aka the page) for the current route. The route params
      // (e.g. values from the URLs) are props being sent to the page component,
      // for example the `id` of a photo for the `PhotoPage` component.
      const params = currentRoute.params;
      content = <Handler {...params} />;
    }

    return (
      <div className={styles.app}>
        <Helmet title={this.props.pageTitle} />
        {content}
      </div>
    )
  }
}
