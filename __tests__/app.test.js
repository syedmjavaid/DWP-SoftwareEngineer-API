const { app } = require("../app");
const request = require("supertest");

describe("GET /api/users ", () => {
  test("200: Responds with an array of users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array);
        res.body.forEach((user) => {
          id: expect.any(Number);
          first_name: expect.any(String);
          last_name: expect.any(String);
          email: expect.any(String);
          ip_address: expect.any(Number);
          latitude: expect.any(Number);
          longitude: expect.any(Number);
        });
      });
  });
});
