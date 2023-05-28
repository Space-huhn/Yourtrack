export const filterObject = (array: Array<object>, key: string, value: string) => {
  array.filter(object => {
    if (object[key] === value) {
      return object;
    }
  })
}