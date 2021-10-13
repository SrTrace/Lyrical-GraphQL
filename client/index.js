import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import { createBrowserHistory } from "history";

//import { InMemoryCache } from 'apollo-cache-inmemory';
//import { HttpLink } from 'apollo-link-http';


import App from './components/App';
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({});
//const cache = new InMemoryCache();
//const history = createBrowserHistory();

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <Router history={hashHistory}>
              <Route path="/" component={App}>
                  <IndexRoute component={SongList}/>
                  <Route path="song/new" component={SongCreate}/>
              </Route>
          </Router>
      </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
