// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)

const path = require('path');
const fs = require('fs').promises;

// 1. Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
//
fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err){
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err){
        console.log(err);
        throw err;
    }
})

// 2. Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;

let onlineUsers = [
    {name: 'Julia', age: 36, city: 'Lutsk'},
    {name: 'Yevgenii', age: 34, city: 'Kyiv'},
    {name: 'Maria', age: 34, city: 'Kyiv'}];
let inPersonUsers = [
    {name: 'Kerim', age: 18, city: 'Kyiv'},
    {name: 'Emir', age: 16, city: 'Lutsk'},
    {name: 'Natalia', age: 55, city: 'Lutsk'}];

// 3. і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME:
// ім'я з обєкту і т.д і всі пункти з нового рядка.
//

// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'julia.txt'),
//     `\nNAME: ${onlineUser.name}
//     \nAGE: ${onlineUser.age}
//     \nCITY: ${onlineUser.city}`,
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
//
// fs.writeFile(path.join(__dirname, 'main', 'online', 'kerim.txt'),
//     `\nNAME: ${inPersonUser.name}
//     \nAGE: ${inPersonUser.age}
//     \nCITY: ${inPersonUser.city}`,
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });

// 2 варіант
const usersArr = async (arr, folder) => {
    await Promise.all(arr.map(async user => {
            await fs.writeFile(path.join(__dirname, 'main', folder, `${user.name}.txt`), `${user.name}\n${user.age}\n${user.city}\n`)
        })
    );
}
usersArr(onlineUsers, 'online');
usersArr(inPersonUsers, 'inPerson');

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

// let changeUsers = () => {
//
//     fs.readFile(path.join(__dirname, 'main', 'inPerson', 'julia.txt'), ((err, data) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//
//         fs.readFile(path.join(__dirname, 'main', 'online', 'kerim.txt'), (err1, data1) => {
//             if (err1) {
//                 console.log(err1)
//                 throw err
//             }
//
//             fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'julia.txt'), data1, err2 => {
//                 if (err2) {
//                     console.log(err2)
//                     throw err2
//                 }
//
//                 fs.writeFile(path.join(__dirname, 'main', 'online', 'kerim.txt'), data, err2 => {
//                     if (err2) {
//                         console.log(err2)
//                         throw err2
//                     }
//                 });
//
//             });
//         });
//     }));
//
// }
//
// changeUsers();

// 2варіант

const foo = async (moveFrom, moveTo) => {
    const pathToDir = path.join(__dirname, 'main', moveFrom);
    const arrFileNames = await fs.readdir(pathToDir);

    arrFileNames.map(fileName => {
        if (!fileName.includes('new_')) {
            fs.rename(path.join(pathToDir, fileName), path.join(__dirname, 'main', moveTo, `new_${fileName}`));
        }
    });
}
foo('inPerson', 'online');
foo('online', 'inPerson');

