.ORIG x3000
  LD R0, MyData1
  LD R1, MyData2
  LD R2, MyData3
Done HALT

;End of Program

;Data Declarations-------------
   MyData1 .FILL #10
   MyData2 .FILL x00FF
   MyData3 .FILL b1011010000101111
   Result  .BLKW 1
.END