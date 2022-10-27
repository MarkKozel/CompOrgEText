.ORIG x3000
  ADD R1, R1, #0; int i = 0

;Condition: Keep looping until R1 is 1 or more
;Action: Starting at 0, add 2 to R1 each loop
myLoop   
  ADD R1, R1, #2   ; Add 2 to the data
  ADD R2, R1, #-1  ; Test R1 <= 1. Store in R2 so data is not affected
  BRnz Done        ; R1 + (-1) is zero or negative, jump out of loop
  BRnzp myLoop     ; Go back and possible loop again

  Done HALT
.END