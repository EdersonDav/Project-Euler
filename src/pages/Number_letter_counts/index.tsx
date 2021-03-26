import React from 'react';
import Button from '../../components/Button';

const NumberLetterCounts: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)
  const stringNumbers = ['zero', 'one', 'two', 'three', "four", "five", 'six', 'seven', 'eight', 'nine']
  const stringNumbersTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', "fifteen", "sixteen", 'seventeen', 'eighteen', 'nineteen']
  const stringNumbersDec = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', "seventy", "eighty", 'ninety']

  const handleCalculate = () => {
    let numberLetter = ''
    for (let i = 1; i <= 1000; i++) {
      if (i === 1000) {
        numberLetter += 'onethousand'
      } else {
        if (i < 10) {
          numberLetter += stringNumbers[i]

        } else if (i > 9 && i < 20) {
          if (i === 11) {
            numberLetter += 'eleven'
          } else {
            const number = Number(i.toString().split('1')[1])
            numberLetter += stringNumbersTeen[number]
          }

        } else if (i < 100) {
          if (i.toString().includes('0')) {
            numberLetter += stringNumbersDec[Number(i.toString()[0])]
          } else {
            numberLetter += `${stringNumbersDec[Number(i.toString()[0])]}${stringNumbers[Number(i.toString()[1])]}`
          }
        } else {
          if (i.toString().includes('00')) {
            numberLetter += `${stringNumbers[Number(i.toString()[0])]}hundred`
          } else
            if (Number(i.toString()[1]) === 0) {
              numberLetter += `${stringNumbers[Number(i.toString()[0])]}hundredand${stringNumbers[Number(i.toString()[2])]}`
            } else if (i.toString().includes('10')) {
              numberLetter += `${stringNumbers[Number(i.toString()[0])]}hundredand${stringNumbersTeen[Number(i.toString()[2])]}`
            } else if (Number(i.toString()[1]) === 1 && Number(i.toString()[2]) > 0) {
              numberLetter += `${stringNumbers[Number(i.toString()[0])]}hundredand${stringNumbersTeen[Number(i.toString()[2])]}`
            } else if (Number(i.toString()[1]) >= 2) {
              if (i.toString()[2] === '0') {
                numberLetter += `${stringNumbers[Number(i.toString()[0])]}hundredand${stringNumbersDec[Number(i.toString()[1])]}`
              } else {
                numberLetter += `${stringNumbers[Number(i.toString()[0])]}hundredand${stringNumbersDec[Number(i.toString()[1])]}${stringNumbers[Number(i.toString()[2])]}`
              }
            }
        }

      }
    }
    setResult(numberLetter.length);
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
