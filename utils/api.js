const axios = require("axios");

const bpdts = axios.create({
  baseURL: "https://bpdts-test-app.herokuapp.com",
});

exports.bpdtsUsers = () => {
  return bpdts.get("/users").then(({ data }) => {
    return data;
  });
};

exports.bpdtsUsersByCity = () => {
  return bpdts.get("/city/London/users").then(({ data }) => {
    return data;
  });
};
