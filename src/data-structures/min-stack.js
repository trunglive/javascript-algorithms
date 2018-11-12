class MinStack {
  constructor() {
    this.data = [];
  }

  /**
   * @param {number} x
   * @return {number}
   */
  push(x) {
    this.data.push(x);
    return this.data.length;
  }

  /**
   * @return {number}
   */
  pop() {
    return this.data.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.data[this.data.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.data.length === 0) return;

    let min = this.data[0];
    for (let i = 1; i < this.data.length; i++) {
      if (min > this.data[i]) {
        min = this.data[i];
      }
    }

    return min;
  }
}

export default MinStack;
