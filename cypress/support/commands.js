Cypress.Commands.add("requestApi", (options = {}) => {
  const { sensitive = false, headers = {}, ...rest } = options;

  return cy.env(["API_KEY"]).then(({ API_KEY }) => {
    const reqOptions = {
      failOnStatusCode: false,
      log: !sensitive,
      headers: {
        ...headers,
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      ...rest,
    };

    return cy.api(reqOptions);
  });
});

