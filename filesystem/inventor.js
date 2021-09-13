// CRUD de iventores
const fs = require("fs");
const PATH = "./data/inventors.json";

// Lectura
function getInventors() {
  let data = fs.readFileSync(PATH, "utf-8");
  let dataInventors = JSON.parse(data);
  return dataInventors.inventors;
}

function getInventor(id) {
  return getInventors().filter((inventor) => inventor._id === id);
}

// Alta
function pushInventor(inventor) {
  let fileContent = getInventors();
  fileContent.push(inventor);
  writeFile(fileContent);
}

// Modificacion
function updateInventor(id, inventor) {
  let filtered = getInventors().filter((i) => i._id !== id);
  inventor._id = id;
  filtered.push(inventor);
  writeFile(filtered);
}

// Eliminacion
function deleteInventor(id) {
  let filtered = getInventors().filter((i) => i._id !== id);
  writeFile(filtered);
}

function writeFile(inventors) {
  fs.writeFileSync(PATH, JSON.stringify({ inventors: inventors }, null, 2));
}

module.exports = {
  getInventor,
  getInventors,
  pushInventor,
  deleteInventor,
  updateInventor,
};
