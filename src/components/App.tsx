import React from 'react';
import Column from './Column';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import { AppContainer } from '../styles';

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, idx) => (
        <Column id={list.id} key={list.id} text={list.text} index={idx} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={text =>
          dispatch({
            type: 'ADD_LIST',
            payload: text,
          })
        }
      />
    </AppContainer>
  );
};

export default App;
