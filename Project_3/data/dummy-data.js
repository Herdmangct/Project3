import Bar from "../models/Bar";
import BarItem from "../models/BarItem";

// BARS
export const BARS = [
  new Bar(
    "b1",
    "u1",
    "The Glenmore Hotel",
    "Pub",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/07/the-view-from-the-glenmore-rooftop--the-glenmore.jpg",
    "96 Cumberland St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b2",
    "u1",
    "The Lord Nelson Brewery Hotel",
    "Pub",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/04/the-exterior-of-the-lord-nelson-brewery-hotel--the-lord.jpg",
    "19 Kent St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b3",
    "u1",
    "Blu Bar on 36",
    "Bar",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/07/cocktails-at-blu-bar-on-36--shangri-la-hotel-sydney.jpg",
    "176 Cumberland St, Sydney",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b4",
    "u1",
    "The Fortune of War",
    "Pub",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/04/the-fortune-of-war--jan-smith-flickr-1-1.jpg",
    "137 George St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b5",
    "u1",
    "The Doss House",
    "Bar",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/07/the-doss-house--alana-dimou-the-doss-house.jpg",
    "77/79 George St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b6",
    "u1",
    "The Australian Heritage Hotel",
    "Pub",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/04/the-australian-heritage-hotel--newtown-graffiti-flickr.jpg",
    "100 Cumberland St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b7",
    "u1",
    "Munich Brauhaus",
    "Pub",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/05/steins-of-german-beer--nyc-flickr.jpg",
    "33 Playfair St &, Argyle St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b8",
    "u1",
    "The Argyle",
    "Bar",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/07/cocktail--michael-korcuska-flickr.jpg",
    "18 Argyle St, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b9",
    "u1",
    "Harts Pub",
    "Pub",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/04/harts-pub--stilgherrian-flickr.jpg",
    "Essex St & Gloucester Street, The Rocks",
    "9:00 AM - 5:00 PM"
  ),
  new Bar(
    "b10",
    "u1",
    "The Rawson",
    "Bar",
    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/07/cocktail--chris-pople-flickr.jpg",
    "Ground Floor/100 George St, The Rocks",
    "9:00 AM - 5:00 PM"
  )
];

