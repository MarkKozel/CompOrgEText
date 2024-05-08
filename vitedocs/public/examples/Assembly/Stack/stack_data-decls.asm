; -----------------------
; Stack Data Declarations
; -----------------------
    StackData   .BLKW #10   ; LIFO Data Storage
    StackEnd    .FILL xFFFF ; Negative Value
    StackPtr    .BLKW #1    ; Address of Current stack slot
    StackSize   .BLKW #1    ; Number of stack slots
    
    ; Register save area for all Stack operations
    StackSaveR4  .BLKW #1
    StackSaveR5  .BLKW #1
    StackSaveR6  .BLKW #1
    StackSaveR7  .BLKW #1