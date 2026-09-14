import { AuthClient } from "../../support/apiClients/authClient";

describe("POST - /login - Should authenticate the user", () => {
  beforeEach(function loadFixture() {
    cy.fixture("login").as("authData");
  });

  it("TC-001: Should authenticate the user with valid credentials", function () {
    AuthClient.login(this.authData.validLogin).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  it("TC-002: Should not authenticate the user with invalid credentials", function () {
    AuthClient.login(this.authData.invalidLogin).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error).to.eq("user not found");
    });
  });

  it("TC-003: Should not authenticate the user with missing password", function () {
    AuthClient.login(this.authData.missingPassword).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error).to.eq("Missing password");
    });
  });

  it("TC-004: Should not authenticate the user with missing email", function () {
    AuthClient.login(this.authData.missingEmail).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error).to.eq("Missing email or username");
    });
  });
});
