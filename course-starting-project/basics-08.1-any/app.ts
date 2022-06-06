/* 
  # Any
*/

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// let favoriteActivities: string[];
let favoriteActivities: any[];
favoriteActivities = ["Sports", 5, true];
console.log("favoriteActivities: ", favoriteActivities);
