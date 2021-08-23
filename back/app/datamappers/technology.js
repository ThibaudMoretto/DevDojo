const client = require('../client');

module.exports = {
    async getAll() {
        const result = await client.query(`SELECT * FROM technology`);
        return result.rows;
    },

    async getById(id) {
        const result = await client.query(`SELECT * FROM technology WHERE id = $1`, [id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    }

}