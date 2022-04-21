const { bpdtsUsers, bpdtsUsersByCity } = require("./utils/api");
const { distanceFromLondon } = require("./utils/londonRadius");

exports.fetchUsers = () => {
  const usersByCity = bpdtsUsersByCity();

  const users = bpdtsUsers()
    .then((data) => {
      const within50MilesOfLondon = [];
      // iterating and filtering through the array to obtain users within the required radius
      for (let i = 0; i < data.length; i++) {
        const distanceBetweenTwoPoints = distanceFromLondon(
          data[i].latitude,
          data[i].longitude
        );
        // 50 miles is 80467.2 meters
        if (distanceBetweenTwoPoints < 80467.2) {
          within50MilesOfLondon.push(data[i]);
        }
      }
      return within50MilesOfLondon;
    })
    .then((newArray) => {
      return newArray;
    });

  return Promise.all([usersByCity, users]).then((londonUsers) => {
    const mergedLondonUsers = londonUsers.flat(1);
    return mergedLondonUsers;
  });
};
