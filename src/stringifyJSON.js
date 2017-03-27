// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
  	return 'null';
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  // if (typeof obj === 'function') {
  // 	return '';
  // }

  if (Array.isArray(obj)) {
  	
  	var stringArr = obj.map(function(element) {
  		return stringifyJSON(element)
  	}).join();
  	
  	return '[' + stringArr + ']';
  
  } else if (typeof obj === 'object') {
  	var stringObjArr = [];
  	
  	for (var prop in obj) {
  		if (typeof obj[prop] === 'function' || obj[prop] === undefined) {
  			continue;
  		}
  		stringObjArr.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
  	}

  	return '{' + stringObjArr.join() + '}';
  }

  return '' + obj;
};
