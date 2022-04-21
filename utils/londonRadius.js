const haversine = require("haversine-distance");

exports.distanceFromLondon = (latitude1, longitude1) => {
  // Coordinates for NW1 London postcode
  const centralLondonPostcode = { latitude: 51.527899, longitude: -0.132832 };
  const userCoordinates = { latitude: latitude1, longitude: longitude1 };
  return haversine(centralLondonPostcode, userCoordinates);
};
