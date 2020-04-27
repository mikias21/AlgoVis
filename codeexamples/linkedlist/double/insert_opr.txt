# Adding a node at the front of the list
def push(self, new_data):

	# 1 & 2: Allocate the Node & Put in the data
	new_node = Node(data = new_data)

	# 3. Make next of new node as head and previous as NULL
	new_node.next = self.head
	new_node.prev = None

	# 4. change prev of head node to new node
	if self.head is not None:
		self.head.prev = new_node

	# 5. move the head to point to the new node
	self.head = new_node

# This code is contributed by jatinreaper
