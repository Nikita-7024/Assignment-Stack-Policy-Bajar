// Question: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Following functions need to be written:
// MinStack() { }
// void push(int val) { }
// void pop() { }
// int top() { }
// int getMin() { }

// Write a proper working code in a language of your choice.

// //Create stack---
function minStack(minSize = 10) {
  const stack1 = [];
  let top1 = -1;

  //push stack ....
  function pushStack(val) {
    if (top1 >= minSize - 1) {
      return "stack overflow";
    } else {
      stack1.push(val);
      top1++;
    }
  }                                     //time complexity is O(1)

  //pop stack....
  function popStack() {
    if (top1 > -1) {
      let last = stack1[top1];
      stack1.pop();
      top1--;
      return last;
    }
  }                                    //time complexity is O(1)

  //top/peek Stack...
  function topStack() {
    if (top1 > -1) {
      return stack1[top1];
    } else {
      null;
    }
  }                                         //time complexity is O(1)

  //getMinimun stack....
  function getMin(){
    return minSize;
  }                                             //time complexity is O(1)

  function print() {
    console.log(stack1.toString());
  }                           
  return {
    pushStack,
    popStack,
    topStack,
    getMin,
    print,
  };
}

const myStack = minStack(1000);

myStack.pushStack(0);
myStack.pushStack(1);
myStack.pushStack(12);
myStack.pushStack(2);

myStack.popStack();

console.log(myStack.topStack());

console.log(myStack.getMin());

myStack.print();




