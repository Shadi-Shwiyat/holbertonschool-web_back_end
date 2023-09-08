export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Setters
  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new Error('Size must be a number');
    }
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new Error('Location must be a string');
    }
  }

  // Custom method to convert to number
  valueOf() {
    return this._size;
  }

  // Custom method to convert to string
  toString() {
    return `${this._location}`;
  }
}
