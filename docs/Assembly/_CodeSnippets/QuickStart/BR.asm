.ORIG x3000
  LD R0, MyData
  BRz JumpHereIfZero
  BRp JumpHereIfPositive
  BRn JumpHereIfNegative

  JumpHereIfZero
    NOP;        Do something if R0 contains Zero
    BRnzp Done; Skip everything else and halt
    
  JumpHereIfPositive
    NOP;        Do something if R0 is Positive
    BRnzp Done; Skip everything else and halt
    
  JumpHereIfNegative
    NOP;        Do something if R0 is Negative
       ;        No need to 'BRnzp Done' here since 
       ;           normal program flow ends the program
  Done HALT

;End of Program

;Data Declarations-------------
  MyData .FILL xF00D
.END