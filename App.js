const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const {apiRouter} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));

// const users = [];
// let error = '';
//
// app.get('/login', (req, res) => {
//     res.render('login');
// });
//
// app.post('/login', ({ body }, res) => {

//     todo loginController
//     const userExist = users.js.some(user => user.email === body.email);
//     if (userExist) {
//         error = 'User with this email exist!';
//         res.redirect('/error');
//         return;
//     }
//
//     users.js.push({ ...body, id: users.js.length ? users.js[users.js.length - 1].id + 1 : 1 });
//     res.redirect('/users.js');
// });
//
// app.get('/users.js', ({ query }, res) => {
//     if (Object.keys(query).length) {
//         let usersArray = [...users];
//         if (query.city) {
//             usersArray = usersArray.filter(user => user.city === query.city);
//         }
//         if (query.age) {
//             usersArray = usersArray.filter(user => user.age === query.age);
//         }
//
//         res.render('users', { users: usersArray });
//         return;
//     }
//
//     res.render('users', { users });
// });
//
// app.get('/users.js/:userId', ({ params }, res) => {
//     const user = users.find(user => user.id === +params.userId);
//     if (!user) {
//         error = `User with ID: ${params.userId} exist!`;
//         res.redirect('/error');
//         return;
//     }
//
//     res.render('user', { user });
// });
//
// app.get('/error', (req, res) => {
//     res.render('error', { error });
// });
//
//todo apiRouter

// app.use((req, res) => {
//     res.render('notFound');
// });

app.use(apiRouter);

app.listen(5200, () => {
    console.log('Server started on PORT 5200');
});