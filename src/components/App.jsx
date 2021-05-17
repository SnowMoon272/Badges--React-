// Librarys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// // Components
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Origin from '../pages/Origin';
import BadgeDetails from '../pages/BadgeDetailsContainer';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/origin" component={Origin} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default App;
