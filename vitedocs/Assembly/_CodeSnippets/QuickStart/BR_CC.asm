.ORIG x3000
  AND R0, R0, #0; CC set to Z
  ADD R1, R0, #2; CC set to P
  LD R2, MyData;  CC set to N
Done HALT

;End of Program

;Data Declarations-------------
    MyData .FILL #-2
.END