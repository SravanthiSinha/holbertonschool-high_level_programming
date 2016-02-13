var https = require('https');

var options = {
    host: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
	'User-Agent': 'Holberton_School',
	'Authorization': 'token 627a195aa92718ab4e6b284389c8b581bc5e531d'
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
