### For Loop Example
<<< @/public/examples/Assembly/ProgramFlow/ForLoop.java{java}
<<< @/public/examples/Assembly/ProgramFlow/ForLoop.asm {asm}

::: details Breakdown of code
*i* is the **loop control** variable that hold the *number of times the loop and executed*

The for loop:
1. initializes **loop control** variable to 0 (int i = 0)
1. Established the exit criteria (i < 10)
1. Increments **loop control** each time through the loop

*i* is initially set to zero (0)
*i* is tested against 10. As long as it is *less than* 10 the loop will continue
*i* is incremented by one (1) each time the loop completes

Each time the loop executes, the value in *i* is added to *x*

The first time through *i* is zero. The second time *i* is 1, then 2, 3, ... The loop runs 10 times, while *i* < 10

So *x* will contain 45 when the loop exits

:::