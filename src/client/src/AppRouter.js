import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import EmitterComponent from './broadcast/EmitterComponent';
import ReceiverComponent from './broadcast/ReceiverComponent';
import './AppRouter.scss';

const Emitter = () => <EmitterComponent />;

const AppRouter = () => (
  <Router>
    <div className="App">
      <nav className="header">
        <h1>Want to do more?</h1>
        <ul>
          <li>
            <Link to="/" className="link">
              Being a Notification Emitter is too much pressure!
            </Link>
          </li>
          <li>
            <Link to="/emitter" className="link">
              I want to be a Notification Emitter !
            </Link>
          </li>
        </ul>
      </nav>
      <Route path="/emitter" component={Emitter} />
      <ReceiverComponent />
    </div>
  </Router>
);

export default AppRouter;
