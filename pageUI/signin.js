Feature('Sign In');

const { expect } = require('chai')

const { getToken } = require('../api/page/get-token-page.js')
const { dataToken } = require('../api/data/get-token-data')
const { dataArticle } = require('../api/data/dataArticle')
const { createArticle } = require('../api/page/create-article')

const faker = require ('faker')
const generateTitle = faker.internet.userName();

/**
 * 1. Akses laman URL
 * 2. Click Sign In
 * 2. Masukkan email dan password
 * 3. Click "Sign In"
 */ 
 Scenario('Sign In Success', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign in')
    I.waitForText('Need an account?', 10)
    I.fillField({css : 'input[placeholder=Email]'}, 'ckcareens@gmail.com')
    I.fillField({css : 'input[placeholder=Password]'}, 'Karin123*')
    I.click({css : 'button[type=submit]'})
    I.see('karinkf')
});

Scenario('Invalid E-mail', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign in')
    I.waitForText('Need an account?', 10)
    I.fillField({css : 'input[placeholder=Email]'}, 'ckcareen@gmail.com')
    I.fillField({css : 'input[placeholder=Password]'}, 'Karin123*')
    I.click({css : 'button[type=submit]'})
    I.see('email or password is invalid')
});

Scenario('Invalid Password', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign in')
    I.waitForText('Need an account?', 10)
    I.fillField({css : 'input[placeholder=Email]'}, 'ckcareens@gmail.com')
    I.fillField({css : 'input[placeholder=Password]'}, 'Karin123')
    I.click({css : 'button[type=submit]'})
    I.see('email or password is invalid')
});

