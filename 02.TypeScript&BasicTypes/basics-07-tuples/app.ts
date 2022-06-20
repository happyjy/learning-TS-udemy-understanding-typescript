/* 
  # tuples
    * Fixed-length array
*/

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array
  role: [number, string]; // tuple
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
