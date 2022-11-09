const breakingRecords = (scores = []) => {
  let minimumScore = scores[0]
  let maximumScore = scores[0]
  let timesBreakMin = 0
  let timesBreakMax = 0

  scores.forEach(score => {
    if (score < minimumScore) {
      minimumScore = score
      timesBreakMin += 1
    }
    if (score > maximumScore) {
      maximumScore = score
      timesBreakMax += 1
    }
  })
  return [timesBreakMax, timesBreakMin]
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])