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

async function signUp(name, email, password, key) {
  const id = uuidv1();
  const pwd = await cryptPassword(password);
  const query = {
    text: "INSERT INTO usertable (id , name , email, password, key) VALUES ($1, $2, $3, $4, $5)",
    values: [id, name ,email, pwd, key],  
  };
  await DB.mutate(query);
  return id;
}

async function verify(email,key){
  const query = {
    text: "UPDATE usertable SET key = $2 WHERE email = $1 ",
    values: [ email, key ],
  };
  return await DB.mutate(query);
}

async function check(email, key) {
  const query = {
    text: "SELECT * FROM usertable WHERE email = $1 and key = $2",
    values: [email, key]
  }
  const users = await DB.get(query);
  return users;
}

module.exports = {
  get,
  signUp,
  getById,
  verify,
  check
};