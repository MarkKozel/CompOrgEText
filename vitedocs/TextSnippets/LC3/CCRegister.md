
This register can be used by future instructions that might decide to change the program's flow (like an If/Else -or- Loop behavior)

![Condition Code Register](/images/LC3/LC3Tools_Simulator_CC_Register.png)

The CC will be in one of three possible states:

**N** - The last operation resulted in a *Negative* Value

**Z** - The last operation resulted in a *Zero* Value

**P** - The last operation resulted in a *Positive* Value

*Other instructions do not change the CC, so it will holding last value until another of the above 4 instructions is executed*