// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)

const path = require('path');
const fs = require('fs');

// 1. Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })

// 2. Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;

// let onlineUsers = {name: 'Julia', age: 36, city: 'Lutsk'};
// let inPersonUsers = {name: 'Kerim', age: 18, city: 'Kyiv'};

// 3. і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME:
// ім'я з обєкту і т.д і всі пункти з нового рядка.

// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'),
//     `\nNAME: ${onlineUsers.name}
//     \nAGE: ${onlineUsers.age}
//     \nCITY: ${onlineUsers.city}`,
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
//
// fs.writeFile(path.join(__dirname, 'main', 'online', 'file.txt'),
//     `\nNAME: ${inPersonUsers.name}
//     \nAGE: ${inPersonUsers.age}
//     \nCITY: ${inPersonUsers.city}`,
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

let changeUsers = () => {

    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), ((err, data) => {
        if (err) {
            console.log(err);
            throw err
        }

        fs.readFile(path.join(__dirname, 'main', 'online', 'file.txt'), (err1, data1) => {
            if (err1) {
                console.log(err1)
                throw err
            }

            fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), data1, err2 => {
                if (err2) {
                    console.log(err2)
                    throw err2
                }

                fs.writeFile(path.join(__dirname, 'main', 'online', 'file.txt'), data, err2 => {
                    if (err2) {
                        console.log(err2)
                        throw err2
                    }
                });

            });
        });
    }));

}

changeUsers();



