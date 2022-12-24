export const calc = (a:number, b:number) => {
  if (a & b) {
    return a
  }
  return a ^ b
}
