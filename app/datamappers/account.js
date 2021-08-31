const client = require('../client-pg');

module.exports = {

    async getByEmail(email) {
        const result = await client.query(`SELECT * FROM account WHERE email = $1`, [email]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    }
    
}