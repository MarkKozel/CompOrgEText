;TRAP Routine to swap R0 and R1 registers

.ORIG x0700

  ST R2, SaveR2 ; Save R2 original value

  ; Swap R0 and R1, using R2 as a temp register
  ADD R2, R0, #0 ; copy R0 into R2 (temp register)
  ADD R0, R1, #0 ; copy R1 into R0
  ADD R1, R2, #0 ; copy R2 (temp) into R1

  LD R2, SaveR2 ; Restore R2 original value
  RET

SaveR2 .BLKW 1 ; Allocate space to hold R2 original value
.END