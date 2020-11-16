const http = require('http');
const net = require('net');
const url = require('url');

// 创建一个HTTP服务器R
http.createServer((req, res) => {
    // 获取请求路径  不同接口
    const reqUrl = req.url;
    console.log(reqUrl);
    if (reqUrl === '/index') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setEncoding('utf8');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write([{ "blue": "青龙" }, { "white": "白虎" }, { "red": "朱雀" }, { "black": "玄武" }]);
        res.end();
    }
}).listen(8080);
