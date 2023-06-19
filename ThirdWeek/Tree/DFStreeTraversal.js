class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  // code for insertion
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  //  code for search

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }
  inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }
  }
  

  // checkingbinarySearchTree or not


  isBinarySearchTree(root) {
    let prev=null
    function inOrder(node){
       if(!node)
        return true
       if(!inOrder(node.left))
        return false
       if(prev && node.data<=prev)
       return false
       prev=node.data
       return inOrder(node.right)
    }
    return inOrder(root)
 }
}
const bst = new BinarySearchTree();
console.log("Tree is Empty ?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3)
bst.insert(7)
bst.postOrder(bst.root)
bst.isBinarySearchTree(bst.root)
