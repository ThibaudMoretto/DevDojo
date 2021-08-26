const { Pool } = require('pg');

// Si on ne fourni aucune information au client, il va se servir dans les variables d'environnement (PGUSER, PGDATABASE, PGHOST…)
// Ce client se comporte exactement comme psql. Nous n'avons besoin de renseigner que la database dans le .env
// const client = new Client();
const client = new Pool(
{
    connectionTimeoutMillis: 1000,
    idleTimeoutMillis: 1000,
    //Nombre max de clients autorisés à se connecter simultanément
    max: 5,
    ssl: {
      rejectUnauthorized: false
   }
  });

module.exports = client;