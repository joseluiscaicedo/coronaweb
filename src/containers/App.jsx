import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from '../components/NotFound';
import Home from '../page/Home';
import Layout from '../components/Layout';
import Covid from '../components/Covid';
import DataCovid from '../components/DataCovid';

import '../assets/styles/App.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/worldmap' component={Covid} />
          <Route exact path='/datacovid' component={DataCovid} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
