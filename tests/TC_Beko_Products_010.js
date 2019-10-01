module.exports = {

'@tags': ['TC_Beko_Products_010'],   
    'TC_Beko_Products'(client) {
    const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-0 .SubNavProductsGrid__top .SubNavProductsGrid__title', 0, 0);
           page
           .openKitchenSeeAll()
           .assert.elementPresent('@selectedProductsMenu');
   
           client.saveScreenshot('tests_output/screenshots/TC_Beko_Products_010.png')

    } 
 }