.ORIG x3000
  LD R0, MyData1
  LD R1, MyData2

  ADD R3, R0, R1

  ST R3, Result
Done HALT

;End of Program

;Data Declarations-------------
   MyData1 .FILL #10
   MyData2 .FILL x00FF
   Result  .BLKW 1
.END