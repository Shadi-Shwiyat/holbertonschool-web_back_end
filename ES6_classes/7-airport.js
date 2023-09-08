export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // Setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('Code must be a string');
    } else {
      this._code = newCode;
    }
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
