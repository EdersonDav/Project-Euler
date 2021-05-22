import React from 'react';
import Button from '../../components/Button';

const FactorialDigitSum: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleCalculate = () => {
    let count = BigInt(100);
    for (let i = BigInt(99); i > BigInt(1); i--) {
      count *= i;
    }

    const array = count.toString().split('');
    const sumArray = array.map(a => Number(a));
    const sum = sumArray.reduce((a, b) => a + b);
    setResult(sum);
  };

  return (
    <div>
      <h1>Factorial digit sum</h1>
      <p>Value: {result}</p>
      <Button type="button" onClick={handleCalculate}>
        Calculate
      </Button>
    </div>
  );
};
export default FactorialDigitSum;
