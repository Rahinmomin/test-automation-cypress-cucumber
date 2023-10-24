class HomePage{
 
getEditBox()
{
  return cy.get('input[name="name"]:nth-child(2)')
}  
getPassword(){
  return cy.get('#exampleInputPassword1')
}
getEmail(){
  return cy.get('[name="email"]')
}
getBirthDate(){
  return cy.get('[type="date"]')
}
getCheckMe(){
  return cy.get('#exampleCheck1').click()
}
GetTwoWayData ()
{
   return cy.get('.ng-untouched.ng-pristine.ng-valid')
}
getGender()
{
    return cy.get('select')
}    
getEntrepreneur()
{
   return cy.get('#inlineRadio3')
}
getSubmitbtn()
{
return cy.get('[type="submit"]').click()
}
getCompletion()
{
return cy.get('.alert')
}
getShopTab()
{
    cy.get('[href="/angularpractice/shop"]').click()
}


}
export default HomePage;