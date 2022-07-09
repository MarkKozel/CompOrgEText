|Term|Meaning|
|:-:|:-|
|**Input/Output Devices**|Hardware installed on a motherboard that facilitates passing of data between that device and the CPU. Input and Output are from the perspective of the CPU. A keyboard is a *CPU* input device and a monitor is a *CPU* output device|
|**Drivers**|Software that negotiates data transfer between an I/O device and a CPU|
|**Polling**|Controlling data exchange by checking for new data in a repetitious time interval|
|**Interrupts**|Controlling data exchange by requiring the I/O device to notify teh CPU there is new data, then waiting until the CPU to request the new data when it is ready to process it|
|**Priorities**|A system the CPU uses to *decide* which I/O data to process next if there are multiple devices with data ready|
|**Synchronous**|Data exchange driven by a shared clock or sync event|
|**Asynchronous**|Data exchange when no shared clock or sync event|
|**Status Register**|A known storage location that CPU and I/O Device use to share the I/O Device's status. Used in *Polling* and *Asynchronous* data exchange|
|**Data Register**|A known storage location that CPU and I/O Device use to share the exchange data. Used in *Polling* and *Asynchronous* data exchange|
