### IF Branch
A program can evaluate a condition, such as an arithmetic or logical comparison between values. Based on that condition, the code may skip a section of code that does not pertain to the condition

*Simple conditional 'if'  program in Java and LC-3 Assembly*
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
  BRnz Done

  Valid LEA R0, goodAge
  PUTS

  Done HALT
.END

enterAge .STRINGZ "Enter age"
goodAge .STRINGZ "You entered a valid age"
```
:::
::::