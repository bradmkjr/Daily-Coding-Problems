/*

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

*/

const assert = require('assert');

class TreeNode{
  val: string;
  left: any;
  right: any;

  constructor( val, left=null, right=null ){
    this.val = val
    this.left = left
    this.right = right
  }
}

function serialize(treeNode){
	return JSON.stringify(treeNode);
}

function deserialize(data){
	let val: string;
	let left: any;
	let right: any;

	if( 'string' == typeof(data) )
		data = JSON.parse(data);

	val = data.val;

	if( null == data.left){
		left = null;
	}else{
		left = deserialize(data.left);
	}

	if( null == data.right){
		right = null;
	}else{
		right = deserialize(data.right);
	}
	return new TreeNode(val,left,right);
}

let treeNodes = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));

// node = Node('root', Node('left', Node('left.left')), Node('right'))
const output = deserialize(serialize(treeNodes)).left.left.val;

console.log('Expected Output: left.left');
console.log('Actual Output: '+output);

// assert deserialize(serialize(node)).left.left.val == 'left.left';
assert.equal( output, 'left.left', 'Serialize/Deserialize Failed');
// assert.notEqual( output, 'left.left', 'Serialize/Deserialize Passed');
