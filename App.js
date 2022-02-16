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

// let onlineUser = {name: 'Julia', age: 36, city: 'Lutsk'};
// let inPersonUser = {name: 'Kerim', age: 18, city: 'Kyiv'};

// 3. і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME:
// ім'я з обєкту і т.д і всі пункти з нового рядка.

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

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

let changeUsers = () => {

    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'julia.txt'), ((err, data) => {
        if (err) {
            console.log(err);
            throw err
        }

        fs.readFile(path.join(__dirname, 'main', 'online', 'kerim.txt'), (err1, data1) => {
            if (err1) {
                console.log(err1)
                throw err
            }

            fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'julia.txt'), data1, err2 => {
                if (err2) {
                    console.log(err2)
                    throw err2
                }

                fs.writeFile(path.join(__dirname, 'main', 'online', 'kerim.txt'), data, err2 => {
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



