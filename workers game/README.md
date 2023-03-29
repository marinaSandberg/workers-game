<h1>Workers game</h1>

<h2>Description</h2>
A group of colleagues are at work and decide that half of them can go home while the other half stay. In order to fairly choose who gets to go home early they devise a game. The workers stand in a circle and play the game, in each round of the game someone gets to go home early until half of the workers are left. The rules of the game are as follows:
<br />
1) Stand in a circle where each worker is numbered from 1 to n in clockwise order, where n is the number of workers.
2) Start at the 1st worker.
3) Count the next k workers in the circle, not including the one you start at. The counting wraps around the circle and you may count workers more than once.
4) The worker you land at gets to go home and is removed from the circle.
5) Starting from the next worker clockwise from the one you just removed, repeat steps 3->4 until you have n/2 workers left. You should always round up when calculating n/2. For example if you have five workers then two get to go home.

You are asked to write a method which implements this game. You are given n the number of workers, and k the amount of steps in the game. Both parameters will always be non-negative integers.

You should return a list of the assigned numbers of the workers who are going home early in the order they were selected. There should always be at least one person working.

The playGame function takes two arguments n and k, and returns an array of worker numbers who get to go home early.

The first line creates an array workers with n elements, each element being a number from 1 to n.

The second line initializes an empty array selected to store the selected worker numbers.

The while loop continues until there are n/2 workers left.

In each iteration of the loop, we first count k workers in the circle by adding k to the current worker index i, and taking the result modulo the length of the workers array to wrap around if needed.

We then remove the selected worker from the circle using the splice method, which returns an array with the removed element (in this case, a single element), so we use [0] to get the actual number. We add the selected worker to the selected array.

Finally, we adjust the i index to account for the removed worker, by taking i modulo the new length of the workers array.

Once the loop completes, we return the selected array containing the worker numbers who get to go home early.

<h2>Languages and Utilities Used</h2>

- <b>JavaScript</b>
