import React from 'react';
import Button from '../../components/Button';

const NumberLetterCounts: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)
  const stringNumbers = ['zero', 'one', 'two', 'three', "four", "five", 'six', 'seven', 'eight', 'nine']
  const stringNumbersTeen = ['ten', 'twelve', 'eleven', 'thirteen', 'fourteen', "fifteen", "sixteen", 'seventeen', 'eighteen', 'nineteen']
  const stringNumbersDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', "seventy", "eighty", 'ninety']

  const handleCalculate = () => {
    let numberLetter = ''
    for (let i = 1; i < 1000; i++) {
      if (i < 10) {
        numberLetter += stringNumbers[i]
      } else
        if (i > 9 && i < 20) {
          if (i === 11) {
            numberLetter += stringNumbersTeen[1]
          } else {
            const number = Number(i.toString().split('1')[1])
            numberLetter += stringNumbersTeen[number]
          }

        } else if (i > 19 && i < 30) {
          if (i === 20) {
            numberLetter += stringNumbersDec[0]
          } else if (i === 22) {
            numberLetter += `${stringNumbersDec[0]}-${stringNumbers[2]}`
          } else {
            const number = Number(i.toString().split('2')[1])
            console.log(number, i);

            numberLetter += `${stringNumbersDec[0]}-${stringNumbers[number]}`
          }
        }
    }
    console.log(numberLetter);

  }

  return (
    <div>
      <h1>Number letter counts</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default NumberLetterCounts
