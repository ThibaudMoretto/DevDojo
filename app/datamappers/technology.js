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
    },

    async getByAuthorId(id) {
        const result = await client.query(`
        SELECT technology.*
        FROM author_uses_technology
        JOIN technology
        ON author_uses_technology.technology_id = technology.id
        WHERE author_uses_technology.author_id = id
        `);
        return result.rows;
    },
}