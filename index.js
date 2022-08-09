class Stack {
  #list;

  constructor(list) {
    this.#list = list;
  }

  push(prop) {
    // adds item to list
    this.#list.push(prop);
  }

  pop() {
    // removes and returns item from list
    return this.#list.pop();
  }

  peek() {
    // returns last item in list
    return this.#list[this.#list.length - 1];
  }

  get list() {
    return this.list
  }
}

class Queue {}

module.exports = { Stack, Queue };
