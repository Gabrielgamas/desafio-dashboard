describe("Sidebar Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigates to Dashboard and renders DashboardContent", () => {
    cy.get('a[href="/"]').click();

    cy.url().should("eq", Cypress.config().baseUrl);

    cy.get(".dashboard-content").should("exist");
  });

  it("Navigates to Analytics and renders AnalyticsContent", () => {
    cy.get('a[href="/analytics"]').click();

    cy.url().should("eq", Cypress.config().baseUrl + "analytics");

    cy.get(".analytics-content").should("exist");
  });

  it("Refresh button reloads the page", () => {
    cy.get("div.sidebar-refresh > .MuiButtonBase-root").click();

    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
