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
