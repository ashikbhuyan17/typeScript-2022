// let users = ["anis", "rabu", "pinky"];

// let users: string[];
// users = ["anis", "rabu", "pinky"];

let users: Array<string>;
users = ["anis", "rabu", "pinky"];

// for (let index = 0; index < users.length; index++) {
//   const element = users[index];
//   console.log(element);
// }

// users.forEach((element) => {
//   console.log(element);
// });

users.sort();
console.log(users);

users.push("limon");
console.log(users);

users.pop();
console.log(users);

users.unshift("milton");
console.log(users);

users.shift();
console.log(users);

// multi-types array
// let users: (number | string)[];
// users = [10, "anis", 25, 35, "islam"];