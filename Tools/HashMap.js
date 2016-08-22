class HashMap {
  constructor() {
    this.data = new Object();
  }

  put(key, value) {
    this.data[key] = value
  }

  get(key) {
    return this.data[key]
  }
}
