const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const mail = require('./mail')
const server = http.createServer((req, res) => {

	for(var key in require.cache){
		if(!key.includes('node_modules')){
			delete require.cache[key];
		}
	}
	require('./router2').router(req,res);
});

//监听异常事件
process.on('uncaughtException', function (err) {
	console.log(err)
	mail.send('[服务器异常]' + err.toString(),err.stack)
})

server.listen(port, hostname, () => {
	console.log(`Server running`);
});