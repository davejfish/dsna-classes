const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack([1, 2, 3]);
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  
  it('#pop should remove and return the last item from list', () => {
    const stack = new Stack([1, 2, 3]);
    const poppedItem = stack.pop();
    expect(poppedItem).toEqual(3);
    expect(stack.peek()).toEqual(2);
  });

  it('#peek should return the last item in the list array', () => {
    const stack = new Stack(['apples', 'oranges', 'pears']);
    console.log('here is the peek value', stack.peek())
    expect(stack.peek()).toEqual('pears');
  });
});
