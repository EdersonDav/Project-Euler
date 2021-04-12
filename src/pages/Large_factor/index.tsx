import React from 'react';
import Button from '../../components/Button';

const LargeFactor: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)

  const handleCalculate = () => {
    let numberResult = BigInt(0);
    let count = BigInt(1);
    let number = BigInt(600851475143);

    const verifyPrime = (number: number) => {
      const limit = Math.round(Math.sqrt(number))
      for (let i = 2; i <= limit; i++) {
        if (number % i === 0) return false
      }
      return true
    }

    while (count < number || count.toString().length > 6) {
      if (number % count === BigInt(0)) {
        if (verifyPrime(Number(count))) {
          numberResult = count;
        }
      }
      count++
    }

    setResult(Number(numberResult));

  }

  return (
    <div>
      <h1>Large Sum</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default LargeFactor
