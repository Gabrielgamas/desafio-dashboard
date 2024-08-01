describe("Sidebar Navigation Tests", () => {
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit("/");
  });

  it("Navigates to Dashboard and renders DashboardContent", () => {
    // Verifica se o link para o Dashboard está presente e clica nele
    cy.get('a[href="/"]').click();

    // Verifica se o URL mudou para "/"
    cy.url().should("eq", Cypress.config().baseUrl);

    // Verifica se o componente DashboardContent está presente
    // Substitua '.dashboard-content' pelo seletor apropriado se necessário
    cy.get(".dashboard-content").should("exist");
  });

  it("Navigates to Analytics and renders AnalyticsContent", () => {
    // Verifica se o link para Analytics está presente e clica nele
    cy.get('a[href="/analytics"]').click();

    // Verifica se o URL mudou para "/analytics"
    cy.url().should("eq", Cypress.config().baseUrl + "analytics");

    // Verifica se o componente AnalyticsContent está presente
    // Substitua '.analytics-content' pelo seletor apropriado se necessário
    cy.get(".analytics-content").should("exist");
  });

  it("Refresh button reloads the page", () => {
    // Verifica se o botão de refresh está presente e clica nele
    cy.get("div.sidebar-refresh > .MuiButtonBase-root").click();

    // Verifica se a página foi atualizada
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
