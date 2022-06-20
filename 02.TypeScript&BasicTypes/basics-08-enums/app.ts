/* 
  # Role
    - you want to assign a human readable label, and for that you have to inam type again.
    - Enum
        - enum{ NEW, OLD }
        - Added by TypeScript: Automatically enumerated global constant identifiers
    - enum value값이 대문자를 많이 봐왔지만 항상 그런것은 아니고 ‘Any value names’가와도 됀다.
*/

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR); // 0, 1, 2
console.log(Role["0"], Role["1"], Role["2"]); // ADMIN, READ_ONLY, AUTHOR
console.log(Role["0"] === "ADMIN");
("true");
console.log({ Role });
/* 
  {
    Role: {
      '0': 'ADMIN',
      '1': 'READ_ONLY',
      '2': 'AUTHOR',
      ADMIN: 0,
      READ_ONLY: 1,
      AUTHOR: 2
    }
  } 
*/

// ADMIN = 5를 설정하면 READ_ONLY는 6, AUTHOR는 7
enum Role1 {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
console.log(Role1.ADMIN, Role1.READ_ONLY, Role1.AUTHOR); // 5, 6, 7

// 각각 값을 지정할 수 있다.
// number값이 아니더라고 값을 지정할 수 있다.
enum Role2 {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}
console.log(Role2.ADMIN, Role2.READ_ONLY, Role2.AUTHOR); // 'ADMIN', 100, 'AUTHOR'

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
