const { fetchUsers, fetchLondonUsers } = require("./users.models");

exports.getUsers = (req, res) => {
  fetchUsers().then((data) => {
    res.status(200).send(data);
  });
};
