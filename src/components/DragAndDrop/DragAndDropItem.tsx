import React from 'react';
import TaskCard from "../../UI/TaskCard/TaskCard";
import { Draggable } from 'react-beautiful-dnd';
import {IList} from "../../types/interfaces";

interface IDragAndDropItem {
  object: IList,
  index: number
}

const DragAndDropItem:React.FC<IDragAndDropItem> = ({object, index}) => {
  return (
    <Draggable
      draggableId={`${object.id}`}
      index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <TaskCard object={object}/>
        </div>
      )}
    </Draggable>
  );
};

export default DragAndDropItem;