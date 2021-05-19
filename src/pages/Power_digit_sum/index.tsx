import React from 'react';
import Button from '../../components/Button';

const PowerDigitSum: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const handleCalculate = () => {
    const number = BigInt(Math.pow(2, 1000))
    const arrayNumbers = String(number).split('').map(n => Number(n))

    const count = arrayNumbers.reduce((a, b) => a + b)
    console.log(arrayNumbers)
    setResult(Number(count))
  }

  return (
    <div>
      <h1>Power digit sum</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default PowerDigitSum
