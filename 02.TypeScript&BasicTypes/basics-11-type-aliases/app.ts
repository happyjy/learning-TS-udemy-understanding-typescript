/* 
  # type-alias
    - 같은 타입의 다른 파일에서 사용할때 유용하게 사용 할 수 있습니다.
*/

type Combinable = number | string; // # type alias
type ConversionDescriptor = "as-number" | "as-text"; // # type alias

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log("# combinedAges: ", combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log("# combinedStringAges: ", combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log("# combinedNames: ", combinedNames);

// 26. Function Return Types & "void"

function printResult(num: number): void {
  console.log("# printResult: ", num);
}

printResult(10);

// 27. Funciton as Types
/**
 *
 *  # 타입 설정방법
 *    * Function 키워드 작성
 *    * arrow function 작성
 *
 */
function add(n1: number, n2: number) {
  const result = n1 + n2;

  return n1 + n2;
}
// let combineValues: Function;
let combineValues: (num: number) => void;
combineValues = printResult;
combineValues(1);

// let combineValues1: Function;
let combineValues1: (n1: number, n2: number) => number;
combineValues1 = add;
console.log("# combineValues1: ", combineValues1(1, 2));

// 28. Function Types & Callbacks

function addAndHandle(n1: number, n2: number, cb: (numb: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 2, (result: number) => {
  console.log("# addAndHandle > cb: ", result);
});

// ⭐️ callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
// cb의 return type이 void인데 실제 sendRequest의 cb 함수의 return 값이 true 값으로 되어 있다.
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
