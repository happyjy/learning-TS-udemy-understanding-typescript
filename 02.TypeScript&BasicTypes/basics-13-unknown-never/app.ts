// 29. The "unknown" Type
// 29.1
let userInput: unknown; // 이 경우 userName = userInput; 이 문장에서 에러가 난다.
let userName: string;

userInput = 5;
userInput = "Max";
userName = userInput; // error!(userInput이 String을 보장하지 않기 때문)

// ---
// 29.2
// 정상 동작 any가 타입 추론을 통해서 userInput은 String으로 타입이 추론된다.
let userInput1: any;
// let userName: string;

userInput1 = 5;
userInput1 = "Max";
userName = userInput1;

// ---
// 29.3
// unknow을 사용하려면 아래와 같이 타입 체킹이 필요하다.
let userInput2: unknown;
let userName: string;

userInput2 = 5;
userInput2 = "Max";
userName = userInput2;

if (typeof userInput2 === "string") {
  userName = userInput2;
}

// 30. The "never" Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
