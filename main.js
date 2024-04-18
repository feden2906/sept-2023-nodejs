const path = require('node:path');
const fs = require('node:fs/promises');


async function foo() {
    try {
        const basePath = path.join(process.cwd(), 'baseFolder');
        await fs.mkdir(basePath, {recursive: true});

        const folderNames = ['folder1', 'folder2', 'folder3', "folder4", "folder5"];
        const filesNames = ['file1.txt', 'file2.txt', 'file3.txt', "file4.txt", "file5.txt"];

        await Promise.all(
            folderNames.map(async (folderName) => {
                const folderPath = path.join(basePath, folderName);
                await fs.mkdir(folderPath, {recursive: true});

                await Promise.all(
                    filesNames.map(async (fileName) => {
                        await fs.writeFile(path.join(folderPath, fileName), 'Hello World');
                    })
                )
            })
        )
        // for (const folderName of folderNames) {
        //     const folderPath = path.join(basePath, folderName);
        //     await fs.mkdir(folderPath, {recursive: true});
        //
        //     for (const fileName of filesNames) {
        //         await fs.writeFile(path.join(folderPath, fileName), 'Hello World');
        //     }
        // }

        const result = await fs.readdir(basePath)
        for (const folderName of result) {
            const folderPath = path.join(basePath, folderName);
            const stat = await fs.stat(folderPath);
            console.log('STAT : isDirectory: ', stat.isDirectory());

            const result = await fs.readdir(folderPath)
            for (const item of result) {
                const itemPath = path.join(folderPath, item);
                const stat = await fs.stat(itemPath);
                console.log('STAT : isDirectory: ', stat.isDirectory());
            }
        }
    } catch (e) {
        console.error(e)
    }
}

void foo();
