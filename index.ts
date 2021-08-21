const greeting = (name: string) => {
  console.log(`Hello ${name}`);
};

greeting('Sam');

const addTowNumbers = (a: number, b: number): number => a + b;

interface User {
  id: string;
  name: string;
}
const getUserById = (id: string): User => ({
  id,
  name: 'Sam',
});

const user = getUserById('123');
console.log(user);

const saveUser = (user: string) => console.log('saving User', { user });
