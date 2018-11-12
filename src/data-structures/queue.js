class Queue {
  constructor() {
    this.clear();
  }

  /**
   * @return {undefined}
   */
  clear() {
    this.data = [];
    this.size = 0;
  }

  /**
   * @param {any} item
   * @return {number}
   */
  enqueue(item) {
    this.data.unshift(item);
    return ++this.size;
  }

  /**
   * @return {any}
   */
  dequeue() {
    if (!this.size) return;

    this.size--;
    return this.data.pop();
  }

  /**
   * @return {any}
   */
  peek() {
    if (!this.size) return;

    return this.data[this.size - 1];
  }
}

export default Queue;
