var https = require('https');

var options = {
    host: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
	'User-Agent': 'Holberton_School',
	'Authorization': 'token 52c8a47346c0feb5c55133faccf77cfacfff33e5'
    }
};

var req = https.request(options, function(res) {
   
   res.on('data', function(d) {
	process.stdout.write(d);
	});
   
});
req.end();

req.on('error', function(e) {
    console.error(e);
});
