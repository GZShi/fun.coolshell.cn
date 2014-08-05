// The answer has been lost in the source
// 去看看网页源代码查找线索

// 长度为5的回文匹配正则表达式
var reg1 = /([\w\d])([\w\d])[\w\d]\2\1/g;	// 很遗憾JavaScript的正则表达式貌似不支持向后匹配



// 在第一个匹配的基础上查找：第一个和第二个字符有一个是数字有一个是大写字母
var reg2 = /[A-Z]\d[a-z]\d[A-Z]|\d[A-Z][a-z][A-Z]\d/g


// 然后…看你的
// E1v1E
// 4FaF4
// 9XrX9
// O3i3O
// 0MaM0
// 4GbG4
// M5l5M
// 0WeW0
// Y0s0Y


// 推荐使用 sublime text 2 :)