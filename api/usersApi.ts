import axios from "axios";

export const fetchUserById = async (id: string) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return data;
};

// optionally add this if you list users somewhere
export const fetchUsers = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return data;
};
