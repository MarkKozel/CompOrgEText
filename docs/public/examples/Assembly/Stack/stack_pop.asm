; Gets next value from Stack, Pulls StackPtr back 1 slot
;   Input: none
;   Output: R0 contains the value popped from the stack
Pop
  ST R5, StackSaveR5
  ST R7, StackSaveR7

  LD R5, StackPtr
  ADD R5, R5, #-1 ; Move pointer back to the last pushed slot
          
  LDR R0, R5, #0  ; Get value from last pushed slot

  ST R5, StackPtr ; write new StackPtr out for next time

  LD R5, StackSaveR5
  LD R7, StackSaveR7

RET