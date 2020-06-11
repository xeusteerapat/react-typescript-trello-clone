import React, { useRef } from 'react';
import Card from './Card';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { useItemDrag } from '../hooks/useItemDrag';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: 'COLUMN',
    id,
    index,
    text,
  });

  drag(ref);

  return (
    <ColumnContainer ref={ref}>
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
