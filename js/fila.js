"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.size = exports.isFull = exports.isEmpty = exports.peek = exports.dequeue = exports.enqueue = exports.create = void 0;
function create(size = 10) {
    return [...new Array(size)];
}
exports.create = create;
function enqueue(queue, value) {
    const emptyIndex = queue.indexOf(undefined);
    if (emptyIndex === -1) {
        console.log("Fila cheia");
        return queue;
    }
    queue[emptyIndex] = value;
    return queue;
}
exports.enqueue = enqueue;
function dequeue(queue) {
    if (queue[0] === undefined) {
        console.log("Fila vazia");
        return queue;
    }
    const firstValue = queue[0];
    for (let i = 0; i < queue.length - 1; i++) {
        queue[i] = queue[i + 1];
    }
    return firstValue;
}
exports.dequeue = dequeue;
function peek(queue) {
    return queue[0];
}
exports.peek = peek;
function isEmpty(queue) {
    return queue[0] === undefined;
}
exports.isEmpty = isEmpty;
function isFull(queue) {
    return queue[queue.length - 1] !== undefined;
}
exports.isFull = isFull;
function size(queue) {
    return queue.filter((value) => value !== undefined).length;
}
exports.size = size;
