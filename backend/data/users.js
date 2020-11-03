import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: true,
  },
  {
    name: "Gaurav",
    email: "gaurav@gmail.com",
    password: bcrypt.hashSync("111111", 10),
  },
  {
    name: "Kanwal",
    email: "kanwal@gmail.com",
    password: bcrypt.hashSync("111111", 10),
  },
];

export default users;
