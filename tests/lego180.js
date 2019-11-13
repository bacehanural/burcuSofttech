module.exports = {

    '@tags': ['lego180'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@exploreSecondBannerTitle')
                .assert.elementPresent('@exploreSecondBannerDescription')
                .clickSecondBannerExplore()
                .pause(3000)
                .assert.elementPresent('@facetWrapper')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego180.png')

        } 
    }

