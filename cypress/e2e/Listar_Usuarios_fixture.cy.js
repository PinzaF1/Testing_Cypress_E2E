describe("listar datos prueba",()=>{
    it("listar datos correctamente",()=>{
        cy.fixture("ListarUsario.json").then((mock)=>{
            cy.intercept(
                "GET",
                "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users",
                mock
            ).as("listarMock")
            cy.visit("http://localhost:5173");

            mock.forEach((user)=>{
                cy.contains(user.name)
            });     
        })
    })
})