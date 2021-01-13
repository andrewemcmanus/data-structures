// FROM CODEPEN:
class Node{
    constructor(){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
    }
    pop(){
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}
// Test Script below, DO NOT TOUCH

mocha.setup('bdd');
const expect = chai.expect;

describe('Node', ()=>{
    it('should start with a given data property', ()=>{
        let node = new Node(5);
        expect(node.data).to.equal(5);
    });
    it('should initialize with a null next', ()=>{
        let node = new Node(5);
        expect(node.next).to.equal(null);
        expect(node.next).to.not.be.undefined;
    });
})

describe('Linked List', ()=>{
    it('should initialize with a null head', ()=>{
        let list = new LinkedList();
        expect(list.head).to.equal(null);
        expect(list.head).to.not.be.undefined;
    });
    it('should append nodes to the back', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        expect(list.head.data).to.equal(1);
        list.appendNode(2);
        expect(list.head.next.data).to.equal(2);
        expect(list.head.data).to.equal(1);
        expect(list.head.next.next).to.equal(null);
    });
    it('should prepend nodes to the front', ()=>{
        let list = new LinkedList();
        list.appendNode(2);
        expect(list.head.data).to.equal(2);
        list.prependNode(1);
        expect(list.head.data).to.equal(1);
        expect(list.head.next.data).to.equal(2);
    });
    it('should pop nodes from the back', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        list.appendNode(2);
        let removedNode = list.pop();
        expect(removedNode.data).to.equal(2);
        let secondRemovedNode = list.pop();
        expect(secondRemovedNode.data).to.equal(1);
        expect(list.head).to.equal(null);
    });
    it('should remove nodes from the front with removeFromFront', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        list.appendNode(2);
        list.appendNode(3);
        let removedNode = list.removeFromFront();
        expect(removedNode.data).to.equal(1);
        expect(list.head.data).to.equal(2);
        let secondRemovedNode = list.removeFromFront();
        expect(secondRemovedNode.data).to.equal(2);
        expect(list.head.data).to.equal(3);
        let thirdRemovedNode = list.removeFromFront();
        expect(thirdRemovedNode.data).to.equal(3);
        expect(list.head).to.equal(null);
    });
    it('should insert nodes at a given index with insertAt', ()=>{
        let list = new  LinkedList();
        list.appendNode(1);
        list.appendNode(3);
        list.insertAt(1, 2);
        expect(list.head.next.data).to.equal(2);
        expect(list.head.data).to.equal(1);
        list.insertAt(0, -99);
        expect(list.head.data).to.equal(-99);
        expect(list.head.next.data).to.equal(1);
    })
    it('should be able to search for data', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        list.appendNode(2);
        list.appendNode(3);
        let foundNode = list.search(3);
        expect(foundNode).to.equal(2);
        let unFoundNode = list.search(42);
        expect(unFoundNode).to.equal(false);
    });
    it('should be able to delete a node', ()=>{
        let list = new LinkedList();
        list.appendNode(1);
        list.appendNode(2);
        list.appendNode(3);
        let removedNode = list.removeAt(1);
        expect(list.head.next.data).to.equal(3);
        expect(list.head.data).to.equal(1);
        expect(removedNode.data).to.equal(2);
        let secondRemovedNode = list.removeAt(0);
        expect(secondRemovedNode.data).to.equal(1);
        expect(list.head.data).to.equal(3);
    });
    it('should be able to sort itself', ()=>{
        let list = new LinkedList();
        list.appendNode(2);
        list.appendNode(3);
        list.appendNode(1);
        list.appendNode(5);
        list.appendNode(4);
        list.sort();
        expect(list.head.data).to.equal(1);
        expect(list.head.next.data).to.equal(2);
        expect(list.head.next.next.data).to.equal(3);
        expect(list.head.next.next.next.data).to.equal(4);
        expect(list.head.next.next.next.next.data).to.equal(5);
    });
})

mocha.run()
