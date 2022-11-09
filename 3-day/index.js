const timeConversion = (str = '') => {
  let militaryHour
  const splStr = str.split(':')
  splStr[splStr.length - 1] = splStr.at(-1).slice(0, 2)
  let newHour
  if (str.includes('PM') && Number(splStr[0]) <= 12) {
    newHour = Number(splStr[0]) + 12
    if (splStr[0] === '12') {
      newHour = 12
    }
  } else {
    if (splStr[0] === '12') {
      newHour = '00'
    } else {
      newHour = splStr[0]
    }
  }
  splStr[0] = newHour
  militaryHour = splStr.join(':')
  return militaryHour
}

timeConversion('07:05:45PM')