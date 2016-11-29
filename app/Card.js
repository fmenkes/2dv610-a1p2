(() => {
  'use strict';

  class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }

    getSuit() {
      return this.suit;
    }

    getValue() {

    }
  }

  module.exports = Card;
})();
