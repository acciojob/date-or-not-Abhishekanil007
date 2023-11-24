var isDate = function (input) {
  //   write your code here
	const dateObj = new Date(input);
	return !isNaN(dateObj.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input)); 
