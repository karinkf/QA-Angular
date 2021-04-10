const { expect } = require('chai')

const { getToken } = require('../page/get-token-page.js')
const { dataToken } = require('../data/get-token-data')
const { dataArticle } = require('../data/dataArticle')
const { createArticle } = require('../page/create-article')


describe("Article", () => {
    let response
    it('Create Article', async () => {
        response = await getToken (dataToken);
        response = await createArticle (response.body.user.token, dataArticle)
        
        expect(response.status).to.equal(200)
    })

    it('Create Article without request body', async () => {
        response = await getToken ();

        expect(response.status).to.equal(422)
    })

})



