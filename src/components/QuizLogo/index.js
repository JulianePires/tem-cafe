import styled from 'styled-components';
import React from 'react';
import db from '../../../db.json';

const Brand = styled.img`
    width: 70px;
    height: 70px;
    transform: translateX(130px);
    margin: -20px 0;
`;

function Logo() {
  return (
    <Brand src={db.logo} />
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
