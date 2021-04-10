Feature('Settings');

/**
 * 1. Akses laman URL
 * 2. Click Sign In
 * 2. Masukkan email dan password
 * 3. Click "Sign In"
 * 4. Click Settings
 * 5. Update bio 
 * 6. Fill password
 * 7. Click update settings
 */ 
 Scenario('Update Settings', ({ I }) => {
    I.signin('ckcareens@gmail.com', 'Karin123*', 'karinkf')
    I.click('Settings')
    I.see('Your Settings')
    I.fillField({css : 'textarea[formcontrolname=bio]'}, 'I feel like dying every day')
    I.fillField({css : 'input[formcontrolname=password]'}, 'Karin123*')
    I.click({css : 'button[type=submit]'})
    I.see('karinkf')
    I.saveScreenshot('update_bio.png')
});

/**
 * 1. Akses laman URL
 * 2. Click Sign In
 * 2. Masukkan email dan password
 * 3. Click "Sign In"
 * 4. Click Settings
 * 5. Update bio 
 * 6. Click update settings
 */ 

 Scenario('Update Settings with blank password', ({ I }) => {
    I.signin('ckcareens@gmail.com', 'Karin123*', 'karinkf')
    I.click('Settings')
    I.see('Your Settings')
    I.fillField({css : 'textarea[formcontrolname=bio]'}, 'I feel like dying every day')
    I.click({css : 'button[type=submit]'})
    I.saveScreenshot('update_bio.png')
    I.see("password can't be blank")
});