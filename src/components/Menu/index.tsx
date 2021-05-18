import React from 'react';
import { Link } from 'react-router-dom';
import { ExerciseWrapper } from './styled'

const Dashboard: React.FC = () => {
  return (
    <ExerciseWrapper>
      <Link to='/id-1'>Exercise-01</Link>
      <Link to='/id-2'>Exercise-02</Link>
      <Link to='/id-3'>Exercise-03</Link>
      <Link to='/id-4'>Exercise-04</Link>
      <Link to='/id-5'>Exercise-05</Link>
      <Link to='/id-6'>Exercise-06</Link>
      <Link to='/id-7'>Exercise-07</Link>
      <Link to='/id-8'>Exercise-08</Link>
      <Link to='/id-9'>Exercise-09</Link>
      <Link to='/id-10'>Exercise-10</Link>
      <Link to='/id-13'>Exercise-13</Link>
      <Link to='/id-17'>Exercise-17</Link>
      <Link to='/id-25'>Exercise-25</Link>
    </ExerciseWrapper>
  )
}
export default Dashboard
