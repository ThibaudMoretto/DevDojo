const client = require('../client');

module.exports = {

    async getAll() {
        const result = await client.query(`SELECT * FROM author`);
        return result.rows;
    },

    async getById(id) {
        const result = await client.query(`SELECT * FROM author WHERE id = $1`, [id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    addAuthor() {
        client.query('INSERT INTO author () VALUES ($1, $2, $3) RETURNING id', [], callback);
    },

    deleteAuthor(id, callback) {
        client.query('DELETE FROM author WHERE id=$1', [id], callback)
    }

}