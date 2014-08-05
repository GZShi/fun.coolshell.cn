// 点击图片获取线索

var http = require('http');

function fetch(key, callback) {
	var path = '/n/' + key;
	var options = {
		hostname: 'fun.coolshell.cn',
		port: 80,
		path: path,
		method: 'GET'
	};

	var req = http.request(options, function (res) {
		var data = '';

		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', function () {
			callback(key, data);
		});
	});

	req.end();
}


function solve(path) {
	var reg = /\d+/;
	fetch(path, function (url, data) {
		console.log(data);
		if(reg.test(data)) {
			solve(data);
		}
	})
}

solve('2014');