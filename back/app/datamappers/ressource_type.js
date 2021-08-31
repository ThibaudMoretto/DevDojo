const client = require('../client-pg');

module.exports = {

    async getOne(id) {
        const result = await client.query(`SELECT * FROM ressource_type WHERE id = $1`, [id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    }
}