import React from 'react';
import { Link } from 'react-router-dom';
import { ExerciseWrapper } from './styled'

const Dashboard: React.FC = () => {
  return (
    <ExerciseWrapper>
      <Link to='/id-1'>Exercise-01</Link>
      <Link to='/id-2'>Exercise-02</Link>
      <Link to='/id-7'>Exercise-07</Link>
      <Link to='/id-13'>Exercise-13</Link>
      <Link to='/id-17'>Exercise-17</Link>
      <Link to='/id-25'>Exercise-25</Link>
    </ExerciseWrapper>
  )
}
export default Dashboard
