console.log('Node module wrapper demo');

console.log('file name in wrapper explorer', __filename)

console.log('dit name in wrapper explorer', __dirname)

module.exports.greet = function (name) {
    console.log(`Hello ${name}`);
}