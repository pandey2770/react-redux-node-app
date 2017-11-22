const uuidv1 = require("uuid/v1");
const DB = require("./db");

async function getAllRecodr() {
  const recodr = await DB.get("SELECT * FROM recodr");
  return recodr;
}

async function deleteRecodr(id) {
  const query = {
    text: "DELETE FROM recodr WHERE id = $1",
    values: [ id ],
  };
  return await DB.mutate(query);
}

async function createRecodr(recodr) {
  const id = uuidv1();
  const query = {
    text: "INSERT INTO recodr VALUES($1, $2, $3, $4)",
    values: [ id, recodr.des, recodr.time, recodr.delete ],
  };
  await DB.mutate(query);
  return id;
}

async function updateRecodr(id, time) {
  const query = {
    text: "UPDATE recodr SET time = $1, delete = $2 WHERE id = $2",
    values: [ time, id ],
  };
  return await DB.mutate(query);
}

module.exports = {
  getAllRecodr,
  deleteRecodr,
  updateRecodr,
  createRecodr
};
