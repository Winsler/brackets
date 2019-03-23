module.exports = function check(str, bracketsConfig) {

  let openBrackets = [],
  		closeBrackets = [],
  		doubleBrackets = [];

  openBrackets.__proto__.has = function(n) {
    return !(this.indexOf(n) == -1)
  }
  doubleBrackets.__proto__.has = function(n) {
    return !(this.indexOf(n) == -1)
  }

  bracketsConfig.forEach(function(brackets) {

  	if (brackets[0] == brackets[1]) {
  		doubleBrackets.push(brackets[0]);
  	} else {
  		openBrackets.push(brackets[0]);
  		closeBrackets.push(brackets[1]);
  	}

  });


	
  let stack = [];

  //str must be even length, start with open/double bracket and end with close/double bracket 
  if (!((str.length % 2 == 0) && (!openBrackets.has(str[0]) || !doubleBrackets.has(str[0])) &&
    (!closeBrackets.has(str[str.length-1]) || !doubleBrackets.has(str[str.length-1])))) return false;
 
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
	
  return !stack.length;

}

