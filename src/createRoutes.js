import React from 'react';
import RootApp from './components/RootApp.react';
import Auth from './containers/Auth';
import Chat from './components/chat/Chat.react';
import NoMatch from './components/nomatch/NoMatch.react';
import { Route, IndexRoute } from 'react-router';

export default function createRoutes(store) {

  const requireSignIn = (nextState, replace) => {
    let state = store.getState();

    if (state.getIn(['user', 'isAuthenticated'])) return;

    replace('/signin');
  }

  return (
    <Route path="/" component={RootApp}>
      <IndexRoute component={Chat} onEnter={requireSignIn} />
      <Route path="signin" component={Auth} />
      <Route path="*" component={NoMatch} />
    </Route>
  )
}
