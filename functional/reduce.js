var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 }
]

var totalAmount = orders.reduce(function(sum, order){
	return sum + order.amount
}, 0)

/* example from youtube MPJ
https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3
1st argument: 'sum' is a starting point, which becomes the return value on the next iteration.
2nd argument: 'order' is the iterated item.
*/