const mcache= require('memory-cache');
const { CACHE_KEY} = require('../config');



module.exports = function(duration){
    return (req,res,next)=>{
        const key = CACHE_KEY + req.originUrl || req.url;
        const cached = mcache.get(key);

        if(cached){
            return res.send(JSON.parse(cached));
        }
        else {
            res.sendResponse = res.send;
            res.send= body=>{
                mcache.put(key,body,duration * 1000);
                res.sendResponse(body);
            }
        }
        next();
    }
}