export interface User {
  id: string;
  name: string;
  email: string;
}

export const users: User[] = [
  { id: "1", name: "Alice", email: "alice@email.com" },
  { id: "2", name: "Bob", email: "bob@email.com" },
];