const client = require('../client-pg');

module.exports = {

    async getByAuthorId(id) {
        const result = await client.query(`SELECT * FROM author_relates_technologies WHERE author_id = $1`, [id]);
        return result.rows;
    },

    async getOne(author_id, technology_id) {
        const result = await client.query(`SELECT * FROM author_relates_technologies WHERE author_id = $1 AND technology_id = $2`, [author_id, technology_id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async linkToAuthor(author_id, technology_id) {
        await client.query(`
        INSERT INTO author_relates_technologies (author_id, technology_id)
        VALUES ($1, $2)`,
            [author_id, technology_id])
    },

    async delete (author_id, technology_id) {
        await client.query(`DELETE FROM author_relates_technologies WHERE author_id = $1 AND technology_id = $2`, [author_id, technology_id]);
    }

}