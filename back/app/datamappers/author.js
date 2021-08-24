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
        INSERT INTO author (name, description, image, github_account, youtube_account, website, twitter_account, linkedin_acccount, twitch_account)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING name`,
        [data.name, data.description, data.image, data.github_account, data.youtube_account, data.website, data.twitter_account, data.linkedin_acccount, data.language_id]
        );

        //On renvoie le name de l'auteur créée
        return result.rows[0];
    },

    async update(data, id) {

        const result = await client.query(`
        UPDATE author SET name = $1, description = $2, image = $3, github_account = $4, youtube_account = $5, website = $6, twitter_account = $7, linkedin_acccount = $8, twitch_account = $9, updated_at = NOW() WHERE id = $10 RETURNING *
        `,
            [data.name, data.description, data.image, data.github_account, data.youtube_account, data.website, data.twitter_account, data.linkedin_acccount, data.language_id, id]);
        //On renvoie toutes les infos de la ressource modifiée
        return result.rows;
    },

    delete(id, callback) {
        client.query('DELETE FROM author WHERE id=$1', [id], callback)
    }

}