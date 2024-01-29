describe('Formulario de registro de usuario', () => {
  it('debería contener elementos de entrada para correo electrónico, contraseña y repetición de contraseña', () => {
    cy.visit('http://127.0.0.1:5500/evaluaci%C3%B3n/index.html');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
    cy.get('#repeat-password').should('exist');
  });

  it('debería mostrar un mensaje de advertencia y ocultar el botón cuando las contraseñas no coinciden', () => {
    cy.visit('http://127.0.0.1:5500/evaluaci%C3%B3n/index.html');
    cy.get('#password').type('contraseña1');
    cy.get('#repeat-password').type('contraseña2');
    cy.get('#send-btn').should('not.be.visible');
    cy.get('#password-message').should('be.visible');
  });

});
