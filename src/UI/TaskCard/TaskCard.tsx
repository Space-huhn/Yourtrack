import React, {useState} from 'react';
import styles from './TaskCard.module.css';
import CardCategories from "../CardCategories/CardCategories";
import Responsible from "../Responsible/Responsible";
import {statusTypes} from "../../static/static-data";
import {ITask} from "../../interfaces";

const TaskCard = ({object, clickHandler, changeStatus}) => {
  const [currentElement, setCurrentElement] = useState<ITask>(object)
  const [status, setStatus] = useState<ITask>(object)


  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, object) => {
    const target = e.target as HTMLDivElement;
    setCurrentElement(object);
    console.log(currentElement)

    // target.classList.add(styles.selected);
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    const target = e.target as HTMLDivElement;

    if (!currentElement) {
      return;
    }

    statusTypes.map((statusObject) => {
      if (target.closest(`.${statusObject.status}`)) {
        clickHandler(e, currentElement, statusObject.status)
      }
    })

    // setCurrentElement((prev) => ({...prev, status = element.status}))
    // setCurrentElement({
    //   ...currentElement,
    //   status: 'something'
    // })

    // const target = e.target as HTMLDivElement;
    // target.classList.remove(styles.selected);
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    // const target = e.target as HTMLDivElement;
    // target.classList.add(styles.grabElement)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, element) => {
    e.preventDefault()
    e.stopPropagation()

    const target = e.target as HTMLDivElement;

    if (!currentElement) {
      return;
    }

    setStatus(element)

    // statusTypes.map((statusObject) => {
    //
    //   if (target.closest(`.${statusObject.status}`)) {
    //     // console.log("drop element", element)
    //     console.log("current", currentElement)
    //
    //     // console.log(statusObject.status)
    //     clickHandler(e, currentElement, statusObject.status)
    //     // console.log("new current", currentElement)
    //     // changeStatus(e, currentElement, 'completed')
    //   }
    // })

    // setCurrentElement((prev) => ({...prev, status = element.status}))
    // setCurrentElement({
    //   ...currentElement,
    //   status: 'something'
    // })

    // const indexOfCurrentElement = props.config.fieldsToShow.indexOf(currentElement);
    // props.setConfig(prev => ({...prev, fieldsToShow: moveElement([...props.config.fieldsToShow], indexOfCurrentElement, index)}))

    // const target = e.target as HTMLDivElement;
    // target.classList.remove(styles.grabElement)
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // const target = e.target as HTMLDivElement;
    // target.classList.remove(styles.grabElement)
  }


  return (
    <div className={styles.card}
         draggable={true}
         onDragStart={(e) => dragStartHandler(e, object)}
         // onDragLeave={dragLeaveHandler}
         onDragEnd={dragEndHandler}
         onDragOver={dragOverHandler}
         onDrop={(e) => dropHandler(e, object)}

         // onClick={(event) => clickHandler(event, object, "completed")}
        >
      <CardCategories object={object}/>
      <h2 className={styles.title}>{object.title}</h2>
      <p className={styles.text}>{object.description}</p>
      <hr className={styles.line}/>
      {
        object.responsible.map((element, index)=> {
          return <Responsible key={index} object={element}/>
        })
      }
    </div>
  );
};

export default TaskCard;