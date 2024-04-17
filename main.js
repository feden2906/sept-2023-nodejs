const path = require('node:path');
const readline = require('node:readline/promises');
const fsPromises = require('node:fs/promises');
const os = require('node:os');
const EventEmitter = require('node:events');
const http = require('node:http');


async function foo() {
    try {
        // TODO: path
        // console.log(__filename)
        // console.log(path.basename(__filename));
        // console.log(path.dirname(__filename));
        // console.log(path.extname(__filename));
        // console.log(path.parse(__filename));
        // console.log(path.join(__dirname, 'foo', 'bar', 'baz'));
        // console.log(path.normalize('/home////maksym\////WORK/\///Lessons/////nodejs-sept-2023'));
        // console.log(path.isAbsolute('/home/maksym/WORK/Lessons/nodejs-sept-2023'));
        // console.log(path.isAbsolute('./home/maksym/WORK/Lessons/nodejs-sept-2023'));

        // TODO: readline
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // })
        // const name = await rl.question('Enter your name: ')
        // console.log(`Hello, ${name}!`);
        // const age = await rl.question('Enter your age: ')
        // console.log(`You are ${age} years old!`);
        // rl.close();

        // TODO: fs
        // const pathToTestFile = path.join(__dirname, 'www','test2.txt')
        // await fsPromises.writeFile(pathToTestFile, 'Hello, Node.js! 2')
        // const data = await fsPromises.readFile(pathToTestFile, 'utf-8')
        // console.log(data);
        // await fsPromises.appendFile(pathToTestFile, '\nHello, Node.js! 3')
        // await fsPromises.rename(pathToTestFile, path.join(__dirname,'test3.txt'))
        // await fsPromises.mkdir(path.join(__dirname, 'foo', 'bar'), {recursive: true})
        // await fsPromises.writeFile(path.join(__dirname, 'foo', 'bar', 'qwe.txt'), 'Hello, Node.js! 2')
        // await fsPromises.rmdir(path.join(__dirname, 'foo', 'bar'), {recursive: true})
        // await fsPromises.unlink(path.join(__dirname, 'test.txt'))
        // await fsPromises.copyFile(path.join(__dirname, 'www', 'test2.txt'), path.join(__dirname, 'copy-test2.txt'))
        // const stats = await fsPromises.stat(path.join(__dirname, 'copy-test2.txt'))
        // console.log(stats.isDirectory())

        // TODO os
        // console.log(os.arch())
        // console.log(os.cpus())
        // console.log(os.homedir())
        // console.log(os.hostname())
        // console.log(os.version())
        // console.log(os.platform())
        // console.log(os.machine())
        // console.log(os.uptime() / 60 / 60 / 24)
        // console.log(os.totalmem())
        // console.log(os.freemem())
        // console.log(os.networkInterfaces())

        // TODO Events
        // const myEmitter = new EventEmitter()
        // myEmitter.on('www', (...args) => {
        //     console.log('an event occurred! : ', args)
        // })
        // myEmitter.once('once-event', () => {
        //     console.log('once-event event occurred!')
        // })
        //
        // myEmitter.emit('www', 234, 455)
        // myEmitter.emit('www')
        // myEmitter.emit('www')
        // myEmitter.emit('www', 234222)
        // myEmitter.emit('once-event')
        // myEmitter.emit('once-event')
        // myEmitter.emit('once-event')
        // myEmitter.emit('once-event')
        // myEmitter.emit('once-event')


        // TODO HTTP server
        const server = http.createServer((req, res) => {
            res.end('okay');
        });
        server.listen(3000, '0.0.0.0', () => {
            console.log('Server is running at http://0.0.0.0:3000/');
        })
    } catch (e) {
        console.error(e)
    }
}

void foo();
