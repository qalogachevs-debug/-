describe('Аватар тренера', function () {
  it('Покупка нового аватара для своего тренера', function () {
    // Открываем главную страницу
    cy.visit('https://pokemonbattle.ru');

    // Проверяем наличие заголовка "Битва покемонов" (используем селектор)
    cy.get('.style_1_popup_white_title').should('be.visible');

    // Авторизуемся
    cy.get('#k_email').type('USER_LOGIN');
    cy.get('#k_password').type('USER_PASSWORD');
    cy.get('.MuiButton-root').click();

    // Проверяем, что появились новые элементы после авторизации (используем селектор)
    cy.get('.style_1_heading_38_400_pokemon_classic').should('be.visible');

    // Переходим в профиль и магазин
    cy.get('.header_card_trainer').click();
    cy.get('[data-qa="shop"]').click();

    // Проверяем, что мы оказались в магазине (используем селектор)
    cy.get('.pokemon__title').should('be.visible');

    // Покупаем первый доступный аватар
    cy.get('.available > button').first().click();

    // Проверяем, что появилась форма оплаты (используем селектор)
    cy.get('.payment_header').should('be.visible');

    // Вводим данные карты
    cy.get('.card_number').type('4620869113632996');
    cy.get('.card_csv').type('125');
    cy.get('.card_date').type('1226');
    cy.get('.card_name').type('NAME');

    // Используем единый селектор для активной кнопки Оплатить
    const activePayButtonSelector = '.style_1_base_button_payment_body > .style_1_base_button_payment:not([disabled])';

    // Нажимаем кнопку оплаты
    cy.get(activePayButtonSelector).click({ force: true });

    // Проверяем появление дополнительной формы подтверждения оплаты
    cy.get('.payment_form_3ds_title').should('be.visible');

    // Вводим защитный код
    cy.get('.style_1_base_input').type('56456');

    // Нажимаем кнопку подтверждения оплаты
    cy.get(activePayButtonSelector).click({ force: true });

    // Ждём появление сообщения об успешной покупке
    cy.get('.payment_status_top_title').should('be.visible');

    // Возвращаемся назад
    cy.get('.style_1_base_link_blue').click();
  });
});
