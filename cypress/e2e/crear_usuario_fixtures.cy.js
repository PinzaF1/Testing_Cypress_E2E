describe("crear uusario",()=>{
    it("crear uusario correctamente",()=>{
        cy.fixture('usuario.json').then((mock)=>{
            cy.intercept("POST","https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users").as("crearUsuario");
            cy.visit("http://localhost:5173")
            cy.get("input").eq(0).should("exist")
            cy.get("input").eq(1).should("exist")

            cy.get("input").eq(0).type(mock.name)
            cy.get("input").eq(1).type(mock.email)
            cy.get("button").click()

            cy.wait("@crearUsuario").its("request.body").should("eq",{
                name: mock.name,
                email: mock.email
            })
    })
    })
})