const users = [
    {name: "Alice", email:"qwe@qw.qw", age: 18},
    {name: "Nick", email:"qdog@sdsw.com", age: 24},
    {name: "Martin", email:"cat@qwcom", age: 35},
    {name: "Violete", email:"mouse@gmail.com", age: 29},
];

for (const { name, age, email } of users) {
  console.log(name, age, email);
}