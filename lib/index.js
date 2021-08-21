"use strict";
const greeting = (name) => {
    console.log(`Hello ${name}`);
};
greeting('Sam');
const addTowNumbers = (a, b) => a + b;
const getUserById = (id) => ({
    id,
    name: 'Sam',
});
const user = getUserById('123');
console.log(user);
//# sourceMappingURL=index.js.map