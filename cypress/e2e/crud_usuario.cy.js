const { it } = require("node:test");

describe("crud usuarios", () => {
  it("crear usuario", () => {
    cy.fixture("crudUsuariosCrear.json").then((usuarios) => {
      cy.intercept(
        "POST",
        "https://skojryaxbquqtvwuyhfv.supabase.co/rest/v1/users",
        { statusCode: 201 }
      ).as("crear");

      cy.visit("http://localhost:5173");

      usuarios.forEach((u) => {
        cy.get("input").eq(0).type(u.name);
        cy.get("input").eq(1).type(u.email);
        cy.get('button[type="submit"]').click();
        cy.wait("@crear");
      });
    });
  });

  it("listar usuario", () => {
    cy.fixture("crudUusariosCrear.son").then((usuarios) => {
      cy.intercept(
  
      ).as("listar")
      cy.visit("http://localhost:5173");
      cy.wait("@listar");
      usuariosListar.forEach((user)=>{
        cy.contains(user.name).should("exist");
        cy.contains(user.email).should("exist");
      })
      it("eliminar usuario",()=>{
        cy.fixture("crudUsuariosListar.json").then((usuarios)=>{
          cy.fixture("crudUsuariosEliminar.json").then((usuariosEliminar)=>{
            cy.intercept(
              "GET",
              "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users",
              {
                statusCode: 200,
                body:mocklistar
              },
            ).as("listar")
            cy.intercept(
              "DELETE",
              "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users?id=eq."+usuarioEliminar.id,
              {
                statusCode:204,
                body:{}
              },
            ).as("eliminar")

            cy.visit("http://localhost:5173")
            cy.wait("@listar")
            cy.contains(mosklistar[0].name).parent().find("button").click()
            cy.wait("@eliminar")
        
       })  
    })
  })
})
