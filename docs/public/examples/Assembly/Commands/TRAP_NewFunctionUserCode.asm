.ORIG x3000

  ADD R0, R0, 15
  ADD R1, R1, -14

  TRAP x2a ; Swap R0 and R1
  HALT
  
.END