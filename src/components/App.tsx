import React from 'react';
import Column from './Column';
import Card from './Card';
import { AppContainer } from '../styles';

const App = () => {
  return (
    <AppContainer>
      <Column text='Todo'>
        <Card text='Generate app scaffold' />
      </Column>
      <Column text='In progress'>
        <Card text='Learn Typescript with React' />
      </Column>
      <Column text='Done'>
        <Card text='Begin to use static typing' />
      </Column>
    </AppContainer>
  );
};

export default App;
