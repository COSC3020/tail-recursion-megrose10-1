# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

I submitted (some of) this work Fall 2024.

I worked on some of this towards the end of last fall. I looked at the lecture slides(dynamic programming, tail recursion, factorial examples) and my notes on tail recursion. I asked chatGPT for the test code last semester, however, this semester I decided to do testing differently and used the tests supplied from the tsp problem, changing them to what I needed to test for thsi exercise. I also watched this video: https://www.bing.com/videos/riverview/relatedvideo?&q=how+to+use+github+actions+to+autimatically+run+tests+on+girhub+website&&mid=1B3D621FC15E307873CE1B3D621FC15E307873CE&&FORM=VRDGAR on how to use github Actions. I also used this link to find Fibonacci numbers to test with https://www.math.net/list-of-fibonacci-numbers.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

In a non-tail-recursive implementation, like the code from the slides, you make two recursive calls in the return statement, while in the tail recursive implementation, you are essentially making one. This will cut the runtime to $\Theta$ (n) since there is only one recursive call, this can be illustrated when watching n, every recursive call, we subtract one from n until we get to our terminate line that pushs the program to return the value computed, so we over this program n times.
