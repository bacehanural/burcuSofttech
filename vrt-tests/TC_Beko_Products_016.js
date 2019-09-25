module.exports = {

    'TC_Beko_Products_016'(client) {
        const pdpMainPage = '.pageContent > div:first-child > section #product-info-top > div:first-child > div:first-child';
        const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-1 .SubNavProductsGrid__top .SubNavProductsGrid__title', 0, 0);
           page
           .waitForElementVisible('@productGridSecondItemFirst', 1000)
           .openLaundryItem()
           .clickLaundryProductItem()
           .waitForElementVisible('@productPageTitle', 1000)
           .clickProductCard()
           .pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(pdpMainPage, 'pdpMainPage');

    } 
 }