export function sum(values: string[]) {
  let total: number = 0;
  for (let value of values) {
    const number = Number(value);
    if (number) {
      total += number;
    }
  }

  return total;
}
