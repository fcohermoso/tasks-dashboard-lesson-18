describe('React dashboard specs', () => {  
  it("Puede añadir tareas nuevas", () => {
    cy.visit('http://localhost:5173/');
    
    // cy.visit('https://tasks-dashboard-lesson-18.vercel.app/');

    cy.get(".LatestTasksWidgetCreateBtn").should("have.text", "Crear Tarea");

    cy.get(".LatestTasksWidgetCreateBtn").click();

    cy.get("select.newTaskInputGroup option").should("have.length", 3);
    
    cy.get("select.newTaskInputGroup").select("susan");
    
    cy.get("input[name='description']").type("Crear los tests de Cypress");
    cy.get("input[name='date']").type("2024-11-11");
    
    cy.get(".newTaskItemBtn").click();

    cy.url().should('include', 'date=2024-11-11&description=Crear+los+tests+de+Cypress');
  });
})