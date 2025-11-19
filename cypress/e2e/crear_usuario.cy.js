describe("crear uusario",()=>{
    it("crear uusario correctamente",()=>{
    cy.visit("http://localhost:5173")
    cy.get("input").eq(0).type("Mama Coco")
    cy.get("input").eq(1).type("mamacoco@sena.com") 
    //cy.contains("Crear Usuario").click(
    cy.get('button[type="submit"]').click()   
    })
    // verificar POST
    cy.intercept("POST","https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users"
    ). as("crearUsuario");
    //Validar que la peticion se envio
})