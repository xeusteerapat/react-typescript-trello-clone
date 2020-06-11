import React from 'react';
import Card from './Card';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={text =>
          dispatch({
            type: 'ADD_TASK',
            payload: { text, listId: id },
          })
        }
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
