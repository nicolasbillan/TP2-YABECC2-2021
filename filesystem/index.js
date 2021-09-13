const fs = require("fs");
const InventorData = require("./inventor");
const UserData = require("./users");
const Chalk = require("chalk");
const log = console.log;

// let inv = { _id: 10, first: "Albert2", last: "Einstein5", year: 18679 };

// //const data = fs.readFileSync('./text.txt','utf-8');

// //console.log(data);

// InventorData.pushInventor(inv);
// console.log(InventorData.getInventors());

// inv._id = 100;

// InventorData.updateInventor(10, inv);
// console.log(InventorData.getInventors());
// InventorData.deleteInventor(10);
// console.log(InventorData.getInventors());

let user = UserData.getUser('59b99df5cfa9a34dcd788641');

log(Chalk.blue(JSON.stringify(user, null, 2)));

//user._id = '12341231';
//user.name = 'JEJE'

//UserData.updateUser('59b99df5cfa9a34dcd788641', user);