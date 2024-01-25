.ORIG x3000

    AND R2, R2, #0; Clear R2
    ADD R2, R2, #7; Place 7 in R2
    
    JSR DoubleValue;
    ;R2 now contains 14
    
    JSR DoubleValue;
    ;R2 now contains 28
    
    JSR DoubleValue;
    ;R2 now contains 56
   
Done HALT

; Doubles the value in R2
;   inputs: R2 contains the value to double
;   output: R2 contains the doubled value
DoubleValue
    ADD R2, R2, R2
    RET

;End of Program

;Data Declarations-------------
.END