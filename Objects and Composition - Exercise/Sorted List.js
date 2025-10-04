function createSortedList() {
  const list = [];

  const sortedList = {
    add(element) {
      list.push(element);
      list.sort((a, b) => a - b);
    },
    remove(index) {
      if (index >= 0 && index < list.length) {
        list.splice(index, 1);
      }
    },
    get(index) {
      if (index >= 0 && index < list.length) {
        return list[index];
      }
    },
    get size() {
      return list.length;
    },
  };

  return sortedList;
}
