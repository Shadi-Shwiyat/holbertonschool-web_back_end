import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (typeof currency !== 'object') {
      throw new Error('Currency must be a object of class currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // Setters
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new Error('Amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  set currency(newCurrency) {
    if (typeof newCurrency !== 'object') {
      throw new Error('Currency must be a object');
    } else {
      this._currency = newCurrency;
    }
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
