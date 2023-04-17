// let users = ["anis", "rabu", "pinky"];

// square beckat array type
// let users: string[];
// users = ["anis", "rabu", "pinky"];

// multiple
var data: (string | number)[];
data = ['anis', 100, 'pinky'];

// generic array type
var users: Array<string>;
users = ['anis', 'rabu', 'pinky'];

// for (let index = 0; index < users.length; index++) {
//   const element = users[index];
//   console.log(element);
// }

// users.forEach((element) => {
//   console.log(element);
// });

users.sort();
console.log(users);

users.push('limon');
console.log(users);

users.pop();
console.log(users);

users.unshift('milton');
console.log(users);

users.shift();
console.log(users);

// multi-types array
// let users: (number | string)[];
// users = [10, "anis", 25, 35, "islam"];
