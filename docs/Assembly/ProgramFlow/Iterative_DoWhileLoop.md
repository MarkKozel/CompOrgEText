### Do-While Loop Example
```java
//Condition: Keep looping until i is 10 or more
//Action: Starting at 0, add 2 to i each loop

int i = 0; //data to update in the loop
do {
  //Code to do 'work'
  i += 2; //Add 2 to the data
} while(i <= 1)

```

::: details Breakdown of code
  **i** is both the data to be acted on and the condition variable used to control the loop

  > It is possible to use a different variable for controlling the do-while loop, however, this makes it function for like a *For Loop*

  The Do-While Loop starts by doing the work for the first cycle. It then checks the control variable against a logical operations. The result will be *true* or *false*. If *true*, the loop executes again. If *false* the loop is ended.

  > Do-While loops will execute one (1) or more times. If the condition is *true* at the start, it will not be entered
  >
  > This is their primary different between **While** and **Do-While** loops

  In the loop, the condition variable is modified. Other things can also occur within the loop, however updating the condition variable must occur each time

  The loop iterated back to the start, where the work is preformed again before updating the loop counter and re-evaluating decision to loop again or bypass the loop is made

  The cycle continues until the condition is *false*
:::

<QuestionMC question="After the Do-While Loop completes i will contain what number?" answer='A' AChoice="2" BChoice="8" CChoice="10" DChoice="12" rightAnswerFeedback="Right! It will loop 6 times total" wrongAnswerFeedback="Incorrect. Because the condition is 'greater than or equal to', when i = 10 the loop is entered 1 last time, adding 2 more"/>

``` 
.ORIG x3000
  ADD R1, R1, #0; int i = 0

;Condition: Keep looping until R1 is 10 or more
;Action: Starting at 0, add 2 to R1 each loop
myLoop   
  ADD R1, R1, #2   ; Add 2 to the data
  ADD R2, R1, #-1  ; Test R1 <= 1. Store in R2 so data is not affected
  BRnz Done        ; R1 + (-10) is zero or negative, jump out of loop
  BRnzp myLoop     ; Go back and possible loop again

  Done HALT
.END
```