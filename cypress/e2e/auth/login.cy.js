import { AuthClient } from "../../support/apiClients/authClient";

describe("POST - /login - Should authenticate the user", () => {
  beforeEach(function loadFixture() {
    cy.fixture("auth").as("authData");
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
    });
  });
});
