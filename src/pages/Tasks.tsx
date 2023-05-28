import React, {useState} from 'react';
import styles from './Tasks.module.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TaskPageContent from "../components/TaskPageContent/TaskPageContent";
import useFetch from "../hooks/useFetch";

const Tasks = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData, loading] = useFetch(`http://localhost:3004/todoListColumns`);

  return (
    <div className={styles.pageContent}>
      <Header setSearchValue={setSearchValue}/>
        <TaskPageContent data={data}
                         setData={setData}
                         searchValue={searchValue}
                         loading={loading}
        />
      <Footer/>
    </div>
  );
};

export default Tasks;