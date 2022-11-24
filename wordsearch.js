const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
      }

      const VerticalArr = [];
      for (const array of letters) {
        for (const alpha in array) {
          if (!VerticalArr[alpha]) VerticalArr[alpha] = [];
          VerticalArr[alpha].push(array[alpha]);
        }
      }
      const VerticalJoin = VerticalArr.map(ls => ls.join(''))
      for (l of VerticalJoin) {
        if (l.includes(word)) return true
      }
    return false
}

module.exports = wordSearch


