var x = 56

function woo (data, callback) {
	if (typeof data === 'string') {
		callback('does not process strings', data)
	}
	callback(null, data)
}

function addFiftySix(error, data) {
	if (error) {
		console.log(error)
		return
	}
	data = data + x
	console.log(data)
}

woo( 10, addFiftySix )

// logs out 66 (success.. i.e. it works)
