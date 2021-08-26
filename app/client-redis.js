const redis = require('redis');
// Comme on veut faire en sorte d'utiliser Redis avec des promesse on importe l'utilitaire promesify de node, qui va nous permettre de transformer les méthode callback en méthode promesse
const { promisify } = require('util');



const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    prefix: process.env.REDIS_PREFIX
});

console.log(redisClient);

// Il faut faire un bind pour refournir le contexte de l'instance client à la méthode promessifiée
const get = promisify(redisClient.get).bind(redisClient);
const set = promisify(redisClient.set).bind(redisClient);

module.exports = { get, set };