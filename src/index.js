module.exports = function check(str, bracketsConfig) {

  Array.prototype.has = function(n) {
  	if (this.indexOf(n) == -1) return false;
  	return true;
  }


  let openBrackets = [],
  		closeBrackets = [],
  		doubleBrackets = [];

  bracketsConfig.forEach(function(brackets) {

  	if (brackets[0] == brackets[1]) {
  		doubleBrackets.push(brackets[0]);
  	} else {
  		openBrackets.push(brackets[0]);
  		closeBrackets.push(brackets[1]);
  	}

  });

	
  let stack = [];

  
  if (!((str.length % 2 == 0) && (!openBrackets.has(str[0]) || !doubleBrackets.has(str[0])))) return false;
  stack.push(str[0]);


  for (let i = 1; i < str.length; i++) {
  	if ((openBrackets.has(str[i])) || (doubleBrackets.has(str[i]) && stack[stack.length-1] != str[i])) {
  		stack.push(str[i]);
  	} else if ((openBrackets[closeBrackets.indexOf(str[i])] == stack[stack.length - 1]) || (doubleBrackets.has(str[i]) && stack[stack.length-1] == str[i])) {
  		stack.pop()
  	} else {
  		return false;
  	}

  };
	
	if (!stack.length) return true
	return false

}

