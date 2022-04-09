///<reference types="cypress"/>

describe('Product APIs', ()=>{
    context('GET products', ()=>{
        it('Should return the list of products', ()=>{
            cy.request({
                method : 'GET',
                url : 'https://reqres.in/api/users?page=2'
            }).should((response) =>{
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.data.length).to.eq(6)
                expect(response.body.data[0]).to.have.all.keys(
                    'email','first_name','last_name','avatar','id'
                )
            });
        });
    });
});