.ORIG x3000
LD R1, MyVal1 ; Load first val in R1
LD R2, MyVal2 ; Load second val in R2

ADD R3, R1, R2 ; Add both vals and store in R3

ST R3, Result ; Store results of add into Result memory location

HALT
; Memory Data Declarations
MyVal1 .FILL 5
MyVal2 .FILL 6
Result .BLKW 1