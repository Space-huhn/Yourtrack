import React, {Dispatch, SetStateAction} from 'react';
import styles from './CardsContainer.module.css'
import { DragDropContext } from 'react-beautiful-dnd';
import DragAndDropColumn from "../../components/DragAndDrop/DragAndDropColumn";
import {ITodoListColumns} from "../../types/interfaces";
import {putData} from "../../functions/putData";

interface ICardsContainer {
  data: ITodoListColumns,
  setData: Dispatch<SetStateAction<ITodoListColumns>>,
  searchValue: string
}

const CardsContainer:React.FC<ICardsContainer> = ({data, setData, searchValue}) => {
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

   if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    removed.status = destination.droppableId;

    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

     setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  }

  putData(`http://localhost:3004/todoListColumns`, data).then();

  return (
    <div className={styles.cardsContainer}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, data, setData)}>
        {Object.keys(data).map((key) => {
          return (
            <DragAndDropColumn key={key} statusType={key} title={data[key].name} list={data[key].items}/>
          )
        })}
      </DragDropContext>
    </div>
  );
};

export default CardsContainer;