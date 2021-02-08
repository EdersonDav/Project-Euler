import React from 'react';
import { Link } from 'react-router-dom';
import { ExerciseWrapper } from './styled'

const Dashboard: React.FC = () => {
  return (
    <ExerciseWrapper>
      <Link to='/id-1'>Exercise-01</Link>
    </ExerciseWrapper>
  )
}
export default Dashboard
