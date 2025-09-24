export const compareArrs  = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
      const values1 = Object.values(arr1[i]);
      const values2 = Object.values(arr2[i]);
      if (!compareArrs(values1, values2)) {
        return false;
      }
    }else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}