describe("listar usuario",()=>{
    it("listar usuario correctamente",()=>{
    cy.visit("http://localhost:5173")
    cy.intercept(
        "GET",
        "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users"
    ).as("getUsuario");

    cy.get("table tbody tr").should("exist");
    cy.get("table tbody tr").its("length").should("",0);
    })
})