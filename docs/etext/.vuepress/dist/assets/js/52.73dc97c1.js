(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{481:function(e,t,a){"use strict";a.r(t);var s=a(23),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("p",[a("strong",[e._v(e._s(e.$frontmatter.description))])]),e._v(" "),a("KeyConcepts",{attrs:{ConceptArray:[{Concept:"Base 10 Number System",Details:"The number system you learned in early elementary school"},{Concept:"Why do humans use base 10 as a default?",Details:"Likely because we started counting with our fingers. As numbers got more complicated, we stayed with base 10"},{Concept:"Why not use base 10 in computers?",Details:"Base 10 processes are too complicated to re-create in hardware and low-level software"}]}}),e._v(" "),a("h2",{attrs:{id:"introduction-to-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-frontmatter-title"}},[e._v("#")]),e._v(" Introduction to "+e._s(e.$frontmatter.title))]),e._v(" "),a("h2",{attrs:{id:"what-is-base-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-base-10"}},[e._v("#")]),e._v(" What is "),a("strong",[e._v("Base 10")]),e._v("?")]),e._v(" "),a("p",[e._v("::: bythenumbers Base 10 Number System")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("# of symbols")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("10")])]),e._v(" "),a("tr",[a("td",[e._v("Symbol Range")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("0 - 9")])]),e._v(" "),a("tr",[a("td",[e._v("Symbols")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("0 1 2 3 4 5 6 7 8 9")])]),e._v(" "),a("tr",[a("td",[e._v("Place Value Factor")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("10")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("Also referred to as Decimal and Denary system, "),a("em",[e._v("Base 10")]),e._v(" is a system commonly used by humans to refer to integer values or quantities")]),e._v(" "),a("p",[a("em",[e._v("Base 10")]),e._v(" is the name for the system commonly used by modern humans to counting things. The "),a("strong",[e._v("10")]),e._v(" is the number of symbols used to represent quantities. Each symbol (digit) represents a single quantity in the range of symbols 0 -9.")]),e._v(" "),a("p",[e._v("Unlike Roman Numerals, no digit has an additive ot subtractive action on an adjacent digit")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("10")]),e._v(" in "),a("strong",[e._v("Base 10")]),e._v(" identifies the largest value that can be represented in a single digit (symbol)")]),e._v(" "),a("h3",{attrs:{id:"positional-notation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positional-notation"}},[e._v("#")]),e._v(" Positional Notation")]),e._v(" "),a("p",[e._v("AKA "),a("em",[e._v("Place Value")])]),e._v(" "),a("p",[e._v("In order to  represent values larger than 9 in "),a("strong",[e._v("Base 10")]),e._v(" without adding new symbols, there needs to be a rule it calculate the value of an adjacent digit in a group of digits (number string)")]),e._v(" "),a("p",[e._v("The position of a are essentially a weighting (factor) of each single digit according to it's position in the number string")]),e._v(" "),a("p",[e._v("The rule is:")]),e._v(" "),a("ul",[a("li",[e._v("digits to the left are a lessor value")]),e._v(" "),a("li",[e._v("digits to the right are higher value")]),e._v(" "),a("li",[e._v("The value increase/decrease is a multiple of 10")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/NumberSystems/Base10_PlaceValues1.png",alt:"Base10 PlaceValues1"}})]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("4")]),e._v(" in 4321 is increased by "),a("em",[e._v("10")]),e._v(" raised to the power of its position, "),a("em",[e._v("3")]),e._v(", in the number string. Position numbers start at 0 are increase from left to right")]),e._v(" "),a("p",[e._v("To calculate a single digit place value:")]),e._v(" "),a("blockquote",[a("p",[e._v("Digit * 10 "),a("sup",[e._v("Position")])])]),e._v(" "),a("p",[e._v("After calculating the weighed value of each digit, sum all results for the final value")]),e._v(" "),a("blockquote",[a("p",[e._v("You may have noticed this is essential converting a base 10 value to a base 10 value...so nothing really seems to change. That is true and, in a strange sort of way, proves itself")]),e._v(" "),a("p",[e._v("We will, however, use this process/algorithm to convert other base number string to base 10")])]),e._v(" "),a("p",[e._v("This may seem trivial, after all, you have likely known how to do this since elementary school.  However, it is important to understand the process")]),e._v(" "),a("h3",{attrs:{id:"positional-notation-for-any-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positional-notation-for-any-base"}},[e._v("#")]),e._v(" Positional Notation for any Base")]),e._v(" "),a("p",[e._v("The positional notation works for other base number systems. The calculation for any base includes that base")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/NumberSystems/Base10_PlaceValues2.png",alt:"Base10 PlaceValues2"}})]),e._v(" "),a("p",[e._v("A more general formula for converting a single digit value for a given base is:")]),e._v(" "),a("blockquote",[a("p",[e._v("Digit * Base"),a("sup",[e._v("Place Value Position")])])]),e._v(" "),a("p",[e._v("Now apply the same algorithm for calculating the value of multi-digit number string (group of digits) is:")]),e._v(" "),a("ol",[a("li",[e._v("Perform the single digit place value for each digit and the associated base")]),e._v(" "),a("li",[e._v("Add all the results together")])]),e._v(" "),a("h2",{attrs:{id:"base-10-as-a-human-default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-10-as-a-human-default"}},[e._v("#")]),e._v(" Base 10 as a Human Default")]),e._v(" "),a("p",[e._v("It is likely that human adopted this 10 symbols to match the number of fingers on our hands...making our hands the first computation device")]),e._v(" "),a("p",[e._v("There is no particular importance of 10 as a number system, it is just the system most easily adopted by early humans. As humans persisted and began developing a deeper understanding of numbers, base 10 also persisted")]),e._v(" "),a("p",[e._v("::: readmore Base 10/Decimal Number System\n"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Decimal#Origin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Origins"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Decimal#History",target:"_blank",rel:"noopener noreferrer"}},[e._v("History"),a("OutboundLink")],1),e._v("\n:::")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);