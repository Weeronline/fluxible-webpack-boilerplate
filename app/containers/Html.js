import React from 'react';
import ApplicationStore from '../stores/application-store';

export default function Html(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.context.getStore(ApplicationStore).getPageTitle()}</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: props.markup }}></div>
        <script dangerouslySetInnerHTML={{ __html: props.state }}></script>
        <script src={'/assets/' + props.clientVendorFile}></script>
        <script src={'/assets/' + props.clientFile}></script>
      </body>
    </html>
  );
};
