const path = require('path');
const fs = require('fs');

// Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//

fs.writeFile(path.join(__dirname, 'classwork.txt'), 'First classwork', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.readFile(path.join(__dirname, 'classwork.txt'), (err1, data) => {
        if (err1) {
            console.log(err1);
            throw err;
        }
        fs.appendFile(path.join(__dirname, 'classwork_2.txt'), data.toString(), (err2) => {
            if (err2) {
                console.log(err2);
                throw err2;
            }
        });
    });
});