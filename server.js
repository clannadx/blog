const http = require('http');

const hostname = '94.191.26.194';
const port = 80;

const server = http.createServer((req, res) => {

	for(var key in require.cache){
		if(!key.includes('node_modules')){
			delete require.cache[key];
		}
	}
	require('./router').router(req,res);
});

server.listen(port, hostname, () => {
	console.log(`Server running`);
});