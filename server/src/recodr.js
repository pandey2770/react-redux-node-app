const uuidv1 = require("uuid/v1");
const DB = require("./db");

async function getAllRecodr() {
  const recodr = await DB.get("SELECT * FROM recodr");
  return recodr;
}

async function createRecodr(des, time  ) {
  const id = uuidv1();
  const query = {
    text: "INSERT INTO recodr VALUES($1, $2, $3 )",
    values: [ id, des, time  ],
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
  updateRecodr,
  createRecodr
};
