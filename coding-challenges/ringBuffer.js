/*Like arrays that you saw in C, a ring buffer is a non-growable buffer with a fixed size. 
In this case, however, that turns out to be a feature of the data structure.

When the ring buffer is full and a new element is inserted, the oldest element in the ring buffer 
is overwritten with the newest element. This kind of data structure is very useful for use cases 
such as storing logs and history information, where you typically want to store information up until
it reaches a certain age, after which you don't care about it anymore and don't mind seeing it overwritten by newer data.

Implement this behavior in the RingBuffer class. RingBuffer has two methods, append and allValues. 
The append method adds elements to the buffer. The allValues method returns all of the elements in the buffer 
ordered from oldest to newest. In other words, least-recently added elements first, then most-recently added elements.

For example:

JavaScript:

const buffer = new RingBuffer(3);

buffer.append('a');
buffer.append('b');
buffer.append('c');

buffer.allValues();   // should return ['a', 'b', 'c']

buffer.append('d');

buffer.allValues();   // should return ['d', 'b', 'c']

buffer.append('e');
buffer.append('f');

buffer.allValues();   // should return ['d', 'e', 'f']
*/

class RingBuffer {
	constructor(size) {
		this.size = size;
		this.index = 0;
		this.buffArr = [];
	}

	append(item) {
		// if index is greater or equal to arr size:
		// set index back to 0
		if (this.index >= this.size) {
			this.index = 0;
		}
		// otherwise:
		// add item to arr and increase index
		this.buffArr[this.index] = item;
		this.index++;
	}

	allValues() {
		return this.buffArr;
	}
}
