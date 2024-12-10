import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial, sans-serif;
`;

const ScoreBoard = ({ score }) => {
  return (
    <ScoreContainer>
      <h2>Score: {score}</h2>
    </ScoreContainer>
  );
};

export default ScoreBoard;
