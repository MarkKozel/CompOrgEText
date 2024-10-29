.ORIG x3000
  
  LD R5, MyVal    ; Load MyVal from Memory into GP Register R5
  ADD R5, R5, #1  ; Add 1 to the value in R5
  ST R5, MyVal    ; Store the updated value (18) back into the MyVal Memory location
  Done HALT

  ; Memory Data Declarations
  MyVal .FILL 17  ; Declare a single memory location and initialize it with 17 (base 10)

.END