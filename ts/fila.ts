export function create(size = 10) {
  return [...new Array(size)];
}

export function enqueue(queue: any[], value: any) {
  const emptyIndex = queue.indexOf(undefined);
  if (emptyIndex === -1) {
    console.log("Fila cheia");
    return queue;
  }
  queue[emptyIndex] = value;
  return queue;
}

export function dequeue(queue: any[]) {
  if (queue[0] === undefined) {
    console.log("Fila vazia");
    return queue;
  }

  const firstValue = queue[0];

  for (let i = 0; i < queue.length; i++) {
    queue[i] = queue[i + 1];
  }

  return firstValue;
}

export function peek(queue: any[]) {
  return queue[0];
}

export function isEmpty(queue: any[]) {
  return queue[0] === undefined;
}

export function isFull(queue: any[]) {
  return queue[queue.length - 1] !== undefined;
}


export function size(queue: any[]) {
  return queue.filter((value) => value !== undefined).length;
}
