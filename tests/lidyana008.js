module.exports = {

    '@tags': ['lidyana008'],   

        'TC_Lidyana_MainPage'(client) {
        const email = 'b.ural-softtech@yopmail.com';
        const password = 'Burcu-123';
        const addressTitle = 'Ev';
        const addressFirstName = 'Burcu';
        const addressLastName = 'Ural';
        const addressPhoneNumber = '5071680216';
        const addressAddress = 'Kılıç Reis Mahallesi';
        const addressPostCode = '35150';

        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .checkInitialElements()
            .acceptCookies()

            .clickLogin()
            .pause(3000)
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(3000)

            .clickLogin()
            .clickAccountInformation()
            .clickAddressMenuBar()
            .clickNewAddress()
            .pause(3000)

            .typeAddressTitle(addressTitle)
            .typeAddressFirstName(addressFirstName)
            .typeAddressLastName(addressLastName)
            .typeAddressPhoneNumber(addressPhoneNumber)
            .typeAddressAddress(addressAddress)
            .clickAddressCountry()
            .selectAddressCountry()
            .clickAddressCity()
            .selectAddressCity()
            .clickAddressDistrict()
            .selectAddressDistrict()
            .typeAddressPostCode(addressPostCode)

            .clickAddressSubmitButton()

            .pause(3000)

            .myAddressFieldValidation()
            
            .myAddressFieldAssertions();

            client.saveScreenshot('tests_output/screenshots/lidyana008.png')
        }
    }


