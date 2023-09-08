export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new Error('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new Error('Motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new Error('Motor must be a string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Setters
  set brand(newBrand) {
    if (typeof newBrand !== 'string') {
      throw new Error('Brand must be a string');
    } else {
      this._brand = newBrand;
    }
  }

  set motor(newMotor) {
    if (typeof newMotor !== 'string') {
      throw new Error('Motor must be a string');
    } else {
      this._motor = newMotor;
    }
  }

  set color(newColor) {
    if (typeof newColor !== 'string') {
      throw new Error('Color must be a string');
    } else {
      this._color = newColor;
    }
  }

  cloneCar() {
    const { constructor } = this;
    return new constructor(this._brand, this._motor, this._color);
  }
}
