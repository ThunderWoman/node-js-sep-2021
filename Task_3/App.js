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