// find()

const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Mobashshar" }
];

const user = users.find(item => item.id === 3);

console.log(user);
