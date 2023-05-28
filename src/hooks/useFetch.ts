import { useState, useEffect } from "react";
import {IResponsible, ITodoListColumns} from "../types/interfaces";
import axios from 'axios';

const useFetch = (url: string) => {
  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get(url);
      setState(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData().then()
  }, [])

  return [state, setState, loading];
};

export default useFetch;