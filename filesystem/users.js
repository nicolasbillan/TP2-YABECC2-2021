// CRUD de iventores
const fs = require("fs");
const PATH = "./data/users.json";

// Lectura
function getUsers() {
  let data = fs.readFileSync(PATH, "utf-8");
  return JSON.parse(data);
}

function getUser(id) {
  return getUsers()
    .filter((u) => u._id === id)
    .pop();
}

// Alta
function pushUser(user) {
  let fileContent = getUsers();
  user._id = generateUserId();
  fileContent.push(user);
  writeFile(fileContent);
}

// Modificacion
function updateUser(id, user) {
  let target = getUser(id);
  if (!target) return;
  let filtered = getUsers().filter((i) => i._id !== id);
  user._id = id;
  filtered.push(user);
  writeFile(filtered);
}

// Eliminacion
function deleteUser(id) {
  let filtered = getUsers().filter((i) => i._id !== id);
  writeFile(filtered);
}

function writeFile(users) {
  fs.writeFileSync(PATH, JSON.stringify(users, null, 2));
}

function generateUserId() {
    return Date.now().toString(16) + Math.random().toString(36).substring(2);
}

module.exports = {
  getUser,
  getUsers,
  pushUser,
  updateUser,
  deleteUser,
};
