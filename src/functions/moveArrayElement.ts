export const moveElement = (arr, from, to, element) => {
  if (from === to) {
    return;
  }

  arr.splice(from, 1);

  if (to === 0) {
    return arr.splice(0, 0, element)
  }

  if (from < to) {
    return arr.splice(to + 1, 0, element);
  }
  if (from > to) {
    return arr.splice(to - 1, 0, element);
  }
}