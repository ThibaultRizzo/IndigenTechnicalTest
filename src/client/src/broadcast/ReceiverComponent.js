import React, { Component } from 'react';

import { MessageList } from './MessageList';
import { subscribeToMessages, disconnect } from '../socketApi';

export default class ReceiverComponent extends Component {
  state = {
    messages: []
  };

  componentWillUnmount() {
    console.log('Logged out !');
    disconnect();
  }

  constructor(props) {
    super(props);
    subscribeToMessages((err, msg) => {
      this.setState(prevState => {
        prevState.messages.push(msg);
      });
      this.setState({ e: 'e' });
    });
  }

  render() {
    const { messages } = this.state;
    return <MessageList messages={messages} />;
  }
}
