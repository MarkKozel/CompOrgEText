.ORIG x3000
  AND R0, R0, #0; Clear out whatever is currently in R0
  ADD R0, R0, #5; Set R0 to 5
  NOT R1, R0; Invert the value in R0 and store in R1
Done HALT

;End of Program

;Data Declarations-------------
.END