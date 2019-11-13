module.exports = {

    '@tags': ['lego296a'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickShippingHandling()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/page/shipping-and-returns')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego296a.png')
        },
    }