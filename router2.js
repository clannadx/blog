
const url = require('url');
const ip = require('ip');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info'

const rules = [
    {
        pattern:/^\/$/,
        action:'static'
    },
    {
        pattern:/^\/.+\.(html|js|css|png|jpg|eot|svg|ttf|woff|woff2|otf)$/,
        action:'static'
    },
    {
        pattern:/^\/api\/blog/,
        action:'api'
    }
]

exports.router = function(req,res){

    let urlObj = url.parse(req.url);
    let pathname = urlObj.pathname;
    let action;
    logger.info(req.method + ' ' + pathname + ' ' + ip.address())
    logger.debug('Got cheese.');
    
    rules.forEach(rule=>{
        if(rule.pattern.test(pathname)){
            action = rule.action;
        }
    })

    if(action){
        require('./action/'+action)(req,res)
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end();
    }

}