module.exports = {

    nameCache(keyPrefix, paramName) {
        return (request, response, next) => {
            // set cache name
            if (request.params[paramName]) {
                response.express_redis_cache_name = keyPrefix + request.params[paramName];
            }else{
                response.express_redis_cache_name = keyPrefix
            }
            next();
        }
    }
}