var fs = require('fs')

function readJSON( filepath, callback ) {
  fs.readFile(filepath, 'utf8', function(err, data){
  	if (err) callback(err)

  	// data = data.toString()
  	var niceObject = JSON.parse(data)

  	callback(null, niceObject)
  })

}

function theConsoleLogger(err, data) {
	if (err) throw "ERROR!"

	console.log('yea data: ', data)
}

readJSON('../../nodePlayground/jsonStuff/stuff.json', theConsoleLogger)
