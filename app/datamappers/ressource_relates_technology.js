const client = require('../client-pg');

module.exports = {

    async getOne(ressource_id, technology_id) {
        const result = await client.query(`SELECT * FROM ressource_relates_technology WHERE ressource_id = $1 AND technology_id = $2`, [ressource_id, technology_id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async getAllRelationsByRessource (ressource_id) {
        const result = await client.query(`SELECT * FROM ressource_relates_technology WHERE ressource_id = $1`, [ressource_id]);
        return result.rows;
    },

    async delete (ressource_id, technology_id) {
        await client.query(`DELETE FROM ressource_relates_technology WHERE ressource_id = $1 AND technology_id = $2`, [ressource_id, technology_id]);
    }

}