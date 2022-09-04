export function generateRandomNumber(limit: number) {
  return Math.ceil(Math.random() * limit);
}

export function generateRandomColor() {
  return `rgb(${generateRandomNumber(255)}, ${generateRandomNumber(
    255
  )}, ${generateRandomNumber(255)})`;
}
