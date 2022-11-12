function splitWord(word = '') {
  word = word.replace('()', '')
  let result = []
  let idxSubstrings = [0]
  let wordAcc = ''

  for (const key in word) {
    const element = word[key]
    if (element === element.toUpperCase()) {
      idxSubstrings.push(key - 0)
    }
  }

  idxSubstrings.forEach((index, idx) => {
    result.push(word.substring(index, idxSubstrings[idx + 1]).toLowerCase())
  })

  wordAcc = result.join(' ').trim()
  console.log(wordAcc)
  // return wordAcc
}

function capitalizeWords(array = [], type = '') {
  let capitalizeArray = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    let str = ''
    if (type === 'class') {
      str = element.charAt(0).toUpperCase() + element.slice(1)
    } else {
      if (i !== 0) {
        str = element.charAt(0).toUpperCase() + element.slice(1)
      } else {
        str = element
      }
    }
    capitalizeArray.push(str)
  }
  return capitalizeArray
}

function combineWord(words = []) {
  let lastWordSpl = words[2].split(' ')
  let result = []
  let wordAcc = ''

  if (words[1] === 'V') {
    result = capitalizeWords(lastWordSpl)
  } else if (words[1] === 'C') {
    result = capitalizeWords(lastWordSpl, 'class')
  } else if (words[1] === 'M') {
    result = capitalizeWords(lastWordSpl)
    result.push('()')
  }
  wordAcc = result.join('')
  console.log(wordAcc)
  // return wordAcc
}

function processData(data = '') {
  let words = data.split('\n')

  words.forEach((element) => {
    let word = element.split(';')
    let lastWord = word[2]
    if (element.startsWith('S')) splitWord(lastWord)
    else if (element.startsWith('C')) combineWord(word)
    else return element
  })
}

processData(`S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter`)