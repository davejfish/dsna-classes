const { Stack, Queue } = require("./index.js");
describe("Stack Queue Classes", () => {
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
    expect(stack.peek()).toEqual('pears');
  });

  it('lets pop a bunch of items', () => {
    const stack = new Stack(['apples', 'oranges', 'pears']);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toEqual('apples');

    stack.push('cherries');
    expect(stack.peek()).toEqual('cherries');
  });

  it('#queue should add an item to the first index of the array', () => {
    const queue = new Queue([1, 3, 6]);
    queue.enqueue(5);
    expect(queue.array[queue.array.length - 1]).toEqual(5);
  });

  it('#dequeue removes an item from the first index of the array', () => {
    const queue = new Queue();
    expect(queue.hasNext()).toEqual(false);

    queue.enqueue('apples');
    expect(queue.hasNext()).toEqual(true);

    const item = queue.dequeue();
    expect(item).toEqual('apples');
    expect(queue.hasNext()).toEqual(false);
  });
  
});
