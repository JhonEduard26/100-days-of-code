const miniMaxSum = (arr = []) => {
  const ordenedArr = arr.sort((a, b) => a - b)

  const minSum = ordenedArr.reduce((prev, current, idx) => {
    if (idx === ordenedArr.length - 1) current = 0
    return current += prev
  })

  const maxSum = ordenedArr.reduce((prev, current, idx) => {
    if (idx === 1) prev = 0
    return current += prev
  })

  console.log(minSum, maxSum)
}

miniMaxSum([7, 69, 2, 221, 8974])