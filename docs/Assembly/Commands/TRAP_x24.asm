.ORIG x3000
  LEA R0, Hello
  TRAP x24
  HALT
Hello:  .FILL x6548 ; eH
        .FILL x6c6c ; ll
        .FILL x206f ; \0o
        .FILL x0000 ; empty
.END