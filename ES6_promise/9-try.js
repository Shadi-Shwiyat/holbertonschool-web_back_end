export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const response = mathFunction();
    queue.push(response);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(error.toString());
    queue.push('Guardrail was processed');
  }
  return queue;
}
