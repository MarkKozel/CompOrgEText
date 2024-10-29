.ORIG x3000

    AND R2, R2, #0  ; Clear R2
    ADD R2, R2, #7  ; Place 7 in R2
    ST R2, Param    ; Copy value into memoery for Sub to use
    
    AND R3, R3, #0  ; Clear R3
    ADD R3, R3, #3  ; Number of times to double
    
    JSR DoubleValue
    ;Result now contains 56
    
   
Done HALT

; Doubles the value in Param multiple times
;   inputs: Param contains the value to double
;           R3 contains the number of times to double the Param value
;   output: Result contains the doubled value
DoubleValue
    ST R3, SaveR3   ;Backup the value in R3
    ST R4, SaveR4   ;Backup the value in R4
    
    LD R4, Param
    
    Loop
        ADD R4, R4, R4  ; Double one time
        ADD R3, R3, #-1 ; Decrement R3
        BRp Loop        ; Do another double if R2 is not zero or negative
    
    ST R4, Result
    
    LD R3, SaveR3   ; Restore the original R3 value back into R3
    LD R4, SaveR4   ; Restore the original R3 value back into R3
    RET
    
    ;Memory locations for saving values on registers using in this sub
    SaveR3 .BLKW 1  ;Storage for R3
    SaveR4 .BLKW 1  ;Storage for R4

;End of Program

;Data Declarations-------------
    Param .BLKW 1   ; Holds value to pass in to the sub
    Result .BLKW 1  ; Holds result of sub
.END