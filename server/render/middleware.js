import React from "react";
import ReactDOMServer from "react-dom/server";
import serialize from "serialize-javascript";

import { navigateAction } from "fluxible-router";

function renderApp(req, res, context, next) {
  try {
    // dehydrate the app and expose its state
    const state = "window.__INITIAL_STATE__=" + serialize(app.dehydrate(context)) + ";";
    const Root = app.getComponent();
  } catch (e) {
    next(e);
  }
}
