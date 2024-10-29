.ORIG x3000
  
  ADD R0, R0, #10
  ALoop ADD R0, R0, #-1 ; Decrement R0
        BRnz Done       ; R0 is Negative or Zero, get out of the loop
        BRp ALoop       ; R0 is Positive, Loop again
  Done HALT

.END
