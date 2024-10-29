.ORIG x3000
  ;Updated 11/5/2022
  ADD R1, R1, #0; int i = 0
  ADD R2, R2, #0; temp to use for comparing i with exit condition

;Condition: Keep looping until R1 is 1 or more
;Action: Starting at 0, add 2 to R1 each loop
myLoop   
  ADD R1, R1, #2   ; Work: Add 2 to the data
  ADD R2, R1, #-2  ; Test R1 <= 1. Store in R2 so data is not affected
  BRnz Done        ; R1 + (-2) is zero or negative, jump out of loop
  BRnzp myLoop     ; Go back and loop again

  Done HALT
.END