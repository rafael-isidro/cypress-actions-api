import { AuthClient } from "../../support/apiClients/authClient";

describe("POST - /register - Should register a new user", () => {
  beforeEach(function loadFixture() {
    cy.fixture("register").as("registerData");
  });

  it("TC-001: Should register a new user with valid data", function () {
    AuthClient.register(this.registerData.validRegister).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
    });
  });
});
