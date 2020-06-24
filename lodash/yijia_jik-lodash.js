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
  find: function (????) {

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
  var seperateArrays = [...ary]
  return allArrays.filter(it => {
    seperateArrays.every(id => id.includes(it))
  })
},

join: function (array, [separator = ',']) {

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
