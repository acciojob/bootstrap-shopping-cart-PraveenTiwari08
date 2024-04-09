//your JS code here. If required.
() => { 
  cy.get('.col-lg-8 .block-heading').should('have.length', 1).and('have.css', 'text-align', 'center'); 
  cy.get('.col-lg-8 .block-heading p').should('have.css', 'text-align', 'center'); 
}
