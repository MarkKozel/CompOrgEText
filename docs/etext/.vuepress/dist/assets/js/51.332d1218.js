(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{480:function(t,e,s){"use strict";s.r(e);var i=s(23),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("p",[s("strong",[t._v(t._s(t.$frontmatter.description))])]),t._v(" "),s("KeyConcepts",{attrs:{ConceptArray:[{Concept:"Apply base 10 concepts to base 2",Details:"With minor changes, the same processes work with binary numbers"},{Concept:"Converting between base 10 and base 2",Details:"While computers perform best in binary, humans still require results in decimal"}]}}),t._v(" "),s("h2",{attrs:{id:"what-is-base-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-base-2"}},[t._v("#")]),t._v(" What is "),s("strong",[t._v("Base 2")]),t._v("?")]),t._v(" "),s("p",[t._v("::: bythenumbers Base 2 Number System")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("# of symbols")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("Symbol Range")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("0 - 1")])]),t._v(" "),s("tr",[s("td",[t._v("Symbols")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("0 1")])]),t._v(" "),s("tr",[s("td",[t._v("Place Value Factor")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("2")])])])]),t._v(" "),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Also referred to as Binary system, "),s("em",[t._v("Base 2")]),t._v(" is a system commonly used by humans to refer to integer values or quantities")]),t._v(" "),s("p",[s("em",[t._v("Base 10")]),t._v(" is a mathematical term for the system of counting humans have standardized on for counting things. The "),s("strong",[t._v("2")]),t._v(" is the number of symbols used to represent quantities")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("2")]),t._v(" in "),s("strong",[t._v("Base 2")]),t._v(" identifies the largest value that can be represented in a single digit (symbol)")]),t._v(" "),s("blockquote",[s("p",[t._v("Base - 1, Therefore, the largest value is a single digit is 1")])]),t._v(" "),s("h2",{attrs:{id:"converting-to-base-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-to-base-10"}},[t._v("#")]),t._v(" Converting to Base 10")]),t._v(" "),s("p",[t._v("Using Positional Notation, we can convert a Binary value to Decimal")]),t._v(" "),s("p",[t._v("Each Binary value, based on it's place value, is converted to its Decimal equivalent. The result of all Bit conversions are then summed to product the final Decimal value")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/NumberSystems/Base2_ConvertToBase10.png",alt:"Convert to Base 10"}})]),t._v(" "),s("p",[s("strong",[t._v("Algorithm")])]),t._v(" "),s("p",[t._v("Recall that array indexes start at zero(0). Number positions in a number string also start at zero. So the value in the 1st position is said to be in "),s("em",[t._v("position 0")])]),t._v(" "),s("ol",[s("li",[t._v("Multiply a Binary value by 2 raised to the power if the value's position")]),t._v(" "),s("li",[t._v("Add the result to the final Decimal result")]),t._v(" "),s("li",[t._v("Repeat for all Binary values")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Order Does Not Matter")]),t._v(" "),s("p",[t._v("You probably noticed that this algorithm does not require *starting with the least- or greatest-significant Binary value")]),t._v(" "),s("p",[t._v("Because we are summing up the result of all the Bit conversions it does not matter the order we perform this algorithm")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Ignore Binary Zeros")]),t._v(" "),s("p",[t._v("In this algorithm a Binary value of "),s("strong",[t._v("0")]),t._v(" will result in a Decimal "),s("strong",[t._v("0")]),t._v(" to sum up")]),t._v(" "),s("p",[t._v("Thinking about this, it should be obvious that "),s("strong",[t._v("0")]),t._v(" is any number system base is the same "),s("strong",[t._v("0")]),t._v(". So, in effect we can ignore zeros because they do not have a magnitude")]),t._v(" "),s("p",[t._v("In Logic Circuits we will see this property again. A circuit that outputs "),s("strong",[t._v("0")]),t._v(" volts (or "),s("strong",[t._v("0")]),t._v(" binary value) does not need any circuitry")])]),t._v(" "),s("h2",{attrs:{id:"converting-from-base-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-from-base-10"}},[t._v("#")]),t._v(" Converting from Base 10")]),t._v(" "),s("p",[t._v("The algorithm to convert Binary to Decimal is a series of  "),s("strong",[t._v("Divide By 2")]),t._v(" operations, noting feeing the result into the next cycle. The remainder of each cycle becomes one of the resulting Binary digits")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Remainder will Alway be a 0 or 1")]),t._v(" "),s("p",[t._v("It might not be obvious at first look, but dividing a Decimal number by 2 will always yield a remanded of "),s("strong",[t._v("1")]),t._v(" or "),s("strong",[t._v("0")])]),t._v(" "),s("p",[t._v("If the Decimal value is "),s("em",[t._v("even")]),t._v(", dividing by 2 will produce a reminder of "),s("strong",[t._v("0")])]),t._v(" "),s("p",[t._v("If it is "),s("em",[t._v("odd")]),t._v(", then we get a reminder of "),s("strong",[t._v("1")])]),t._v(" "),s("p",[t._v("Using this effect, we can extract each Binary digit from the Decimal value...but backwards. The first remainder we gt is the least-significate Binary value")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/NumberSystems/Base2_ConvertFromBase10.png",alt:"Convert to Base 2"}})]),t._v(" "),s("p",[s("strong",[t._v("Algorithm")])]),t._v(" "),s("ol",[s("li",[t._v("Divide the Decimal number by 2")]),t._v(" "),s("li",[t._v("The reminder is the least-significate Binary value")]),t._v(" "),s("li",[t._v("The result of the division is the new Decimal value to operate upon")]),t._v(" "),s("li",[t._v("Repeat steps until the result of division is 0")])]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);