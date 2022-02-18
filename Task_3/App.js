const path = require('path');
const fs = require('fs').promises;

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new
//
const makeDirs = async () => {
    try {
        await Promise.all([
            fs.mkdir(path.join(__dirname, 'First')),
            fs.mkdir(path.join(__dirname, 'First', 'Second')),
            fs.mkdir(path.join(__dirname, 'First', 'Third'))
        ])
    } catch (e) {
        console.log(e);
    }
};

makeDirs();

const textFiles = [
    {Name: 'File_1', Text: 'First information'},
    {Name: 'File_2', Text: 'Second information'},
    {Name: 'File_3', Text: 'Third information'}];

const writeFiles = async (arr, folder) => {
    await Promise.all(arr.map(async file => {
            await fs.writeFile(path.join(__dirname, 'First', folder, `file.txt`), `Name: ${file.Name} /n Text: ${file.Text}`)
        })
    );
};

writeFiles(textFiles, 'Second');
writeFiles(textFiles, 'Third');

async function reMake(firstFolder, secondFolder) {
    try {
        const [dataFromFirstFile, dataFromSecondFile] = await Promise.all([
            fs.readFile(path.join(__dirname, 'First', firstFolder, 'file.txt'), 'utf8'),
            fs.readFile(path.join(__dirname, 'First', secondFolder, 'file.txt'), 'utf8')
        ]);

        await Promise.all([
            fs.appendFile(path.join(__dirname, 'First', firstFolder, 'file.txt'), dataFromSecondFile, {flag: 'w'}),
            fs.appendFile(path.join(__dirname, 'First', secondFolder, 'file.txt'), dataFromFirstFile, {flag: 'w'})
        ])
    } catch (err) {
        console.log(err)
    }
}
reMake('Second', 'Third');
reMake('Third','Second');
//
// function pathCheck() {
//     fs.readdir(path.join(__dirname, 'newDir2'),
//         (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             data.forEach((item) => {
//                 fs.stat(path.join(__dirname, 'newDir2', item),
//                     (err1, stats) => {
//                         if (err1) {
//                             console.log(err1);
//                             throw err1;
//                         }
//                         if (stats.isFile()) {
//                             fs.truncate(path.join(__dirname, 'newDir2', item),
//                                 (err3) => {
//                                     if (err3) {
//                                         console.log(err3);
//                                         throw err3
//                                     }
//                                 })
//                         } else {
//                             fs.rename(path.join(__dirname, 'newDir2', item),
//                                 path.join(__dirname, 'newDir2', `_new${item}`),
//                                 (err4) => {
//                                     if (err4) {
//                                         console.log(err4);
//                                         throw err4;
//                                     }
//                                 });
//                         }
//                     }
//                 );
//             });
//         }
//     )
// }
//
//
// pathCheck();