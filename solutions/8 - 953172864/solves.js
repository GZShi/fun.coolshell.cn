function parse(str) {
	var excelMap = '0ABCDEFGHIJKLMNOPQRSTUVWXY';
	var map =      '0123456789abcdefghijklmnop';

	str = str.replace('Z', 'A0');
	str = str.replace(/[0A-Y]/g, function (match) {
		return map[excelMap.indexOf(match)];
	});
//	console.log(str);
	return parseInt(str, 26);
}

function convert(integer) {
	integer = integer>>0;
	var excelMap = '0ABCDEFGHIJKLMNOPQRSTUVWXY';
	var map =      '0123456789abcdefghijklmnop';

	var str = integer.toString(26);
	str = str.replace(/[0-9a-p]/g, function (match) {
		return excelMap[map.indexOf(match)];
	});
	str = str.replace('A0', 'Z');
	return str;
}

// first step
var result = parse('COOLSHELL') / parse('SHELL');

// next step
var excelResult = convert(result);
