import {IMenuItems} from "../static/static-data";

export const returnNameByValue = (arrayOfObject: IMenuItems[], string: string): string => {
  let text;

  arrayOfObject.map((element) => {
    if (Object.values(element).includes(string)) {
      text = element.name;
    }
  })

  return text;
}