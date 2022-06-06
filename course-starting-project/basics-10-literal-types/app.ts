/* 
  # literal-types
    * literal type으로 설정한 resultConversion
    * 설정한 literal-types이 아니면 error가 생긴다.
    * uniontype 과 함께 사용할때 유용합니다.
*/

function combine(
  input1: number | string, // # union type
  input2: number | string, // # union type
  resultConversion: "as-number" | "as-text" // # literal-types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
