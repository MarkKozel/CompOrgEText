.ORIG x3000

  AND R1, R1, #12 ; Load 12 into R1
  LD R4, TwosCompAddr ; Get address of TwosComp subroutine
  JSRR R4    ; Apply 2's complement conversion

  HALT

; 2's complement R1 and store in R0
TwosCompAddr .FILL x5000
.END


;Subroutine assembled and loaded seperately
.ORIG x5000
  ; Executes 2's complement conversion on value in R1
  ; Result is stored in R0
  NOT R0, R1     ; Flip the bit
  ADD R0, R0, #1 ; Add 1
  RET            ; return back to the main program
.END