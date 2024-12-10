import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameArea from "./components/GameArea";
import Player from "./components/Player";
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [playerPos, setPlayerPos] = useState({ x: 375, y: 500 }); // Starting position
  const [score, setScore] = useState(0); // Starting score

  const handleKeyDown = (event) => {
    setPlayerPos((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      if (event.key === 'ArrowLeft') newX = Math.max(0, prev.x - 10);
      if (event.key === 'ArrowRight') newX = Math.min(750, prev.x + 10); // Limit to canvas width
      if (event.key === 'ArrowUp') newY = Math.max(0, prev.y - 10);
      if (event.key === 'ArrowDown') newY = Math.min(550, prev.y + 10); // Limit to canvas height

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
    <h1>VnR Kitty Game</h1>
    <GameContainer>
      <Player x={playerPos.x} y={playerPos.y} />
      <Scoreboard score={score} />
      <GameArea />
    </GameContainer>
    </>
  );
}


const GameContainer = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid black;
  background-color: #000;
`;

export default App;
