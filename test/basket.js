describe('Basket', function() {
  var server = require('../server/server')
  var request = require('supertest')(server)
  var expect = require('expect.js')

  var Basket; 

  before(function() {
    Basket = server.models.Basket;
  })

  it('should return normal price no offers', function (done) {
    var myTotal = Basket.total({ milk: 1, butter: 1, bread: 1 });
    expect(myTotal).to.be.a('number');  
    expect(myTotal).to.eql(2.95);  
    done() ;
   });

  it('has bread offer', function (done) {
    var myTotal = Basket.total({ butter: 2, bread: 2 });
    expect(myTotal).to.be.a('number');  
    expect(myTotal).to.eql(3.10);  
    done() ;
   });

  it('has milk offer', function (done) {
    var myTotal = Basket.total({ milk: 4 });
    expect(myTotal).to.be.a('number');  
    expect(myTotal).to.eql(3.45);  
    done() ;
   });

  it('should return bread offer and milk offer', function (done) {
    var myTotal = Basket.total({ milk: 8, butter: 2, bread: 1 });
    expect(myTotal).to.be.a('number');  
    expect(myTotal).to.eql(9);  
    done() ;
   });
});