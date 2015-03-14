var express = require('express')
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {

	var output = '<h1>Environment Variables</h1>';
	output += '<pre>';
	for (var env in process.env) {
		output += env + ': ' + process.env[env] + require('os').EOL;
	}
	output += '</pre>';
	res.send(output);
})

var server = app.listen(app.get('port'), function() {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
})