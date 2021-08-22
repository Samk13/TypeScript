const logger = (something: unknown): void => console.log(something);
const a = logger('Sam');

console.log('a = ', { a });

interface User {
  id: string;
  email: string;
  name: string | null;
  age: number | null;
}

const loggerFn = (somthing: unknown) => {
  if (typeof somthing === 'string') {
    console.log(somthing);
  } else {
    console.log(somthing);
  }
};

type anyType = { prop1: any; prop2: any };

const anyFoo: anyType = {
  prop1: 'hello',
  prop2: 'world',
};
