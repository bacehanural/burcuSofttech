module.exports = {

    '@tags': ['lego250'],   

        'TC_Lego_Header'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.legoHeader();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickAccount()
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);

            page
            .pause(3000)
            .clickOrderStatus();
            /*.pause(3000)
            .assert.elementPresent('@OrderStatusPageCannotBeDisplayed');*/
               
            client.saveScreenshot('tests_output/screenshots/lego250.png')
        },
    }

