var request = require('request');

// it("should respond with search results page", function(done) {
//   request("http://localhost:3000/searchResults?upccode=028400071932&name=Search", function(error, response, body){
//     expect(body).toEqual("search results page");
//     done();
//   });
// }); // this test should fail

it("should respond with search results page", function(done) {
  request("http://localhost:3000/searchResults?upccode=028400071932&name=Search", function(error, response, body){
    expect(body).toEqual("Results for UPC: 028400071932 Name: CHEETOS CHEETOS, BAKED!, CHEESE FLAVORED SNACKS, CRUNCHY CHEESE Allergens Present: Cereals Milk Soybean Sesame Seeds Lactose Corn Ingredients: ENRICHED CORN MEAL, CORN MEAL, FERROUS SULFATE, NIACIN, THIAMIN MONONITRATE, RIBOFLAVIN, AND FOLIC ACID, VEGETABLE OIL, CORN, SOYBEAN CANOLA, AND/OR SUNFLOWER OIL, WHEY, CHEDDAR CHEESE, MILK, CHEESE CULTURES, SALT, ENZYMES, SALT, SEA MINERALS, CALCIUM CARBONATE AND MAGNESIUM CARBONATE, MALTODEXTRIN (MADE FROM CORN), WHEY PROTEIN CONCENTRATE, MONOSODIUM GLUTAMATE, NATURAL AND ARTIFICIAL FLAVORS LACTIC ACID, CITRIC ACID, AND ARTIFICIAL COLOR (YELLOW 6, YELLOW 5). Search again? done();");
  });
}); // this test pass but it does not, gotta fix it
