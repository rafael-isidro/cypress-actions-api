import { UserClient } from "../../support/apiClients/userClient";

describe("GET - /users - Should retrieve a list of users", () => {
  it("TC-001: Should retrieve a list of users with valid request", function () {
    UserClient.getUsers().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
    });
  });
  it("TC-002: Should retrieve a single user with valid request", function () {
    const VALID_USER_ID = 2;

    UserClient.getUser(VALID_USER_ID).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.have.property("id");
      expect(response.body.data.id).to.eq(VALID_USER_ID);
    });
  });
  it("TC-003: Should not retrieve a single user with invalid user id", function () {
    
    const INVALID_USER_ID = 999999;
    UserClient.getUser(INVALID_USER_ID).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
