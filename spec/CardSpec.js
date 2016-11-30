
  describe("Card", () => {
  var Card = require("../app/Card");

  it("should return the correct suit", () => {
    var suit = "Hearts";
    var value = 2;
    var card = new Card(suit, value);

    expect(card.getSuit()).toEqual("Hearts");
  });

  it("should return the correct value", () => {
    var suit = "Hearts";
    var value = 2;
    var card = new Card(suit, value);

    expect(card.getValue()).toEqual(2);
  });
});
