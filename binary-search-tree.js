class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
      else {
        if (newNode.val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!currentNode) {
      this.root = new Node(val);
      return this;
    }
    if (val < currentNode.val) {
      !currentNode.left ? currentNode.left = new Node(val) : this.insertRecursively(val, currentNode.left);
    } else if (val > currentNode.val) {
      !currentNode.right ? currentNode.right = new Node(val) : this.insertRecursively(val, currentNode.right);

    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return currentNode;
      if (val < currentNode.val) currentNode = currentNode.left;
      if (val > currentNode.val) currentNode = currentNode.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) return undefined;
    if (val === currentNode.val) return currentNode;
    if (val < currentNode.val) return this.findRecursively(val, currentNode.left);
    if (val > currentNode.val) return this.findRecursively(val, currentNode.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, result = []) {
    result.push(currentNode.val);
    if (currentNode.left) this.dfsPreOrder(currentNode.left, result);
    if (currentNode.right) this.dfsPreOrder(currentNode.right, result);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root, result = []) {
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode = this.root, result = []) {
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }
    traverse(currentNode);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    let searchArray = [];
    while (toVisitQueue.length) {
      // for (let i = 0; i < toVisitQueue.length; i++) {
      let currentNode = toVisitQueue.shift()
      searchArray.push(currentNode.val);
      if (currentNode.left) toVisitQueue.push(currentNode.left);
      if (currentNode.right) toVisitQueue.push(currentNode.right);
      // }
    }
    return searchArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(currentNode = this.root) {
    if (currentNode === null) return;
    return maxDepth(currentNode) - minDepth(currentNode) <= 1;

    function maxDepth() {
      if (currentNode === null) return 0;
      return 1 + Math.max(maxDepth(currentNode.left), maxDepth(currentNode.right))
    }

    function minDepth() {
      if (currentNode === null) return 0;
      return 1 + Math.min(minDepth(currentNode.left), minDepth(currentNode.right))
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
