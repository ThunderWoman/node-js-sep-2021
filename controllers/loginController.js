const { users } = require('../db');

let error = '';
class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    loginUser({body}, res) {
        const userExist = users.some(user => user.email === body.email);
        if (userExist) {
            error = 'User with this email exist!';
            res.redirect('/error');
            return;
        }

        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users.js');
    }
}
module.exports = new LoginController();