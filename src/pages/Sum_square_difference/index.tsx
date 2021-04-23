import React from 'react';
import Button from '../../components/Button';

const SumSquareDifference: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleCalculate = () => {
    let squares = 0;
    let sum = BigInt(0);
    let square = BigInt(0);

    for (let i = 1; i <= 100; i++) {
      squares += Math.pow(i, 2);
      sum += BigInt(i);
    }

    square = BigInt(Math.pow(Number(sum), 2));

    setResult(Number(square) - squares);
  }

  return (
    <div>
      <h1>Sum square difference</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default SumSquareDifference;
