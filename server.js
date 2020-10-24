const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const mail = require('./mail')
const server = http.createServer((req, res) => {

	for (var key in require.cache) {
		if (!key.includes('node_modules')) {
			delete require.cache[key];
		}
	}
	require('./router2').router(req, res);
});
//监听异常事件
process.on('uncaughtException', function (err) {
	let flag = true;
	let time;
	console.log(err)
	if (flag) {
		mail.send('[服务器异常]' + err.toString(), err.stack)
		const startDate = new Date()
		time = startDate.setMinutes(startDate.getMinutes() + 10)
		flag = false
	} else if (Date.now() > time) {
		mail.send('[服务器异常]' + err.toString(), err.stack)
	}
})
// console.log(a)
server.listen(port, hostname, () => {
	console.log(`Server running`);
});