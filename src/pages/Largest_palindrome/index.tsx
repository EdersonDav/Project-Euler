import React from 'react';
import Button from '../../components/Button';

const LargestPalindrome: React.FC = () => {
  const [result, setResult] = React.useState<number>(0)
  const handleCalculate = () => {
    const isPalindrome = (value: any) => {
      value = value.toString().split('');
      var len = value.length;
      for (var i = 0; i < len / 2; i++) {
        if (value[i] !== value[len - 1 - i]) {
          return false;
        }
      }
      return true;
    }
    var largest = 0;
    for (var i = 999; i >= 100; i--) {
      for (var j = 999; j >= 100; j--) {
        var mult = i * j;
        if (mult < largest) break;
        if (isPalindrome(mult) && mult > largest) {
          largest = mult;
        }
      }
    }

    setResult(largest);
  }

  return (
    <div>
      <h1>Largest palindrome</h1>
      <p>Value: {result}</p>
      <Button type='button' onClick={handleCalculate}>Calculate</Button>
    </div>
  )
}
export default LargestPalindrome
