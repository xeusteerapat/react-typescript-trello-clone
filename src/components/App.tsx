import React from 'react';
import Column from './Column';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import { AppContainer } from '../styles';

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, idx) => (
        <Column key={list.id} text={list.text} index={idx} />
      ))}
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
