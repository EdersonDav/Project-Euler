import styled from 'styled-components';

export const ExerciseWrapper = styled.div`
  padding:0;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  width: 20%;
  font-size:20px;
  color: #000;
  align-items: center;
  background: rgb(239, 239, 239);
  height:100vh;
  margin-right:20px;
  filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
  a{
    margin-top:20px;
    text-decoration: none;
    color: #000;
    &:hover{
      font-weight: bold;
    }
  }
`