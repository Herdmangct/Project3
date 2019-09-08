// Drink on the Menu
class BarItem {
  constructor(
    id,
    barId,
    title,
    alcoholCategory,
    brandName,
    servingSize,
    servingUnit,
    description,
    price,
    onDraft,
    onSpecial,
    isHouseDrink,
    imageUrl
  ) {
    this.id = id;
    this.barId = barId;
    this.title = title;
    this.alcoholCategory = alcoholCategory;
    this.brandName = brandName;
    this.servingSize = servingSize;
    this.servingUnit = servingUnit;
    this.description = description;
    this.price = price;
    this.onDraft = onDraft;
    this.onSpecial = onSpecial;
    this.isHouseDrink = isHouseDrink;
    this.imageUrl = imageUrl;
  }
}

export default BarItem;

// new Meal(
//   'm1',
//   ['c1', 'c2'],
//   'Spaghetti with Tomato Sauce',
//   'affordable',
//   'simple',
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
//   20,
//   [
//     '4 Tomatoes',
//     '1 Tablespoon of Olive Oil',
//     '1 Onion',
//     '250g Spaghetti',
//     'Spices',
//     'Cheese (optional)'
//   ],
//   [
//     'Cut the tomatoes and the onion into small pieces.',
//     'Boil some water - add salt to it once it boils.',
//     'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
//     'In the meantime, heaten up some olive oil and add the cut onion.',
//     'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
//     'The sauce will be done once the spaghetti are.',
//     'Feel free to add some cheese on top of the finished dish.'
//   ],
//   false,
//   true,
//   true,
//   true
// ),
