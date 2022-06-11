.ORIG x3000
  ADD R0, R0, #0  ;Load i with 0
  AND R1, R1, #0  ;Clear temp register

  ; for(i = 0; i < 10; i++)
  ForLoop ADD R0, R0, #1    ;Add 1 to i
          ADD R1, R0, #-10  ;Subtract 10 from i. R1 is a temp register
          BRn ForLoop       ;Loop again if i is still positive
  HALT
.END