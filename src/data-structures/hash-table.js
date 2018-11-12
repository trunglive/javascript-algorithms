class HashTable {
  constructor() {
    this.buckets = new Array(32).fill(null).map(() => new LinkedList());

    this.keys = {};
  }

  /**
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    const hash = Array.from(key).reduce((acc, key) => {
      return acc + key.charCodeAt(0);
    }, 0);

    return hash % this.buckets.length;
  }

  /**
   * @param {string} key
   * @param {any} value
   * @return {undefined}
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;

    const bucket = this.buckets[keyHash];

    // TODO
    // find the node in bucket

    if (!node) {
      bucket.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  /**
   * @param {string} key
   * @return {any}
   */
  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];

    const bucket = this.buckets[keyHash];

    // TODO
    // find the node in bucket

    if (node) {
      return bucket.delete(node.value);
    }

    return null;
  }

  /**
   * @param {string} key
   * @return {any}
   */
  get(key) {
    const hashKey = this.hash(key);
    const bucket = this.buckets[hashKey];

    // TODO
    // find the node in bucket

    return node ? node.value.value : undefined;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return this.keys.hasOwnProperty(key);
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }
}
