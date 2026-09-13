const LOGIN_PATH = "/login";

export const AuthClient = {
  login(body) {
    return cy.requestApi({
      method: "POST",
      url: LOGIN_PATH,
      body,
      sensitive: true,
    });
  },
};
