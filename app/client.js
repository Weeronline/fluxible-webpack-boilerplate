import React from 'react';
import ReactDOM from 'react-dom';
import app from './app';

window.debug = require("debug");

const debug = window.debug("boilerplate");

const mountNode = document.getElementById("content");
const dehydratedState = window.App;


debug("Rehydrating state...", dehydratedState);

app.rehydrate(dehydratedState, (err, context) => {
  if (err) {
    throw err;
  }

  debug("State has been rehydrated");
  const Main = app.getComponent();

  ReactDOM.render(
    <Main context={ context.getComponentContext() } />,
    mountNode,
    () => {
       debug("Root component has been mounted");
    }
  )
})
