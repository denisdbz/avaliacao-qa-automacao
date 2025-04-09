describe('POST /posts', () => {\n  it('deve criar um novo post', () => {\n    cy.request('POST', '/posts', {\n      title: 'foo',\n      body: 'bar',\n      userId: 1\n    }).then((response) => {\n      expect(response.status).to.eq(201)\n      expect(response.body).to.have.property('id')\n    })\n  })\n})
