// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ListNode = require('./LinkedList');

interface Node {
  val: number;
  next: object;
}

describe('Linked List', () => {
  test('Should construct a new node', () => {
    const node: Node = new ListNode(1);

    expect(node.val).toBe(1);
    expect(node.next).toBe(null);
  });
  test('Should link newly constructed nodes', () => {
    const node: Node = new ListNode(1);
    const node2: Node = new ListNode(2, node);

    expect(node2.val).toBe(2);
    expect(node2.next).toBe(node);
  });
});
