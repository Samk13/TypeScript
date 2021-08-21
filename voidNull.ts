const logger = (something: unknown): void => console.log(something);
const a = logger('Sam');

console.log('a = ', { a });

interface User {
  id: string;
  email: string;
  name: string | null;
  age: number | null;
}
