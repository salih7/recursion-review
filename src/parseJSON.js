// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json === 'null') {
  	return null;
  } else if (json === 'true') {
  	return true;
  } else if (json === 'false') {
  	return false;
  }

  if (json.charAt(0) === '"' && json.charAt(json.length - 1) === '"') {
  	return json.slice(1, json.length - 1);
  }

  if (json.charAt(0) === '[' && json.charAt(json.length - 1) === ']') {
  	var jsonNoSpace = json.replace(/\s/g, '');
  	var jsonSplitArr = jsonNoSpace.replace(/\[|\]/g, '').split(',');
    
  	if (json.length === 2) {
		return [];
	}

  	return jsonSplitArr.map(ele => parseJSON(ele));
  }

  if(/(-?\d+.?\d*)/g.test(json)) {
  	return parseFloat(json);
  }

  if (json.charAt(0) === '{' && json.charAt(json.length - 1) === '}') {
  	var jsonObj = {};
  	var jsonSplitArr = json.replace(/[{}]/g, '').match(/"\w+,?\s?\w*":\s?"?\w*"?/g);
    

	if (jsonSplitArr === null || json.length === 2) {
		return jsonObj;
	}

	for (var i = 0; i < jsonSplitArr.length; i++) {
		jsonSplitArr[i] = jsonSplitArr[i].replace(/:\s/g, ':');
    var indexColon = jsonSplitArr[i].indexOf(':');
		var prop = jsonSplitArr[i].slice(0, indexColon);
		var val = jsonSplitArr[i].slice(indexColon + 1, jsonSplitArr[i].length);

		jsonObj[parseJSON(prop)] = parseJSON(val);
	}  	

  	return jsonObj;
  }
};
