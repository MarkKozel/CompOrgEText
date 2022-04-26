const data = {
  InstructionName: "Test Instruction",
  header: [
    {
      name: "OpCode",
      bits: "1010111111",
      desc: "The OpCode Part"
    },
    {
      name: "More",
      bits: "110011",
      desc: "The More Part"
    },
    {
      name: "More1",
      bits: "110011",
      desc: "The More Part"
    }
  ],
  operation: "Not sure what is was intended for",
  examples: [
    "TRAP x23 ; Call IN trap routine",
    "IN ; Call IN trap routine"
  ]
}

export default data;