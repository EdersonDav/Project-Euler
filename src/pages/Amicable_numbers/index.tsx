import React from 'react';
import Button from '../../components/Button';

const AmicableNumbers: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleCalculate = () => {
    let num = 0;
    const divsors = (number: number) => {
      let sum = 0;

      for (let i = 0; i < number; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }

      return sum;
    };

    for (let i = 1; i < 10000; i++) {
      const sum = divsors(i);
      const subSum = divsors(sum);

      if (subSum === i && i !== sum) {
        num += i;
      }
    }

    setResult(num);
  };

  return (
    <div>
      <h1>Amicable numbers</h1>
      <p>Value: {result}</p>
      <Button type="button" onClick={handleCalculate}>
        Calculate
      </Button>
    </div>
  );
};
export default AmicableNumbers;
