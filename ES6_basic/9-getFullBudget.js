import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const dollar = '$';
  const euro = ' euros';

  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `${dollar}${income}`,
    getIncomeInEuros: (income) => `${income}${euro}`,
  };

  return fullBudget;
}
