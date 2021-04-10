// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    signin : function(email, password, username){
      this.amOnPage('')
      this.click('Sign in')
      this.waitForText('Need an account?', 10)
      this.fillField({css : 'input[placeholder=Email]'}, email)
      this.fillField({css : 'input[placeholder=Password]'}, password)
      this.click({css : 'button[type=submit]'})
      this.see(username)

    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
