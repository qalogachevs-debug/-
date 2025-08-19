describe('аватар тренера', function (){
it('Покупка нового аватара для своего тренера', function () {
        cy.visit('https://pokemonbattle.ru');
       cy.get('#k_email').type('semank45sema@yandex.ru');
       cy.get('#k_password').type('0209011975Ss');
       cy.get('.MuiButton-root').click();
       cy.get('.header_card_trainer').click();
       cy.get('[data-qa="shop"]').click();
       cy.get('.available > button').first().click();
       cy.get('.card_number').type('4620869113632996');
       cy.get('.card_csv').type('125');
       cy.get('.card_date').type('1226');
       cy.get('.card_name').type('NAME');
       cy.wait(2000);
       cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
       cy.wait(2000);
       cy.get('.style_1_base_input').type('56456'); 
       cy.wait(2000);
       cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
       cy.contains('Покупка прошла успешно').should('be.visible');
       cy.get('.style_1_base_link_blue').click();
})
})