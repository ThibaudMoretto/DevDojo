const client = require('../client');

module.exports = {

    async getAll() {
        const result = await client.query(`SELECT * FROM ressource`);
        //Il peut y avoir plusieurs résultats donc on renvoie tous les résultats du tableau de réponse
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

    async add(data) {
        const result = await client.query(`
        INSERT INTO ressource (title, slug, description, link, publication_date, duration, is_free, difficulty_id, language_id, author_id, ressource_type_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING id, slug`,
        [data.title, data.slug, data.description, data.link, data.publication_date, data.duration, data.is_free, data.difficulty_id, data.language_id, data.author_id, data.ressource_type_id]
        );

        //On renvoie le slug et l'id de la ressource créée
        return result.rows;
    },

    async delete(id, callback) {
        await client.query('DELETE FROM ressource WHERE id=$1', [id], callback)
    },

    async linkToRequiredTechnology(ressource_id, technology_id) {
        await client.query(`
        INSERT INTO ressource_requires_technology (ressource_id, technology_id)
        VALUES ($1, $2)`,
        [ressource_id, technology_id])
    },

    async linkToRelatedTechnology(ressource_id, technology_id) {
        await client.query(`
        INSERT INTO ressource_relates_technology (ressource_id, technology_id)
        VALUES ($1, $2)`,
        [ressource_id, technology_id])
    },
}