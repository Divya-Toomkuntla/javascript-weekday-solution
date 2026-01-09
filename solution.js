function solution(D) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let values = {
    Mon: 0, Tue: 0, Wed: 0,
    Thu: null, Fri: null, Sat: 0, Sun: 0
  };

  // Step 1: Sum known values
  for (let date in D) {
    const day = days[new Date(date).getDay()];
    values[day] += D[date];
  }

  const order = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Step 2: Linear interpolation for missing days
  let i = 0;
  while (i < order.length) {
    if (values[order[i]] !== null) {
      i++;
      continue;
    }

    let start = i - 1;
    let end = i;

    while (end < order.length && values[order[end]] === null) {
      end++;
    }

    const gap = end - start;
    const diff = values[order[end]] - values[order[start]];

    for (let k = 1; k < gap; k++) {
      values[order[start + k]] =
        values[order[start]] + Math.floor((diff * k) / gap);
    }

    i = end;
  }

  return values;
}
module.exports = solution;

