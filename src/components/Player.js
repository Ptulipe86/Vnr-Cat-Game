import React from 'react';
import styled from 'styled-components';

const PlayerBox = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 5px;
`;

const Player = ({ x, y }) => {
  return <PlayerBox style={{ left: `${x}px`, top: `${y}px` }} />;
};

export default Player;
