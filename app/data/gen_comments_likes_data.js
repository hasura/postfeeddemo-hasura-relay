const _ = require("lodash");
const path = require("path");
const fs = require("fs-extra");
const process = require("process");

USERS_COUNT = 10;
POSTS_COUNT = 5000;

CSV_FILE = path.join(__dirname, "comments_likes.csv");

var data = "id,user_id,comment_id\n";

var id = 1;

for (var i = 1; i <= POSTS_COUNT; i++) {
  _.take(
    _.shuffle(_.range(1, USERS_COUNT + 1)),
    _.random(2, USERS_COUNT / 2)
  ).forEach(function (user_id) {
    data += id++ + "," + user_id + "," + i + "\n";
  });
}

fs.writeFileSync(CSV_FILE, data);
