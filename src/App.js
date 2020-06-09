import React from 'react';
import styled from 'styled-components';
import Routes from './routes/Routes';
import TopNav from './navigation/TopNav';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <Title>
        Hello World.
      </Title>
      <TopNav />
      <Routes />
    </div>
  );
}

export default App;