/// <reference types = "cypress"/>

it('website', function() {
cy.visit('https://demo.nopcommerce.com/')

const searchBox = "//input[contains(@class,'search-box')]"
const searchButton = "//button[contains(@class,'search-box-button')]"
const searchQuery = "Apple MacBook Pro 13-inch"
const addToCartButton = "(//button[contains(@class,'add-to-cart-button')])[1]"
const shoppingCart = "//span[contains(@class,'cart-label')]"
const cartProductVerify = "//a[@class='product-name']"

cy.xpath(searchBox).type(searchQuery)
cy.xpath(searchButton).click()
cy.contains(searchQuery,{timeoput: 6000})
.should('be.visible').click()
cy.xpath(addToCartButton).click()
cy.xpath(shoppingCart).click()
cy.xpath(cartProductVerify).should('have.value', searchQuery)
// expect(cartProductVerify).to.contains(searchQuery)

} )