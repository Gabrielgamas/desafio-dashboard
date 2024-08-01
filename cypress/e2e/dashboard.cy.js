describe("DashboardContent Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Visita a página que contém o componente DashboardContent
  });

  it("Displays error message when profile name is empty", () => {
    cy.get(".profile-save-buttom").click();
    cy.contains("O nome do perfil não pode estar vazio.").should("be.visible");
  });

  it("Updates profile name input value", () => {
    cy.get("#profile-name").type("Profile 1").should("have.value", "Profile 1");
  });

  it("Saves profile and checks profiles list", () => {
    cy.get("#profile-name").type("Profile 1");
    cy.get(".profile-save-buttom").click();
    cy.get(".profile-manager").contains("Profile 1").should("be.visible");
  });

  it("Displays error message when more than 5 profiles are added", () => {
    for (let i = 1; i <= 6; i++) {
      cy.get("#profile-name").clear().type(`Profile ${i}`);
      cy.get(".profile-save-buttom").click();
    }
    cy.contains("Você pode salvar no máximo 5 perfis.").should("be.visible");
  });

  it("Loads profile and updates checkboxes states", () => {
    // Save a profile with specific checkbox states
    cy.get("#profile-name").type("Profile Test");
    cy.get('label:contains("Europa") input').check();
    cy.get('label:contains("Homem") input').check();
    cy.get(".profile-save-buttom").click();

    // Change checkbox states to verify they are reset on profile load
    cy.get('label:contains("Europa") input').uncheck();
    cy.get('label:contains("Homem") input').uncheck();

    // Load the saved profile and check if states are updated
    cy.contains("Profile Test").click();
    cy.get('label:contains("Europa") input').should("be.checked");
    cy.get('label:contains("Homem") input').should("be.checked");
  });

  it("Toggles checkbox states", () => {
    cy.get('label:contains("Europa") input').check().should("be.checked");
    cy.get('label:contains("Europa") input').uncheck().should("not.be.checked");

    cy.get('label:contains("América") input').check().should("be.checked");
    cy.get('label:contains("América") input')
      .uncheck()
      .should("not.be.checked");

    cy.get('label:contains("Ásia") input').check().should("be.checked");
    cy.get('label:contains("Ásia") input').uncheck().should("not.be.checked");

    cy.get('label:contains("Homem") input').check().should("be.checked");
    cy.get('label:contains("Homem") input').uncheck().should("not.be.checked");

    cy.get('label:contains("Mulher") input').check().should("be.checked");
    cy.get('label:contains("Mulher") input').uncheck().should("not.be.checked");
  });

  it("Filters data in charts based on checkbox states", () => {
    // Verifica a existência do gráfico (canvas) antes das alterações
    cy.get(".chart").should("exist");

    // Interage com os checkboxes e verifica a presença do gráfico após alterações
    cy.get('label:contains("Europa") input').uncheck();
    cy.get(".chart").should("exist"); // Verifica se o gráfico ainda existe

    cy.get('label:contains("Europa") input').check();
    cy.get(".chart").should("exist"); // Verifica se o gráfico ainda existe

    cy.get('label:contains("América") input').uncheck();
    cy.get(".chart").should("exist"); // Verifica se o gráfico ainda existe

    cy.get('label:contains("América") input').check();
    cy.get(".chart").should("exist"); // Verifica se o gráfico ainda existe

    cy.get('label:contains("Ásia") input').uncheck();
    cy.get(".chart").should("exist"); // Verifica se o gráfico ainda existe

    cy.get('label:contains("Ásia") input').check();
    cy.get(".chart").should("exist"); // Verifica se o gráfico ainda existe
  });
});
