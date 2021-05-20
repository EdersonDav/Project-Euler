import React from 'react';
import Button from '../../components/Button';

const DigitFifthPowers: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleCalculate = () => {
    const arrayNumber = [];
    for (let i = 2; i <= 1000000; i++) {
      const numberSplit = i.toString().split('');
      let result = 0
      numberSplit.forEach(n => {
        result += Math.pow(Number(n), 5)
      })
      if (result === i) {
        arrayNumber.push(i)
      }
    }
    console.log(arrayNumber);

    setResult(arrayNumber.reduce((a, b) => a + b))
  }

  return (
    <div>
      <h1>Digit fifth powers</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default DigitFifthPowers
