import React from 'react';
import Button from '../../components/Button';

const SummationPrimes: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const isPrime = (num: number) => {
    let sqrt = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= sqrt; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

  const handleCalculate = () => {
    let count = 0
    for (let i = 1; i < 2000001; i++) {
      if (isPrime(i)) {
        count += i
      }
    }

    setResult(count)
  }

  return (
    <div>
      <h1>Summation of primes</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default SummationPrimes;
