.ORIG x3000

    AND R2, R2, #0  ; Clear R2
    ADD R2, R2, #7  ; Place 7 in R2
    ST R2, Param    ; Copy value into memory for Sub to use
    
    JSR DoubleValue
    ;Result now contains 14
    
    LD R2, Result   ; Get result into a register
    ST R2, Param    ; Copy result into param
    JSR DoubleValue
    ;Result now contains 28
    
    LD R2, Result   ; Get result into a register
    ST R2, Param    ; Copy result into param
    JSR DoubleValue
    ;Result now contains 56
   
Done HALT

; Doubles the value in Param
;   inputs: Param contains the value to double
;   output: Result contains the doubled value
DoubleValue
    LD R4, Param
    ADD R4, R4, R4
    ST R4, Result
    RET

;End of Program

;Data Declarations-------------
    Param .BLKW 1   ; Holds value to pass in to the sub
    Result .BLKW 1  ; Holds result of sub
.END