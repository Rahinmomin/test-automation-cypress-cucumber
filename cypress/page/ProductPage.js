class Productpage{

getShopTab()
{
    cy.get('[href="/angularpractice/shop"]').click()
}
 
clickCheckOutBtn()
{
  cy.get('.btn.btn-success').click()
}
typecountry()
{
  cy.get('#country').type('United')
}
confirmCountry()
{
  cy.get('.input-field.col.s12').next().contains('United Kingdom').click()
}
tickCheckBox()
{
  cy.get('#checkbox2').click({force: true})
}
clickPurchaseBtn()
{
  cy.get('input.btn.btn-success.btn-lg').click()
}
completionAlert()
{
  return cy.get ('.alert').then(function(element){
    const FinalText=element.text()
    expect(FinalText.includes("Success")).to.be.true   
   }) 
}

selectMobileProduct(Productdetail)
  {
  cy.get('.card.h-100').each(($el, index, $list) => 
    {
      const phone = $el.find('div h4 a').text()
      if(phone === Productdetail){
      cy.wrap($el).find('.btn.btn-info').click()
    }
  })
  
    
}

clickOnCheckout(){
  cy.get('.nav-link.btn.btn-primary').click()

}

validateProductTotal()
{
  var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index, $list) => {
      const Amount=$el.text()
        var res = Amount.split(" ")
        res = res[1].trim()
        sum= Number(sum)+Number(res)
    })
    cy.get('h3 strong').then(function(element){
            const Amount = element.text()
            var res = Amount.split(" ")
            var Total = res[1].trim()
            expect(Number(Total)).to.equal(sum) 
          })
}

}
export default  Productpage;