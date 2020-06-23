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

  chunk: function (ary, pivot) {
    return ary.reduce((result, curr, idx) => {
      if (idx <= pivot) {
        result[0].push(curr)
      } else {
        result[1].push(curr)
      }

      return curr
    }, [[], []])
  },

  compact: function () {

  },
  concat: function () {

  },
  difference: function () {

  },
  drop: function () {

  },
  fill: function () {

  },
  find: function () {

  },
  flatten: function () {

  },
  head: function () {

  },

  indexOf: function () {

  },
  initial: function () {

  },
  intersection: function () {

  },
  join: function () {

  },
  last: function () {

  },
  lastIndexOf: function () {

  },
  nth: function () {

  },
  pull: function () {

  },
  pullAll: function () {

  },
  pullAt: function () {

  },
  remove: function () {

  },
  reverse: function () {

  },
  slice: function () {

  },
  sortedIndex: function () {

  },
  sortedIndexOf: function () {

  },
  tail: function () {

  },
  take: function () {

  },
  takeRight: function () {

  },
  union: function () {

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
