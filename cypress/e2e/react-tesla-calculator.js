describe('app', () => {
  it('can visit the application', () => {
    cy.visit("/")
      .getByTestId('tesla-climate')
      .wait(3000)
      .click();
  });
});