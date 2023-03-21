function sum(...nums) {
  const sumAll = (sum, val) => sum + val;
  const value = 0;
  return nums.reduce(sumAll, value);
}

console.log(sum(1, 2, 3, 4, 5));
