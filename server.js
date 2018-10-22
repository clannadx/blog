const http = require('http');
const request = require('request');
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

// let count = 0
// setInterval(function(){
// 	request.get('http://127.0.0.1:3000',function(err,res,data){
// 		if(error){
// 			++count
// 		} else {
// 			count = 0
// 		}
// 		if(count === 3) {
// 			mail.send('服务不可用','连续三次请求首页失败')
// 			setTimeout(function(){
// 				process.exit()
// 			},3000)
// 		}
// 	})
// })
testObject.value = 0
server.listen(port, hostname, () => {
	console.log(`Server running`);
});