const axios = require("axios");
require('dotenv').config();

describe('Ressource routes', () => {

    console.log(process.env.API_URL)

    it('should respond with status 200', async () => {
        const result = await axios({
            url: process.env.API_URL + '/ressource',
            method: 'GET',
            params: {},
        });
        
        expect(result.status).toBe(200);
    });

    it('should respond with status 200', async () => {
        const result = await axios({
            url: process.env.API_URL + '/ressource/1',
            method: 'GET',
            params: {},
        });
        expect(result.status).toBe(200);
    });



})