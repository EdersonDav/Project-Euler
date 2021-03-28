import React from 'react';
import Button from '../../components/Button';

const FibonacciDigit1000: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)


  const handleCalculate = () => {
    let number1 = BigInt(1);
    let number2 = BigInt(1);
    let count = 2;

    while (true) {
      count++;
      const number = number1 + number2;
      number1 = number2;
      number2 = number;
      if (number.toString().length === 1000) {
        setResult(count);
        break;
      }
    }

  }

  return (
    <div>
      <h1>1000-digit Fibonacci number</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default FibonacciDigit1000
