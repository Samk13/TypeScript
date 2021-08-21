interface User {
  id: string;
  userName: string;
}

interface Book {
  id: string;
  bookName: string;
}

const greeting = (name: string) => {
  console.log(`Hello ${name}`);
};

greeting('Sam');

const saveUser = (user: User) => console.log('saving User', { user });
const saveBook = (user: Book) => console.log('saving User', { user });
