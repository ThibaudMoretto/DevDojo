const client = require('../client');

module.exports = {

    async getAll() {
        const result = await client.query(`SELECT * FROM author`);
        //Il peut y avoir plusieurs résultats donc on renvoie tous les résultats du tableau de réponse
        return result.rows;
    },

    async getById(id) {
        const result = await client.query(`SELECT * FROM author WHERE id = $1`, [id]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async getByName(name) {
        const result = await client.query(`SELECT * FROM author WHERE name = $1`, [name]);
        //Il n'y a qu'un seul résultat donc on prends le premier du tableau de réponse
        return result.rows[0];
    },

    async add(data) {
        const result = await client.query(`
        INSERT INTO author (name, description, github_account, youtube_account, website, twitter_account, linkedin_acccount, twitch_account)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING name`,
        [data.name, data.description, data.github_account, data.youtube_account, data.website, data.twitter_account, data.linkedin_acccount, data.language_id]
        );

        //On renvoie le name de l'auteur créée
        return result.rows[0];
    },

    delete(id, callback) {
        client.query('DELETE FROM author WHERE id=$1', [id], callback)
    }

}