### If/Else Branch
The program may choose between 2 separate code sections based on a condition

*Simple conditional 'if/else'  program in Java and LC-3 Assembly*
:::: code-group
::: code-group-item Java
```java
  Scanner myObj = new Scanner(System.in);
  System.out.println("Enter age");
  String userAge = myObj.nextInt();
  if(userAge > 0)
  {
    System.out.println("You entered a valid age");
  }
  else
  {
    System.out.println("You entered an invalid age");
  }
```
:::
::: code-group-item Assembly
```
.ORIG x3000
  LEA R0, enterAge
  PUTS
  IN
  JSR convertToInt ; subroutine to convert input into a number and save in R1
  BRp Valid ; Based on CC register set by convertToInt
  BRnz Invalid

  Valid LEA R0, goodAge
    PUTS
    BR Done

  Invalid LEA R0, badAge
    PUTS

  Done HALT
.END

enterAge .STRINGZ "Enter age"
goodAge .STRINGZ "You entered a valid age"
badAge .STRINGZ "You entered an invalid age"
```
:::
::::

Other conditionals constructs, such as Switch, While, and Do/While are based on these same Condition check and change in flow
