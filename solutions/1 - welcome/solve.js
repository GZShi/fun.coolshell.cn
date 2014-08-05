// first step
function sequence(n) {
	if(n < 0) {
		return 1;
	} else if(n <= 1) {
		return n + 2;
	}

	return sequence(n-1) * sequence(n-2);
}

var x = sequence(5);



// second
var y = google('What is the meaning of life, the universe and everything?');



// result
console.log(x*y);