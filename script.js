cy.get(".code-container").find("input.code").eq(5).type("{backspace}");
cy.focused().should("have.attr", "id", "code-5");

cy.get(".code").eq(4).type("{backspace}");
cy.focused().should("have.attr", "id", "code-4");

cy.get(".code").eq(3).type("{backspace}");
cy.focused().should("have.attr", "id", "code-3");

cy.get(".code").eq(2).type("{backspace}");
cy.focused().should("have.attr", "id", "code-2");

cy.get(".code").eq(1).type("{backspace}");
cy.focused().should("have.attr", "id", "code-1");

cy.get(".code").eq(0).type("{backspace}");
cy.focused().should("have.attr", "id", "code-0"); // Assuming 'code-0' is the ID of the first input
