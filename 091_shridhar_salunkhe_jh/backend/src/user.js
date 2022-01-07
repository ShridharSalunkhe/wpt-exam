const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

async function addmsg(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into message (msg) values(?);`;
  connection.queryAsync(sql, [message.msg]);

  console.log("Record added");
  await connection.endAsync();
}

async function selectmsg(message) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connect.Async();

  let sql = `select * from message;`;
  const list = await connection.queryAsync(sql, []);

  console.log("mil gaya");
  await connection.endAsync();
  return list;
}

module.exports = { selectmsg, addmsg };
