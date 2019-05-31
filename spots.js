//binary tree practice
//node class
class Node(){
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}
//binary tree class
class BinTree(){
  constructor(){
    this.root=null;
  }
insert(data){
    var newNode=new Node(data);
    if(this.root==null){
      this.root=newNode;
    } else {
      this.insertNode(this.root,newNode);
    }
  }
  insertNode(node,newNode){
    if(node.data>newNode.data){
      if(node.left===null){
        node.left=newNode;
      } else {
        insertNode(node.left, newNode);
      }
      } else {
        if(node.right==null){
          node.right=newNode;
        } else {
          insertNode(node.right,newNode);
        }
      }
    
    
  }
  
  inorder(node){
    if(node!==null){
   this.inorder(node.left);
    console.log(node);
    this.inorder(node.right);
  }
  }
}
