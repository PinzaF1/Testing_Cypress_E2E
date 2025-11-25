describe("Crud usuario", () => {
  it("Crear usuario", () => {
    cy.fixture("crudUsuariosCrear.json").then((mock) => {
      cy.intercept(
        "POST",
        "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users",
        {
            statusCode: 201,
            body: mock 
        }
      ).as("crearUsuario")
      cy.wait("@crearUsuario")

      //llamar
      cy.visit("http://localhost:5173");
      //campos existentes
      cy.get("input").eq(0).should("exist");
      cy.get("input").eq(1).should("exist");

      //llenar campos con mock
      mock.forEach((u) => { // <-- usar la misma colección que en intercept
        cy.get("input").eq(0).type(u.name);
        cy.get("input").eq(1).type(u.email);
        cy.get('button[type="submit"]').click();
      });
    });
  });

  it("Listar usuarios", () => {

  });
});
