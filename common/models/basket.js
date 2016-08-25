'use strict';
var _ = require('lodash');

function hasBreadOffer(basket) {
  var hasKeys = _.has(basket, 'butter') && _.has(basket, 'bread');
  if (hasKeys && basket.butter >= 2 && basket.bread >= 1) {
    return true;
  } else {
    return false;
  }
}

function hasMilkOffer(basket) {
  if (_.has(basket, ['milk']) && basket.milk >= 4) {
    return true;
  }
}


module.exports = function(Basket) {
  var prices = {
    milk: 1.15,
    butter: 0.8,
    bread: 1
  };

  Basket.total = function(basket) {
    var total = 0;
    if (hasBreadOffer(basket)) {
      while (hasBreadOffer(basket)) {
        total += (2 * prices.butter + 0.5);
        basket.butter -= 2;
        basket.bread -= 1;
      }
    } 

    if (hasMilkOffer(basket)) {
      
      while (hasMilkOffer(basket)) {
        total += 3 * prices.milk;
        basket.milk -= 4;
      }
    }

    _.forIn(basket, function(amount, product) {
      total += amount * prices[product];
    });

    total = Math.round(total * 100) / 100;
    return total;
  };
};
