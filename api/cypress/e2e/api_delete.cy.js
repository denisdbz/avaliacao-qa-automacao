describe('DELETE /posts/1', () => {\n  it('deve deletar o post', () => {\n    cy.request('DELETE', '/posts/1').then((response) => {\n      expect(response.status).to.eq(200)\n    })\n  })\n})
