Feature('Sign Up');

const faker = require('faker');

    const randomEmail = faker.internet.email(); // E-mail
    const randomUsername = faker.internet.userName(); //username
    const randomPassword = faker.internet.password(); //password

/**
 * 1. Mengakses website https://angular.realworld.io
 * 2. Melakukan sign up 
 * 3. Menginput random username menggunakan faker
 * 4. Menginput random e-mail
 * 5. Menginput random password
 * 6. Mengklik button submit 
 * 7. Berhasil sign up
 */ 
Scenario('Sign Up New Account', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign up')
    I.waitForText('Have an account?', 10)
    I.fillField({css : 'input[placeholder=Username]'}, randomUsername)
    I.fillField({css : 'input[placeholder=Email]'}, randomEmail)
    I.fillField({css : 'input[placeholder=Password]'}, randomPassword)
    I.click({css : 'button[type=submit]'})
    I.waitForVisible(5)
});
