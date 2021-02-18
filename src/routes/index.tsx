import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Multiples from '../pages/Multiples_3_5';
import Primes from '../pages/10001_st_prime';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/id-1" component={Multiples} />
      <Route exact path="/id-7" component={Primes} />
    </Switch>
  )
}
export default Routes
