import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EmitterComponent from './broadcast/EmitterComponent';
import ReceiverComponent from './broadcast/ReceiverComponent';

const Receiver = () => <ReceiverComponent />;
const Emitter = () => <EmitterComponent />;

const AppRouter = () => (
  <Router>
    <div>
      <h1>Want to do more?</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Being a Notification Emitter is too much pressure!
            </Link>
          </li>
          <li>
            <Link to="/emitter">I want to be a Notification Emitter !</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Receiver} />
      <Route path="/emitter" component={Emitter} />
    </div>
  </Router>
);

export default AppRouter;
