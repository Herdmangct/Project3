// Drink on the Menu
class BarItem {
  constructor(
    id,
    barId,
    title,
    Category,
    subCategory,
    brandName,
    servingSize,
    servingUnit,
    description,
    price,
    onDraft,
    onSpecial,
    isHouseDrink,
    imageUrl,
    mixers,
    sizes
  ) {
    this.id = id;
    this.barId = barId;
    this.title = title;
    this.Category = Category;
    this.subCategory = subCategory;
    this.brandName = brandName;
    this.servingSize = servingSize;
    this.servingUnit = servingUnit;
    this.description = description;
    this.price = price;
    this.onDraft = onDraft;
    this.onSpecial = onSpecial;
    this.isHouseDrink = isHouseDrink;
    this.imageUrl = imageUrl;
    this.mixers = mixers;
    this.sizes = sizes;
  }
}

export default BarItem;
