describe('Testes de API', () => {
  it('Deve verificar o status 200 com o método GET', () => {
    cy.verifyResponseStatus('GET', '/', 200);
  });

  it('Deve verificar o status 400 com o método GET', () => {
    cy.verifyResponseStatus('GET', '/invalid', 404);
  });

  it('Deve verificar o status 201 com o método POST', () => {
    const payload = {
      id: '4',
      title: 'eum et est occaecati'
    };

    cy.verifyResponseStatus('POST', '/posts', 201, payload);
  });
  
  it('Deve verificar o status 200 com o método DELETE', () => {
    const itemId = 1;

    cy.verifyResponseStatus('DELETE', `/posts/${itemId}`, 200);
  });

  it('Deve verificar o status 404 com o método DELETE', () => {
    const itemId = 123;

    cy.verifyResponseStatus('DELETE', `/items/${itemId}`, 404);
  });

  it('Deve verificar o status 200 com o método PUT', () => {
    const itemId = 1;
    const updatedData = {
      id: '2',
      title: 'Descrição atualizada do item'
    };

    cy.verifyResponseStatus('PUT', `/posts/${itemId}`, 200, updatedData);
  });

  it('Deve verificar o status 200 com o método PATCH', () => {
    const itemId = 1;
    const updatedData = {
      description: 'Nova descrição'
    };

    cy.verifyResponseStatus('PATCH', `/posts/${itemId}`, 200, updatedData);
  });
});

