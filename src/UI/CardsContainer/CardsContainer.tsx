import React, {useState} from 'react';
import styles from './CardsContainer.module.css'
import {statusTypes} from "../../static/static-data";
import TaskCard from "../TaskCard/TaskCard";
import {ITask} from "../../interfaces";
import {moveElement} from "../../functions/moveArrayElement";

const CardsContainer = ({data, setData, searchValue}) => {
  const [currentElement, setCurrentElement] = useState<ITask | null>(null)

  const changeStatus = (target) => {

    statusTypes.map((statusType) => {
      if (target.closest(`.${statusType.status}`)) {
        setData([...data, currentElement!.status = `${statusType.status}`])
      }
    })
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    target?.closest(`.${styles.cardContainer}`)?.classList.remove(styles.grabElement);
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = e.target as HTMLDivElement;

    target?.closest(`.${styles.cardContainer}`)?.classList.add(styles.grabElement);
  }

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, item) => {
    const target = e.target as HTMLDivElement;

    setCurrentElement(item);

    target.closest(`.${styles.cardContainer}`)?.classList.add(styles.selected);
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = e.target as HTMLDivElement;

    target.classList.remove(styles.selected);
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, item?) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;

    const indexOfDragElement = data.indexOf(currentElement);

    if (item) {
      const indexOfDropElement = data.indexOf(item);
      setData(moveElement(data, indexOfDragElement, indexOfDropElement, currentElement));
    }

    changeStatus(target)

    target?.closest(`.${styles.cardContainer}`)?.classList.remove(styles.grabElement)
  }

  return (
    <div className={styles.cardsContainer}>
      {
        statusTypes.map(statusType => {
          return (
            <div key={statusType.status}>

              <h2 className={styles.title}>{statusType.name}</h2>

              <div key={statusType.status}
                   draggable={true}
                   onDragOver={dragOverHandler}
                   onDrop={dropHandler}
                   className={`${statusType.status} ${styles.row}`}
              >
                {data.map(object => {
                  if (object.status === statusType.status && JSON.stringify(object).includes(searchValue)) {
                    return (
                      <div key={object.id}
                           className={styles.cardContainer}
                           draggable={true}
                           onDragStart={(e) => dragStartHandler(e, object)}
                           onDragLeave={dragLeaveHandler}
                           onDragEnd={dragEndHandler}
                           onDragOver={dragOverHandler}
                           onDrop={(e) => dropHandler(e, object)}
                      >
                        <TaskCard object={object}/>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default CardsContainer;