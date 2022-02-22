require('dotenv').config();
require('module-alias/register');

const config = require('@config');

const app = require('@app');

console.log("config => ",config)

app.listen(config.app.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`servido rodando na porta http://localhost:${config.app.port}`);
})