var https = require('https');
var fs=require('fs');

var options = {
    host: 'api.github.com',
    path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
    headers: {
	'User-Agent': 'Holberton_School',
	'Authorization': 'token 627a195aa92718ab4e6b284389c8b581bc5e531d'
    }
};

var options2 = {
    host: 'api.github.com',
    path: '/users/',
    headers: {
	'User-Agent': 'Holberton_School',
	'Authorization': 'token 627a195aa92718ab4e6b284389c8b581bc5e531d'
    }
};

var req = https.request(options, function(res) {
    var cb=function(jsonString){
	fs.writeFile('/tmp/37', jsonString);
	var parsedData= JSON.parse(jsonString);
	var repos=parsedData['items'].map(function(obj){
	    var robj={};
	    robj[obj.full_name]=obj.owner.url;
  	    return(robj);
		 
	})

	console.log(repos);
/*	for(mykey in repos)
	console.log(mykey+ " "+repos[mykey]);*/
    }	
    
    streamToString(res,cb);
    
   
});
req.end();

req.on('error', function(e) {
    console.error(e);
});

function streamToString(stream, cb) {
    const chunks = [];
    stream.on('data', (chunk) => {
	chunks.push(chunk);
    });
    stream.on('end', () => {
	cb(chunks.join(''));
    });
}
