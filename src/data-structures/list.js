class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * @param {any} address
   * @return {any}
   */
  get(address) {
    return this.memory[address];
  }

  /**
   * @param {any} value
   * @return {number}
   */
  push(value) {
    this.memory[this.length] = value;
    return ++this.length;
  }

  /**
   * implement pop method from scratch
   *
   * @return {any}
   */
  pop() {
    if (this.length === 0) return;

    const lastAddress = this.length - 1;
    const value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    return value;
  }

  /**
   * implement unshift method from scratch
   *
   * @param {any} value
   * @return {number}
   */
  unshift(value) {
    let i = this.length;

    while (i) {
      this.memory[i] = this.memory[i - 1];
      i--;
    }

    this.memory[0] = value;

    return ++this.length;
  }

  /**
   * implement shift method from scratch
   *
   * @return {any}
   */
  shift() {
    const value = this.memory[0];

    let i = 0;
    while (i < this.length - 1) {
      this.memory[i] = this.memory[i + 1];
      i++;
    }

    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

export default List;
