const path = require('path');
const fs = require('fs');

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell

fs.writeFile(path.join(__dirname, 'task_2.txt'), 'Second task', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.readFile(path.join(__dirname, 'task_2.txt'), 'utf-8', (err1, data) => {
        if (err1) {
            console.log(err1);
        }
        fs.mkdir(path.join(__dirname, 'main'), {recursive: true}, (err2) => {
            if (err2) {
                console.log(err2);
                throw err2;
            }
            fs.writeFile(path.join(__dirname, 'main', 'task.txt'), data, (err3) => {
                if (err3) {
                    console.log(err3);
                    throw err3;
                }
                fs.unlink(path.join(__dirname, 'task_2.txt'), err4 => {
                    if (err4) {
                        console.log(err4);
                        throw err4;
                    }
                });
            });
        });
    });
});