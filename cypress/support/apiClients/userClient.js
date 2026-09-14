const USER_PATH = "/users";

export const UserClient = {
  getUsers() {
    return cy.requestApi({
      method: "GET",
      url: USER_PATH,
      sensitive: true,
    });
  },
  getUser(userId) {
    return cy.requestApi({
      method: "GET",
      url: `${USER_PATH}/${userId}`,
      sensitive: true,
    });
  },
};
