// eslint-disable-next-line import/prefer-default-export
export function randomer(max = 1, min = 0) {
  const newLocal = Math.random() * max + min;
  const random = Math.round(newLocal);
  return random;
}
