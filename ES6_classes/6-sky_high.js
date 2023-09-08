import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new Error('Floors must be a number');
    }
    this._floors = floors;
  }

  // Setters
  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('Square feet must be a number');
    } else {
      this._sqft = newSqft;
    }
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new Error('Square feet must be a number');
    } else {
      this._floors = newFloors;
    }
  }

  // Getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
