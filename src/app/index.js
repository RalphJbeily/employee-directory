import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Root } from './components/Root';
import { Home } from './components/Home';
import { About } from './components/About';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

class App extends React.Component {
  // when react needs to render a component
  render() {
    // return what should be rendered
    return (
      // return only one root element
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          /* to specify the index page */
          <IndexRoute component={Home} />
          <Route path={'about'} component={About} />
          <Route path={'home'} component={Home} />
          <Route path={'addemployee'} component={AddEmployee} />
          <Route path={'/editemployee/:obj'} component={EditEmployee} />
        </Route>
      </Router>
    );
  }
}

// call render method, first argument is for what to render and second argument is the place to render
render(<App />, window.document.getElementById('app'));
