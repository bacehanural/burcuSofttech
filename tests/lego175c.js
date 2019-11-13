module.exports = {

    '@tags': ['lego175c'],
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@thirdCardTitle')
                .clickThirdProductCardShopNow()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/5004406-LEGO:00:00/Star%20Wars%20Excl.%20MF%201')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego175c.png')

        } 
    }

