export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw new Error('Square feet must be a number');
    }
    this._sqft = sqft;
  }

  // Setters
  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('Square feet must be a number');
    } else {
      this._sqft = newSqft;
    }
  }

  // Getters
  get sqft() {
    return this._sqft;
  }
}
