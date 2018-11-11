/*

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 */


class TreeNode{
  val: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor( val, left=null, right=null ){
    this.val = val
    this.left = left
    this.right = right
  }
}

let count: number;

let treeNodes: TreeNode;

function crawlTree(treeNodes: TreeNode ){
	let left = null;
	let right = null;

	if( undefined !== treeNodes.left && null !== treeNodes.left && treeNodes.left instanceof TreeNode ){
		left = crawlTree( treeNodes.left );
	}

	if( undefined !== treeNodes.right && null !== treeNodes.right && treeNodes.right instanceof TreeNode  ){
		right = crawlTree( treeNodes.right );
	}

	if ( right === false || left === false ){
		return false;
	} else if ( left === treeNodes.val && right === treeNodes.val ) {
		// console.log(treeNodes);
		count = 1 + count;
	} else if ( left === null && right === treeNodes.val ){
		// console.log(treeNodes);
		count = 1 + count;
	} else if ( right === null && left === treeNodes.val ){
		// console.log(treeNodes);
		count = 1 + count;
	} else if ( right === null && left === null ){
		// console.log(treeNodes);
		count = 1 + count;
	} else {
		return false;
	}

	return treeNodes.val;
}

treeNodes = new TreeNode( '0', new TreeNode('1'), new TreeNode('0', new TreeNode('1', new TreeNode('1'), new TreeNode('1') ), new TreeNode('0') ) );

count = 0;

crawlTree(treeNodes);

console.log( 'The count the number of unival subtrees is ' + count );

treeNodes = new TreeNode( 'a', new TreeNode('c'), new TreeNode('b', new TreeNode('b'), new TreeNode('b', new TreeNode('b')  ) ) );

count = 0;

crawlTree(treeNodes);

console.log( 'The count the number of unival subtrees is ' + count );


treeNodes = new TreeNode( 'a', new TreeNode('a'), new TreeNode('a', new TreeNode('a'), new TreeNode('a', new TreeNode('A')  ) ) );

count = 0;

crawlTree(treeNodes);

console.log( 'The count the number of unival subtrees is ' + count );
