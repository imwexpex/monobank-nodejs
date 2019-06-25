const fetch = require('node-fetch');

const URL = 'https://api.monobank.ua';

const call = ({ endpoint, body, token }) => {
    const method = 'GET';


    return fetch(`${URL}/${endpoint}`, {
        headers: {
            "X-Token": token
        },
        method,
        body: JSON.stringify(body)
    }).then(res => res.json());
};

module.exports = call;
