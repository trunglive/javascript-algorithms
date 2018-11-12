class Stack {
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
  push(item) {
    this.data.push(item);
    return ++this.size;
  }

  /**
   * @return {any}
   */
  pop() {
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

export default Stack;
