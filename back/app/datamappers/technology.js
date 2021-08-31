const client = require('../client-pg');

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

    async getRessourceRelated(id) {
        const result = await client.query(`
        SELECT technology.*
        FROM ressource_relates_technology
        JOIN technology
        ON ressource_relates_technology.technology_id = technology.id
        WHERE ressource_relates_technology.ressource_id = $1
        `, [id]);
        return result.rows;
    },

    async getRessourceNeeds(id) {
        const result = await client.query(`
        SELECT technology.*
        FROM ressource_requires_technology
        JOIN technology
        ON ressource_requires_technology.technology_id = technology.id
        WHERE ressource_requires_technology.ressource_id = $1
        `, [id]);
        return result.rows;
    },

    async getAuthorTechnologies(id) {
        const result = await client.query(`
        SELECT technology.*
        FROM author_relates_technologies
        JOIN technology
        ON author_relates_technologies.technology_id = technology.id
        WHERE author_relates_technologies.author_id = $1
        `, [id]);
        return result.rows;
    }
}