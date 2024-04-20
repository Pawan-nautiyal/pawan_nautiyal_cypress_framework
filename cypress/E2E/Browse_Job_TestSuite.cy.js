describe('Job Application Test Suite', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/jobs');
      cy.get('h1').should('contain', 'Browse Jobs');
    });
  
    it('Apply for Senior Software Developer in Gurugram', () => {
      cy.contains('Sr. Software Developer').next().contains('Location: Gurgaon, India').click();
      cy.get('h1').should('contain', 'Sr. Software Developer');
      cy.contains('DETAILED ROLE DESCRIPTION:').should('exist');
      cy.contains('DESIRED SKILLS:').should('exist');
      cy.contains('WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?').should('exist');
      cy.contains('APPLY NOW').click();
      cy.get('input[name="name"]').type('Pawan Nautiyal');
      cy.get('input[name="email"]').type('pawannautiyal777@gmail.com');
      cy.get('input[name="resume"]').attachFile('Pawan_Resume.pdf');
      cy.contains('button', 'Submit').click();
      cy.contains('div', 'Application submitted').should('exist');
    });
    it('Apply for Senior Software Developer in London', () => {
        cy.contains('Sr. Software Developer').next().contains('Location: London, UK').click();
        cy.get('h1').should('contain', 'Sr. Software Developer');
        cy.contains('DETAILED ROLE DESCRIPTION:').should('exist');
        cy.contains('DESIRED SKILLS:').should('exist');
        cy.contains('WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?').should('exist');
        cy.contains('APPLY NOW').click();
        cy.get('input[name="name"]').type('Pawan Nautiyal');
        cy.get('input[name="email"]').type('pawannautiyal777@gmail.com');
        cy.get('input[name="resume"]').attachFile('Pawan_Resume.pdf');
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Application submitted').should('exist');
      });
      it('Testing Engineer Role Application in Gurugram', () => {
        cy.contains('Testing Engineer').next().contains('Location: Gurgaon, India').click();
        cy.get('h1').should('contain', 'Testing Engineer');
        cy.contains('DETAILED ROLE DESCRIPTION:').should('exist');
        cy.contains('DESIRED SKILLS:').should('exist');
        cy.contains('WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?').should('exist');
        cy.contains('APPLY NOW').click();
        cy.get('input[name="name"]').type('Pawan Nautiyal');
        cy.get('input[name="email"]').type('pawannautiyal777@gmail.com');
        cy.get('input[name="resume"]').attachFile('Pawan_Resume.pdf');
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Application submitted').should('exist');
      });
      it('Testing Engineer Role Application in London', () => {
        cy.contains('Testing Engineer').next().contains('Location: London, UK').click();
        cy.get('h1').should('contain', 'Testing Engineer');
        cy.contains('DETAILED ROLE DESCRIPTION:').should('exist');
        cy.contains('DESIRED SKILLS:').should('exist');
        cy.contains('WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?').should('exist');
        cy.contains('APPLY NOW').click();
        cy.get('input[name="name"]').type('Pawan Nautiyal');
        cy.get('input[name="email"]').type('pawannautiyal777@gmail.com');
        cy.get('input[name="resume"]').attachFile('Pawan_Resume.pdf');
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Application submitted').should('exist');
      });
      it('Senior Web Designer Role Application in Gurugram', () => {
        cy.contains('Sr. Web Designer').next().contains('Location: London, UK').click();
        cy.get('h1').should('contain', 'Sr. Web Designer');
        cy.contains('DETAILED ROLE DESCRIPTION:').should('exist');
        cy.contains('DESIRED SKILLS:').should('exist');
        cy.contains('WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?').should('exist');
        cy.contains('APPLY NOW').click();
        cy.get('input[name="name"]').type('Pawan Nautiyal');
        cy.get('input[name="email"]').type('pawannautiyal777@gmail.com');
        cy.get('input[name="resume"]').attachFile('Pawan_Resume.pdf');
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Application submitted').should('exist');
      });
      it('Senior Web Designer Role Application in London', () => {
        cy.contains('Sr. Web Designer').next().contains('Location: Gurgaon, India').click();
        cy.get('h1').should('contain', 'Sr. Web Designer');
        cy.contains('DETAILED ROLE DESCRIPTION:').should('exist');
        cy.contains('DESIRED SKILLS:').should('exist');
        cy.contains('WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?').should('exist');
        cy.contains('APPLY NOW').click();
        cy.get('input[name="name"]').type('Pawan Nautiyal');
        cy.get('input[name="email"]').type('pawannautiyal777@gmail.com');
        cy.get('input[name="resume"]').attachFile('Pawan_Resume.pdf');
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Application submitted').should('exist');
      });
  
    afterEach(() => {
      cy.log('Closing the browser');
    });
  });