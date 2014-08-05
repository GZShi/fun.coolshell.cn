// 二维码信息：
// [abcdefghijklmnopqrstuvwxyz] <=> [pvwdgazxubqfsnrhocitlkeymj]

function convert(str) {
	var normalMap = 'abcdefghijklmnopqrstuvwxyz';
	var qtMap = 'pvwdgazxubqfsnrhocitlkeymj';

	var rtn = '';
	for(var i = 0; i < str.length; ++i) {
		var index = qtMap.indexOf(str[i]);
		rtn += (index < 0 ? str[i] : normalMap[index]);
	}

	return rtn;
}

console.log(convert('Wxgcg txgcg ui p ixgff, txgcg ui p epm. I gyhgwt mrl lig txg ixgff wrsspnd tr irfkg txui hcrvfgs, nre, hfgpig tcm liunz txg crt13 ra "ixgff" tr gntgc ngyt fgkgf.'));
// Where there is a shell, there is a way. 
// I expect you use the shell command to solve this problem, 
// now, please try using the rot13 of "shell" to enter next level.


// 使用shell完成对"shell"进行rot13加密
// echo 'shell' | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'
