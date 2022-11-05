### While Loop Example
@[code lang=java{5-7}](.vuepress/public/examples/Assembly/ProgramFlow/While.java)

@[code lang=arm-asm{6-10}](.vuepress/public/examples/Assembly/ProgramFlow/While.asm)

::: details Breakdown of code
  **i** is both the data to be acted on and the condition variable used to control the loop

  > It is possible to use a different variable for controlling the while loop, however, this makes it function for like a *For Loop*

  The While Loop starts by checking the control variable against a logical operations. The result will be *true* or *false*. If *true*, the loop in entered. If *false* the loop is bypassed.

  > While loops will execute zero (0) or more times. If the condition is *true* at the start, it will not be entered

  In the loop, the condition variable is modified. Other things can also occur within the loop, however updating the condition variable must occur each time

  The loop iterated back to the start, where the condition is re-evaluated and the decision to loop again or bypass the loop is made

  The cycle continues until the condition is *false*
:::

<QuestionMC question="After the While Loop completes i will contain what number?" answer='D' AChoice="2" BChoice="8" CChoice="10" DChoice="12" rightAnswerFeedback="Right! It will loop 5 times total" wrongAnswerFeedback="Incorrect. Because the condition is 'greater than or equal to', when i = 10 the loop is entered 1 last time, adding 2 more"/>

