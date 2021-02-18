import React from 'react';
import Button from '../../components/Button';

const Prime: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)

  const handleCalculate = () => {
    const primes = [2, 3, 5, 7, 11]
    let count = 12;
    while (primes.length <= 10001) {
      if (verifyPrime(count)) {
        primes.push(count)
      }
      count++
    }
    setResult(primes[10000])
  }

  const verifyPrime = (number: number) => {
    const limit = Math.round(Math.sqrt(number))
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) return false
    }
    return true
  }

  return (
    <div>
      <h1>10001st prime </h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default Prime
