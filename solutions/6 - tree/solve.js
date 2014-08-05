// 1. 首先根据后序遍历和中序遍历的结果去还原本来的树
// 2. 找到树的最长枝干

var inOrderData = 'T, b, H, V, h, 3, o, g, P, W, F, L, u, A, f, G, r, m, 1, x, J, 7, w, e, 0, i, Q, Y, n, Z, 8, K, v, q, k, 9, y, 5, C, N, B, D, 2, 4, U, l, c, p, I, E, M, a, j, 6, S, R, O, X, s, d, z, t'.split(', ');
var postOrderData = 'T, V, H, o, 3, h, P, g, b, F, f, A, u, m, r, 7, J, x, e, w, 1, Y, Q, i, 0, Z, n, G, L, K, y, 9, k, q, v, N, D, B, C, 5, 4, c, l, U, 2, 8, E, I, R, S, 6, j, d, s, X, O, a, M, p, W, t, z'.split(', ');

var Tree = (function () {
	function Tree(rootVal, leftTree, rightTree) {
		this.val = rootVal;
		this.left = leftTree;
		this.right = rightTree;
	}

	function helperDepth(root) {
		if(root == null) return 0;
		var leftDepth = helperDepth(root.left);
		var rightDepth = helperDepth(root.right);
		return Math.max(leftDepth, rightDepth) + 1;
	}

	function helperDeepestPath(root) {
		if(root == null) return '';
		var leftDepth = helperDepth(root.left);
		var rightDepth = helperDepth(root.right);

		if(leftDepth > rightDepth) {
			return root.val + helperDeepestPath(root.left);
		} else {
			return root.val + helperDeepestPath(root.right);
		}
	}

	Tree.prototype = {
		show: function (type) {
			var left = this.left;
			var right = this.right;

			switch(type.toLowerCase()) {
				case 'post':
					return (left ? left.show('post') : '') + (right ? right.show('post') : '') + this.val;
				case 'in':
					return (left ? left.show('in') : '') + this.val + (right ? right.show('in') : '');
				case 'pre':
				default:
					return this.val + (left ? left.show('pre') : '') + (right ? right.show('pre') : '');
			}
		},

		depth: function () {
			return helperDepth(this);
		},

		deepest: function () {
			return helperDeepestPath(this);
		}
	}

	return Tree;
})();


function getTree(inOrder, postOrder) {
	if(inOrder.length == 0) {
		return null;
	} else if(inOrder.length == 1) {
		return new Tree(inOrder[0], null, null);
	} else if(inOrder.length == 2) {
		var flag = inOrder.join('').indexOf(postOrder[1]) == 0;
		var leftTree = flag ? null : (new Tree(postOrder[0], null, null));
		var rightTree = flag ? (new Tree(postOrder[0])) : null;
		return new Tree(postOrder[1], leftTree, rightTree);
	}

	var postRoot = postOrder[postOrder.length - 1];
	var inRootIndex = inOrder.join('').indexOf(postRoot);

	var postLeftTree = postOrder.join('').substr(0, inRootIndex).split('');
	var postRightTree = postOrder.join('').substr(inRootIndex).split('');
	var inLeftTree = inOrder.join('').substr(0, inRootIndex).split('');
	var inRightTree = inOrder.join('').substr(inRootIndex+1).split('');
	postRightTree.pop();

	return new Tree(postRoot, getTree(inLeftTree, postLeftTree), getTree(inRightTree, postRightTree));
}

function getPreOrder(inOrder, postOrder) {
	if(inOrder.length <= 1) {
		return inOrder.join('');
	} else if(inOrder.length == 2) {
		return postOrder.reverse().join('');
	}
	var postRoot = postOrder[postOrder.length-1];
	var inRootIndex = inOrder.join('').indexOf(postRoot);

	var postLeftTree = postOrder.join('').substr(0, inRootIndex).split('');
	var postRightTree = postOrder.join('').substr(inRootIndex).split('');
	var inLeftTree = inOrder.join('').substr(0, inRootIndex).split('');
	var inRightTree = inOrder.join('').substr(inRootIndex+1).split('');
	postRightTree.pop();

	return postRoot + getPreOrder(inLeftTree, postLeftTree) + getPreOrder(inRightTree, postRightTree);
}

var preOrderData = getPreOrder(inOrderData, postOrderData);
console.log('pre:  ' + preOrderData);
console.log('in:   ' + inOrderData.join(''));
console.log('post: ' + postOrderData.join(''));


console.log('----');


var root = getTree(inOrderData, postOrderData);
console.log('pre:  ' + root.show('pre'));
console.log('in:   ' + root.show('in'));
console.log('post: ' + root.show('post'));


console.log('----');

console.log('depth: ' + root.depth());
console.log('deepest: ' + root.deepest());

var key = root.deepest();


// 然后用 openssl 解密密文
// echo 'U2FsdGVkX1+gxunKbemS2193vhGGQ1Y8pc5gPegMAcg=' | openssl enc -base64 -d | openssl enc -aes-128-cbc -d -pass pass:@key
