.ORIG x3000

  AND R1, R1, #12 ; Load 12 into R1
  JSR TwosComp    ; Apply 2's complement conversion

  HALT

; 2's complement R1 and store in R0
TwosComp NOT R0, R1     ; Flip the bit
         ADD R0, R0, #1 ; Add 1
         RET            ; return back to the main program
.END