class MinStack {
  constructor() {
    this.data = [];
  }

  push(x) {
    this.data.push(x);
  }

  pop() {
    return this.data.pop();
  }

  top() {
    return this.data[this.data.length - 1];
  }

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
