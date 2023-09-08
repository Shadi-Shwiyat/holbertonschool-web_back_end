export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._code = code;
    this._name = name;
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
