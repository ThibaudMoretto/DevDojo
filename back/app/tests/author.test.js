const axios = require("axios");
require('dotenv').config();

describe('Ressource routes', () => {

    it('should respond with status 200', async () => {
        const result = await axios({
            url: process.env.API_URL + '/author',
            method: 'GET',
            params: {},
        });
        expect(result.status).toBe(200);
    });

    it('should respond with status 200', async () => {
        const result = await axios({
            url: process.env.API_URL + '/author/1',
            method: 'GET',
            params: {},
        });
        expect(result.status).toBe(200);
    });



})