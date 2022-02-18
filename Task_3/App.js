const path = require('path');
const fs = require('fs').promises;

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new
//
// const makeDirs = async () => {
//     try {
//         await fs.mkdir(path.join(__dirname, 'First'));
//         await fs.mkdir(path.join(__dirname, 'First', 'Second'));
//         await fs.mkdir(path.join(__dirname, 'First', 'Third'));
//     } catch (e) {
//         console.log(e);
//     }
// };
//
// makeDirs();
//
// const textFiles = [
//     {Name: 'File_1', Text: 'First information'},
//     {Name: 'File_2', Text: 'Second information'},
//     {Name: 'File_3', Text: 'Third information'}];
//
// const writeFiles = async (arr, folder) => {
//     await Promise.all(arr.map(async file => {
//             await fs.writeFile(path.join(__dirname, 'First', folder, `${file.Name}.txt`), `${file.Text}`)
//         })
//     );
// };
//
// writeFiles(textFiles, 'Second');
// writeFiles(textFiles, 'Third');
//
// const removeFilesDirs = async (moveFrom, moveTo) => {
//     const pathToDir = path.join(__dirname, 'First', moveFrom);
//     const removeFile = await fs.readdir(pathToDir);
//
//     removeFile.map(fileDirName => {
//         if (fileDirName.includes('.txt')) {
//             fs.truncate(path.join(__dirname, 'First', fileDirName, err => {
//                 if (err) throw err;
//                 console.log('File is clear');
//             });
//         }
//     )
//         ;
//     else
//         if (!fileDirName.includes('new_')) {
//             fs.rename(path.join(pathToDir, fileDirName), path.join(__dirname, 'First', moveTo, `new_${fileDirName}`));
//         }
//     }
//
// };
// removeFilesDirs('Second', 'online');
// removeFilesDirs('online', 'inPerson');

const reFileDir = async (folder, name) => {
    await fs.readdir(folder, (err, data) => {
        if (err) {
            throw err;
        }

        data.forEach(value => {
            if (value.includes('.txt') || value.includes(name.json)) {
                fs.truncate(path.join(folder, value), (err) => {
                    if (err) {
                        throw err;
                    }
                });
            } else {
                fs.rename(
                    path.join(folder, value),
                    path.join(folder, `new_${value}`),
                    (err) => {
                        if (err) {
                            throw err;
                        }
                    });
            }
        });
    });
};

reFileDir('Second', 'File_1.txt');