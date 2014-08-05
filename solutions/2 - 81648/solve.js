// 点击图片有维基
function dvorak2Qwerty(key) {
	var d = '{}[]"<>PYFGCRL?+\',.pyfgcrl/=AOEUIDHTNS_aoeuidhtns-:QJKXBMWVZ;qjkxbmwvz';
	var q = '_+-=QWERTYUIOP{}qwertyuiop[]ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./';

	var index = d.indexOf(key);
	if(index < 0) return key;

	return q[index];
}


function convert(str) {
	var rtn = '';
	for(var i = 0; i < str.length; ++i) {
		rtn += dvorak2Qwerty(str[i]);
	}
	return rtn;
}

console.log(convert('macb() ? lpcbyu(&gbcq/_\\021%ocq\\012\\0_=w(gbcq)/_dak._=}_ugb_[0q60)s+'));
// main() { printf(&unix["\021%six\012\0"],(unix)["have"]+"fun"-0x60);}

// 运行即可得到结果


/*
解释：
1. 没有定义的`unix`变量是什么？
	在unix系统里面这是一个预编译宏，在代码里面会替换为`1`

2. `(1)["have"]`是什么意思？
	等价于`"have"[1]`，也就是`'a'`

3. `'a' + "fun" - 0x60`是什么意思？
	编译后`"fun"`会以一个字符串指针的形式存在，`'a' - 0x60`的结果是1，所以这个相当于`"fun" + 1`，即`"un"`

4. `&unix["\021%six\012\0"]`是什么意思？
	相当于：`char *str = "\021%six\012\0"; &(*(str+1));`
	即：`"%six\n"`

*/
