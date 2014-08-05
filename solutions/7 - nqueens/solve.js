var crypto = require('crypto');

function calcSha1Sum(password, code) {
	var sha1Sum = crypto.createHash('sha1');
	sha1Sum.update(password + code + '\n');
	return sha1Sum.digest('hex');
}

var nQueensSolutions = [];
function nQueens(n, seq, onSolution) {
	if(seq.length == n) {
		return onSolution(seq);
	}

	var seqArray = seq.split('');
	var y = seq.length;
	for(var x = 0; x < n; ++x) {
		var goodPos = true;
		for(var i = 0; i < seqArray.length; ++i) {
			var qx = seqArray[i]-1;
			var qy = i;

			if(qx == x) {
				goodPos = false;
				break;
			}

			if(Math.abs(qx-x) == Math.abs(qy-y)) {
				goodPos = false;
				break;
			}
		}

		if(goodPos) {
			nQueens(n, seq + (x+1), onSolution);
		}
	}
}

nQueens(9, '', function (solution) {
	var sum = calcSha1Sum('zWp8LGn01wxJ7', solution);
	if(sum == 'e48d316ed573d3273931e19f9ac9f9e6039a4242') {
		console.log(solution);
		console.log(sum);
	}
});