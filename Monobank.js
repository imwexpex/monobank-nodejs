const call = require("./networking");
const Endpoint = require("./endpoints");

class Monobank {
    constructor(token) {
        this.token = token;
    }

    async getCurrency() {
        return await call({ endpoint: Endpoint.BANK.CURRENCY });
    }

    async getPersonalInfo() {
        return await call({ endpoint: Endpoint.PERSONAL.CLIENT_INFO, token: this.token });
    }

    async getStatement({ from, to }) {
        return await call({ endpoint: `${Endpoint.PERSONAL.STATEMENT}/0/${from}/${to}`, token: this.token })
    }

}

module.exports = Monobank;
