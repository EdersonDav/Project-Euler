import React from 'react';
import Button from '../../components/Button';
import { number } from './number'

const Prime: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)

  const handleCalculate = () => {
    let numberResult = 0;
    for (let i = 0; i < 100; i++) {
      numberResult += Number(number[i])
    }
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += BigInt(numberResult).toString()[i]
    }
    setResult(Number(result));

  }

  return (
    <div>
      <h1>Large Sum</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default Prime
