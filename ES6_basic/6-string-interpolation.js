export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  const sentance = {
    part1: 'As of ',
    part2: ', it was the seventh-highest income county in the United States, with a per capita personal income of ',
    part3: '. As of 2015, San Francisco proper had a GDP of ',
    part4: ', and a GDP per capita of ',
    part5: '.',
  };

  return `${sentance.part1 + year + sentance.part2 + budget.income + sentance.part3 + budget.gdp + sentance.part4 + budget.capita + sentance.part5}`;
}