// BARITEMS
export const BARITEMS = [
  new BarItem(
    "i1",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Smirnoff Vodka",
    "Spirits",
    "Vodka",
    "Smirnoff",
    30,
    "ml",
    "smooth vodka with a classic taste that has inspired other varieties of vodkas worldwide.",
    15.0,
    false,
    true,
    true,
    "https://media.danmurphys.com.au/dmo/product/19252-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Single", "Double"] },
      mixers: {
        optionTitle: "CHOOSE MIXER",
        optionData: [
          "Coke",
          "Coke No Sugar",
          "Sprite",
          "Tonic Water",
          "Ginger Beer",
          "On The Rocks",
          "item1",
          "item2",
          "item3",
          "item4",
          "item5"
        ]
      }
    }
  ),
  new BarItem(
    "i2",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Grey Goose Vodka",
    "Spirits",
    "Vodka",
    "Grey Goose",
    30,
    "ml",
    "Grey Goose, the 'World's Best Tasting Vodka', as awarded by the Beverage Testing Institute is  distilled using the finest French wheat from Picardy",
    20.0,
    false,
    false,
    false,
    "https://media.danmurphys.com.au/dmo/product/904127-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Single", "Double"] },
      mixers: {
        optionTitle: "CHOOSE MIXER",
        optionData: [
          "Coke",
          "Coke No Sugar",
          "Sprite",
          "Tonic Water",
          "Ginger Beer",
          "On The Rocks"
        ]
      }
    }
  ),
  new BarItem(
    "i3",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Captain Morgan Spiced Rum",
    "Spirits",
    "Rum",
    "Captain Morgan",
    25,
    "ml",
    "Smooth and medium bodied, Captain Morgan Original Spiced is a spirit  based drink containing a secret blend of Caribbean rums, mellow spice and other natural flavours such as vanilla, cardamom and cinnamon.",
    10.0,
    false,
    false,
    true,
    "https://media.danmurphys.com.au/dmo/product/906818-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Single", "Double"] },
      mixers: {
        optionTitle: "CHOOSE MIXER",
        optionData: [
          "Coke",
          "Coke No Sugar",
          "Sprite",
          "Tonic Water",
          "Ginger Beer",
          "On The Rocks"
        ]
      }
    }
  ),
  new BarItem(
    "i4",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Sailor Jerry Spiced Rum",
    "Spirits",
    "Rum",
    "Sailor Jerry",
    30,
    "ml",
    "Norman 'Sailor Jerry' Collins was the father of old school tattooing and was a master craftsman whose artistry and integrity remain as timeless as the liquid that bears his signature.",
    10.0,
    false,
    false,
    false,
    "https://media.danmurphys.com.au/dmo/product/374557-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Single", "Double"] },
      mixers: {
        optionTitle: "CHOOSE MIXER",
        optionData: [
          "Coke",
          "Coke No Sugar",
          "Sprite",
          "Tonic Water",
          "Ginger Beer",
          "On The Rocks"
        ]
      }
    }
  ),
  new BarItem(
    "i5",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Gordon's Gin",
    "Spirits",
    "Gin",
    "Gordon's",
    30,
    "ml",
    "Founded by Alexander Gordon in 1769, the Gordon's recipe has remained almost untouched since its creation.",
    10.0,
    false,
    true,
    true,
    "https://media.danmurphys.com.au/dmo/product/21281-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Single", "Double"] },
      mixers: {
        optionTitle: "CHOOSE MIXER",
        optionData: [
          "Coke",
          "Coke No Sugar",
          "Sprite",
          "Tonic Water",
          "Ginger Beer",
          "On The Rocks"
        ]
      }
    }
  ),
  new BarItem(
    "i6",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Bombay Sapphire Gin",
    "Spirits",
    "Gin",
    "Bombay Sapphire",
    30,
    "ml",
    "The incomparable taste of Bombay Sapphire is the result of ten carefully selected botanical ingredients coupled with a unique distillation process.",
    10.0,
    false,
    false,
    false,
    "https://media.danmurphys.com.au/dmo/product/94915-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Single", "Double"] },
      mixers: {
        optionTitle: "CHOOSE MIXER",
        optionData: [
          "Coke",
          "Coke No Sugar",
          "Sprite",
          "Tonic Water",
          "Ginger Beer",
          "On The Rocks"
        ]
      }
    }
  ),
  new BarItem(
    "i7",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Corona Extra",
    "Beer",
    "Beer",
    "Corona",
    355,
    "ml",
    "Corona is famous around the world for its smooth, refreshing taste.",
    8.0,
    false,
    false,
    false,
    "https://media.danmurphys.com.au/dmo/product/357480-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Bottle", "Long-neck"] }
    }
  ),
  new BarItem(
    "i8",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Carlton Dry",
    "Beer",
    "Beer",
    "Carlton",
    1,
    "Schooner",
    "Carlton Dry's extended brewing process removes excess sugars creating a smooth, crisp finish with lower carbohydrates than a full strength beer.",
    7.0,
    true,
    true,
    true,
    "https://media.danmurphys.com.au/dmo/product/809797-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Schooner", "Pint"] }
    } // Pint needs to increase the price
  ),
  new BarItem(
    "i9",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Asahi Super Dry",
    "Beer",
    "Beer",
    "Asahi",
    1,
    "Schooner",
    "Super Dry - the beer for all seasons.",
    10.0,
    false,
    false,
    true,
    "https://media.danmurphys.com.au/dmo/product/98903-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Schooner", "Pint"] }
    } // Pint needs to increase the price
  ),
  new BarItem(
    "i10",
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    "Somersby Apple Cider",
    "Cider",
    "Cider",
    "Somersby",
    330,
    "ml",
    "Somersby Apple Cider is an invigorating and refreshing cider made from quality fermented apple juice and natural apple flavouring.",
    8.0,
    false,
    false,
    true,
    "https://media.danmurphys.com.au/dmo/product/768443-1.png",
    {
      sizes: { optionTitle: "CHOOSE SIZE", optionData: ["Schooner", "Pint"] }
    } // Pint needs to increase the price
  )
];
