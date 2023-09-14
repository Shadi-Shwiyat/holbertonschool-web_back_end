export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  try {
    const dividend = numerator / denominator;
    return dividend;
  } catch (error) {
    throw new Error(error.toString());
  }
}
