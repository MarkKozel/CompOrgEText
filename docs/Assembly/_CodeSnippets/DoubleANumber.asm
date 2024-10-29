; Assignment:
; Module: 
; Name:
; -----------------------
; Description of Code:
; Note/Comments:

.ORIG x3000
    LD R1, Val1 ;    Retrive value from memory
    ADD R2, R1, R1 ; Add to itself
    ST R2, Result ; Copy result back to memory
Done HALT

;End of Program

;Data Declarations-------------
    Val1    .FILL #12
    Result  .BLKW 1

.END