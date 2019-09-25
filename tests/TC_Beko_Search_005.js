module.exports = {

'@tags': ['TC_Beko_Search_005'],   
    'TC_Beko_Search'(client) {
    const mainQuery = 'Cocina';
    const page = client.page.bekoHomePage();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .checkInitialElements()
            .clickSearch()
            .searchHomePage(mainQuery)
            .waitForElementVisible('@searchKeyword', 10000)
            .assert.elementPresent('@searchKeyword')
            .clickSearchedKeyword()
            .assert.elementPresent('@searchResult')
            .pause(1000)
            .clickProductsWaypoint()
            .assert.elementPresent('@productsHeading');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Search_005.png')
    }
           
}