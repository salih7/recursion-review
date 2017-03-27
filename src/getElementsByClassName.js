// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {


	var elementArr = [];

	function nodeTraverse(element) {
	  
	  for(var i = 0; i < element.childNodes.length; i++) {
	    var nodeClasses = element.childNodes[i].classList;
	    
	    if(nodeClasses !== undefined && nodeClasses != null) {
	    	var nodeArray = Array.from(element.childNodes[i].classList);
	    
	    	if (nodeArray.includes(className) && nodeArray) {
	      		elementArr.push(element.childNodes[i]);
	    	}
	    }
	    if(element.childNodes[i].childNodes.length !== 0) {
	      nodeTraverse(element.childNodes[i]);
	    }
      }

	}

	nodeTraverse(document);

	return elementArr;
  
};
