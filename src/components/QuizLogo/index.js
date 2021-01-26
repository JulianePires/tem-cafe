import styled from 'styled-components';
import db from '../../../db.json'
import React from 'react';
import PropTypes from 'prop-types';

const Brand = styled.img`
    width: 120px;
    height: 120px;
    transform: translateX(100px);
`;

function Logo() {
  return (
    <Brand src={db.logo}></Brand>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;