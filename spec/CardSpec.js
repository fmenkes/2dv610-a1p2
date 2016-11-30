describe("Card", () => {
  var Card = require("../app/Card");
  var card;
  var suit;
  var value;

  beforeEach(() => {
    suit = "Hearts";
    value = 2;

    card = new Card(suit, value);
  });

  it("should return the correct suit", () => {
    expect(card.getSuit()).toEqual("Hearts");
  });

  it("should return the correct value", () => {
    expect(card.getValue()).toEqual(2);
  });
});
