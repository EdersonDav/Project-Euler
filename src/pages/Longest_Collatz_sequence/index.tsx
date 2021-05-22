import React from 'react';
import Button from '../../components/Button';

const LongestCollatzSequence: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);

  const calculateSequence = (num: number) => {
    if (num % 2 === 0) {
      return num / 2;
    }
    return 3 * num + 1;
  };

  const countLoop = (num: number) => {
    let loops = 1;
    while (num > 1) {
      num = calculateSequence(num);
      loops++;
    }
    return loops;
  };

  const handleCalculate = () => {
    let count = 0;
    let counts = 0;
    for (let i = 1000000; i > 1; i--) {
      let loops = countLoop(i);
      if (loops > counts) {
        counts = loops;
        count = i;
      }
    }

    setResult(count);
  };

  return (
    <div>
      <h1>Longest Collatz sequence</h1>
      <p>Value: {result}</p>
      <Button type="button" onClick={handleCalculate}>
        Calculate
      </Button>
    </div>
  );
};
export default LongestCollatzSequence;
