import React from 'react';
import Button from '../../components/Button';

const SpecialPythagoreanTriplet: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)

  const handleCalculate = (n: number) => {
    var a;
    var c;

    for (var b = 1; b < n; b += 1) {
      a = (500000 - n * b) / (n - b);

      if (Math.floor(a) === a) {
        c = n - a - b;

        break;
      }
    }

    if (a && c) setResult(a * b * c);
  }

  return (
    <div>
      <h1>Special Pythagorean triplet</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={() => handleCalculate(1000)}>Calculate</Button>
    </div>
  )
}
export default SpecialPythagoreanTriplet;
