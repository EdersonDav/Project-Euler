import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Multiples from '../pages/Multiples_3_5';
import Primes from '../pages/10001_st_prime';
import Large from '../pages/Large_Sum';
import NumberLetterCounts from '../pages/Number_letter_counts'
import FibonacciDigit1000 from '../pages/1000-digit-Fibonacci-number'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/id-1" component={Multiples} />
      <Route exact path="/id-7" component={Primes} />
      <Route exact path="/id-13" component={Large} />
      <Route exact path="/id-17" component={NumberLetterCounts} />
      <Route exact path="/id-25" component={FibonacciDigit1000} />
    </Switch>
  )
}
export default Routes
