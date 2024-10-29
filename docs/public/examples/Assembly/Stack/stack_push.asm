; Sets value in R0 to current stack slot. Advances StackPtr
;   Inputs: R0 contains value to place in Stack
;   Outputs: None
Push
    ST R5, StackSaveR5
    ST R6, StackSaveR6
    
    ;Check to see if Stack is full - ADDR[StackEnd] - StackPtr === 0
    LD R5, StackPtr     ; Address of current open stack slot
    LEA R6, StackEnd    ; Bottom of stack
    
    NOT R6, R6          ; Flip sign on R6 for 'subtraction'
    ADD R6, R6, #1
    
    ADD R6, R5, R6      ; StackPtr - ADDR[StackEnd]
    BRz PushExitEarly   ; Stack full, bail
    
    STR R0, R5, #0      ; Write value to Stack
    
    ; Advance StackPtr
    ADD R5, R5, #1
    ST R5, StackPtr
    
    PushExitEarly
    
    LD R5, StackSaveR5
    LD R6, StackSaveR6

RET