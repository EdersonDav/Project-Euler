import React from 'react';
import Button from '../../components/Button';

const SmallestMultiple: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleCalculate = () => {
    const multiple = (n: number) => {
      const calc = (a: number, b: number): number => b === 0 ? a : calc(b, a % b);

      let result = 1;

      for (let i = 2; i <= n; i++) {
        result *= i / calc(i, result);
      }
      return result;
    };


    setResult(multiple(20));
  }

  return (
    <div>
      <h1>Smallest multiple</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default SmallestMultiple
