import React from 'react';
import Button from '../../components/Button';

const Multiples: React.FC = (props) => {
  const [result, setResult] = React.useState<number>(0)

  const handleCalculate = () => {
    let multiples = []
    for (let i = 1; i < 1000; i++) {
      if (i % 3 === 0) {
        multiples.push(i)
      }
      if (i % 5 === 0 && !multiples.includes(i)) {
        multiples.push(i)
      }
    }
    console.log(multiples);

    setResult(multiples.reduce((count = 0, current) => {
      return count + current
    }))
  }

  return (
    <div>
      <h1>Multiples of 3 and 5 </h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default Multiples
