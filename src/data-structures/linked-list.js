class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.clear();
  }

  /**
   * @return {undefined}
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * @return {LinkedListNode}
   */
  getFirst() {
    return this.head ? this.head.value : undefined;
  }

  /**
   * @return {LinkedListNode}
   */
  getLast() {
    return this.tail ? this.tail.value : undefined;
  }

  /**
   * @param {any} value
   * @return {number}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return ++this.size;
  }

  /**
   * @param {any} value
   * @return {number}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return ++this.size;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return ++this.size;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteFirst() {
    if (!this.head) return undefined;

    const node = this.head;

    this.head = node.next;
    this.size--;

    return node.value;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteLast() {
    if (!this.tail) return undefined;

    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    this.size--;

    return deletedTail;
  }

  /**
   * @param {*[]} values
   * @return {LinkedList}
   */
  fromArray(values) {
    values.map(value => {
      this.append(value);
      this.size++;
    });

    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    if (!this.size) return [];

    const nodes = Array(this.size).fill(null);

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @return {LinkedList}
   */
  reverse() {
    // TODO
  }
}

export default LinkedList;
