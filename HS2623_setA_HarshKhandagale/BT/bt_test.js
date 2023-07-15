class BinarySearchTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  displayTree() {
    this._displayTreeRecursive(this.root, "");
  }

  // Recursive helper method to display the tree
  _displayTreeRecursive(node, prefix) {
    if (node === null) {
      return;
    }

    const hasLeftChild = node.left !== null;
    const hasRightChild = node.right !== null;

    // Generate the prefix for the current node
    const nodePrefix = prefix + (hasRightChild ? "├── " : "└── ");

    // Display the current node's data
    console.log(`${nodePrefix}${node.data}`);

    // Update the prefixes for the left and right child nodes
    const childPrefix = prefix + (hasRightChild ? "│   " : "    ");
    const nextLevelPrefix = prefix + (hasRightChild ? "│   " : "    ") + "    ";

    // Recursively display the left and right subtrees
    this._displayTreeRecursive(node.left, hasRightChild ? childPrefix : nextLevelPrefix);
    this._displayTreeRecursive(node.right, nextLevelPrefix);
  }


  // Method to insert a new element into the tree
  insert(data) {
    const newNode = new BinarySearchTreeNode(data);

    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          // If the data is less than the current node, move to the left subtree
          if (currentNode.left === null) {
            // If the left child is null, insert the new node here
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          // If the data is greater than or equal to the current node, move to the right subtree
          if (currentNode.right === null) {
            // If the right child is null, insert the new node here
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Method to search for an element in the tree
  search(data) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        // If the data matches the current node's data, return the current node
        return currentNode;
      } else if (data < currentNode.data) {
        // If the data is less than the current node's data, move to the left subtree
        currentNode = currentNode.left;
      } else {
        // If the data is greater than the current node's data, move to the right subtree
        currentNode = currentNode.right;
      }
    }

    return null; // Data not found
  }

  // Method to remove an element from the tree
  remove(data) {
    this.root = this._removeNode(this.root, data);
  }

  // Recursive helper method to remove a node from the tree
  _removeNode(node, data) {
    if (node === null) {
      return null; // Base case: empty tree or element not found
    }

    if (data === node.data) {
      // Case: node's data matches the data to be removed
      if (node.left === null && node.right === null) {
        // Case: node is a leaf node (no children)
        return null;
      } else if (node.left === null) {
        // Case: node has only a right child
        return node.right;
      } else if (node.right === null) {
        // Case: node has only a left child
        return node.left;
      } else {
        // Case: node has both left and right children
        const successor = this._findMinNode(node.right);
        node.data = successor.data;
        node.right = this._removeNode(node.right, successor.data);
        return node;
      }
    } else if (data < node.data) {
      // If the data is less than the current node's data, move to the left subtree
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      // If the data is greater than the current node's data, move to the right subtree
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  // Helper method to find the minimum node in a subtree
  _findMinNode(node) {
    let currentNode = node;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }
}


// Create a new binary search tree / object
const bst = new BinarySearchTree();

// Insert elements into the binary search tree
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

// Search for an element in the binary search tree
const result = bst.search(50);
console.log(result ? result.data : "Not found");

// Remove an element from the binary search tree
// bst.remove(40);
// const resultAfterRemoval = bst.search(40);
// console.log(resultAfterRemoval ? resultAfterRemoval.data : "Not found"); // Output: Not found

//Display Tree
bst.displayTree()