* body-parser是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，Express
框架中就是使用这个模块做为请求体解析中间件。请求体解析后，解析值都会被放到req.body属性，内容为空时是一个{}空对象。

https://blog.csdn.net/weixin_40629244/article/details/88836772

使用 morgan 中间件记录日志：https://www.jianshu.com/p/ff6763c7d823

express处理跨域问题，中间件 CORS：https://www.cnblogs.com/yourstars/p/6897626.html