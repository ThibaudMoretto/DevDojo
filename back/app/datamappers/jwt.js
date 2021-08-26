//A modifier par le client REDIS si besoin
const client = require('../client-pg');

module.exports = {

    async add(token) {
        const result = await client.query(`INSERT INTO token (token) VALUES ($1)`, [token]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async get(token) {
        const result = await client.query(`SELECT * FROM token WHERE token = $1`, [token]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async delete(token, callback){
        await client.query('DELETE FROM token WHERE token=$1', [token], callback) 
    }
}