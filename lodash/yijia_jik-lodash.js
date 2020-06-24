var yijia_jik = {
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },

  isNaN: function (val) {
    if (val !== val) {
      return true
    } else {
      return false
    }
  },

  chunk: function (ary, size = 1) {
    var result = []
    var numOfAry = Math.floor(ary.length / size)
    for (var i = 0, j = 0; i < ary.length, j < numOfAry; i = i + size, j++) {
      result[j] = ary.slice(i, i + size)
    }
    if (ary.length % size) {
      result.push(ary.slice(i))
    }
    return result
  },

  compact: function (ary) {
    return ary.filter(it => it)
  },

  concat: function (...args) {
    var result = []
    for (var val of args) {
      if (!Array.isArray(val)) {
        result.push(val)
      } else {
        result.push(...val)
      }
    }
  },

  difference: function (ary, ...args) {
    var rest = []
    for (var ary of args) {
      rest.push(ary)
    }

    return ary.filter(id => rest.every(it => !it.includes(id)))
  },

  drop: function (ary, n = 1) {
    var result = []
    if (n >= ary.length) {
      return []
    }

    for (var i = n; i < nums.length; i++) {
      result.push(ary[i])
    }
    return result
  },

  fill: function (ary, val, start = 0, end = array.length) {
    return ary.map((it, idx) => {
      if (idx < end && idx >= start) {
        it = val
      }
    })
  },
  find: function () {

  },
  flatten: function (ary) {
    return [].concat(...ary)
  },

  head: function (ary) {
    return ary[0]
  },

  indexOf: function (ary, val, fromIdx = 0) {
    for (var i = fromIdx; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      }
    }
    return undefined
  },

  initial: function (ary) {
    ary.pop()
    return ary
  },

  intersection: function (...ary) {
    var allArrays = [].concat(...ary)
    var separateArrays = [...ary]
    var intersections = allArrays.filter(it => {
      return separateArrays.every(id => id.includes(it))
    }).reduce((result, curr) => {
      if (!result.includes(curr)) {
        result.push(curr)
      }
      return curr
    }, [])
  },

  join: function (ary, separator = ',') {
    var result = ""
    return ary.reduce((prev, curr) => {
      return prev + separator + curr
    })
  },

  last: function (ary) {
    return ary[ary.length - 1]
  },

  lastIndexOf: function (ary, val, fromIndex = ary.length - 1) {
    for (var i = ary.length - 1; i > 0; i--) {
      if (ary[i] == val) {
        return i
      }
    }
  },

  nth: function (ary, nth = 0) {
    if (n >= 0) {
      return ary[n]
    } else {
      return ary[ary.length - 1 - n]
    }
  },

  pull: function (ary, ...vals) {
    return ary.filter(it => !vals.includes(it))
  },

  pullAll: function (ary, aryOfVals) {
    return ary.filter(it => !aryOfVals.includes(it))
  },

  pullAt: function (ary, aryOfIdx) {
    var tmp = ary
    var result = tmp.filter((_, idx) => aryOfIdx.includes(idx))
    var ary = ary.filter((_, idx) => !aryOfIdx.includes(idx))
    return result
  },

  remove: function (ary, predicate) {

  },
  reverse: function (ary) {
    var result = []
    for (var i = ary.length; i > 0; i--) {
      result.push(ary[i])
    }
    return result
  },

  slice: function () {

  },
  sortedIndex: function (ary, val) {
    //chaode
    var low = 0
    var high = ary.length - 1
    while (ary[high] > ary[low]) {
      var mid = Math.trunc(low + (right - left) / 2)
      if (ary[mid] >= val) {
        high = mid
      } else {
        low = mid + 1
      }
    }
    return low != 0 ? low : -1
  },

  sortedIndexOf: function (ary, val) {
    //chaode
    var low = 0
    var high = ary.length - 1
    while (ary[high] > ary[low]) {
      var mid = Math.trunc(low + (right - left) / 2)
      if (ary[mid] >= val) {
        high = mid
      } else {
        low = mid + 1
      }
    }
    return low != 0 ? low : -1
  },

  tail: function (ary) {
    ary.unshift()
    return ary
  },

  take: function (ary, n) {
    return ary.slice(0, n)
  },

  takeRight: function (ary, n = 1) {
    if (n == 0) {
      return []
    } else if (n > ary.length) {
      return ary
    }
    return ary.slice(ary.length - n)
  },
  union: function (...ary) {
    var allArrays = [].concat(...ary)
    return allArrays.reduce((result, it) => {
      if (!(result.includes(it))) {
        result.push(it)
      }
      return it
    }, [])
  },
  uniq: function () {

  },

  unzip: function () {

  },
  without: function () {

  },
  xor: function () {

  },
  zip: function () {

  },
  zipObject: function () {

  },
  includes: function () {

  },
  sample: function () {

  },
  sampleSize: function () {

  },
  shuffle: function () {

  },
  size: function () {

  },
  eq: function () {

  },
  gt: function () {

  },
  gte: function () {

  },
  lt: function () {

  },
  lte: function () {

  },
  add: function () {

  },
  ceil: function () {

  },
  divide: function () {

  },
  floor: function () {

  },
  max: function () {

  },
  mean: function () {

  },
  min: function () {

  },
  multiply: function () {

  },
  round: function () {

  },
  substract: function () {

  },
  sum: function () {

  },
  at: function () {

  },
  defaults: function () {

  },
  get: function () {

  },
  set: function () {

  },
  has: function () {

  },
  hasIn: function () {

  },
  invert: function () {

  },
  keys: function () {

  },
  assign: function () {

  },
  omit: function () {

  },
  pick: function () {

  },
  values: function () {

  },
  camelCase: function () {

  },
  capitalize: function () {

  },
  deburr: function () {

  },
  endsWith: function () {

  },
  escape: function () {

  },
  kebabCase: function () {

  },
  lowerCase: function () {

  },
  lowerFirst: function () {

  },
  pad: function () {

  },
  padEnd: function () {

  },
  padStart: function () {

  },
  parseInt: function () {

  },
  repeat: function () {

  },
  replace: function () {

  },
  snakeCase: function () {

  },
  split: function () {

  },
  startCase: function () {

  },
  startsWith: function () {

  },
  trim: function () {

  },
  trimEnd: function () {

  },
  trimStart: function () {

  },
  truncate: function () {

  },
  unescape: function () {

  },
  upperCase: function () {

  },
  upperFirst: function () {

  },
  words: function () {

  },
  range: function () {

  },
}
