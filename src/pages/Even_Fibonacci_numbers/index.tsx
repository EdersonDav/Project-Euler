import React from 'react';
import Button from '../../components/Button';

const EvenFibonaccinumbers: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)

  const handleCalculate = () => {
    let number1 = BigInt(1);
    let number2 = BigInt(1);
    let numberResult = BigInt(0);
    let number = BigInt(0);

    while (Number(number) < 4000000) {
      number = number1 + number2;
      number1 = number2;
      number2 = number;
      if (Number(number) % 2 === 0 && Number(number) < 4000000) {
        numberResult += number
      }
    }

    setResult(Number(numberResult))
  }

  return (
    <div>
      <h1>Even Fibonacci numbers</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default EvenFibonaccinumbers
