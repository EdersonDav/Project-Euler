import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Multiples from '../pages/Multiples_3_5';
import Primes from '../pages/10001_st_prime';
import Large from '../pages/Large_Sum';
import NumberLetterCounts from '../pages/Number_letter_counts';
import FibonacciDigit1000 from '../pages/1000-digit-Fibonacci-number';
import EvenFibonaccinumbers from '../pages/Even_Fibonacci_numbers';
import LargeFactor from '../pages/Large_factor';
import LargestPalindrome from '../pages/Largest_palindrome';
import SmallestMultiple from '../pages/Smallest_multiple';
import SumSquareDifference from '../pages/Sum_square_difference';
import LargestProductInSeries from '../pages/Largest_product_in_a_series';
import SpecialPythagoreanTriplet from '../pages/Special_Pythagorean_triplet';
import SummationPrimes from '../pages/Summation_of_primes';
import PowerDigitSum from '../pages/Power_digit_sum';



const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/id-1" component={Multiples} />
      <Route exact path="/id-2" component={EvenFibonaccinumbers} />
      <Route exact path="/id-3" component={LargeFactor} />
      <Route exact path="/id-4" component={LargestPalindrome} />
      <Route exact path="/id-5" component={SmallestMultiple} />
      <Route exact path="/id-6" component={SumSquareDifference} />
      <Route exact path="/id-7" component={Primes} />
      <Route exact path="/id-8" component={LargestProductInSeries} />
      <Route exact path="/id-9" component={SpecialPythagoreanTriplet} />
      <Route exact path="/id-10" component={SummationPrimes} />
      <Route exact path="/id-13" component={Large} />
      <Route exact path="/id-16" component={PowerDigitSum} />
      <Route exact path="/id-17" component={NumberLetterCounts} />
      <Route exact path="/id-25" component={FibonacciDigit1000} />
    </Switch>
  )
}
export default Routes
