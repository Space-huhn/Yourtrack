import axios from "axios";

export const fetchData = async (url, set) => {
  try {
    const response = await axios.get(url);
    set(response.data)
  } catch (e) {
    console.log(e)
  }
}
