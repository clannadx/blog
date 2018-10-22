const nodemailer = require('nodemailer');
// 开启一个 SMTP 连接
let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secureConnection: true,
  secure: true,
  auth: {
    user: '625783534@qq.com',
    pass: 'fcmermqlwzmrbfic' // qq邮箱需要的授权码
  }
})

  //填写邮件信息
  let mailOptions = {
    from: '提示 <624783534@qq.com>',
    to:'252611697@qq.com',
    subject: '',//标题
    text:'',//文本格式的内容
    html:''//HTML格式的内容
  }

  // 使用前面创建的传输器来发送邮件
  exports.send = function(subject,content) {
    if(subject && content) {
      mailOptions.subject = subject
      mailOptions.content = content
      transporter.sendMail(mailOptions,(error,info) => {
          console.log(`Message:${info}`)
          console.log(`send: ${error}`)
      })
    }

  }