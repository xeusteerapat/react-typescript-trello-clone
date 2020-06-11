import React from 'react';
import Card from './Card';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';

interface ColumnProps {
  text: string;
  index: number;
}

const Column = ({ text, index }: React.PropsWithChildren<ColumnProps>) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
