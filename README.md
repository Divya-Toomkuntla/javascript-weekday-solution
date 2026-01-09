# javascript-weekday-solution
# JavaScript Weekday Aggregation Function

## Problem Statement
Given a dictionary where keys are dates in the format `YYYY-MM-DD` and values are integers,
write a JavaScript function that:

1. Converts date keys into weekday names (Mon–Sun).
2. Sums values for the same weekday.
3. If a weekday is missing, assigns it the average of the previous and next weekday values.

## File
- `solution.js` → contains the required function

## Function Signature
```js
function solution(D)


## Example

### Input
```js
{
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4
}


## Output

{
  Mon: 2,
  Tue: 4,
  Wed: 6,
  Thu: 8,
  Fri: 10,
  Sat: 12,
  Sun: 14
}

