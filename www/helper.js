const foo = () => {
    console.log(__dirname)
    console.log(__filename)
    console.log(process.cwd())
}
console.log('hey from helper.js')
module.exports = { foo };
