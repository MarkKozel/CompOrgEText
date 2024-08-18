; Initializes the stack data block to zero (0) in each slot
; Sets StackPtr and StackSize for use by subroutines
;   Inputs:     none
;   Outputs:    No registers. StackPtr and StackSize are set
InitStack
    ST R4, StackSaveR4
    ST R5, StackSaveR5
    ST R6, StackSaveR6
    
    LEA R5, StackData   ; Top of the stack
    LEA R6, StackEnd    ; Bottom of stack

    ST R5, StackPtr     ; Calculate and store stack pointer
    ; Calculate and store stack size
    NOT R5, R5
    ADD R5, R5, #1
    ADD R6, R6, R5
    ST R6, StackSize
    
    AND R4, R4, #0      ;Value to init each slot to
    LD R5, StackPtr
    ClearLoop
        STR R4, R5, #0
        ADD R5, R5, #1  ; Move to next slot
        ADD R6, R6, #-1 ; Decrement loop counter
        BRp ClearLoop
    
    LD R4, StackSaveR4
    LD R5, StackSaveR5
    LD R6, StackSaveR6

RET