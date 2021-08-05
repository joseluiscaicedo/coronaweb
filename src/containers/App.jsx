import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from '../components/NotFound';
import Home from '../page/Home';
import Layout from '../components/Layout';
import DrawingWorldMap from '../components/DrawingWorldMap';

import '../assets/styles/App.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/worldmap' component={DrawingWorldMap} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
