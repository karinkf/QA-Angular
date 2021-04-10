Feature('Article');

/**const artTitle = 'What I Do When I Feel Like Giving Up'
const desc = 'Motivation'
const bodyart = 'I am struggling today. If you’ve ever struggled to be consistent with something you care about, maybe my struggle will resonate with you too.'
const comment = 'You are loved.'
*/
const { expect } = require('chai')
const faker = require('faker');

const title = faker.lorem.words(2)
const desc = faker.lorem.words()
const bodyart = faker.lorem.paragraphs()
const tags = faker.lorem.word(1)
const comment = faker.lorem.sentence()

const generateTitle = faker.random.word();

const { getToken } = require('../api/page/get-token-page')
const { dataToken } = require('../api/data/get-token-data')
const { dataArticle } = require('../api/data/dataArticle')
const { createArticle } = require('../api/page/create-article')

/**
 * 1. Akses laman URL
 * 2. Click Sign In
 * 2. Masukkan email dan password
 * 3. Click "Sign In"
 * 4. Click New Article
 * 5. Input Judul Article
 * 6. Input "What's this article about"
 * 7. Inpus detail article
 * 8. Create tag 
 * 9. Click button Publish Article
 */ 
 Scenario('Create Article', ({ I }) => {
     I.signin('ckcareens@gmail.com', 'Karin123*', 'karinkf')
     I.click('New Article')
     I.fillField({css : 'input[formcontrolname=title]'}, title)
     I.fillField({css : 'input[formcontrolname=description]'}, desc)
     I.fillField({css : 'textarea[formcontrolname=body]'}, bodyart)
     //I.fillField({css : 'input[placeholder=Enter tags]'}, tags)
     //I.pressKey('Enter')
     I.click({css : 'button[type=button]'})
     I.waitForText('Edit Article', 60)
     I.saveScreenshot('article.png', true)
});


/**
 * 1. Akses laman URL
 * 2. Click Sign In
 * 2. Masukkan email dan password
 * 3. Click "Sign In"
 * 4. Click New Article
 * 5. Input Judul Article
 * 6. Input "What's this article about"
 * 7. Inpus detail article
 * 8. Create tag 
 * 9. Click button Publish Article
 * 10. Write a comment
 * 11. Click Post comment
 */ 

Scenario('Post Comments', ({ I }) => {
    I.signin('ckcareens@gmail.com', 'Karin123*', 'karinkf')
    I.click('New Article')
    I.fillField({css : 'input[formcontrolname=title]'}, title)
    I.fillField({css : 'input[formcontrolname=description]'}, desc)
    I.fillField({css : 'textarea[formcontrolname=body]'}, bodyart)
    //I.fillField({css : 'input[placeholder=Enter tags]'}, tags)
    //I.pressKey('Enter')
    I.click({css : 'button[type=button]'})
    I.waitForText('Edit Article', 60)
    I.fillField({css : 'input[placeholder=Write a comment...]'}, comment)
    I.click({css : 'button[type=submit]'})
    I.waitForVisible(10)
    I.saveScreenshot('commentsArticle.png', true)
});

let response = '';
Scenario('Create article using API', async ({ I }) => {
    await I.amOnPage('/')
    await I.click('Sign in')
    await I.waitForText('Need an account?', 10)
    await I.fillField({css : 'input[placeholder=Email]'}, 'ckcareens@gmail.com')
    await I.fillField({css : 'input[placeholder=Password]'}, 'Karin123*')
    await I.click({css : 'button[type=submit]'})
    await I.see('karinkf')
    await I.click('karinkf')
    await I.dontSee(generateTitle);
    
    //Hit API to get Token
    response = await getToken(dataToken);
    //Hit API to create Article
    dataArticle.article.title = generateTitle;
    response = await createArticle(response.body.user.token, dataArticle)
    await I.amOnPage('/')
    await I.see('karinkf')
    await I.click('karinkf')
    await I.see(generateTitle);

});
