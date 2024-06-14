;Updated 11/5/2022
.ORIG x3000
  ADD R1, R1, #0 ; int i = 0
  ADD R2, R2, #0 ; temp to use for comparing i with exit condition

;Condition: Keep looping until R1 is 10 or more
;Action: Starting at 0, add 2 to R1 each loop
WhileLoop   
  ADD R2, R1, #-10 ; Test R1 <= 10. Store in R2 so we don't affect the data
  BRp Done        ; R1 + (-10) is positive, jump out of loop
  ADD R1, R1, #2   ; Work: Add 2 to the data
  BRnzp WhileLoop  ; Go back and possible loop again

  Done HALT
.END