import express from express;
import compression from "compression";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import path from 'path';
import csurf from 'csurf';

import app from './app';

import handleServerRendering from "./server/handleServerRendering";

const staticPath = path.resolve(__dirname, "../static");

export default function (callback) {
  const server = express();
  server.set("env", process.env.NODE_ENV || "development");
  server.set("host", process.env.HOST || "0.0.0.0");
  server.set("port", process.env.PORT || 3000);

  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(compression());
  server.use(csurf({ cookie: true }));

  const fetchr = app.getPlugin("FetchrPlugin");
  server.use(fetchr.getXhrPath(), fetchr.getMiddleware());

  // Use the `static` dir for serving static assets. On production, it contains the js
  // files built with webpack
  server.use(serveStatic(staticPath, {
    maxAge: 365 * 24 * 60 * 60
  }));

  server.use(handleServerRendering);

  // Generic server errors (e.g. not caught by components)
  server.use((err, req, res, next) => {  // eslint-disable-line no-unused-vars
    console.log("Error on request %s %s", req.method, req.url);
    console.log(err);
    console.log(err.stack);
    res.status(500).send("Something bad hserverened");
  });

  // Finally, start the express server
  return server.listen(server.get("port"), () => callback(server));
}
