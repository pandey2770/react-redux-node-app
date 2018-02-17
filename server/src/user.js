const uuidv1 = require("uuid/v1");
const DB = require("./db");
const {cryptPassword} = require('./password');

async function get(email) {
  const query = {
    text: "SELECT * FROM usertable WHERE email = $1",
    values: [email]
  };
  const users = await DB.get(query);
  return users;
}

async function getById(id) {
  const query = {
    text: "SELECT * FROM usertable where id = $1",
    values: [id]
  };
  return await DB.get(query);
}

async function signUp(name, email, password) {
  const id = uuidv1();
  const pwd = await cryptPassword(password);
  const query = {
    text: "INSERT INTO usertable (id , name , email, password) VALUES ($1, $2, $3, $4)",
    values: [id, name ,email, pwd],  
  };
  await DB.mutate(query);
  return id;
}

module.exports = {
  get,
  signUp,
  getById
};