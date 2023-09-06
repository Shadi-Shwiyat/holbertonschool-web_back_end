export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    const arr = [task, task2];
    const num = 0;
    if (num === 1) {
      console.log(arr);
    }
  }

  return [task, task2];
}
