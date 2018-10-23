const assert = require('assert')
const request = require('request')
describe('验证web服务是否正常',function() {
  it('首页显示正常',function(done){
    request.get('http://127.0.0.1:3000',function(err,res,body) {
      assert.equal(200,res.statusCode);
      assert.notEqual(-1,body.indexOf('<html'));
      assert(body.indexOf('实战课程') >= 0, '应该包含')
      done();
    })
  })
  it('about页面返回码200',function(done){
    request.get('http://127.0.0.1:3000/about',function(err, res, body) {
      assert.equal(200, res.statusCode);
      done();
    })
  })
  it('contact页面返回码200',function(done){
    request.get('http://127.0.0.1:3000/contact',function(err, res, body) {
      assert.equal(200, res.statusCode);
      done();
    })
  })
  it('posts页面返回码200',function(done){
    request.get('http://127.0.0.1:3000/posts',function(err, res, body) {
      assert.equal(200, res.statusCode);
      done();
    })
  })
  it('article页面返回码200',function(done){
    request.get('http://localhost:3000/article.html',function(err,res,body){
      assert.equal(200,res.statusCode)
      done();
    })
  })
})