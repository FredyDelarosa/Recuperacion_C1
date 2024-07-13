//BST.js
import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            return this.#root !== null;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.age < node.value.age) {
            if (node.left == null) {
                node.left = new Node(value);
                return node.left !== null;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
                return node.right !== null;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }

    search(predicate) {
        const searchNode = (node) => {
            if (node === null) {
                return null;
            }
            if (predicate(node.value)) {
                return node.value;
            }
            let leftSearch = searchNode(node.left);
            if (leftSearch !== null) {
                return leftSearch;
            }
            return searchNode(node.right);
        };
        return searchNode(this.#root);
    }

    findMin(callback) {
        const findMinNode = (node) => {
            if (node.left === null) {
                callback(node.value);
            } else {
                findMinNode(node.left);
            }
        };
        if (this.#root) {
            findMinNode(this.#root);
        } else {
            callback(null);
        }
    }

    findMax(callback) {
        const findMaxNode = (node) => {
            if (node.right === null) {
                callback(node.value);
            } else {
                findMaxNode(node.right);
            }
        };
        if (this.#root) {
            findMaxNode(this.#root);
        } else {
            callback(null);
        }
    }

    inOrderTraversal(callback) {
        const traverse = (node) => {
            if (node !== null) {
                traverse(node.left);
                callback(node.value);
                traverse(node.right);
            }
        };
        traverse(this.#root);
    }
}

export default BST;
