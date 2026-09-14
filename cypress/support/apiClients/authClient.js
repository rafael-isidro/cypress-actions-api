const LOGIN_PATH = "/login";
const REGISTER_PATH = "/register";

export const AuthClient = {
  login(body) {
    return cy.requestApi({
      method: "POST",
      url: LOGIN_PATH,
      body,
      sensitive: true,
    });
  },

  register(body) {
    return cy.requestApi({
      method: "POST",
      url: REGISTER_PATH,
      body,
      sensitive: true,
    });
  }
};
