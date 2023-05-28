import axios from "axios";

export const putData = async (url, object, set?) => {
  try {
    const response = await axios.post(url, object);
    // set(response.data)
  } catch (e) {
    console.log(e)
  }
}
