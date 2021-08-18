const client = require('../client');

module.exports = {

    async getAll() {
        const result = await client.query(`SELECT * FROM ressource`);
        return result.rows;
    },

    async getById(id) {
        const result = await client.query(`SELECT * FROM ressource WHERE id = $1`, [id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async getByAuthorId(id) {
        const result = await client.query(`SELECT * FROM ressource WHERE author_id = $1`, [id]);
        return result.rows;
    },

    // addRessource() {
    //     client.query('INSERT INTO ressource () VALUES ($1, $2, $3) RETURNING id', [], callback);
    // },

    // deleteRessource(id, callback) {
    //     client.query('DELETE FROM ressource WHERE id=$1', [id], callback)
    // }
}