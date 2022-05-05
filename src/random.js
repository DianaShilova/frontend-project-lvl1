const randomer = (max = 1, min = 0) => {
  const newLocal = Math.random() * max + min;
  const random = Math.round(newLocal);
  return random;
};
export default randomer;
