
var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url,function(response){
    response.setEncoding('utf8');
    
    var sum = 0;
    var arr = [];
    response.pipe(bl(function(err,data){
            if (err)
            return console.error(err);
            
            sum+=data.length;
            arr.push(data.toString());
        })
    );
    
    response.on('end',function(){
        console.log(sum);
        arr.forEach(function(elem){
            console.log(elem);
        });
    });
    
    response.on('error', console.error);
    
});