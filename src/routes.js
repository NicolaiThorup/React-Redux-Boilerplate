import React from 'react';
import {IndexRoute, Route} from 'react-router'
import App from './components/app';
import Welcome from './components/welcome'
import requireAuth from './components/require_authentication';
import Resources from './components/resources';

/**
 * Please keep routes in alphabetical order
 * Inspiration for this file: https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/routes.js
 */

export default () => {
  return(
      <Route path="/" component={App}>
        { /* Home (main) route */ }
        <IndexRoute component={Welcome}/>

        {/* Routes */ }
        <Route path="resources" component={requireAuth(Resources)} />

      </Route>
  );
};
