export const handleValueBoard = (
  initialArr,
  isEqualTo,
  isEqualTo2,
  returnValue
) => {
  return initialArr.map((item, i) => {
    if (i === isEqualTo && item === isEqualTo2) {
      return returnValue;
    }

    return item;
  });
};
