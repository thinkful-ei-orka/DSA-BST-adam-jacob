const BinarySearchTree = require('./BinarySearchTree');

////1
/*
     3
  /    \
 1      4
  \       \
   2       6
         /   \
        5     9
             /
            7
*/

/*

            E
      /           \    
     A             S
               /       \
             Q          Y
           /   \       /
          E     S     U
           \         /
            I       T
             \
              O
             /
            N  
*/

////2
/*
      4
   /     \
 1         6
  \      /   \
   2    5     9
             /
            7
*/

/*

            E
      /           \    
     A             S  
               /       \
             Q          Y
           /   \       /
          I     S     U
           \         /
            O       T
           /
          N  
*/

////3
//Created

let BSTa = new BinarySearchTree;
[3, 1, 4, 6, 9, 2, 5, 7].forEach(number => BSTa.insert(number, number));

let BSTb = new BinarySearchTree;
'EASYQUESTION'.split('').forEach(letter => BSTb.insert(letter, letter));

// console.log(BSTa)
// console.log('-------------------------')
// console.log(BSTb)

////4
//Sums all the values within a tree (adds 0's for string addition)

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

////5
function height(tree) {
  if (tree.left) {
    this.left = height(tree.left);
  } else {
    this.left = 0;
  }
  if (tree.right) {
    this.right = height(tree.right);
  } else {
    this.right = 0;
  }
  return 1 + Math.max(this.left, this.right);
}

// console.log(height(BSTa));
// console.log(height(BSTb));

////6
function isBST(tree) {
  if (tree.left) {
    if (tree.left.value < tree.value) {
      this.left = isBST(tree.left);
    } else {
      this.left = false;
    }
  } else {
    this.left = true;
  }
  if (tree.right) {
    if (tree.right.value >= tree.value) {
      this.right = isBST(tree.right);
    } else {
      this.right = false;
    }
  } else {
    this.right = true;
  }
  return this.left && this.right;
}

// console.log(isBST(BSTa));
// console.log(isBST(BSTb));

////7
function findThird(t) {
  function arrayBuilder(t) {
    if (!t) {
      return [];
    }
    return [...arrayBuilder(t.left), t.value, ...arrayBuilder(t.right)];
  }
  let array = arrayBuilder(t);
  return array[array.length - 3];
}

// console.log(findThird(BSTb));

////8
function balanced(tree) {
  if (tree.left) {
    tree.left = balanced(tree.left);
  } else {
    tree.left = [0, true];
  }
  if (tree.right) {
    tree.right = balanced(tree.right);
  } else {
    tree.right = [0, true];
  }
  const condition = Math.abs(tree.left[0] - tree.right[0]) < 2;
  return [1 + Math.max(tree.left[0], tree.right[0]), condition];
}

// console.log(balanced(BSTa));
// console.log(balanced(BSTb));

let BSTbalanced = new BinarySearchTree;
[5, 3, 7, 2, 4, 6, 8].forEach(number => BSTbalanced.insert(number, number));

// console.log(balanced(BSTbalanced));

////9
function sameBSTs(arr1, arr2, filters=null) {
  if (arr1.length !== arr2.length) { return false; }
  if (arr1.every((val,index)=>arr2[index]===val)){
    return sameBSTs(arr1.filter(val => val > arr1[0]), arr2.filter(val => val > arr2[0])) && sameBSTs(arr1.filter(val => val < arr1[0]), arr2.filter(val => val < arr2[0]));
  } else {
    return true;
  }
}

const A = [3, 5, 4, 6, 1, 0, 2];
const B = [3, 1, 5, 2, 4, 6, 0];
// console.log(sameBSTs(A, B));

//Time complexity - O(log(3n))... give or take