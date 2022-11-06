const plusMinus = (arr = []) => {

  if (arr.length === 0) return

  let greatherThanZero = 0
  let lessThanZero = 0
  let zero = 0

  arr.forEach((number) => {
    if (number > 0) greatherThanZero += 1
    else if (number < 0) lessThanZero += 1
    else zero += 1
  })

  console.log(greatherThanZero / arr.length)
  console.log(lessThanZero / arr.length)
  console.log(zero / arr.length)
}

plusMinus([1, 5, 0, -5, 0, -12, 2])