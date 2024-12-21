const lodash = require("lodash");

const names = ['name1','name2','name3']

const capitalize = lodash.map(names,lodash.capitalize)

console.log(capitalize);
