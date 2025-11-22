import {formatCurrency} from '../scripts/utils/money.js';

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
      if (product.id === productId) {
          matchingProduct = product;
      }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;

  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
   return ` $${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    //super.extraInfoHTML();
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
    <a href="${this.sizeChartLink}" target="_blank">
      Size chart
    </a>`
    ;
  }
}


export const products = [
  {
  id: "f6c2d3b1-4a7e-4f8b-9c5d-2b3e7a1f6d9a",
  name: "Lenny & Larry's Complete Cookie Chocolate Chip 12ct",
  priceCents: 1390,
  image: "images/products/706.webp",
  rating: {
    stars: 4.5,
    count: 1357
  },
  keywords: [
    "lenny",
    "larry's",
    "complete",
    "cookie",
    "chocolate",
    "chip",
    "soft",
    "baked",
    "12ct",
    "4oz",
    "16g",
    "ex10/25"
  ]
},
  {
  id: "e5f9d2c3-4a1e-4f8b-9d5c-3b2e7a1f6d8f",
  name: "Power Crunch Protein Energy Bar Chocolate Chip",
  priceCents: 1099,
  image: "images/products/705.webp",
  rating: {
    stars: 4.0,
    count: 1331
  },
  keywords: [
    "power",
    "crunch",
    "protein",
    "energy",
    "bar",
    "chocolate",
    "chip",
    "cheesecake",
    "12 bars",
    "1.4oz"
  ]
},
  {
  id: "d4e8f1b2-3a7e-4f8b-9c5d-2b3e7a1f6d7e",
  name: "3-Tier Rope Wall Hanging Baskets",
  priceCents: 1199,
  image: "images/products/704.webp",
  rating: {
    stars: 4.5,
    count: 1276
  },
  keywords: [
    "3-tier",
    "rope",
    "baskets",
    "wall",
    "hanging",
    "storage",
    "tassels",
    "boho",
    "2-tone"
  ]
},
  {
  id: "c3f7d2b1-4a6e-4f8b-9d5c-2b3e7a1f6d5e",
  name: "Closet Storage Boxes with Lids 4pcs",
  priceCents: 1599,
  image: "images/products/703.webp",
  rating: {
    stars: 4.0,
    count: 1318
  },
  keywords: [
    "closet",
    "storage",
    "boxes",
    "lids",
    "hook",
    "loop",
    "4pcs"
  ]
},
  {
  id: "b2e8f1c3-5a7d-4f8b-9c6e-3b1f6a2d7e5c",
  name: "Pioneer Woman Sutton 34-Piece Cookware Set",
  priceCents: 11098,
  image: "images/products/702.webp",
  rating: {
    stars: 4.5,
    count: 1421
  },
  keywords: [
    "pioneer",
    "woman",
    "sutton",
    "34-piece",
    "ceramic",
    "nonstick",
    "cookware",
    "bakeware",
    "set",
    "beige"
  ]
},
  {
  id: "a1f7c3b2-4d6e-4f8b-9c5d-2b3e7a1f6d8e",
  name: "Stainless Steel Cookware Pot Pan Utensils Set",
  priceCents: 12099,
  image: "images/products/701.webp",
  rating: {
    stars: 5.0,
    count: 1457
  },
  keywords: [
    "stainless",
    "steel",
    "cookware",
    "pot",
    "pan",
    "bowl",
    "utensils",
    "kitchen",
    "fork",
    "spoon",
    "knife",
    "tool",
    "set"
  ]
},
  {
  id: "f9d4c2b1-3a6e-4f8b-9c5d-2b3e7a1f6d7c",
  name: "Non-Stick Pots & Pans Set with Kettle",
  priceCents: 5000,
  image: "images/products/700.webp",
  rating: {
    stars: 4.5,
    count: 1389
  },
  keywords: [
    "non-stick",
    "pots",
    "pans",
    "set",
    "kettle",
    "utensils",
    "backpack",
    "bag"
  ]
},
  {
  id: "e8c3f1b2-4a7e-4f8b-9d5c-3a2e7b1f6d5c",
  name: "Portable Cookware Set for 2-3 People",
  priceCents: 4233,
  image: "images/products/699.webp",
  rating: {
    stars: 4.0,
    count: 1304
  },
  keywords: [
    "portable",
    "cookware",
    "set",
    "2-3 people",
    "utensils",
    "bags"
  ]
},
  {
  id: "d7f2c4b1-3a6e-4f9b-9c5d-2b3e7a1f6d4c",
  name: "Serenelife Kitchenware Pots & Pans Set Black Gold",
  priceCents: 3890,
  image: "images/products/698.webp",
  rating: {
    stars: 4.5,
    count: 1376
  },
  keywords: [
    "serenelife",
    "kitchenware",
    "pots",
    "pans",
    "set",
    "kitchen",
    "cookware",
    "black",
    "non-stick",
    "gold"
  ]
},
  {
  id: "c6f9d3b2-4a1e-4f8b-9d5c-3b2e7a1f6d8c",
  name: "Serenelife Kitchenware Pots & Pans Set",
  priceCents: 5099,
  image: "images/products/697.webp",
  rating: {
    stars: 5.0,
    count: 1412
  },
  keywords: [
    "serenelife",
    "kitchenware",
    "pots",
    "pans",
    "set",
    "black",
    "non-stick",
    "coating",
    "inside",
    "15 pcs"
  ]
},
  {
  id: "b5d8f2c1-3a7e-4f9b-9d6c-2c3e7a1f5d4b",
  name: "Brush Cleaner Scrubber Home Cleaning Brush",
  priceCents: 299,
  image: "images/products/696.webp",
  rating: {
    stars: 4.5,
    count: 1323
  },
  keywords: [
    "brush",
    "cleaner",
    "scrubber",
    "home",
    "cleaning",
    "practical"
  ]
},
  {
  id: "e4c7f1b3-6a2d-4f8b-9c5e-3b1f6a2d7e5c",
  name: "Drain Cleaner Sticks Odor Remover",
  priceCents: 199,
  image: "images/products/695.webp",
  rating: {
    stars: 4.0,
    count: 1279
  },
  keywords: [
    "drain",
    "cleaner",
    "sticks",
    "60/48pcs",
    "odor",
    "remover",
    "pipe",
    "cleaner"
  ]
},
  {
  id: "c3f9d2b7-4a1e-4f8b-9d5c-2b3e7a1f6d5b",
  name: "Colors Window Cleaning Brush Dustpan Set",
  priceCents: 99,
  image: "images/products/694.webp",
  rating: {
    stars: 4.5,
    count: 1245
  },
  keywords: [
    "colors",
    "cleaning",
    "window",
    "dustpan",
    "2 groove",
    "brush",
    "scre"
  ]
},
  {
  id: "f2b8d4c1-3a7e-4f9b-9d5c-2b3e7a1f6d8c",
  name: "100% Isopropyl Alcohol Refill",
  priceCents: 499,
  image: "images/products/693.webp",
  rating: {
    stars: 4.0,
    count: 1307
  },
  keywords: [
    "100%",
    "isopropyl",
    "alcohol",
    "isopropanol",
    "ipa",
    "refill",
    "pure",
    "rubbing"
  ]
},
  {
  id: "d9f3c2b7-4e1a-4f8b-9d5c-3a2e7b1f6d4b",
  name: "Compac Home Plink Garbage Disposal Cleaner",
  priceCents: 599,
  image: "images/products/692.webp",
  rating: {
    stars: 4.5,
    count: 1284
  },
  keywords: [
    "compac",
    "home",
    "plink",
    "garbage",
    "disposal",
    "cleaner",
    "freshens",
    "kitchen",
    "orange",
    "20 count"
  ]
},
  {
  id: "c8e4f1b3-7d2a-4f9b-9c5e-3a1f6b2d7e5c",
  name: "Finish Dishwasher Soap All-in-One 100pk",
  priceCents: 1899,
  image: "images/products/691.webp",
  rating: {
    stars: 4.0,
    count: 1328
  },
  keywords: [
    "finish",
    "dishwasher",
    "soap",
    "washing",
    "liquid",
    "power",
    "essential",
    "all in one",
    "100pk",
    "original"
  ]
},
  {
  id: "f5c2d8b1-3a7e-4f9b-9d6c-2b1e7a4f5d3c",
  name: "Drain Cleaner Powerful Clog Remover",
  priceCents: 1490,
  image: "images/products/690.webp",
  rating: {
    stars: 4.5,
    count: 1354
  },
  keywords: [
    "drain",
    "cleaner",
    "powerful",
    "clog",
    "remover",
    "hair",
    "grease",
    "2 bottles",
    "64 oz"
  ]
},
  {
  id: "d3f7b1c2-6a4e-4f8b-9c5d-2b3e7a1f6d8c",
  name: "Leather Colour Restorer Repair Kit",
  priceCents: 1499,
  image: "images/products/689.webp",
  rating: {
    stars: 4.0,
    count: 1312
  },
  keywords: [
    "leather",
    "colour",
    "restorer",
    "repair",
    "faded",
    "worn",
    "sofas",
    "chairs",
    "bags",
    "shoes"
  ]
},
  {
  id: "b4d8f1c3-7e2a-4f9b-8c5d-3a1f6b2d7e4c",
  name: "Carron Lotus Effect Glass Sealer",
  priceCents: 1789,
  image: "images/products/688.webp",
  rating: {
    stars: 4.5,
    count: 1296
  },
  keywords: [
    "carron",
    "lotus",
    "effect",
    "glass",
    "sealing",
    "shower",
    "wall",
    "acrylic",
    "limescale",
    "dirt"
  ]
},
  {
  id: "e7c3f2b1-4d5a-4f8b-9c6e-1a2b7d3f5c8a",
  name: "Extendable Microfiber Duster Cleaning Brush",
  priceCents: 199,
  image: "images/products/687.webp",
  rating: {
    stars: 4.0,
    count: 1218
  },
  keywords: [
    "extendable",
    "microfiber",
    "duster",
    "dusting",
    "brush",
    "cleaning",
    "tool",
    "washable"
  ]
},
  {
  id: "c2f9d4b7-3e1a-4f8b-9d5c-2a3e7b1f6d4c",
  name: "Double-Sided Scouring Pads Kitchen Sponge",
  priceCents: 1099,
  image: "images/products/686.webp",
  rating: {
    stars: 4.5,
    count: 1335
  },
  keywords: [
    "double-sided",
    "scouring",
    "pads",
    "dish",
    "pan",
    "washing",
    "sponge",
    "kitchen",
    "cleaning",
    "tool"
  ]
},
  {
  id: "a5d8f2c3-7b1e-4f9d-8c2a-5e3f7b9d1a2c",
  name: "Scrubbing Bubbles Automatic Shower Cleaner Kit",
  priceCents: 4099,
  image: "images/products/685.webp",
  rating: {
    stars: 4.0,
    count: 1402
  },
  keywords: [
    "scrubbing",
    "bubbles",
    "automatic",
    "shower",
    "cleaner",
    "starter",
    "kit",
    "2 bottles",
    "new",
    "sealed"
  ]
},
  {
  id: "f1c7d3b9-2a4e-4f8b-9d5c-3b2e7a1f6d8b",
  name: "Metal Polish Paste Scratch Remover Set",
  priceCents: 799,
  image: "images/products/684.webp",
  rating: {
    stars: 4.5,
    count: 1321
  },
  keywords: [
    "metal",
    "polish",
    "paste",
    "scratch",
    "remover",
    "pipe",
    "infused",
    "polishing",
    "pads",
    "protectant"
  ]
},
  {
  id: "d8f2c4a7-1b3e-4f9d-9c2a-5e3b7f1d6a4c",
  name: "Shower Screen Glass Sealer 2-in-1 Set",
  priceCents: 2099,
  image: "images/products/683.webp",
  rating: {
    stars: 4.0,
    count: 1257
  },
  keywords: [
    "shower",
    "screen",
    "glass",
    "sealer",
    "2-in-1",
    "set",
    "nano",
    "cleaner",
    "lotus",
    "effect"
  ]
},
  {
  id: "c7d3e5b1-6f2a-4a8c-9d7b-1e4f6a2b3c5d",
  name: "Limited Edition Bitcoin Solo Miner Genesis Lux",
  priceCents: 9078,
  image: "images/products/682.webp",
  rating: {
    stars: 5.0,
    count: 1489
  },
  keywords: [
    "limited",
    "edition",
    "bitcoin",
    "solo",
    "miner",
    "genesis",
    "lux"
  ]
},
  
  {
  id: "f6b2d4a9-3c8e-4f7b-9d5a-2c1e7b4f6d8a",
  name: "Bitcoin WiFi Lottery Miner Plug & Play",
  priceCents: 3099,
  image: "images/products/681.webp",
  rating: {
    stars: 4.5,
    count: 1342
  },
  keywords: [
    "bitcoin",
    "miner",
    "wifi",
    "lottery",
    "plug",
    "play",
    "new",
    "firmware"
  ]
},

  {
  id: "d4a8f2c3-7b1e-4f9d-8c2a-5e3f7b9d1a6e",
  name: "Bitcoin Solo Miner Lottery Lux Miner",
  priceCents: 5000,
  image: "images/products/680.webp",
  rating: {
    stars: 4.0,
    count: 1278
  },
  keywords: [
    "bitcoin",
    "solo",
    "miner",
    "lottery",
    "lux",
    "miner"
  ]
},
  {
  id: "b3f9e7c1-4d2a-4f8b-9e6c-2a3d7b1f5e4c",
  name: "Oakley META HSTN Clear Lens",
  priceCents: 37099,
  image: "images/products/679.webp",
  rating: {
    stars: 5.0,
    count: 1452
  },
  keywords: [
    "oakley",
    "meta",
    "hstn",
    "clear",
    "lens",
    "clear to grey",
    "transitions"
  ]
},
  {
  id: "a9d4f6b2-3c7e-4a8b-8f1d-5e2c7b9a4f3d",
  name: "Meta Ray-Ban Smart Glasses Sand",
  priceCents: 55000,
  image: "images/products/678.webp",
  rating: {
    stars: 4.5,
    count: 1365
  },
  keywords: [
    "meta",
    "ray-ban",
    "smart",
    "glasses",
    "sand",
    "standard",
    "band",
    "size"
  ]
},
  {
  id: "e5f7c2b3-1a4d-4f8b-9d6e-3c2b7a9f1e5d",
  name: "Oakley Meta HSTN Glasses Black Clear Lens",
  priceCents: 10599,
  image: "images/products/677.webp",
  rating: {
    stars: 4.0,
    count: 1427
  },
  keywords: [
    "oakley",
    "meta",
    "hstn",
    "glasses",
    "black",
    "clear",
    "lens",
    "new",
    "no box"
  ]
},
  {
  id: "c8e4d2b1-7f3a-4a9d-9b5e-2f1c6a8d7e4b",
  name: "Meta Ray-Ban Ai Smartglasses Large Frames",
  priceCents: 100000,
  image: "images/products/676.webp",
  rating: {
    stars: 4.5,
    count: 1386
  },
  keywords: [
    "meta",
    "ray-ban",
    "ai",
    "smartglasses",
    "large",
    "frames",
    "band",
    "size",
    "shiny",
    "black"
  ]
},
  {
  id: "f2b7c1d4-8a3e-4f9b-9c2d-5e1f7a3b6d8e",
  name: "Ray-Ban Meta x Coperni Wayfarer Glasses",
  priceCents: 50098,
  image: "images/products/675.webp",
  rating: {
    stars: 5.0,
    count: 1573
  },
  keywords: [
    "ray-ban",
    "meta",
    "coperni",
    "limited",
    "edition",
    "wayfarer",
    "glasses",
    "brand",
    "new",
    "sealed",
    "box"
  ]
},
  {
  id: "d9a4f2b7-3e1c-4a6b-8f2d-7c1e5b9a2f3d",
  name: "Meta Glasses Smart Ai 4kHD Camera With 270mAh Blue Light Lens Dual Mic",
  priceCents: 15099,
  image: "images/products/674.webp",
  rating: {
    stars: 4.5,
    count: 1421
  },
  keywords: [
    "meta",
    "glasses",
    "smart",
    "ai",
    "4khd",
    "camera",
    "270mah",
    "blue",
    "light",
    "lens",
    "dual",
    "mic"
  ]
},
  {
  id: "e43638ce-6aa0-89",
  name: "Ray-Ban Meta 1AT2414A00 META GLASSES Wayfarer",
  priceCents: 5099,
  image: "images/products/673.webp",
  rating: {
    stars: 4.5,
    count: 1244
  },
  keywords: [
    "ray-ban",
    "meta",
    "meta glasses",
    "wayfarer",
    "ray-ban meta"
  ]
},

  {
  id: "e43638ce-6aa0-672",
  name: "Apple AirPods Pro 2nd Gen USB-C MagSafe",
  priceCents: 10099,
  image: "images/products/672.webp",
  rating: {
    stars: 5.0,
    count: 1447
  },
  keywords: [
    "apple",
    "airpods pro",
    "2nd generation",
    "usb-c",
    "magsafe",
    "wireless charging",
    "case"
  ]
},
  {
  id: "e43638ce-6aa0-671",
  name: "Apple AirPods Pro 2nd Gen USB-C Full Set",
  priceCents: 10099,
  image: "images/products/671.webp",
  rating: {
    stars: 4.5,
    count: 1380
  },
  keywords: [
    "apple",
    "airpods pro",
    "2nd generation",
    "usb-c",
    "full set",
    "mtjv3am/a",
    "used"
  ]
},
  {
  id: "e43638ce-6aa0-670",
  name: "Apple AirPods Pro MagSafe 2021 MLWK3ZM/A",
  priceCents: 12099,
  image: "images/products/670.webp",
  rating: {
    stars: 5.0,
    count: 1654
  },
  keywords: [
    "apple",
    "airpods pro",
    "magsafe",
    "charging case",
    "2021",
    "mlwk3zm/a",
    "a2083",
    "new"
  ]
},
  {
  id: "e43638ce-6aa0-669",
  name: "Silicone Anti-Lost Earphone Strap AirPods",
  priceCents: 100,
  image: "images/products/669.webp",
  rating: {
    stars: 4.0,
    count: 1125
  },
  keywords: [
    "silicone",
    "earphone strap",
    "anti-lost",
    "apple",
    "airpods",
    "1/2/pro 3 gen"
  ]
},
  {
  id: "e43638ce-6aa0-668",
  name: "2x Silicone Sports Anti-Lost Ear Hooks AirPods",
  priceCents: 299,
  image: "images/products/668.webp",
  rating: {
    stars: 4.0,
    count: 1183
  },
  keywords: [
    "2x",
    "silicone",
    "multicolor",
    "sports",
    "anti-lost",
    "ear hook",
    "earphone clip",
    "airpods 3 pro"
  ]
},
  {
  id: "e43638ce-6aa0-667",
  name: "AirPods Pro Right Earbud A2083",
  priceCents: 3089,
  image: "images/products/667.webp",
  rating: {
    stars: 4.5,
    count: 1345
  },
  keywords: [
    "earbud",
    "apple",
    "airpods pro",
    "right",
    "a2083",
    "bluetooth",
    "earphone",
    "replacement"
  ]
},
  {
  id: "e43638ce-6aa0-666",
  name: "AirPods Pro 1st Gen Replacement Earbud",
  priceCents: 3089,
  image: "images/products/666.webp",
  rating: {
    stars: 4.5,
    count: 1320
  },
  keywords: [
    "airpods pro",
    "1st generation",
    "replacement",
    "earbud",
    "a2084",
    "a2083",
    "right",
    "left"
  ]
},
  {
  id: "e43638ce-6aa0-665",
  name: "Apple AirPods Pro 2nd Gen MagSafe White",
  priceCents: 6999,
  image: "images/products/665.webp",
  rating: {
    stars: 5.0,
    count: 1602
  },
  keywords: [
    "apple",
    "airpods pro",
    "2nd generation",
    "magsafe",
    "usb-c",
    "white",
    "new",
    "sealed"
  ]
},
  {
  id: "e43638ce-6aa0-664",
  name: "Replacement Silicone Ear Tips AirPods Pro",
  priceCents: 199,
  image: "images/products/664.webp",
  rating: {
    stars: 4.0,
    count: 1175
  },
  keywords: [
    "replacement",
    "silicone ear tips",
    "apple",
    "airpods pro",
    "accessory box",
    "s/m/l"
  ]
},
  {
  id: "e43638ce-6aa0-663",
  name: "Incase Lanyard for AirPods Pro 2nd Gen",
  priceCents: 100,
  image: "images/products/663.webp",
  rating: {
    stars: 4.0,
    count: 1128
  },
  keywords: [
    "incase",
    "lanyard",
    "airpods pro",
    "2nd generation",
    "airpods 1/2/3",
    "rope",
    "anti-drop"
  ]
},
  {
  id: "e43638ce-6aa0-662",
  name: "Apple AirPods Pro Replacement Earbud",
  priceCents: 2599,
  image: "images/products/662.webp",
  rating: {
    stars: 4.5,
    count: 1267
  },
  keywords: [
    "apple",
    "airpods pro",
    "1st generation",
    "2nd generation",
    "3rd generation",
    "replacement earbud",
    "new"
  ]
},
  {
  id: "e43638ce-6aa0-661",
  name: "AirPods Pro 2nd Gen ANC Wireless USB-C",
  priceCents: 9299,
  image: "images/products/661.webp",
  rating: {
    stars: 4.5,
    count: 1384
  },
  keywords: [
    "airpods pro",
    "2nd generation",
    "anc",
    "wireless charging",
    "usb-c"
  ]
},
  {
  id: "e43638ce-6aa0-660",
  name: "Apple AirPods Pro 2nd Gen 2023 MagSafe",
  priceCents: 10000,
  image: "images/products/660.webp",
  rating: {
    stars: 5.0,
    count: 1725
  },
  keywords: [
    "apple",
    "airpods pro",
    "2nd generation",
    "gen 2",
    "2023",
    "a2968",
    "magsafe",
    "usb-c",
    "charging"
  ]
},
  {
  id: "e43638ce-6aa0-659",
  name: "Silicone AirPods Pro 2 Protective Case",
  priceCents: 588,
  image: "images/products/659.webp",
  rating: {
    stars: 4.0,
    count: 1157
  },
  keywords: [
    "silicone case",
    "airpods pro 2",
    "wireless earphone",
    "protective case",
    "soft cover"
  ]
},
  {
  id: "e43638ce-6aa0-658",
  name: "Apple AirPods Pro Shockproof Case",
  priceCents: 399,
  image: "images/products/658.webp",
  rating: {
    stars: 4.5,
    count: 1314
  },
  keywords: [
    "protective case",
    "cover",
    "apple",
    "airpods pro",
    "3rd/2nd/1st generation",
    "shockproof"
  ]
},
  {
  id: "e43638ce-6aa0-657",
  name: "Apple AirPods Pro Silicone Sleeve Case",
  priceCents: 399,
  image: "images/products/657.webp",
  rating: {
    stars: 4.0,
    count: 1227
  },
  keywords: [
    "apple",
    "airpods pro",
    "1/2/3",
    "silicone sleeve",
    "case",
    "cover",
    "pouch",
    "bumper",
    "protective"
  ]
},
  {
  id: "e43638ce-6aa0-656",
  name: "AirPods 1-4 Pro Clear Shockproof Case",
  priceCents: 299,
  image: "images/products/656.webp",
  rating: {
    stars: 4.0,
    count: 1132
  },
  keywords: [
    "airpods",
    "1/2/3/4",
    "pro 2/3",
    "clear case",
    "shockproof",
    "protector",
    "strong cover",
    "shell"
  ]
},
  {
  id: "e43638ce-6aa0-655",
  name: "Apple AirTag & AirPods Pro Silicone Case",
  priceCents: 200,
  image: "images/products/655.webp",
  rating: {
    stars: 4.0,
    count: 1204
  },
  keywords: [
    "apple",
    "airtag",
    "airpods pro",
    "1/2nd gen",
    "anti-lost",
    "2 in 1",
    "silicone cover",
    "case"
  ]
},
  {
  id: "e43638ce-6aa0-654",
  name: "Tamagotchi AirPods Case Big Mouth Jar",
  priceCents: 599,
  image: "images/products/654.webp",
  rating: {
    stars: 4.0,
    count: 1187
  },
  keywords: [
    "tamagotchi",
    "airpods case",
    "big mouth jar",
    "cute cover",
    "all airpods models"
  ]
},
  {
  id: "e43638ce-6aa0-653",
  name: "Bugcat Capoo Rice Cooker AirPods Pro Case",
  priceCents: 3099,
  image: "images/products/653.webp",
  rating: {
    stars: 4.5,
    count: 1386
  },
  keywords: [
    "bugcat capoo",
    "rice cooker",
    "airpods pro",
    "case",
    "fits gen 1",
    "fits gen 2"
  ]
},
  {
  id: "e43638ce-6aa0-652",
  name: "Luxury Leather AirPods Pro Case",
  priceCents: 199,
  image: "images/products/652.webp",
  rating: {
    stars: 4.5,
    count: 1257
  },
  keywords: [
    "luxury",
    "leather",
    "protective case",
    "apple",
    "airpods pro",
    "1/2/3",
    "charging box",
    "cover"
  ]
},
  {
  id: "e43638ce-6aa0-651",
  name: "AirPods Pro Leather Protective Case",
  priceCents: 119,
  image: "images/products/651.webp",
  rating: {
    stars: 4.0,
    count: 1124
  },
  keywords: [
    "case",
    "airpods pro",
    "1/2/3",
    "leather",
    "protective cover",
    "shockproof",
    "earphone pouch"
  ]
},
  {
  id: "e43638ce-6aa0-650",
  name: "AirPods Pro 2nd Generation",
  priceCents: 70000,
  image: "images/products/650.webp",
  rating: {
    stars: 5.0,
    count: 1820
  },
  keywords: [
    "airpods pro",
    "2nd generation",
    "wireless earbuds",
    "apple"
  ]
},
  {
  id: "e43638ce-6aa0-649",
  name: "AirPods Pro 2nd Gen ANC Wireless USB-C",
  priceCents: 6089,
  image: "images/products/649.webp",
  rating: {
    stars: 4.5,
    count: 1369
  },
  keywords: [
    "airpods pro",
    "2nd generation",
    "anc",
    "wireless charging",
    "usb-c"
  ]
},
  {
  id: "e43638ce-6aa0-648",
  name: "Apple AirPods Pro 2nd Gen MagSafe",
  priceCents: 9099,
  image: "images/products/648.webp",
  rating: {
    stars: 5.0,
    count: 1743
  },
  keywords: [
    "apple",
    "airpods pro",
    "2nd generation",
    "magsafe",
    "wireless charging",
    "usb-c"
  ]
},

  {
  id: "e43638ce-6aa0-647",
  name: "Ghost of Yotei PS5 Cover Gold Slim Digital",
  priceCents: 12099,
  image: "images/products/647.webp",
  rating: {
    stars: 4.5,
    count: 1345
  },
  keywords: [
    "ghost of yotei",
    "playstation 5",
    "ps5",
    "cover",
    "gold",
    "limited edition",
    "slim",
    "digital edition"
  ]
},
  {
  id: "e43638ce-6aa0-646",
  name: "Sony PS5 Blu-Ray God of War Ragnarök Bundle",
  priceCents: 45099,
  image: "images/products/646.webp",
  rating: {
    stars: 5.0,
    count: 1802
  },
  keywords: [
    "sony",
    "ps5",
    "blu-ray edition",
    "console",
    "god of war ragnarök",
    "bundle",    "white"
  ]
},
  {
  id: "e43638ce-6aa0-645",
  name: "Sony PULSE Explore Wireless Earbuds White",
  priceCents: 8976,
  image: "images/products/645.webp",
  rating: {
    stars: 4.5,
    count: 1412
  },
  keywords: [
    "sony",
    "pulse explore",
    "wireless earbuds",
    "white",
    "playstation 5",
    "ps5",
    "new",
    "in hand",
    "brand new"
  ]
},
  {
  id: "e43638ce-6aa0-644",
  name: "PS5 Digital Console Covers Galaxy Purple",
  priceCents: 5099,
  image: "images/products/644.webp",
  rating: {
    stars: 4.5,
    count: 1351
  },
  keywords: [
    "ps5",
    "digital console covers",
    "galaxy purple",
    "brand new",
    "sealed",
    "sony",
    "playstation 5",
    "digital edition"
  ]
},
  {
  id: "e43638ce-6aa0-643",
  name: "PS5 Console Ghost of Yotei Gold Bundle",
  priceCents: 39999,
  image: "images/products/643.webp",
  rating: {
    stars: 5.0,
    count: 1523
  },
  keywords: [
    "playstation 5",
    "ps5",
    "console",
    "ghost of yotei",
    "gold",
    "limited edition",
    "bundle"
  ]
},
  {
  id: "e43638ce-6aa0-642",
  name: "Sony PS5 Slim Digital 1TB Console White",
  priceCents: 9000,
  image: "images/products/642.webp",
  rating: {
    stars: 4.5,
    count: 1236
  },
  keywords: [
    "sony",
    "ps5",
    "slim",
    "digital edition",
    "1TB",
    "video game console",
    "white"
  ]
},
  {
  id: "e43638ce-6aa0-641",
  name: "PS5 Slim Console Covers Ghost of Yotei Gold",
  priceCents: 10999,
  image: "images/products/641.webp",
  rating: {
    stars: 4.5,
    count: 1297
  },
  keywords: [
    "ps5",
    "console covers",
    "slim",
    "ghost of yotei",
    "gold",
    "limited edition"
  ]
},
  {
  id: "e43638ce-6aa0-640",
  name: "Sony PS5 Slim Digital 1TB Console White",
  priceCents: 29990,
  image: "images/products/640.webp",
  rating: {
    stars: 5.0,
    count: 1689
  },
  keywords: [
    "sony",
    "ps5",
    "slim",
    "digital edition",
    "1TB",
    "video game console",
    "white"
  ]
},
  {
  id: "e43638ce-6aa0-639",
  name: "DualSense Ghost of Yotei Gold PS5 Controller",
  priceCents: 7099,
  image: "images/products/639.webp",
  rating: {
    stars: 4.5,
    count: 1368
  },
  keywords: [
    "dualsense",
    "wireless controller",
    "ghost of yotei",
    "gold",
    "limited edition",
    "ps5",
    "new"
  ]
},
  {
  id: "e43638ce-6aa0-638",
  name: "PS5 Slim Cooling Station 3-Speed Fan",
  priceCents: 29099,
  image: "images/products/638.webp",
  rating: {
    stars: 4.5,
    count: 1417
  },
  keywords: [
    "ps5",
    "slim",
    "cooling station",
    "multifunctional",
    "3-speed fan"
  ]
},
  {
  id: "e43638ce-6aa0-637",
  name: "Sony PS5 Disc Drive for Slim & Pro",
  priceCents: 9099,
  image: "images/products/637.webp",
  rating: {
    stars: 4.5,
    count: 1321
  },
  keywords: [
    "sony",
    "ps5",
    "playstation",
    "disc drive",
    "digital slim edition",
    "pro console",
    "version"
  ]
},
  {
  id: "e43638ce-6aa0-636",
  name: "PS5 Portal RemotePlayer 30th Anniversary Gray",
  priceCents: 19999,
  image: "images/products/636.webp",
  rating: {
    stars: 5.0,
    count: 1432
  },
  keywords: [
    "ps5",
    "portal",
    "remoteplayer",
    "30th anniversary",
    "gray",
    "brand new",
    "sealed"
  ]
},
  {
  id: "e43638ce-6aa0-635",
  name: "Sony PS5 Slim Digital Console White",
  priceCents: 39099,
  image: "images/products/635.webp",
  rating: {
    stars: 5.0,
    count: 1678
  },
  keywords: [
    "sony",
    "playstation 5",
    "ps5",
    "slim",
    "digital edition",
    "console",
    "white",
    "new"
  ]
},
  {
  id: "e43638ce-6aa0-634",
  name: "Sony PS5 Slim Disc Console 1TB",
  priceCents: 39000,
  image: "images/products/634.webp",
  rating: {
    stars: 5.0,
    count: 1704
  },
  keywords: [
    "sony",
    "playstation 5",
    "ps5",
    "slim",
    "disc edition",
    "gaming console",
    "1TB",
    "cfi-2015"
  ]
},
  {
  id: "e43638ce-6aa0-633",
  name: "Sony PS2 Slim Console Bundle SingStar",
  priceCents: 9087,
  image: "images/products/633.webp",
  rating: {
    stars: 4.5,
    count: 1342
  },
  keywords: [
    "sony",
    "playstation 2",
    "ps2",
    "slim",
    "console bundle",
    "singstar",
    "microphones",
    "mint",
    "original packaging"
  ]
},
  {
  id: "e43638ce-6aa0-632",
  name: "PS5 Disc Slim NBA 2K26 Bundle",
  priceCents: 46000,
  image: "images/products/632.webp",
  rating: {
    stars: 5.0,
    count: 1823
  },
  keywords: [
    "playstation 5",
    "ps5",
    "disc slim edition",
    "nba 2k26",
    "bundle",
    "console",
    "dualsense"
  ]
},
  {
  id: "e43638ce-6aa0-631",
  name: "Sony PS5 Digital 30th Anniversary Edition",
  priceCents: 42000,
  image: "images/products/631.webp",
  rating: {
    stars: 5.0,
    count: 1785
  },
  keywords: [
    "sony",
    "playstation 5",
    "ps5",
    "digital edition",
    "30th anniversary",
    "limited edition"
  ]
},
  {
  id: "e43638ce-6aa0-630",
  name: "Sony PS5 Digital Edition Console White",
  priceCents: 40000,
  image: "images/products/630.webp",
  rating: {
    stars: 5.0,
    count: 1612
  },
  keywords: [
    "sony",
    "ps5",
    "digital edition",
    "console",
    "white",
    "cfi-1116b",
    "low firmware",
    "sealed",
    "new"
  ]
},
  {
  id: "e43638ce-6aa0-629",
  name: "Sony PS5 Slim Disc Console",
  priceCents: 42099,
  image: "images/products/629.webp",
  rating: {
    stars: 5.0,
    count: 1789
  },
  keywords: [
    "sony",
    "playstation 5",
    "ps5",
    "slim",
    "disc",
    "video game console"
  ]
},
  {
  id: "e43638ce-6aa0-628",
  name: "DualSense Monster Hunter Wilds PS5 Controller",
  priceCents: 9099,
  image: "images/products/628.webp",
  rating: {
    stars: 4.5,
    count: 1316
  },
  keywords: [
    "dualsense",
    "controller",
    "monster hunter wilds",
    "ps5",
    "collector edition",
    "brand new"
  ]
},
  {
  id: "e43638ce-6aa0-627",
  name: "PS5 DualSense Controller Alpine Green",
  priceCents: 25000,
  image: "images/products/627.webp",
  rating: {
    stars: 5.0,
    count: 1489
  },
  keywords: [
    "ps5",
    "dualsense",
    "controller",
    "limited edition",
    "alpine green",
    "ewc 2025",
    "new",
    "sealed"
  ]
},
  {
  id: "e43638ce-6aa0-626",
  name: "Sony PS5 Slim Digital 825GB SSD",
  priceCents: 39088,
  image: "images/products/626.webp",
  rating: {
    stars: 5.0,
    count: 1723
  },
  keywords: [
    "sony",
    "playstation 5",
    "ps5",
    "slim",
    "digital edition",
    "825GB",
    "SSD",
    "new controller",
    "brand new"
  ]
},
  {
  id: "e43638ce-6aa0-625",
  name: "Sony PlayStation 30th Anniversary Portable",
  priceCents: 25097,
  image: "images/products/625.webp",
  rating: {
    stars: 5.0,
    count: 1592
  },
  keywords: [
    "sony",
    "playstation",
    "30th anniversary",
    "limited edition",
    "portal",
    "portable player",
    "sealed"
  ]
},
  {
  id: "e43638ce-6aa0-624",
  name: "PlayStation Backbone Lightning Edition",
  priceCents: 3299,
  image: "images/products/624.webp",
  rating: {
    stars: 4.5,
    count: 1278
  },
  keywords: [
    "playstation",
    "backbone",
    "lightning edition",
    "gaming accessory"
  ]
},
  {
  id: "e43638ce-6aa0-623",
  name: "Sony PlayStation 5 Slim Digital 1TB",
  priceCents: 30095,
  image: "images/products/623.webp",
  rating: {
    stars: 5.0,
    count: 1854
  },
  keywords: [
    "sony",
    "playstation 5",
    "ps5",
    "slim",
    "digital edition",
    "console",
    "1TB",
    "white",
    "brand new"
  ]
},
  {
  id: "e43638ce-6aa0-622",
  name: "Essential Beauty Facial Serum 59ml",
  priceCents: 1581,
  image: "images/products/622.webp",
  rating: {
    stars: 4.5,
    count: 1294
  },
  keywords: [
    "essential beauty",
    "facial serum",
    "59ml",
    "glow",
    "hydrating",
    "gel",
    "cream",
    "236ml"
  ]
},
  {
  id: "e43638ce-6aa0-621",
  name: "Jade Gua Sha & Face Roller Set",
  priceCents: 465,
  image: "images/products/621.webp",
  rating: {
    stars: 4.0,
    count: 1176
  },
  keywords: [
    "gua sha",
    "face roller",
    "jade",
    "facial",
    "beauty",
    "body",
    "eye",
    "neck",
    "anti-aging",
    "tools"
  ]
},
  {
  id: "e43638ce-6aa0-620",
  name: "Original Skin Whitening Beauty Cream",
  priceCents: 2199,
  image: "images/products/620.webp",
  rating: {
    stars: 4.5,
    count: 1356
  },
  keywords: [
    "original",
    "skin whitening",
    "beauty cream",
    "anti-aging",
    "ultimate",
    "beauty"
  ]
},
  {
  id: "e43638ce-6aa0-619",
  name: "Swiss Beauty 24K Gold Face Serum 100ml",
  priceCents: 1577,
  image: "images/products/619.webp",
  rating: {
    stars: 4.5,
    count: 1321
  },
  keywords: [
    "swiss beauty",
    "24k gold",
    "face serum",
    "unisex",
    "100ml"
  ]
},
  {
  id: "e43638ce-6aa0-618",
  name: "Celes Premium Placentary Cream 50ml",
  priceCents: 6799,
  image: "images/products/618.webp",
  rating: {
    stars: 5.0,
    count: 1487
  },
  keywords: [
    "celes",
    "premium",
    "placentary",
    "cream",
    "50ml",
    "human skin",
    "physiological formula",
    "k-beauty"
  ]
},

  {
  id: "e43638ce-6aa0-617",
  name: "Youth Activating Melon Serum 0.5oz",
  priceCents: 2099,
  image: "images/products/617.webp",
  rating: {
    stars: 5.0,
    count: 1394
  },
  keywords: [
    "meaningful beauty",
    "youth",
    "activating",
    "melon serum",
    "cindy crawford",
    "0.5oz",
    "sealed",
    "skin"
  ]
},

  {
  id: "e43638ce-6aa0-616",
  name: "Las Beauty Skin Perfect Emulsion 50ml",
  priceCents: 1499,
  image: "images/products/616.webp",
  rating: {
    stars: 4.5,
    count: 1286
  },
  keywords: [
    "las beauty",
    "original",
    "skin",
    "perfect",
    "emulsion",
    "50ml",
    "ready stock",
    "sữa dưỡng"
  ]
},
  {
  id: "e43638ce-6aa0-615",
  name: "Centellian24 Madeca Cream Time Reverse 50ml x2",
  priceCents: 2240,
  image: "images/products/615.webp",
  rating: {
    stars: 4.5,
    count: 1318
  },
  keywords: [
    "centellian24",
    "madeca cream",
    "time reverse",
    "50ml",
    "x2",
    "k-beauty"
  ]
},
  {
  id: "e43638ce-6aa0-614",
  name: "Celes Premium Placentary Ampoule 50ml",
  priceCents: 8970,
  image: "images/products/614.webp",
  rating: {
    stars: 5.0,
    count: 1543
  },
  keywords: [
    "celes",
    "premium",
    "placentary",
    "ampoule",
    "50ml",
    "anti-aging",
    "aesthetic",
    "cosmetic",
    "k-beauty",
    "brand new"
  ]
},

  {
  id: "e43638ce-6aa0-613",
  name: "Roushun Vitamin C Moisturizing Serum 30ml",
  priceCents: 1289,
  image: "images/products/613.webp",
  rating: {
    stars: 4.5,
    count: 1372
  },
  keywords: [
    "roushun",
    "beauty",
    "skin care",
    "vitamin c",
    "moisturizing",
    "serum",
    "30ml"
  ]
},
  {
  id: "e43638ce-6aa0-612",
  name: "STAYVE Glowing Skin Ampoules Serum",
  priceCents: 1589,
  image: "images/products/612.webp",
  rating: {
    stars: 4.5,
    count: 1327
  },
  keywords: [
    "stayve",
    "glowing skin",
    "ampoules",
    "serum",
    "cc cream",
    "foundation",
    "meso",
    "beauty",
    "skin repair"
  ]
},
  {
  id: "e43638ce-6aa0-611",
  name: "Electric Micro-Needling Pen",
  priceCents: 899,
  image: "images/products/611.webp",
  rating: {
    stars: 4.0,
    count: 1163
  },
  keywords: [
    "electric",
    "micro-needling",
    "pen",
    "anti-aging",
    "skin",
    "repairing",
    "spot removing",
    "beauty tool"
  ]
},
  {
  id: "e43638ce-6aa0-610",
  name: "Vitamin E Oil 100% Pure",
  priceCents: 256,
  image: "images/products/610.webp",
  rating: {
    stars: 4.5,
    count: 1248
  },
  keywords: [
    "vitamin e",
    "oil",
    "face",
    "skin",
    "hair",
    "nails",
    "beauty care",
    "100% pure",
    "natural",
    "moisturizing"
  ]
},
  {
  id: "e43638ce-6aa0-609",
  name: "Moroccan Argan Oil 100% Pure",
  priceCents: 290,
  image: "images/products/609.webp",
  rating: {
    stars: 4.0,
    count: 1185
  },
  keywords: [
    "moroccan",
    "argan oil",
    "100% pure",
    "natural",
    "beauty",
    "skin",
    "hair care",
    "nail",
    "body",
    "uk"
  ]
},
  {
  id: "e43638ce-6aa0-608",
  name: "Meaningful Beauty Anti Aging Day Cream 1.7oz",
  priceCents: 2299,
  image: "images/products/608.webp",
  rating: {
    stars: 4.5,
    count: 1321
  },
  keywords: [
    "meaningful beauty",
    "anti-aging",
    "day creme",
    "cream",
    "1.7oz",
    "50ml"
  ]
},
  {
  id: "e43638ce-6aa0-607",
  name: "Meaningful Beauty Crème de Sérum 1oz",
  priceCents: 2544,
  image: "images/products/607.webp",
  rating: {
    stars: 5.0,
    count: 1384
  },
  keywords: [
    "meaningful beauty",
    "crème de sérum",
    "1oz",
    "beauty",
    "serum"
  ]
},
  {
  id: "e43638ce-6aa0-606",
  name: "Vitamin C 25% Anti-Oxidant Face Serum",
  priceCents: 1455,
  image: "images/products/606.webp",
  rating: {
    stars: 4.5,
    count: 1273
  },
  keywords: [
    "vitamin c",
    "25%",
    "anti-oxidant",
    "skin",
    "face serum",
    "organic",
    "vegan",
    "hyaluronic acid",
    "anti-aging",
    "sun damage"
  ]
},
  {
  id: "e43638ce-6aa0-605",
  name: "Nu Skin Beauty Focus Collagen Twin Pack",
  priceCents: 5099,
  image: "images/products/605.webp",
  rating: {
    stars: 5.0,
    count: 1534
  },
  keywords: [
    "nu skin",
    "nuskin",
    "beauty focus",
    "collagen",
    "twin pack",
    "97g x 2",
    "brand new",
    "exp 03/26"
  ]
},
  {
  id: "e43638ce-6aa0-604",
  name: "Beauty Society Drama Free Repair Serum 1oz",
  priceCents: 2599,
  image: "images/products/604.webp",
  rating: {
    stars: 5.0,
    count: 1412
  },
  keywords: [
    "beauty society",
    "drama free",
    "repair",
    "serum",
    "1oz",
    "new",
    "in box"
  ]
},
  {
  id: "e43638ce-6aa0-603",
  name: "Biofad Skin Beauty Glowing Cream",
  priceCents: 1499,
  image: "images/products/603.webp",
  rating: {
    stars: 4.5,
    count: 1347
  },
  keywords: [
    "biofad",
    "skin",
    "beauty",
    "cream",
    "glowing",
    "hydrating",
    "radiant"
  ]
},
  {
  id: "e43638ce-6aa0-602",
  name: "Las Beauty Skin Perfect Emulsion 50ml",
  priceCents: 1678,
  image: "images/products/602.webp",
  rating: {
    stars: 4.5,
    count: 1286
  },
  keywords: [
    "las beauty",
    "original",
    "skin",
    "perfect",
    "emulsion",
    "50ml",
    "exp 2027",
    "free shipping"
  ]
},
  {
  id: "e43638ce-6aa0-601",
  name: "Collagen Advanced Moisturizing Cream 1lb",
  priceCents: 877,
  image: "images/products/601.webp",
  rating: {
    stars: 4.0,
    count: 1139
  },
  keywords: [
    "collagen",
    "advanced",
    "moisturizing",
    "cream",
    "1 lb",
    "454 g"
  ]
},
  {
  id: "e43638ce-6aa0-600",
  name: "Rapid Reduction Eye Serum 2pcs",
  priceCents: 1899,
  image: "images/products/600.webp",
  rating: {
    stars: 4.5,
    count: 1327
  },
  keywords: [
    "rapid",
    "reduction",
    "eye serum",
    "2pcs",
    "advanced formula",
    "anti-wrinkle"
  ]
},
  {
  id: "e43638ce-6aa0-599",
  name: "Vitamin C Brightening Cream 16oz",
  priceCents: 999,
  image: "images/products/599.webp",
  rating: {
    stars: 4.0,
    count: 1178
  },
  keywords: [
    "vitamin c",
    "advanced",
    "brightening",
    "cream",
    "16oz",
    "454g"
  ]
},
  {
  id: "e43638ce-6aa0-598",
  name: "Clarins Breast Firming Gel 1.7oz",
  priceCents: 2988,
  image: "images/products/598.webp",
  rating: {
    stars: 5.0,
    count: 1421
  },
  keywords: [
    "clarins",
    "buste",
    "beauty",
    "breast",
    "firming",
    "extra-lift",
    "gel",
    "1.7oz",
    "50ml"
  ]
},
  {
  id: "e43638ce-6aa0-597",
  name: "Collagen & Peptides Body Cream 15oz",
  priceCents: 1099,
  image: "images/products/597.webp",
  rating: {
    stars: 4.5,
    count: 1254
  },
  keywords: [
    "body cream",
    "collagen",
    "peptides",
    "15 fl oz",
    "444 ml"
  ]
},
  {
  id: "e43638ce-6aa0-596",
  name: "Collagen & Elastin Face Cream",
  priceCents: 1099,
  image: "images/products/596.webp",
  rating: {
    stars: 4.0,
    count: 1187
  },
  keywords: [
    "collagen",
    "elastin",
    "face",
    "cream",
    "firming",
    "skin care",
    "anti-aging",
    "wrinkle"
  ]
},
  {
  id: "e43638ce-6aa0-595",
  name: "Nakery Rapid Lift Multi-Peptide Serum",
  priceCents: 2098,
  image: "images/products/595.webp",
  rating: {
    stars: 4.5,
    count: 1369
  },
  keywords: [
    "nakery",
    "rapid lift",
    "multi-peptide",
    "serum",
    "lift-tox",
    "tighten",
    "5.07"
  ]
},
  {
  id: "e43638ce-6aa0-594",
  name: "Hyaluronic Acid Hydrating Body Cream 16oz",
  priceCents: 1098,
  image: "images/products/594.webp",
  rating: {
    stars: 4.0,
    count: 1152
  },
  keywords: [
    "hyaluronic acid",
    "hydrating",
    "body cream",
    "16oz",
    "454g"
  ]
},
  {
  id: "e43638ce-6aa0-593",
  name: "Avon Anew Power Serum 1oz",
  priceCents: 1895,
  image: "images/products/593.webp",
  rating: {
    stars: 4.5,
    count: 1283
  },
  keywords: [
    "avon",
    "anew",
    "power",
    "serum",
    "1oz",
    "full size",
    "sealed",
    "beauty"
  ]
},
  {
  id: "e43638ce-6aa0-592",
  name: "Avon Anew Ultimate Night Cream",
  priceCents: 1999,
  image: "images/products/592.webp",
  rating: {
    stars: 4.5,
    count: 1345
  },
  keywords: [
    "avon",
    "anew",
    "ultimate",
    "multi-performance",
    "night cream",
    "beauty"
  ]
},
  {
  id: "e43638ce-6aa0-591",
  name: "Collagen & Elastin Face Cream",
  priceCents: 1289,
  image: "images/products/591.webp",
  rating: {
    stars: 4.0,
    count: 1198
  },
  keywords: [
    "collagen",
    "elastin",
    "face",
    "cream",
    "firming",
    "skin care",
    "anti-aging",
    "wrinkle"
  ]
},
  {
  id: "e43638ce-6aa0-590",
  name: "Nakery Lift-Tox Night Repair Cream 2oz",
  priceCents: 1678,
  image: "images/products/590.webp",
  rating: {
    stars: 4.5,
    count: 1264
  },
  keywords: [
    "nakery",
    "lift-tox",
    "night",
    "repair",
    "restore",
    "cream",
    "2oz",
    "new"
  ]
},
  {
  id: "e43638ce-6aa0-589",
  name: "Rejuran Dual Effect Ampoule 30ml",
  priceCents: 1999,
  image: "images/products/589.webp",
  rating: {
    stars: 4.5,
    count: 1318
  },
  keywords: [
    "rejuran",
    "dual effect",
    "ampoule",
    "30ml",
    "anti-aging",
    "c-pdrn",
    "k-beauty"
  ]
},
  {
  id: "e43638ce-6aa0-588",
  name: "Youth Activating Melon Serum 1.7oz",
  priceCents: 3599,
  image: "images/products/588.webp",
  rating: {
    stars: 5.0,
    count: 1437
  },
  keywords: [
    "youth",
    "activating",
    "melon",
    "serum",
    "1.7oz",
    "beauty",
    "meaningful"
  ]
},
  {
  id: "e43638ce-6aa0-587",
  name: "Crystal Collagen Eye Pads",
  priceCents: 258,
  image: "images/products/587.webp",
  rating: {
    stars: 4.0,
    count: 1129
  },
  keywords: [
    "crystal",
    "collagen",
    "eye pads",
    "anti-aging",
    "anti-wrinkle",
    "moisturizing",
    "mask",
    "4 colours"
  ]
},
  {
  id: "e43638ce-6aa0-586",
  name: "5 Pin Crystal Multi-Tip Needles Set",
  priceCents: 1799,
  image: "images/products/586.webp",
  rating: {
    stars: 4.5,
    count: 1338
  },
  keywords: [
    "5 pin",
    "crystal",
    "multi-tip",
    "replace needle",
    "beauty",
    "facial",
    "skin care",
    "tool",
    "5-100pc"
  ]
},
  {
  id: "e43638ce-6aa0-585",
  name: "LR Beauty Elixir 5in1",
  priceCents: 8999,
  image: "images/products/585.webp",
  rating: {
    stars: 5.0,
    count: 1471
  },
  keywords: [
    "lr",
    "beauty",
    "elixir",
    "5in1"
  ]
},
  {
  id: "e43638ce-6aa0-584",
  name: "Rejuran Healer Ampoule 10ml",
  priceCents: 1766,
  image: "images/products/584.webp",
  rating: {
    stars: 4.5,
    count: 1287
  },
  keywords: [
    "rejuran",
    "healer",
    "ampoule",
    "10ml",
    "k-beauty",
    "c-pdrn",
    "anti-aging",
    "free standard"
  ]
},
  {
  id: "e43638ce-6aa0-583",
  name: "Youth Activating Melon Serum 1.7oz",
  priceCents: 3099,
  image: "images/products/583.webp",
  rating: {
    stars: 4.5,
    count: 1362
  },
  keywords: [
    "youth",
    "activating",
    "melon",
    "serum",
    "1.7oz",
    "beauty",
    "meaningful",
    "new",
    "sealed"
  ]
},
  {
  id: "e43638ce-6aa0-582",
  name: "Whoo Cheonyuldan 6pcs Luxury Set",
  priceCents: 50029,
  image: "images/products/582.webp",
  rating: {
    stars: 5.0,
    count: 1587
  },
  keywords: [
    "whoo",
    "cheonyuldan",
    "6pcs",
    "special set",
    "15 items",
    "luxury",
    "beauty",
    "k-beauty"
  ]
},
  {
  id: "e43638ce-6aa0-581",
  name: "Youth Activating Melon Serum 1.7oz",
  priceCents: 3098,
  image: "images/products/581.webp",
  rating: {
    stars: 5.0,
    count: 1425
  },
  keywords: [
    "youth",
    "activating",
    "melon",
    "serum",
    "1.7oz",
    "beauty",
    "meaningful",
    "mother's day",
    "sale"
  ]
},
  {
  id: "e43638ce-6aa0-580",
  name: "5 Pin Crystal Multi-Tip Needle",
  priceCents: 566,
  image: "images/products/580.webp",
  rating: {
    stars: 4.5,
    count: 1389
  },
  keywords: [
    "5 pin",
    "crystal",
    "multi-tip",
    "replace needle",
    "beauty",
    "facial",
    "skin care",
    "tool"
  ]
},
  {
  id: "e43638ce-6aa0-579",
  name: "Porcelain Spoon Rest",
  priceCents: 1428,
  image: "images/products/579.webp",
  rating: {
    stars: 4.0,
    count: 1167
  },
  keywords: [
    "porcelain",
    "spoon",
    "rest",
    "ceramic",
    "holder",
    "kitchen",
    "counter",
    "stove top"
  ]
},
  {
  id: "e43638ce-6aa0-578",
  name: "Arte Legno Olive Wood Salad Set",
  priceCents: 1899,
  image: "images/products/578.webp",
  rating: {
    stars: 5.0,
    count: 1432
  },
  keywords: [
    "arte legno",
    "olive wood",
    "salad",
    "serving set",
    "fork",
    "spoon",
    "kitchen",
    "utensils",
    "italy"
  ]
},
  {
  id: "e43638ce-6aa0-577",
  name: "Stainless Steel Salad Serving Set",
  priceCents: 1099,
  image: "images/products/577.webp",
  rating: {
    stars: 4.5,
    count: 1243
  },
  keywords: [
    "stainless steel",
    "salad",
    "servers",
    "serving set",
    "spoon",
    "fork",
    "kitchen"
  ]
},
  {
  id: "e43638ce-6aa0-576",
  name: "Black Wooden Utensil & Plate Caddy",
  priceCents: 2390,
  image: "images/products/576.webp",
  rating: {
    stars: 4.0,
    count: 1189
  },
  keywords: [
    "black",
    "wooden",
    "utensil",
    "holder",
    "party",
    "paper plate",
    "caddy",
    "counter"
  ]
},
  {
  id: "e43638ce-6aa0-575",
  name: "360° Rotating Kitchen Utensil Holder",
  priceCents: 2010,
  image: "images/products/575.webp",
  rating: {
    stars: 4.5,
    count: 1325
  },
  keywords: [
    "360°",
    "rotating",
    "kitchen",
    "utensil",
    "holder",
    "countertop",
    "caddy",
    "extra large"
  ]
},
  {
  id: "e43638ce-6aa0-574",
  name: "Kids Divided Plate & Utensils Set",
  priceCents: 1999,
  image: "images/products/574.webp",
  rating: {
    stars: 5.0,
    count: 1476
  },
  keywords: [
    "kids",
    "divided",
    "plate",
    "utensils",
    "set",
    "children",
    "meal",
    "fork"
  ]
},
  {
  id: "e43638ce-6aa0-573",
  name: "Colorful Pastel Dishes & Utensils Set",
  priceCents: 1789,
  image: "images/products/573.webp",
  rating: {
    stars: 4.5,
    count: 1382
  },
  keywords: [
    "colorful",
    "pastel",
    "dishes",
    "utensils",
    "set",
    "kids",
    "kitchen",
    "imaginations"
  ]
},
  {
  id: "e43638ce-6aa0-572",
  name: "Wooden Kitchen Stirring Spoon",
  priceCents: 899,
  image: "images/products/572.webp",
  rating: {
    stars: 4.0,
    count: 1217
  },
  keywords: [
    "wooden",
    "kitchen",
    "spoon",
    "long handle",
    "stirring",
    "scraping",
    "pans"
  ]
},
  {
  id: "e43638ce-6aa0-571",
  name: "Toddler Dinnerware Plate & Utensils Set",
  priceCents: 5099,
  image: "images/products/571.webp",
  rating: {
    stars: 4.5,
    count: 1643
  },
  keywords: [
    "toddler",
    "dinnerware",
    "plate",
    "utensils",
    "set",
    "usa-made",
    "constructive",
    "eating"
  ]
},
  {
  id: "e43638ce-6aa0-570",
  name: "Stainless Steel Bowl & Spoon",
  priceCents: 999,
  image: "images/products/570.webp",
  rating: {
    stars: 4.0,
    count: 1124
  },
  keywords: [
    "stainless",
    "steel",
    "bowl",
    "spoon",
    "kitchen",
    "utensils",
    "soup"
  ]
},
  {
  id: "e43638ce-6aa0-569",
  name: "Eco Kids Silicone Suction Plates Set",
  priceCents: 1289,
  image: "images/products/569.webp",
  rating: {
    stars: 4.5,
    count: 1562
  },
  keywords: [
    "eco",
    "kids",
    "silicone",
    "suction",
    "plates",
    "spoon",
    "forks",
    "3 pack",
    "elk",
    "friends"
  ]
},
  {
  id: "e43638ce-6aa0-568",
  name: "Walnut Wood Spoon Rest",
  priceCents: 1190,
  image: "images/products/568.webp",
  rating: {
    stars: 5.0,
    count: 1478
  },
  keywords: [
    "walnut",
    "wood",
    "spoon",
    "rest",
    "kitchen",
    "counter",
    "holder",
    "spatula"
  ]
},
  {
  id: "e43638ce-6aa0-567",
  name: "Tommy Bahama Serving Utensils",
  priceCents: 589,
  image: "images/products/567.webp",
  rating: {
    stars: 4.5,
    count: 1314
  },
  keywords: [
    "tommy",
    "bahama",
    "serving",
    "utensils",
    "spoon",
    "fork",
    "green",
    "crab",
    "design"
  ]
},
  {
  id: "e43638ce-6aa0-566",
  name: "Vertical Whisk Chopstick & Spoon Holder",
  priceCents: 720,
  image: "images/products/566.webp",
  rating: {
    stars: 4.0,
    count: 1187
  },
  keywords: [
    "vertical",
    "whisk",
    "chopstick",
    "spoon",
    "holder",
    "hotpot",
    "restaurant",
    "counter"
  ]
},
  {
  id: "e43638ce-6aa0-565",
  name: "Vintage Salad Serving Set",
  priceCents: 669,
  image: "images/products/565.webp",
  rating: {
    stars: 5.0,
    count: 1534
  },
  keywords: [
    "vintage",
    "salad",
    "serving",
    "set",
    "wood",
    "metal",
    "silverplate",
    "fork",
    "spoon"
  ]
},
  {
  id: "e43638ce-6aa0-564",
  name: "Italian Kitchen Spoon & Fork Decor",
  priceCents: 890,
  image: "images/products/564.webp",
  rating: {
    stars: 4.5,
    count: 1421
  },
  keywords: [
    "italian",
    "kitchen",
    "spoon",
    "fork",
    "decor",
    "elena",
    "dipinto"
  ]
},
  {
  id: "e43638ce-6aa0-563",
  name: "Expressions Ribbed Kitchen Set",
  priceCents: 1490,
  image: "images/products/563.webp",
  rating: {
    stars: 4.0,
    count: 1248
  },
  keywords: [
    "expressions",
    "ribbed",
    "kitchen",
    "set"
  ]
},
  {
  id: "23-piece-outdoor-cooking-gear-set",
  name: "23-Piece Outdoor Cooking Gear Set",
  priceCents: 5089,
  image: "images/products/562.webp",
  rating: {
    stars: 4.5,
    count: 1764
  },
  keywords: [
    "outdoor",
    "cooking",
    "gear",
    "utensils",
    "plates",
    "23 piece",
    "camping"
  ]
},

  {
  "id": "wheat-straw-dinnerware-set-24pc",
  "name": "Wheat Straw Dinnerware Set 24-Piece",
  "priceCents": 1999,
  "image": "images/products/561.webp",
  "rating": {
    "stars": 4.5,
    "count": 1488
  },
  "keywords": [
    "wheat straw",
    "dinnerware",
    "24 piece",
    "cups",
    "plates",
    "bowls",
    "reusable",
    "kitchen"
  ]
},
  {
  "id": "plates-bowls-sets-kitchen-30pcs-wheat-straw",
  "name": "Plates and Bowls Sets Kitchen 30 Pcs, Plastic Wheat Straw Dinnerware Set",
  "priceCents": 1999,
  "image": "images/products/560.webp",
  "rating": {
    "stars": 4.0,
    "count": 1324
  },
  "keywords": [
    "plates",
    "bowls",
    "kitchen",
    "30 pcs",
    "plastic",
    "wheat straw",
    "dinnerware"
  ]
},
  {
  "id": "constructive-eating-plate-utensils-set",
  "name": "Constructive Eating Plate and Utensils Set for Toddler Dinnerware Gifts for Kids",
  "priceCents": 5099,
  "image": "images/products/559.webp",
  "rating": {
    "stars": 4.5,
    "count": 1488
  },
  "keywords": [
    "constructive",
    "eating",
    "plate",
    "utensils",
    "toddler",
    "dinnerware",
    "kids"
  ]
},
  {
  "id": "baby-silicone-feeding-set-9pcs",
  "name": "Baby Silicone Feeding Set 9 Pcs",
  "priceCents": 988,
  "image": "images/products/558.webp",
  "rating": {
    "stars": 4.0,
    "count": 1377
  },
  "keywords": [
    "baby",
    "silicone",
    "feeding set",
    "plates",
    "utensils",
    "9 pcs"
  ]
},
  {
  "id": "hic-salad-tong-green",
  "name": "HIC Kitchen Salad Tong Green",
  "priceCents": 1788,
  "image": "images/products/557.webp",
  "rating": {
    "stars": 4.5,
    "count": 1450
  },
  "keywords": [
    "salad tong",
    "kitchen",
    "hinged design",
    "detachable",
    "fork",
    "spoon",
    "green"
  ]
},
  {
  "id": "ceramic-handle-forks-spoons",
  "name": "12-Piece Fork & Spoon Set",
  "priceCents": 1199,
  "image": "images/products/556.webp",
  "rating": {
    "stars": 4.0,
    "count": 1350
  },
  "keywords": [
    "forks",
    "spoons",
    "ceramic handle",
    "stainless steel",
    "kitchen utensils",
    "12-piece set"
  ]
},
  {
  "id": "vintage-salad-set-metal-wood",
  "name": "Vintage Salad Fork & Spoon Set",
  "priceCents": 999,
  "image": "images/products/555.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "vintage",
    "salad set",
    "wood",
    "metal",
    "silverplate handles",
    "fork",
    "spoon",
    "kitchen utensils"
  ]
},
  {
  "id": "vintage-wooden-salad-set",
  "name": "Vintage Wooden Salad Fork & Spoon",
  "priceCents": 799,
  "image": "images/products/554.webp",
  "rating": {
    "stars": 4.5,
    "count": 1350
  },
  "keywords": [
    "vintage",
    "wooden",
    "salad fork",
    "salad spoon",
    "kitchen utensils",
    "hand carved"
  ]
},
  {
  "id": "christmas-kitchen-utensils",
  "name": "Christmas Santa Salad Fork & Spoon",
  "priceCents": 899,
  "image": "images/products/553.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "christmas",
    "kitchen utensils",
    "salad fork",
    "salad spoon",
    "santa",
    "holiday"
  ]
},
  {
  "id": "wheat-straw-dinnerware-42pcs",
  "name": "42-Piece Wheat Straw Dinnerware Set",
  "priceCents": 2500,
  "image": "images/products/552.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "dinnerware",
    "wheat straw",
    "plates",
    "kitchen",
    "dinner set",
    "plastic"
  ]
},
  {
  "id": "stainless-steel-ladle-4oz",
  "name": "4oz Stainless Steel Ladle",
  "priceCents": 1899,
  "image": "images/products/551.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "ladle",
    "spoon",
    "stainless steel",
    "kitchen",
    "measuring",
    "portion control"
  ]
},
  {
  "id": "plate-bowl-30pc-set",
  "name": "30-Piece Plate & Bowl Set",
  "priceCents": 1890,
  "image": "images/products/550.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "plate",
    "bowl",
    "kitchen",
    "cutlery set",
    "plastic",
    "wheat straw",
    "dishware"
  ]
},

  {
  "id": "play-kitchen-accessories-set",
  "name": "22-Piece Play Kitchen Set",
  "priceCents": 3099,
  "image": "images/products/549.webp",
  "rating": {
    "stars": 4.5,
    "count": 1450
  },
  "keywords": [
    "play kitchen",
    "accessories set",
    "utensils",
    "pot",
    "pans",
    "kids",
    "toy"
  ]
},
  {
  "id": "simply-southern-kitchen-towels",
  "name": "Simply Southern Sweet Tea Towels 5pc",
  "priceCents": 999,
  "image": "images/products/548.webp",
  "rating": {
    "stars": 4.5,
    "count": 1300
  },
  "keywords": [
    "simply southern",
    "sweet tea",
    "kitchen towels",
    "cotton",
    "absorbent",
    "home",
    "set"
  ]
},
  {
  "id": "folding-dishcloth-rack",
  "name": "Folding Dishcloth Rack",
  "priceCents": 1089,
  "image": "images/products/547.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "folding",
    "dishcloth",
    "rack",
    "kitchen",
    "countertop",
    "home",
    "drying"
  ]
},
  {
  "id": "wooden-bamboo-spoon",
  "name": "Wooden Bamboo Spoon",
  "priceCents": 100,
  "image": "images/products/546.webp",
  "rating": {
    "stars": 4.5,
    "count": 1300
  },
  "keywords": [
    "wooden",
    "bamboo",
    "spoon",
    "kitchen",
    "utensil",
    "home",
    "kids"
  ]
},

  {
  "id": "wooden-honey-dippers",
  "name": "Wooden Honey Dippers",
  "priceCents": 299,
  "image": "images/products/545.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "wooden",
    "honey dippers",
    "kitchen",
    "breakfast",
    "spoon",
    "home",
    "tool"
  ]
},
  {
  "id": "stainless-steel-cutlery-drainer",
  "name": "Stainless Steel Cutlery Drainer",
  "priceCents": 890,
  "image": "images/products/544.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "stainless steel",
    "kitchen",
    "cutlery drainer",
    "utensil holder",
    "basket",
    "organiser",
    "caddy"
  ]
},
  {
  "id": "sweet-home-dish-drainer-set",
  "name": "Sweet Home 3-Piece Dish Drainer Set",
  "priceCents": 1590,
  "image": "images/products/543.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "sweet home",
    "kitchen",
    "dish drainer",
    "3-piece",
    "sink",
    "assorted colors"
  ]
},
  {
  "id": "muse-kitchen-knife-set",
  "name": "Muse 8-Piece Knife Set",
  "priceCents": 1690,
  "image": "images/products/542.webp",
  "rating": {
    "stars": 4.5,
    "count": 1400
  },
  "keywords": [
    "muse",
    "kitchen",
    "knife set",
    "8-piece",
    "accessories",
    "organizer"
  ]
},
  {
  "id": "home-kitchen-french-fry-cutter",
  "name": "French Fry Cutter",
  "priceCents": 1589,
  "image": "images/products/541.webp",
  "rating": {
    "stars": 4.5,
    "count": 1350
  },
  "keywords": [
    "home",
    "kitchen",
    "french fry",
    "cutter",
    "potato",
    "slicer"
  ]
},
  {
  "id": "home-kitchen-accessory",
  "name": "Home Kitchen Accessory",
  "priceCents": 1390,
  "image": "images/products/540.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "home",
    "kitchen",
    "accessory",
    "storage",
    "organization"
  ]
},
  {
  "id": "dish-caddy-metal",
  "name": "Dish Caddy Metal",
  "priceCents": 3099,
  "image": "images/products/539.webp",
  "rating": {
    "stars": 4.5,
    "count": 1350
  },
  "keywords": [
    "dish caddy",
    "kitchen",
    "home",
    "storage",
    "organization",
    "metal"
  ]
},
  {
  "id": "cord-organizer-6-pack",
  "name": "Cord Organizer 6-Pack",
  "priceCents": 799,
  "image": "images/products/538.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "cord organizer",
    "kitchen",
    "appliances",
    "gadgets",
    "home",
    "6-pack"
  ]
},
  {
  "id": "kitchen-hand-towels-12-pack",
  "name": "12 Kitchen Hand Towels",
  "priceCents": 1399,
  "image": "images/products/537.webp",
  "rating": {
    "stars": 4.0,
    "count": 1400
  },
  "keywords": [
    "kitchen",
    "hand towels",
    "cotton",
    "dish towels",
    "soft",
    "textiles"
  ]
},
  {
  "id": "avocado-slicer-cutter",
  "name": "3-in-1 Avocado Slicer",
  "priceCents": 200,
  "image": "images/products/536.webp",
  "rating": {
    "stars": 4.5,
    "count": 1250
  },
  "keywords": [
    "avocado",
    "slicer",
    "cutter",
    "pitter",
    "kitchen",
    "tool",
    "camping",
    "home"
  ]
},
  {
  "id": "wall-mounted-pot-pan-holder",
  "name": "Wall-Mounted Pot Pan Holder",
  "priceCents": 1074,
  "image": "images/products/535.webp",
  "rating": {
    "stars": 4.0,
    "count": 1420
  },
  "keywords": [
    "wall-mounted",
    "pot",
    "pan",
    "holder",
    "kitchen",
    "storage",
    "organization"
  ]
},
  {
  "id": "home-kitchen-accessories",
  "name": "Home Kitchen Accessories",
  "priceCents": 1234,
  "image": "images/products/534.webp",
  "rating": {
    "stars": 4.5,
    "count": 1350
  },
  "keywords": [
    "home",
    "kitchen",
    "accessories",
    "cooking",
    "storage",
    "organization"
  ]
},
  {
  "id": "kitchen-sink-hanging-basket",
  "name": "Kitchen Sink Hanging Basket",
  "priceCents": 299,
  "image": "images/products/533.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "kitchen",
    "sink",
    "hanging",
    "basket",
    "home",
    "storage",
    "drain",
    "adjustable"
  ]
},
  {
  "id": "home-storage-drain-basket",
  "name": "Home Storage Drain Basket",
  "priceCents": 350,
  "image": "images/products/532.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "home",
    "storage",
    "drain",
    "basket",
    "kitchen",
    "sink",
    "holder",
    "soap",
    "sponge",
    "shelf"
  ]
},
  {
  "id": "kitchen-sink-hanging-basket",
  "name": "Kitchen Sink Hanging Basket",
  "priceCents": 330,
  "image": "images/products/531.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "kitchen",
    "sink",
    "hanging",
    "basket",
    "home",
    "storage",
    "drain",
    "adjustable"
  ]
},
  {
  "id": "stainless-steel-egg-topper",
  "name": "Stainless Steel Egg Topper",
  "priceCents": 290,
  "image": "images/products/530.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "stainless",
    "steel",
    "egg",
    "topper",
    "cutter",
    "shell",
    "opener",
    "scissors",
    "kitchen",
    "tool"
  ]
},
  {
  "id": "wooden-rake-batter-spreader",
  "name": "2pcs Wooden Rake Batter Spreader",
  "priceCents": 199,
  "image": "images/products/529.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "wooden",
    "rake",
    "batter",
    "spreader",
    "pancake",
    "crepe",
    "kitchen",
    "tool",
    "DIY",
    "home"
  ]
},
  {
  "id": "dumpling-mold-set",
  "name": "2pc Dumpling Mold Set",
  "priceCents": 299,
  "image": "images/products/528.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "dumpling",
    "mold",
    "set",
    "kitchen",
    "chef",
    "empanadas",
    "pierogis",
    "cooking",
    "home",
    "baking"
  ]
},
  {
  "id": "pots-pans-organizer",
  "name": "Pots and Pans Organizer",
  "priceCents": 1190,
  "image": "images/products/527.webp",
  "rating": {
    "stars": 4.0,
    "count": 1100
  },
  "keywords": [
    "pots",
    "pans",
    "organizer",
    "cabinet",
    "rack",
    "adjustable",
    "tier",
    "kitchen",
    "storage",
    "DIY"
  ]
},
  {
  "id": "2-layer-dish-rack",
  "name": "2 Layer Dish Rack",
  "priceCents": 1290,
  "image": "images/products/526.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "dish",
    "rack",
    "plate",
    "cup",
    "drainer",
    "cutlery",
    "holder",
    "organizer",
    "kitchen",
    "home"
  ]
},
  {
  "id": "home-kitchen-organizer-bin",
  "name": "Home Kitchen Organizer Bin",
  "priceCents": 790,
  "image": "images/products/525.webp",
  "rating": {
    "stars": 4.5,
    "count": 1300
  },
  "keywords": [
    "home",
    "kitchen",
    "organizer",
    "bin",
    "pantry",
    "refrigerator",
    "freezer",
    "storage"
  ]
},
  {
  "id": "adidas-megaride-o1",
  "name": "adidas Megaride O1 Shoes",
  "priceCents": 3255,
  "image": "images/products/524.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "adidas",
    "megaride",
    "o1",
    "shoes",
    "men"
  ]
},
  
  {
  "id": "nike-air-monarch-iv",
  "name": "Nike Air Monarch IV Walking Shoes",
  "priceCents": 2990,
  "image": "images/products/523.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "nike",
    "air monarch",
    "iv",
    "walking shoes",
    "white",
    "black",
    "red",
    "men"
  ]
},

  {
  "id": "nike-flex-control-tr4",
  "name": "Nike Flex Control TR4 Sneakers",
  "priceCents": 3499,
  "image": "images/products/522.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "nike",
    "flex control",
    "tr4",
    "sneakers",
    "white",
    "black",
    "dark smoke grey",
    "men"
  ]
},
  
  {
  "id": "onitsuka-tiger-mexico-66",
  "name": "Onitsuka Tiger MEXICO 66 Shoes",
  "priceCents": 4234,
  "image": "images/products/520.webp",
  "rating": {
    "stars": 4.5,
    "count": 1300
  },
  "keywords": [
    "onitsuka",
    "tiger",
    "mexico",
    "66",
    "shoes",
    "sneakers",
    "unisex"
  ]
},
  {
  "id": "adidas-women-hoops-4-0-w",
  "name": "adidas Hoops 4.0 W Shoes",
  "priceCents": 2090,
  "image": "images/products/519.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "adidas",
    "women",
    "hoops",
    "4.0",
    "shoes",
    "brand new"
  ]
},
  {
  "id": "adidas-men-forum-low-cl",
  "name": "adidas Forum Low CL Shoes",
  "priceCents": 3000,
  "image": "images/products/518.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "adidas",
    "men",
    "forum",
    "low cl",
    "shoes",
    "brand new"
  ]
},
  {
  "id": "crocs-bayaband-clog",
  "name": "Crocs Bayaband Clog",
  "priceCents": 1199,
  "image": "images/products/517.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "crocs",
    "bayaband",
    "clog",
    "slip-on",
    "waterproof",
    "lightweight",
    "pivot heel strap",
    "brand new"
  ]
},
  {
  "id": "crocs-baya-lined-clogs",
  "name": "Crocs Baya Lined Clogs",
  "priceCents": 1199,
  "image": "images/products/516.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "crocs",
    "baya",
    "lined",
    "clogs",
    "adult",
    "shoes",
    "brand new"
  ]
},
  {
  "id": "adidas-forum2000",
  "name": "Adidas Forum2000 Shoes",
  "priceCents": 3000,
  "image": "images/products/515.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "forum2000",
    "men",
    "shoes",
    "brand new"
  ]
},
  {
  "id": "crocs-bayaband-flip-flop",
  "name": "Crocs Bayaband Flip Flop",
  "priceCents": 1490,
  "image": "images/products/514.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "crocs",
    "bayaband",
    "flip flop",
    "sandals",
    "adult"
  ]
},
  {
  "id": "adidas-adilette-shower-slides",
  "name": "adidas Adilette Shower Slides",
  "priceCents": 599,
  "image": "images/products/513.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "adidas",
    "adilette",
    "shower",
    "slides",
    "men"
  ]
},
  {
  "id": "reebok-zignition-men",
  "name": "Reebok Zignition Men",
  "priceCents": 3589,
  "image": "images/products/512.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "reebok",
    "zignition",
    "men",
    "running",
    "shoes"
  ]
},
  {
  "id": "adidas-tyshawn-low-men",
  "name": "Adidas Tyshawn Low Men",
  "priceCents": 2189,
  "image": "images/products/511.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "tyshawn",
    "low",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-nova-ii-infinity-men",
  "name": "Adidas Nova II Infinity Men",
  "priceCents": 2999,
  "image": "images/products/510.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "nova",
    "ii",
    "infinity",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-forum-low-cl-men",
  "name": "Adidas Forum Low CL Men",
  "priceCents": 2988,
  "image": "images/products/509.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "forum",
    "low",
    "cl",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-barreda-decode-men",
  "name": "Adidas Barreda Decode Men",
  "priceCents": 2099,
  "image": "images/products/508.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "barreda",
    "decode",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-barreda-decode-men",
  "name": "Adidas Barreda Decode Men",
  "priceCents": 3099,
  "image": "images/products/507.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "barreda",
    "decode",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-kantai-trail-men",
  "name": "Adidas Kantai Trail Men",
  "priceCents": 3089,
  "image": "images/products/506.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "kantai",
    "trail",
    "men",
    "shoes"
  ]
},
  {
  "id": "steppers-cloud-insoles",
  "name": "Steppers Cloud Insoles",
  "priceCents": 899,
  "image": "images/products/505.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "steppers",
    "cloud",
    "insoles",
    "comfort",
    "men",
    "women"
  ]
},
  {
  "id": "adidas-lightblaze-atr-men",
  "name": "Adidas Lightblaze ATR Men",
  "priceCents": 3400,
  "image": "images/products/504.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "lightblaze",
    "atr",
    "men",
    "shoes"
  ]
},
  {
  "id": "saucony-grid-jazz-9",
  "name": "Saucony Grid Jazz 9",
  "priceCents": 4299,
  "image": "images/products/503.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "saucony",
    "grid",
    "jazz",
    "suede",
    "unisex",
    "shoes"
  ]
},
  {
  "id": "reebok-energen-lux-men",
  "name": "Reebok Energen Lux Men",
  "priceCents": 2500,
  "image": "images/products/502.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "reebok",
    "energen",
    "lux",
    "men",
    "running",
    "shoes"
  ]
},
  {
  "id": "adidas-ultradream-bold-women",
  "name": "Adidas Ultradream Bold Women",
  "priceCents": 3099,
  "image": "images/products/501.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "ultradream",
    "bold",
    "women",
    "shoes"
  ]
},
  {
  "id": "adidas-lightblaze-women",
  "name": "Adidas Lightblaze Women",
  "priceCents": 3200,
  "image": "images/products/500.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "lightblaze",
    "women",
    "shoes"
  ]
},
  {
  "id": "adidas-forum-84-low-men",
  "name": "Adidas Forum 84 Low Men",
  "priceCents": 3899,
  "image": "images/products/499.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "forum",
    "84",
    "low",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-adizero-aruku-women",
  "name": "Adidas Adizero Aruku Women",
  "priceCents": 3000,
  "image": "images/products/498.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "adizero",
    "aruku",
    "women",
    "shoes"
  ]
},
  {
  "id": "adidas-adilette-aqua-slides",
  "name": "Adidas Adilette Aqua Slides",
  "priceCents": 499,
  "image": "images/products/497.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "adilette",
    "aqua",
    "slides",
    "men"
  ]
},
  {
  "id": "adidas-lightblaze-shoes",
  "name": "Adidas Lightblaze Shoes",
  "priceCents": 3200,
  "image": "images/products/496.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "lightblaze",
    "men",
    "shoes"
  ]
},
  {
  "id": "adidas-japan-shoes",
  "name": "Adidas Japan Shoes",
  "priceCents": 3690,
  "image": "images/products/495.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "japan",
    "men",
    "shoes"
  ]
},
  {
  "id": "merrell-hut-moc",
  "name": "Merrell Hut Moc 2 Packable",
  "priceCents": 3199,
  "image": "images/products/494.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "merrell",
    "hut moc",
    "men",
    "shoes"
  ]
},
  {
  "id": "newbalance-xc72",
  "name": "New Balance XC-72",
  "priceCents": 3000,
  "image": "images/products/493.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "newbalance",
    "xc-72",
    "running",
    "shoes"
  ]
},
  {
  "id": "adidas-runfalcon-kids",
  "name": "Adidas RunFalcon Kids",
  "priceCents": 1866,
  "image": "images/products/492.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "runfalcon",
    "kids",
    "shoes"
  ]
},
  {
  "id": "adidas-tokyo-women",
  "name": "Adidas Tokyo",
  "priceCents": 2589,
  "image": "images/products/491.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "tokyo",
    "women",
    "shoes"
  ]
},
  {
  "id": "adidas-lite-racer-adapt-7",
  "name": "Adidas Lite Racer Adapt 7.0",
  "priceCents": 2399,
  "image": "images/products/490.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "lite racer",
    "adapt 7.0",
    "men",
    "shoes"
  ]
},
  {
  "id": "under-armour-charged-assert-10",
  "name": "Under Armour Charged Assert 10",
  "priceCents": 2099,
  "image": "images/products/489.webp",
  "rating": {
    "stars": 4.0,
    "count": 1500
  },
  "keywords": [
    "under armour",
    "charged assert",
    "running shoes",
    "men"
  ]
},
  {
  "id": "nike-air-max-alpha-trainer-6",
  "name": "Nike Air Max Alpha Trainer 6",
  "priceCents": 4999,
  "image": "images/products/488.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "nike",
    "air max",
    "alpha trainer",
    "sneakers"
  ]
},
  {
  "id": "nike-sb-alleyoop",
  "name": "Nike SB Alleyoop",
  "priceCents": 3095,
  "image": "images/products/487.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "nike",
    "sb alleyoop",
    "skateboarding",
    "sneakers"
  ]
},
  {
  "id": "nike-kyrie-low5-white",
  "name": "Nike Kyrie Low 5",
  "priceCents": 3299,
  "image": "images/products/486.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "nike",
    "kyrie low 5",
    "basketball",
    "shoes"
  ]
},
  {
  "id": "nike-kyrie-infinity-black",
  "name": "Nike Kyrie Infinity Black",
  "priceCents": 3099,
  "image": "images/products/485.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "nike",
    "kyrie infinity",
    "black",
    "shoes"
  ]
},
  {
  "id": "adidas-campus-00s-green",
  "name": "Adidas Campus 00s Green",
  "priceCents": 6299,
  "image": "images/products/484.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "adidas",
    "campus 00s",
    "green",
    "sneakers"
  ]
},
  {
  "id": "nike-jordan-1-mid-pink",
  "name": "Nike Jordan 1 Mid SE Pink",
  "priceCents": 5999,
  "image": "images/products/483.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "nike",
    "jordan 1 mid",
    "pink",
    "mens",
    "sneakers"
  ]
},
  {
  "id": "oofos-oomy-stride",
  "name": "Oofos Oomy Stride Men’s",
  "priceCents": 3999,
  "image": "images/products/482.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "oofos",
    "oomy stride",
    "men",
    "running",
    "walking"
  ]
},
  {
  "id": "jordan-11-cherry-right",
  "name": "Air Jordan 11 Cherry (Right Shoe Only)",
  "priceCents": 2999,
  "image": "images/products/481.webp",
  "rating": {
    "stars": 4.5,
    "count": 1488
  },
  "keywords": [
    "jordan",
    "jordan 11",
    "cherry",
    "right shoe",
    "nike"
  ]
},
  {
  "id": "crocs-crocband-clog",
  "name": "Crocs Crocband Clog",
  "priceCents": 1977,
  "image": "images/products/480.webp",
  "rating": {
    "stars": 4.0,
    "count": 1322
  },
  "keywords": [
    "crocs",
    "crocband",
    "clog",
    "unisex",
    "black"
  ]
},
  {
  "id": "brooks-ghost-16",
  "name": "Brooks Ghost 16 Running Shoe",
  "priceCents": 5988,
  "image": "images/products/479.webp",
  "rating": {
    "stars": 4.5,
    "count": 1488
  },
  "keywords": [
    "brooks",
    "ghost",
    "running",
    "neutral",
    "men"
  ]
},
  {
  "id": "fila-original-fitness",
  "name": "Fila Original Fitness Shoes",
  "priceCents": 1499,
  "image": "images/products/478.webp",
  "rating": {
    "stars": 4.5,
    "count": 1321
  },
  "keywords": [
    "fila",
    "original",
    "fitness",
    "shoes",
    "sneakers"
  ]
},
  {
  "id": "brooks-caldera-6",
  "name": "Brooks Caldera 6 Trail Running Shoes",
  "priceCents": 5099,
  "image": "images/products/477.webp",
  "rating": {
    "stars": 4.5,
    "count": 1488
  },
  "keywords": [
    "brooks",
    "caldera",
    "trail",
    "running",
    "shoes"
  ]
},
  {
  "id": "adidas-men-adizero-aruku-shoes",
  "name": "adidas men Adizero Aruku Shoes",
  "priceCents": 3299,
  "image": "images/products/476.webp",
  "rating": {
    "stars": 4.5,
    "count": 1377
  },
  "keywords": [
    "adidas",
    "men",
    "adizero",
    "aruku",
    "shoes"
  ]
},
  {
  "id": "crocs-classic-clog-unisex-slip-on-women-shoe-ultra-light-water-friendl",
  "name": "Crocs Classic Clog Unisex Slip On Women Shoe Ultra Light Water-Friendl",
  "priceCents": 1589,
  "image": "images/products/475.webp",
  "rating": {
    "stars": 4.0,
    "count": 1488
  },
  "keywords": [
    "crocs",
    "classic",
    "clog",
    "unisex",
    "slip on",
    "water friendly",
    "women",
    "shoe"
  ]
},
  {
  "id": "adidas-men-adilette-comfort-slides",
  "name": "Adidas Men Adilette Comfort Slides",
  "priceCents": 899,
  "image": "images/products/474.webp",
  "rating": {
    "stars": 4.5,
    "count": 1321
  },
  "keywords": [
    "adidas",
    "men",
    "adilette",
    "comfort",
    "slides"
  ]
},
  {
  "id": "adidas-men-hoops-4-mid",
  "name": "Adidas Men Hoops 4.0 Mid Shoes",
  "priceCents": 1933,
  "image": "images/products/473.webp",
  "rating": {
    "stars": 4.0,
    "count": 1187
  },
  "keywords": [
    "adidas",
    "men",
    "hoops",
    "4.0",
    "mid",
    "shoes"
  ]
},
  {
  "id": "adidas-kids-grand-court-2",
  "name": "Adidas Kids Grand Court 2.0 Shoes",
  "priceCents": 1499,
  "image": "images/products/472.webp",
  "rating": {
    "stars": 4.5,
    "count": 1250
  },
  "keywords": [
    "adidas",
    "kids",
    "grand court",
    "shoes"
  ]
},
  {
  "id": "mens-bennett-leather-loafers",
  "name": "Men's Bennett Leather Loafers",
  "priceCents": 1099,
  "image": "images/products/471.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "men",
    "bennett",
    "leather",
    "loafers",
    "shoes"
  ]
},
  {
  "id": "adidas-men-subzone",
  "name": "Adidas Men Subzone Shoes",
  "priceCents": 2299,
  "image": "images/products/470.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "adidas",
    "men",
    "subzone",
    "shoes"
  ]
},
  {
  "id": "crocs-baya-clogs",
  "name": "Crocs Baya Clogs",
  "priceCents": 1877,
  "image": "images/products/469.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "crocs",
    "baya",
    "clogs"
  ]
},
  {
  "id": "converse-chuck-taylor-high-street-mid",
  "name": "Converse Chuck Taylor High Street Mid",
  "priceCents": 2999,
  "image": "images/products/468.webp",
  "rating": {
    "stars": 4.5,
    "count": 1450
  },
  "keywords": [
    "converse",
    "chuck",
    "taylor",
    "high",
    "street",
    "mid"
  ]
},
  {
  "id": "jordan-11-retro",
  "name": "Jordan 11 Retro",
  "priceCents": 3732,
  "image": "images/products/467.webp",
  "rating": {
    "stars": 4.5,
    "count": 1320
  },
  "keywords": [
    "jordan",
    "11",
    "retro"
  ]
},
  {
  "id": "adidas-men-barreda-decode-shoes",
  "name": "Adidas Men Barreda Decode Shoes",
  "priceCents": 2199,
  "image": "images/products/466.webp",
  "rating": {
    "stars": 4.5,
    "count": 1245
  },
  "keywords": [
    "adidas",
    "men",
    "barreda",
    "decode",
    "shoes"
  ]
},
  {
  "id": "adidas-women-astrastar-shoes",
  "name": "Adidas Women Astrastar Shoes",
  "priceCents": 2000,
  "image": "images/products/465.webp",
  "rating": {
    "stars": 4.5,
    "count": 1578
  },
  "keywords": [
    "adidas",
    "women",
    "astrastar",
    "shoes"
  ]
},
  {
  "id": "adidas-women-runfalcon-5-shoes",
  "name": "Adidas Women Runfalcon 5 Shoes",
  "priceCents": 1871,
  "image": "images/products/464.webp",
  "rating": {
    "stars": 4.0,
    "count": 1423
  },
  "keywords": [
    "adidas",
    "women",
    "runfalcon",
    "5",
    "shoes"
  ]
},
  {
  "id": "adidas-men-grand-court-alpha-shoes",
  "name": "Adidas Men Grand Court Alpha Shoes",
  "priceCents": 1789,
  "image": "images/products/463.webp",
  "rating": {
    "stars": 4.5,
    "count": 1532
  },
  "keywords": [
    "adidas",
    "men",
    "grand",
    "court",
    "alpha",
    "shoes"
  ]
},
  {
  "id": "adidas-men-hoops-4-0-shoes",
  "name": "Adidas Men Hoops 4.0 Shoes",
  "priceCents": 1723,
  "image": "images/products/462.webp",
  "rating": {
    "stars": 4.0,
    "count": 1245
  },
  "keywords": [
    "adidas",
    "men",
    "hoops",
    "4.0",
    "shoes"
  ]
},
  {
  "id": "adidas-men-ultradream-dna-shoes",
  "name": "Adidas Men Ultradream DNA Shoes",
  "priceCents": 2198,
  "image": "images/products/461.webp",
  "rating": {
    "stars": 4.5,
    "count": 1578
  },
  "keywords": [
    "adidas",
    "men",
    "ultradream",
    "dna",
    "shoes"
  ]
},
  {
  "id": "original-steppers-comfort-insoles",
  "name": "Original Steppers Comfort Insoles",
  "priceCents": 876,
  "image": "images/products/460.webp",
  "rating": {
    "stars": 4.5,
    "count": 1347
  },
  "keywords": [
    "original",
    "steppers",
    "comfort",
    "insoles"
  ]
},
  {
  "id": "adidas-women-country-og-shoes",
  "name": "Adidas Women's Country OG Shoes",
  "priceCents": 1862,
  "image": "images/products/459.webp",
  "rating": {
    "stars": 4.0,
    "count": 1285
  },
  "keywords": [
    "adidas",
    "women",
    "country",
    "og",
    "shoes"
  ]
},
  {
  "id": "adidas-men-daily-3-0-shoes",
  "name": "Adidas Men's Daily 3.0 Shoes",
  "priceCents": 1499,
  "image": "images/products/458.webp",
  "rating": {
    "stars": 4.5,
    "count": 1320
  },
  "keywords": [
    "adidas",
    "men",
    "daily",
    "3.0",
    "shoes"
  ]
},
  {
  "id": "adidas-men-brmd-shoes",
  "name": "Adidas Men's BRMD Shoes",
  "priceCents": 1690,
  "image": "images/products/457.webp",
  "rating": {
    "stars": 4.0,
    "count": 1150
  },
  "keywords": [
    "adidas",
    "men",
    "brmd",
    "shoes"
  ]
},
  {
  "id": "adidas-men-adizero-aruku-shoes",
  "name": "Adidas Men's Adizero Aruku Shoes",
  "priceCents": 3000,
  "image": "images/products/456.webp",
  "rating": {
    "stars": 4.5,
    "count": 1320
  },
  "keywords": [
    "adidas",
    "men",
    "adizero",
    "aruku",
    "shoes"
  ]
},
  {
  "id": "adidas-men-grand-court-2-0-shoes",
  "name": "Adidas Men's Grand Court 2.0 Shoes",
  "priceCents": 1599,
  "image": "images/products/455.webp",
  "rating": {
    "stars": 4.0,
    "count": 1250
  },
  "keywords": [
    "adidas",
    "men",
    "grand",
    "court",
    "shoes"
  ]
},
  {
  "id": "adidas-men-daily-4-0-shoes",
  "name": "Adidas Men's Daily 4.0 Shoes",
  "priceCents": 2099,
  "image": "images/products/454.webp",
  "rating": {
    "stars": 4.5,
    "count": 1300
  },
  "keywords": [
    "adidas",
    "men",
    "daily",
    "shoes"
  ]
},
  {
  "id": "womens-5-piece-luxury-quartz-set",
  "name": "Women's 5-Piece Luxury Quartz Set",
  "priceCents": 2220,
  "image": "images/products/453.webp",
  "rating": {
    "stars": 4.5,
    "count": 1200
  },
  "keywords": [
    "women",
    "luxury",
    "quartz",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "mens-5-piece-silver-gift-set",
  "name": "Men's 5-Piece Silver Gift Set",
  "priceCents": 899,
  "image": "images/products/452.webp",
  "rating": {
    "stars": 4.0,
    "count": 1100
  },
  "keywords": [
    "men",
    "gift set",
    "watch",
    "necklace",
    "bracelets",
    "silver"
  ]
},
  {
  "id": "watch-jewelry-gloves",
  "name": "Watch & Jewelry Gloves",
  "priceCents": 852,
  "image": "images/products/451.webp",
  "rating": {
    "stars": 4.0,
    "count": 1100
  },
  "keywords": [
    "gloves",
    "watch",
    "jewelry",
    "microfibre",
    "black",
    "anti scratch"
  ]
},
  {
  "id": "cote-dazur-ladies-watch-set",
  "name": "Cote d'Azur Ladies Watch Set",
  "priceCents": 499,
  "image": "images/products/450.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "cote d'azur",
    "watch",
    "ladies",
    "earrings",
    "necklace",
    "set"
  ]
},
  {
  "id": "jewelry-jar-full-of-bracelets",
  "name": "Jewelry Jar Full of Bracelets",
  "priceCents": 1567,
  "image": "images/products/449.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "jewelry",
    "jar",
    "bracelets",
    "necklaces",
    "gruens",
    "set"
  ]
},
  {
  "id": "womens-5-piece-jewelry-set",
  "name": "Women's 5-Piece Jewelry Set",
  "priceCents": 799,
  "image": "images/products/448.webp",
  "rating": {
    "stars": 4.0,
    "count": 1100
  },
  "keywords": [
    "women",
    "jewelry",
    "set",
    "watch",
    "necklace",
    "earrings",
    "gift"
  ]
},
  {
  "id": "vintage-gold-watch-jewelry-set",
  "name": "Vintage Gold Watch & Jewelry Set",
  "priceCents": 2090,
  "image": "images/products/447.webp",
  "rating": {
    "stars": 4.5,
    "count": 1250
  },
  "keywords": [
    "vintage",
    "gold",
    "watch",
    "jewelry",
    "set",
    "necklace",
    "earrings"
  ]
},
  {
  "id": "cartice-watch-jewelry-set",
  "name": "Cartice Watch & Jewelry Set",
  "priceCents": 1999,
  "image": "images/products/446.webp",
  "rating": {
    "stars": 4.5,
    "count": 1305
  },
  "keywords": [
    "cartice",
    "watch",
    "jewelry",
    "set",
    "necklace",
    "bracelet"
  ]
},
  {
  "id": "bell-rose-womens-watch-jewelry-set",
  "name": "Bell & Rose Women's Watch & Jewelry Set",
  "priceCents": 2098,
  "image": "images/products/445.webp",
  "rating": {
    "stars": 4.5,
    "count": 1420
  },
  "keywords": [
    "bell",
    "rose",
    "womens",
    "watch",
    "jewelry",
    "set",
    "box"
  ]
},
  {
  "id": "lco-womens-watch-jewelry-set",
  "name": "L&Co. Women's Watch & Jewelry Set",
  "priceCents": 1490,
  "image": "images/products/444.webp",
  "rating": {
    "stars": 4.5,
    "count": 1350
  },
  "keywords": [
    "lco",
    "womens",
    "watch",
    "jewelry",
    "set",
    "silver",
    "gift",
    "christmas"
  ]
},
  {
  "id": "womens-quartz-watch-jewelry-set",
  "name": "Women's Quartz Watch & Jewelry Set",
  "priceCents": 1090,
  "image": "images/products/443.webp",
  "rating": {
    "stars": 4.0,
    "count": 1250
  },
  "keywords": [
    "womens",
    "quartz",
    "watch",
    "jewelry",
    "set",
    "necklace",
    "bracelet",
    "ring",
    "earrings"
  ]
},
  {
  "id": "cote-dazur-bell-rose-set",
  "name": "Cote D'Azur Bell & Rose Set",
  "priceCents": 3090,
  "image": "images/products/442.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "cote",
    "dazur",
    "bell",
    "rose",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "gold-tone-watch-bracelet",
  "name": "Gold Tone Watch & Bracelet",
  "priceCents": 500,
  "image": "images/products/441.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "gold",
    "tone",
    "watch",
    "bracelet",
    "macys"
  ]
},
  {
  "id": "rovada-quartz-love-knot-watch",
  "name": "Rovada Quartz Love Knot Watch",
  "priceCents": 1890,
  "image": "images/products/440.webp",
  "rating": {
    "stars": 4.5,
    "count": 1500
  },
  "keywords": [
    "rovada",
    "quartz",
    "love",
    "knot",
    "watch",
    "box",
    "papers",
    "links"
  ]
},
  {
  "id": "mens-3-piece-gift-set",
  "name": "Men's 3-Piece Gift Set",
  "priceCents": 600,
  "image": "images/products/439.webp",
  "rating": {
    "stars": 4.0,
    "count": 1200
  },
  "keywords": [
    "men",
    "3-piece",
    "gift",
    "set",
    "watch",
    "necklace",
    "bracelet"
  ]
},
  {
  "id": "elegant-quartz-watch-jewelry-set",
  "name": "Elegant Quartz Watch & Jewelry Set",
  "priceCents": 1189,
  "image": "images/products/438.webp",
  "rating": {
    "stars": 4.0,
    "count": 1450
  },
  "keywords": [
    "elegant",
    "quartz",
    "watch",
    "jewelry",
    "set",
    "gift"
  ]
},
  {
  "id": "5-piece-womens-luxury-quartz-watch-jewelry-set",
  "name": "5-Piece Women's Luxury Quartz Watch & Jewelry Set",
  "priceCents": 2098,
  "image": "images/products/437.webp",
  "rating": {
    "stars": 4.5,
    "count": 1345
  },
  "keywords": [
    "5-piece",
    "womens",
    "luxury",
    "quartz",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "bell-rose-ladies-watch-jewelry-set",
  "name": "Bell & Rose Ladies Watch & Jewelry Set",
  "priceCents": 3022,
  "image": "images/products/436.webp",
  "rating": {
    "stars": 4.5,
    "count": 1520
  },
  "keywords": [
    "bell",
    "rose",
    "ladies",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "fashion-quartz-watch-jewelry-set",
  "name": "Fashion Quartz Watch & Jewelry Set",
  "priceCents": 1289,
  "image": "images/products/435.webp",
  "rating": {
    "stars": 4.0,
    "count": 1452
  },
  "keywords": [
    "fashion",
    "quartz",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "cote-dazur-bell-rose-watch-set",
  "name": "Cote D'Azur Bell & Rose Watch Set",
  "priceCents": 3019,
  "image": "images/products/434.webp",
  "rating": {
    "stars": 4.5,
    "count": 1320
  },
  "keywords": [
    "cote",
    "dazur",
    "bell",
    "rose",
    "watch",
    "set"
  ]
},
  {
  "id": "bell-rose-ladies-watch-jewelry",
  "name": "Bell & Rose Ladies Watch & Jewelry Set",
  "priceCents": 3099,
  "image": "images/products/433.webp",
  "rating": {
    "stars": 4.0,
    "count": 1245
  },
  "keywords": [
    "bell",
    "rose",
    "ladies",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "womens-5-piece-luxury-watch-jewelry",
  "name": "Women's 5-Piece Luxury Watch & Jewelry",
  "priceCents": 1999,
  "image": "images/products/432.webp",
  "rating": {
    "stars": 4.5,
    "count": 1532
  },
  "keywords": [
    "women",
    "5-piece",
    "luxury",
    "watch",
    "jewelry",
    "set",
    "mla-t0052r"
  ]
},
  {
  "id": "mens-5-piece-gift-set-watch-bracelets",
  "name": "Men's 5-Piece Gift Set - Watch & Bracelets",
  "priceCents": 999,
  "image": "images/products/431.webp",
  "rating": {
    "stars": 4.0,
    "count": 1425
  },
  "keywords": [
    "men",
    "5-piece",
    "gift",
    "set",
    "watch",
    "necklace",
    "bracelets",
    "black",
    "gift box"
  ]
},
  {
  "id": "5-piece-womens-jewelry-watch-bangles-set",
  "name": "5-Piece Women's Jewelry Set - Watch & Bangles",
  "priceCents": 890,
  "image": "images/products/430.webp",
  "rating": {
    "stars": 4.0,
    "count": 1368
  },
  "keywords": [
    "5-piece",
    "women",
    "jewelry",
    "watch",
    "bangles",
    "necklaces",
    "rosegold",
    "gift",
    "set"
  ]
},
  {
  "id": "4-piece-womens-quartz-watch-bracelet-set",
  "name": "4-Piece Women's Quartz Watch & Bracelet Set",
  "priceCents": 1999,
  "image": "images/products/429.webp",
  "rating": {
    "stars": 4.0,
    "count": 1425
  },
  "keywords": [
    "4-piece",
    "women",
    "watch",
    "bracelet",
    "quartz",
    "set",
    "elegant",
    "collection",
    "MLA"
  ]
},
  {
  "id": "6-piece-womens-watch-jewelry-set",
  "name": "6-Piece Women's Watch & Jewelry Set",
  "priceCents": 799,
  "image": "images/products/428.webp",
  "rating": {
    "stars": 4.5,
    "count": 1320
  },
  "keywords": [
    "6-piece",
    "women",
    "watch",
    "ring",
    "necklace",
    "earrings",
    "bracelet",
    "set",
    "butterfly"
  ]
},
  {
  "id": "cote-dazur-bell-rose-watch-set",
  "name": "Cote D'Azur Bell & Rose Watch Set",
  "priceCents": 3099,
  "image": "images/products/427.webp",
  "rating": {
    "stars": 5.0,
    "count": 1743
  },
  "keywords": [
    "cote",
    "d'azur",
    "bell",
    "rose",
    "watch",
    "set",
    "jewelry"
  ]
},
  {
  "id": "zhong-chen-quartz-watch",
  "name": "Zhong Chen Quartz Watch",
  "priceCents": 99,
  "image": "images/products/426.webp",
  "rating": {
    "stars": 4.0,
    "count": 1542
  },
  "keywords": [
    "zhong",
    "chen",
    "quartz",
    "watch",
    "new",
    "43mm"
  ]
},
  {
  "id": "bell-rose-ladies-watch-set",
  "name": "Bell & Rose Ladies Watch Set",
  "priceCents": 2989,
  "image": "images/products/425.webp",
  "rating": {
    "stars": 4.5,
    "count": 1367
  },
  "keywords": [
    "bell",
    "rose",
    "ladies",
    "watch",
    "set",
    "jewelry"
  ]
},
  {
  "id": "womens-5-piece-jewelry-set",
  "name": "Women's 5-Piece Jewelry Set",
  "priceCents": 690,
  "image": "images/products/424.webp",
  "rating": {
    "stars": 4.0,
    "count": 1205
  },
  "keywords": [
    "women",
    "5-piece",
    "jewelry",
    "set",
    "watch",
    "bangles",
    "necklaces"
  ]
},
  {
  "id": "mystery-box-15-piece-jewelry-set",
  "name": "Mystery Box 15-Piece Jewelry Set",
  "priceCents": 1499,
  "image": "images/products/423.webp",
  "rating": {
    "stars": 4.5,
    "count": 1423
  },
  "keywords": [
    "mystery",
    "box",
    "jewelry",
    "set",
    "15-piece"
  ]
},
  {
  "id": "lot-of-six-watches-jewelry",
  "name": "Lot of Six Watches & Jewelry",
  "priceCents": 8999,
  "image": "images/products/422.webp",
  "rating": {
    "stars": 5,
    "count": 1356
  },
  "keywords": [
    "lot",
    "six",
    "watches",
    "jewelry"
  ]
},
  {
  "id": "elegant-womens-quartz-watch-set",
  "name": "Elegant Women's Quartz Watch Set",
  "priceCents": 2390,
  "image": "images/products/421.webp",
  "rating": {
    "stars": 4.0,
    "count": 1154
  },
  "keywords": [
    "elegant",
    "womens",
    "quartz",
    "watch",
    "set"
  ]
},
  {
  "id": "luch-2356-quartz-watch",
  "name": "LUCH 2356 Quartz Watch",
  "priceCents": 3090,
  "image": "images/products/420.webp",
  "rating": {
    "stars": 4.5,
    "count": 1432
  },
  "keywords": [
    "luch",
    "2356",
    "quartz",
    "watch"
  ]
},
  {
  "id": "vintage-citizen-quartz-womens-watch",
  "name": "Vintage Citizen Quartz Women's Watch",
  "priceCents": 590,
  "image": "images/products/419.webp",
  "rating": {
    "stars": 4.0,
    "count": 1205
  },
  "keywords": [
    "vintage",
    "citizen",
    "quartz",
    "womens",
    "watch"
  ]
},
  {
  "id": "gruen-gold-tone-bold-link-watch",
  "name": "Gruen Gold Tone Bold Link Watch",
  "priceCents": 2989,
  "image": "images/products/418.webp",
  "rating": {
    "stars": 4.5,
    "count": 1321
  },
  "keywords": [
    "gruen",
    "gold",
    "tone",
    "bold",
    "link",
    "watch"
  ]
},
  
  {
  "id": "techno-pave-platinum-watch-bracelet",
  "name": "Techno Pave Platinum Watch & Bracelet",
  "priceCents": 2489,
  "image": "images/products/417.webp",
  "rating": {
    "stars": 4.0,
    "count": 1542
  },
  "keywords": [
    "techno",
    "pave",
    "platinum",
    "watch",
    "bracelet"
  ]
},
  {
  "id": "denton-gedi-womens-gold-diamond-watch",
  "name": "Denton Gedi Women's Gold & Diamond Watch",
  "priceCents": 1890,
  "image": "images/products/416.webp",
  "rating": {
    "stars": 4.5,
    "count": 1267
  },
  "keywords": [
    "denton",
    "gedi",
    "womens",
    "gold",
    "diamond",
    "watch"
  ]
},
  {
  "id": "vintage-austin-gold-diamond-watch",
  "name": "Vintage Austin Gold & Diamond Watch",
  "priceCents": 35098,
  "image": "images/products/415.webp",
  "rating": {
    "stars": 5.0,
    "count": 1423
  },
  "keywords": [
    "vintage",
    "austin",
    "gold",
    "diamond",
    "watch"
  ]
},
  {
  "id": "ellzen-womens-gold-watch-bracelet-set",
  "name": "ELLZEN Women's Gold Watch & Bracelet Set",
  "priceCents": 1090,
  "image": "images/products/414.webp",
  "rating": {
    "stars": 4.5,
    "count": 1375
  },
  "keywords": [
    "ellzen",
    "womens",
    "gold",
    "watch",
    "bracelet",
    "set"
  ]
},
  {
  "id": "armitron-diamond-watch-adjustable-bracelet",
  "name": "Armitron Diamond Watch w/ Adjustable Bracelet",
  "priceCents": 1890,
  "image": "images/products/413.webp",
  "rating": {
    "stars": 4.0,
    "count": 1189
  },
  "keywords": [
    "armitron",
    "diamond",
    "watch",
    "adjustable",
    "bracelet"
  ]
},
  {
  "id": "denton-clover-leaf-diamond-watch",
  "name": "Denton Clover Leaf Diamond Watch",
  "priceCents": 899,
  "image": "images/products/412.webp",
  "rating": {
    "stars": 4.5,
    "count": 1245
  },
  "keywords": [
    "denton",
    "clover",
    "leaf",
    "diamond",
    "watch"
  ]
},
  {
  "id": "14k-hge-diamond-watch-bracelet-set",
  "name": "14K HGE Diamond Watch & Bracelet Set",
  "priceCents": 5960,
  "image": "images/products/411.webp",
  "rating": {
    "stars": 4.0,
    "count": 1367
  },
  "keywords": [
    "14k",
    "hge",
    "diamond",
    "watch",
    "bracelet",
    "set"
  ]
},
  {
  "id": "la-express-gold-silver-diamond-watch",
  "name": "LA Express Gold & Silver Diamond Watch",
  "priceCents": 1299,
  "image": "images/products/410.webp",
  "rating": {
    "stars": 4.5,
    "count": 1423
  },
  "keywords": [
    "la",
    "express",
    "gold",
    "silver",
    "diamond",
    "watch"
  ]
},
  {
  "id": "pretty-figaro-diamond-watch-jewelry-set",
  "name": "Pretty Figaro Diamond Watch & Jewelry Set",
  "priceCents": 2590,
  "image": "images/products/409.webp",
  "rating": {
    "stars": 4.0,
    "count": 1104
  },
  "keywords": [
    "pretty",
    "figaro",
    "diamond",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "michael-kors-womens-pyper-two-tone-watch-set",
  "name": "Michael Kors Women’s Pyper Two-Tone Watch Set",
  "priceCents": 7899,
  "image": "images/products/408.webp",
  "rating": {
    "stars": 4.5,
    "count": 1532
  },
  "keywords": [
    "michael",
    "kors",
    "womens",
    "pyper",
    "two-tone",
    "watch",
    "set"
  ]
},
  {
  "id": "anne-klein-diamond-swiss-blue-watch",
  "name": "Anne Klein Diamond Swiss Blue Watch",
  "priceCents": 3099,
  "image": "images/products/407.webp",
  "rating": {
    "stars": 4.0,
    "count": 1245
  },
  "keywords": [
    "anne",
    "klein",
    "diamond",
    "swiss",
    "blue",
    "watch"
  ]
},
  {
  "id": "invicta-angel-womens-two-tone-crystal-watch",
  "name": "Invicta Angel Women’s Two-Tone Crystal Watch",
  "priceCents": 2299,
  "image": "images/products/406.webp",
  "rating": {
    "stars": 4.5,
    "count": 1367
  },
  "keywords": [
    "invicta",
    "angel",
    "womens",
    "two-tone",
    "crystal",
    "watch"
  ]
},
  {
  "id": "gucci-5500l-womens-diamond-bezel-watch",
  "name": "Gucci 5500L Women’s Diamond Bezel Watch",
  "priceCents": 39399,
  "image": "images/products/405.webp",
  "rating": {
    "stars": 5.0,
    "count": 1578
  },
  "keywords": [
    "gucci",
    "5500l",
    "womens",
    "diamond",
    "bezel",
    "watch"
  ]
},
  {
  "id": "vtg-1960s-womens-10kt-gold-diamond-watch",
  "name": "VTG 1960s Women’s 10kt Gold Diamond Watch",
  "priceCents": 9048,
  "image": "images/products/404.webp",
  "rating": {
    "stars": 4.5,
    "count": 1423
  },
  "keywords": [
    "vtg",
    "1960s",
    "womens",
    "10kt",
    "gold",
    "diamond",
    "watch"
  ]
},
  {
  "id": "waltham-ladies-diamond-platinum-deco-watch",
  "name": "Waltham Ladies Diamond Platinum Deco Watch",
  "priceCents": 32590,
  "image": "images/products/401.webp",
  "rating": {
    "stars": 5.0,
    "count": 1489
  },
  "keywords": [
    "waltham",
    "ladies",
    "diamond",
    "platinum",
    "deco",
    "watch"
  ]
},
  {
  "id": "akribos-xxiv-womens-quartz-diamond-watch-set",
  "name": "Akribos XXIV Women’s Quartz Diamond Watch Set",
  "priceCents": 7598,
  "image": "images/products/400.webp",
  "rating": {
    "stars": 5.0,
    "count": 1532
  },
  "keywords": [
    "akribos",
    "xxiv",
    "womens",
    "quartz",
    "diamond",
    "watch",
    "set"
  ]
},
  {
  "id": "anne-klein-womens-diamond-gold-black-watch",
  "name": "Anne Klein Women’s Diamond Gold & Black Ceramic Watch",
  "priceCents": 1590,
  "image": "images/products/399.webp",
  "rating": {
    "stars": 4.5,
    "count": 1321
  },
  "keywords": [
    "anne",
    "klein",
    "womens",
    "diamond",
    "gold",
    "black",
    "ceramic",
    "watch"
  ]
},
  {
  "id": "anne-klein-ny-ladies-gold-watch-bracelet",
  "name": "Anne Klein NY Ladies Gold Watch & Bracelet Set",
  "priceCents": 2599,
  "image": "images/products/398.webp",
  "rating": {
    "stars": 5.0,
    "count": 1487
  },
  "keywords": [
    "anne",
    "klein",
    "ny",
    "ladies",
    "gold",
    "watch",
    "bracelet",
    "set"
  ]
},
  {
  "id": "chagal-quartz-diamond-black-gold-watch",
  "name": "Chagal Quartz Diamond Black & Gold Ladies Watch",
  "priceCents": 799,
  "image": "images/products/397.webp",
  "rating": {
    "stars": 4.5,
    "count": 1105
  },
  "keywords": [
    "chagal",
    "quartz",
    "diamond",
    "black",
    "gold",
    "ladies",
    "watch"
  ]
},
  {
  "id": "fmd-diamond-ladies-silver-watch",
  "name": "FMD Diamond Ladies Silver Watch",
  "priceCents": 500,
  "image": "images/products/396.webp",
  "rating": {
    "stars": 4.0,
    "count": 1324
  },
  "keywords": [
    "fmd",
    "diamond",
    "ladies",
    "silver",
    "watch"
  ]
},
  {
  "id": "armitron-womens-crystal-watch-bangle",
  "name": "Armitron Women’s Crystal Watch & Bangle Set",
  "priceCents": 2289,
  "image": "images/products/403.webp",
  "rating": {
    "stars": 4.5,
    "count": 1412
  },
  "keywords": [
    "armitron",
    "womens",
    "crystal",
    "watch",
    "bangle",
    "set"
  ]
},
  {
  "id": "denton-womens-flower-diamond-watch",
  "name": "Denton Women’s Flower Diamond Bezel Watch",
  "priceCents": 899,
  "image": "images/products/394.webp",
  "rating": {
    "stars": 4.0,
    "count": 1345
  },
  "keywords": [
    "denton",
    "womens",
    "flower",
    "diamond",
    "bezel",
    "watch"
  ]
}

  ,{
  "id": "regency-diamond-gold-ladies-watch",
  "name": "Regency Diamond Gold Tone Ladies Watch Quartz",
  "priceCents": 1299,
  "image": "images/products/402.webp",
  "rating": {
    "stars": 4.5,
    "count": 1275
  },
  "keywords": [
    "regency",
    "diamond",
    "gold",
    "ladies",
    "watch",
    "quartz"
  ]
},
  {
  "id": "regency-diamond-two-tone-ladies-watch-2",
  "name": "Regency Diamond Two-Tone Ladies Watch Quartz",
  "priceCents": 2299,
  "image": "images/products/393.webp",
  "rating": {
    "stars": 4.0,
    "count": 1420
  },
  "keywords": [
    "regency",
    "diamond",
    "two-tone",
    "ladies",
    "watch",
    "quartz"
  ]
},
  {
  "id": "regency-diamond-two-tone-ladies-watch",
  "name": "Regency Diamond Two-Tone Ladies Watch Quartz",
  "priceCents": 1988,
  "image": "images/products/392.webp",
  "rating": {
    "stars": 4.5,
    "count": 1367
  },
  "keywords": [
    "regency",
    "diamond",
    "two-tone",
    "ladies",
    "watch",
    "quartz"
  ]
},
  {
  "id": "diamond-gold-bracelet-watch",
  "name": "Diamond Gold Bracelet Watch",
  "priceCents": 1199,
  "image": "images/products/391.webp",
  "rating": {
    "stars": 4.0,
    "count": 1423
  },
  "keywords": [
    "diamond",
    "gold",
    "bracelet",
    "watch"
  ]
},
  {
  "id": "womens-ak1980bkgb-diamond-black-gold-watch",
  "name": "Women’s AK/1980BKGB Diamond-Accented Black & Gold Bangle Watch",
  "priceCents": 1810,
  "image": "images/products/390.webp",
  "rating": {
    "stars": 4.5,
    "count": 1398
  },
  "keywords": [
    "womens",
    "ak1980bkgb",
    "diamond",
    "black",
    "gold",
    "bangle",
    "watch"
  ]
},
  {
  "id": "womens-diamond-dial-gold-watch",
  "name": "Women’s Diamond Dial Gold Tone Watch",
  "priceCents": 899,
  "image": "images/products/389.webp",
  "rating": {
    "stars": 4.0,
    "count": 1245
  },
  "keywords": [
    "womens",
    "diamond",
    "dial",
    "gold",
    "tone",
    "watch"
  ]
},
  {
  "id": "akribos-xxiv-diamond-twist-watch-set",
  "name": "Akribos XXIV Diamond Twist Chain Watch & Jewelry Set",
  "priceCents": 6245,
  "image": "images/products/388.webp",
  "rating": {
    "stars": 4.5,
    "count": 1512
  },
  "keywords": [
    "akribos",
    "xxiv",
    "diamond",
    "twist",
    "chain",
    "watch",
    "jewelry",
    "set"
  ]
},
  {
  "id": "fmd-diamond-ladies-silver-watch",
  "name": "FMD Diamond Ladies Silver Watch",
  "priceCents": 799,
  "image": "images/products/387.webp",
  "rating": {
    "stars": 4.0,
    "count": 1384
  },
  "keywords": [
    "fmd",
    "diamond",
    "ladies",
    "silver",
    "watch"
  ]
},
  {
  "id": "vtg-elizabeth-taylor-diamonds-collection",
  "name": "VTG Elizabeth Taylor White Diamonds Collection Watch & Earrings",
  "priceCents": 1789,
  "image": "images/products/386.webp",
  "rating": {
    "stars": 4.5,
    "count": 1278
  },
  "keywords": [
    "vtg",
    "elizabeth",
    "taylor",
    "white",
    "diamonds",
    "collection",
    "watch",
    "earrings"
  ]
},
  {
  "id": "vintage-danbury-mint-diamond-watch",
  "name": "Vintage Danbury Mint Diamond 14K Gold-Plated Watch",
  "priceCents": 8990,
  "image": "images/products/385.webp",
  "rating": {
    "stars": 4.5,
    "count": 1456
  },
  "keywords": [
    "vintage",
    "danbury",
    "mint",
    "diamond",
    "14k",
    "gold-plated",
    "watch"
  ]
},
  {
  "id": "vtg-elizabeth-taylor-white-diamonds",
  "name": "VTG Elizabeth Taylor White Diamonds Watch & Earrings",
  "priceCents": 1489,
  "image": "images/products/384.webp",
  "rating": {
    "stars": 4.5,
    "count": 1321
  },
  "keywords": [
    "vtg",
    "elizabeth",
    "taylor",
    "white",
    "diamonds",
    "watch",
    "earrings"
  ]
},
  {
  "id": "fashion-solid-steel-diamond-watch",
  "name": "Fashion Solid Steel Diamond Watch",
  "priceCents": 2398,
  "image": "images/products/383.webp",
  "rating": {
    "stars": 4.0,
    "count": 1678
  },
  "keywords": [
    "fashion",
    "solid",
    "steel",
    "diamond",
    "watch"
  ]
},
  {
  "id": "gold-tone-ladies-diamond-watch",
  "name": "Gold Tone Ladies Watch with Diamond Bracelet",
  "priceCents": 11599,
  "image": "images/products/382.webp",
  "rating": {
    "stars": 4.5,
    "count": 1423
  },
  "keywords": [
    "gold",
    "tone",
    "ladies",
    "watch",
    "diamond",
    "bracelet"
  ]
},
  {
  "id": "diamond-inlaid-quartz-watch-jewelry",
  "name": "Diamond Inlaid Quartz Watch & 3-Piece Jewelry Set",
  "priceCents": 599,
  "image": "images/products/381.webp",
  "rating": {
    "stars": 4.0,
    "count": 1567
  },
  "keywords": [
    "diamond",
    "inlaid",
    "quartz",
    "watch",
    "jewelry",
    "3-piece",
    "set"
  ]
},
  {
  "id": "mens-18k-gold-iced-out-watch",
  "name": "Men's 18K Gold Iced-Out Baguette CZ Diamond Watch",
  "priceCents": 2590,
  "image": "images/products/380.webp",
  "rating": {
    "stars": 4.5,
    "count": 1789
  },
  "keywords": [
    "mens",
    "18k",
    "gold",
    "iced-out",
    "baguette",
    "cz",
    "diamond",
    "watch"
  ]
},
  {
  "id": "gold-tone-diamond-watch-clover-set",
  "name": "Gold Tone Diamond Quartz Watch & Clover Jewelry Set",
  "priceCents": 2099,
  "image": "images/products/379.webp",
  "rating": {
    "stars": 4.0,
    "count": 1345
  },
  "keywords": [
    "gold",
    "tone",
    "diamond",
    "quartz",
    "watch",
    "clover",
    "jewelry",
    "set"
  ]
},
  {
  "id": "elegant-womens-black-ceramic",
  "name": "Elegant Women's Black Ceramic Diamond Watch",
  "priceCents": 9899,
  "image": "images/products/378.webp",
  "rating": {
    "stars": 4.0,
    "count": 1234
  },
  "keywords": [
    "elegant",
    "womens",
    "black",
    "ceramic",
    "diamond",
    "watch"
  ]
},
  {
  "id": "movado-amorosa-ladies",
  "name": "Movado Amorosa Ladies Diamond Watch",
  "priceCents": 26999,
  "image": "images/products/377.webp",
  "rating": {
    "stars": 4.5,
    "count": 1452
  },
  "keywords": [
    "movado",
    "amorosa",
    "ladies",
    "diamond",
    "watch"
  ]
},
  {
  id: "apple-iphone-15-pro-max-256gb-unlocked-black-titanium",
  name: "iPhone 15 Pro Max 256GB Black",
  priceCents: 49234,
  image: "images/products/376.webp",
  rating: {
    stars: 5.0,
    count: 1320
  },
  keywords: [
    "apple",
    "iphone",
    "15 pro max",
    "256gb",
    "black",
    "titanium",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-15-pro-1tb-unlocked-blue-titanium",
  name: "iPhone 15 Pro 1TB Blue",
  priceCents: 49107,
  image: "images/products/375.webp",
  rating: {
    stars: 5.0,
    count: 1456
  },
  keywords: [
    "apple",
    "iphone",
    "15 pro",
    "1tb",
    "blue",
    "titanium",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-15-128gb-unlocked-black",
  name: "iPhone 15 128GB Black",
  priceCents: 30898,
  image: "images/products/374.webp",
  rating: {
    stars: 4.5,
    count: 1324
  },
  keywords: [
    "apple",
    "iphone",
    "15",
    "128gb",
    "black",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-15-pro-max-256gb-unlocked-blue-titanium",
  name: "iPhone 15 Pro Max 256GB Blue Titanium",
  priceCents: 50989,
  image: "images/products/373.webp",
  rating: {
    stars: 5.0,
    count: 2145
  },
  keywords: [
    "apple",
    "iphone",
    "15 pro max",
    "256gb",
    "blue titanium",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-15-128gb-unlocked-blue",
  name: "iPhone 15 128GB Blue",
  priceCents: 28990,
  image: "images/products/372.webp",
  rating: {
    stars: 4.5,
    count: 1578
  },
  keywords: [
    "apple",
    "iphone",
    "15",
    "128gb",
    "blue",
    "unlocked",
    "smartphone",
    "ios"
  ]
},

  {
  id: "apple-iphone-6s-plus-16-32-64-128gb-unlocked",
  name: "iPhone 6s Plus 16-128GB",
  priceCents: 7298,
  image: "images/products/371.webp",
  rating: {
    stars: 4.5,
    count: 1423
  },
  keywords: [
    "apple",
    "iphone",
    "6s plus",
    "16gb",
    "32gb",
    "64gb",
    "128gb",
    "unlocked",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-5s-16-32-64gb-unlocked",
  name: "iPhone 5s 16/32/64GB",
  priceCents: 1982,
  image: "images/products/370.webp",
  rating: {
    stars: 4.0,
    count: 1387
  },
  keywords: [
    "apple",
    "iphone",
    "5s",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-x-256gb-space-gray-unlocked",
  name: "iPhone X 256GB",
  priceCents: 9990,
  image: "images/products/369.webp",
  rating: {
    stars: 4.5,
    count: 1250
  },
  keywords: [
    "apple",
    "iphone",
    "x",
    "256gb",
    "space gray",
    "unlocked",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-12-pro-max-128gb-256gb-512gb-unlocked",
  name: "iPhone 12 Pro Max 128/256/512GB",
  priceCents: 21089,
  image: "images/products/368.webp",
  rating: {
    stars: 4.5,
    count: 1450
  },
  keywords: [
    "apple",
    "iphone",
    "12 pro max",
    "128gb",
    "256gb",
    "512gb",
    "unlocked",
    "smartphone",
    "very good condition"
  ]
},
  {
  id: "apple-iphone-11-pro-64gb-256gb-unlocked",
  name: "iPhone 11 Pro 64/256GB",
  priceCents: 9899,
  image: "images/products/367.webp",
  rating: {
    stars: 4.5,
    count: 1320
  },
  keywords: [
    "apple",
    "iphone",
    "11 pro",
    "64gb",
    "256gb",
    "unlocked",
    "smartphone",
    "good condition"
  ]
},
  {
  id: "apple-iphone-5s-16gb-tested-unlocked",
  name: "iPhone 5s 16GB",
  priceCents: 3099,
  image: "images/products/366.webp",
  rating: {
    stars: 4.5,
    count: 1450
  },
  keywords: [
    "apple",
    "iphone",
    "5s",
    "16gb",
    "unlocked",
    "tested",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-5s-16gb-no-fingerprint",
  name: "iPhone 5s 16GB",
  priceCents: 2088,
  image: "images/products/365.webp",
  rating: {
    stars: 4.0,
    count: 1120
  },
  keywords: [
    "apple",
    "iphone",
    "5s",
    "16gb",
    "unlocked",
    "4g",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-11-pro-max-64-256gb-unlocked",
  name: "iPhone 11 Pro Max 64/256GB",
  priceCents: 11089,
  image: "images/products/364.webp",
  rating: {
    stars: 4.5,
    count: 1324
  },
  keywords: [
    "apple",
    "iphone",
    "11 pro max",
    "64gb",
    "256gb",
    "unlocked",
    "great",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-11-pro-64-256gb-unlocked",
  name: "iPhone 11 Pro 64/256GB",
  priceCents: 12099,
  image: "images/products/363.webp",
  rating: {
    stars: 4.5,
    count: 1456
  },
  keywords: [
    "apple",
    "iphone",
    "11 pro",
    "64gb",
    "256gb",
    "unlocked",
    "good",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-xs-max-64-256gb-unlocked",
  name: "iPhone XS Max 64/256GB",
  priceCents: 11088,
  image: "images/products/362.webp",
  rating: {
    stars: 4.5,
    count: 2145
  },
  keywords: [
    "apple",
    "iphone",
    "xs max",
    "64gb",
    "256gb",
    "unlocked",
    "very good condition",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s-16-32-64gb-unlocked",
  name: "Apple iPhone 5s 16/32/64GB",
  priceCents: 3099,
  image: "images/products/361.webp",
  rating: {
    stars: 4.0,
    count: 1789
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "4g",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-12-64-128-256gb-multi",
  name: "Apple iPhone 12 64/128/256GB - Multi",
  priceCents: 14500,
  image: "images/products/360.webp",
  rating: {
    stars: 4.5,
    count: 1523
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 12",
    "64gb",
    "128gb",
    "256gb",
    "multi",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-16e-128gb-white",
  name: "Apple iPhone 16e 128GB - White",
  priceCents: 32088,
  image: "images/products/359.webp",
  rating: {
    stars: 4.5,
    count: 2145
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 16e",
    "128gb",
    "white",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-12-pro-128-256gb-face-id",
  name: "Apple iPhone 12 Pro 128/256GB - Face ID",
  priceCents: 19999,
  image: "images/products/358.webp",
  rating: {
    stars: 4.5,
    count: 1578
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 12 pro",
    "128gb",
    "256gb",
    "face id",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-6-dysfunctional",
  name: "Apple iPhone 6 16/64GB - Dysfunctional",
  priceCents: 1499,
  image: "images/products/357.webp",
  rating: {
    stars: 4.0,
    count: 1045
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 6",
    "16gb",
    "64gb",
    "dysfunctional",
    "smartphone",
    "unlocked"
  ]
},
  {
  id: "apple-iphone-4s-16gb",
  name: "Apple iPhone 4s 16GB",
  priceCents: 2900,
  image: "images/products/356.webp",
  rating: {
    stars: 4.0,
    count: 1124
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 4s",
    "16gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-7-plus-32gb",
  name: "Apple iPhone 7 Plus 32GB",
  priceCents: 9089,
  image: "images/products/355.webp",
  rating: {
    stars: 4.5,
    count: 1523
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 7 plus",
    "32gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-xs-max-64gb",
  name: "Apple iPhone XS Max 64GB",
  priceCents: 11099,
  image: "images/products/354.webp",
  rating: {
    stars: 4.5,
    count: 2345
  },
  keywords: [
    "apple",
    "iphone",
    "iphone xs max",
    "64gb",
    "unlocked",
    "face id",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s-16gb",
  name: "Apple iPhone 5s 16GB",
  priceCents: 2099,
  image: "images/products/353.webp",
  rating: {
    stars: 4.0,
    count: 1589
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "16gb",
    "unlocked",
    "factory unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-xr-64gb",
  name: "Apple iPhone XR 64GB",
  priceCents: 10089,
  image: "images/products/352.webp",
  rating: {
    stars: 4.5,
    count: 1432
  },
  keywords: [
    "apple",
    "iphone",
    "iphone xr",
    "64gb",
    "unlocked",
    "excellent condition",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-13-128gb",
  name: "Apple iPhone 13 128GB",
  priceCents: 22099,
  image: "images/products/351.webp",
  rating: {
    stars: 4.5,
    count: 1789
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 13",
    "128gb",
    "unlocked",
    "excellent condition",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-16-128gb-tmobile",
  name: "Apple iPhone 16 128GB",
  priceCents: 32099,
  image: "images/products/350.webp",
  rating: {
    stars: 4.5,
    count: 1543
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 16",
    "128gb",
    "tmobile",
    "black",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-x-64gb-256gb",
  name: "Apple iPhone X 64/256GB",
  priceCents: 13099,
  image: "images/products/349.webp",
  rating: {
    stars: 4.5,
    count: 1423
  },
  keywords: [
    "apple",
    "iphone",
    "iphone x",
    "64gb",
    "256gb",
    "black",
    "white",
    "face id",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "samsung-galaxy-a54-128gb",
  name: "Samsung Galaxy A54 128GB",
  priceCents: 12099,
  image: "images/products/348.webp",
  rating: {
    stars: 4.5,
    count: 1567
  },
  keywords: [
    "samsung",
    "galaxy",
    "a54",
    "128gb",
    "black",
    "unlocked",
    "carrier unlocked",
    "smartphone",
    "mobile"
  ]
},
  {
  id: "samsung-galaxy-j7-crown-16gb",
  name: "Samsung Galaxy J7 Crown 16GB",
  priceCents: 4995,
  image: "images/products/347.webp",
  rating: {
    stars: 4.5,
    count: 1420
  },
  keywords: [
    "samsung",
    "galaxy",
    "j7",
    "crown",
    "16gb",
    "gsm",
    "unlocked",
    "international",
    "smartphone",
    "mobile"
  ]
},
  {
  id: "motorola-startac-338c",
  name: "Motorola Startac 338c",
  priceCents: 10099,
  image: "images/products/346.webp",
  rating: {
    stars: 4.5,
    count: 1345
  },
  keywords: [
    "motorola",
    "startac",
    "338c",
    "mobile",
    "phone",
    "flip phone",
    "classic",
    "unlocked",
    "cellphone",
    "original"
  ]
},
  {
  id: "google-pixel-7-pro-128gb",
  name: "Pixel 7 Pro 128GB",
  priceCents: 15099,
  image: "images/products/345.webp",
  rating: {
    stars: 4.5,
    count: 1720
  },
  keywords: [
    "google",
    "pixel",
    "pixel 7",
    "pixel 7 pro",
    "7 pro",
    "128gb",
    "unlocked",
    "smartphone",
    "android",
    "refurbished"
  ]
},
  {
  id: "google-pixel-7a-128gb",
  name: "Pixel 7a 128GB",
  priceCents: 19999,
  image: "images/products/344.webp",
  rating: {
    stars: 4.5,
    count: 1520
  },
  keywords: [
    "google",
    "pixel",
    "pixel 7a",
    "7a",
    "128gb",
    "256gb",
    "512gb",
    "unlocked",
    "smartphone",
    "android"
  ]
},
  {
  id: "apple-iphone-12-64gb-blue",
  name: "iPhone 12 64GB Blue",
  priceCents: 4290,
  image: "images/products/343.webp",
  rating: {
    stars: 4.5,
    count: 1320
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 12",
    "12",
    "64gb",
    "blue",
    "very good",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5-unlocked",
  name: "iPhone 5 Unlocked",
  priceCents: 3099,
  image: "images/products/342.webp",
  rating: {
    stars: 4.5,
    count: 1760
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5",
    "5",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "black",
    "white",
    "grade a",
    "ios10",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-4s-unlocked",
  name: "iPhone 4S Unlocked",
  priceCents: 2600,
  image: "images/products/341.webp",
  rating: {
    stars: 4.0,
    count: 1450
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 4s",
    "4s",
    "8gb",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "classic",
    "3.5inch",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5-5c-5s-unlocked",
  name: "iPhone 5/5C/5S Unlocked",
  priceCents: 2599,
  image: "images/products/340.webp",
  rating: {
    stars: 4.0,
    count: 1387
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5",
    "iphone 5c",
    "iphone 5s",
    "8gb",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-15-128gb-fully-unlocked",
  name: "iPhone 15 128GB Unlocked",
  priceCents: 31799,
  image: "images/products/339.webp",
  rating: {
    stars: 4.5,
    count: 1523
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 15",
    "15",
    "128gb",
    "fully unlocked",
    "very good condition",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-16-128gb-factory-unlocked",
  name: "iPhone 16 128GB Unlocked",
  priceCents: 39099,
  image: "images/products/338.webp",
  rating: {
    stars: 5.0,
    count: 1784
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 16",
    "16",
    "128gb",
    "factory unlocked",
    "att",
    "tmobile",
    "verizon",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-14-a2649-tmobile-128gb-midnight",
  name: "iPhone 14 128GB Midnight",
  priceCents: 17099,
  image: "images/products/337.webp",
  rating: {
    stars: 4.5,
    count: 1542
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 14",
    "14",
    "128gb",
    "tmobile",
    "midnight",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s-gray-silver-gold-16-32-64gb",
  name: "iPhone 5s 16/32/64GB",
  priceCents: 3099,
  image: "images/products/336.webp",
  rating: {
    stars: 4.5,
    count: 1423
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "5s",
    "16gb",
    "32gb",
    "64gb",
    "gray",
    "silver",
    "gold",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s-gray-silver-gold",
  name: "iPhone 5s Gray/Silver/Gold",
  priceCents: 2000,
  image: "images/products/335.webp",
  rating: {
    stars: 4.0,
    count: 1375
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "5s",
    "16gb",
    "32gb",
    "gray",
    "silver",
    "gold",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s-silver",
  name: "iPhone 5s Silver",
  priceCents: 2000,
  image: "images/products/334.webp",
  rating: {
    stars: 4.0,
    count: 1420
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "5s",
    "16gb",
    "32gb",
    "64gb",
    "silver",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-4s",
  name: "iPhone 4s",
  priceCents: 2199,
  image: "images/products/333.webp",
  rating: {
    stars: 4.0,
    count: 1345
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 4s",
    "4s",
    "8gb",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "black",
    "white",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-x",
  name: "iPhone X",
  priceCents: 12099,
  image: "images/products/332.webp",
  rating: {
    stars: 4.5,
    count: 1523
  },
  keywords: [
    "apple",
    "iphone",
    "iphone x",
    "64gb",
    "256gb",
    "unlocked",
    "face id",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-6s-plus",
  name: "iPhone 6S Plus",
  priceCents: 5099,
  image: "images/products/331.webp",
  rating: {
    stars: 4.5,
    count: 1845
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 6s",
    "iphone 6s plus",
    "32gb",
    "64gb",
    "128gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5-5c-5s",
  name: "iPhone 5/5C/5S",
  priceCents: 2000,
  image: "images/products/330.webp",
  rating: {
    stars: 4.0,
    count: 1520
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5",
    "iphone 5c",
    "iphone 5s",
    "8gb",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s-16gb",
  name: "iPhone 5s 16GB",
  priceCents: 2199,
  image: "images/products/329.webp",
  rating: {
    stars: 4.0,
    count: 1405
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "5s",
    "16gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-6-16gb",
  name: "iPhone 6 16GB",
  priceCents: 2399,
  image: "images/products/328.webp",
  rating: {
    stars: 4.0,
    count: 1520
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 6",
    "6",
    "16gb",
    "32gb",
    "64gb",
    "128gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-11-pro-max-64gb",
  name: "iPhone 11 Pro Max 64GB",
  priceCents: 12088,
  image: "images/products/327.webp",
  rating: {
    stars: 4.5,
    count: 1345
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 11 pro max",
    "11 pro max",
    "64gb",
    "256gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-13-128gb",
  name: "iPhone 13 128GB",
  priceCents: 21099,
  image: "images/products/326.webp",
  rating: {
    stars: 4.5,
    count: 1520
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 13",
    "13",
    "128gb",
    "fully unlocked",
    "good",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-12-mini-64gb",
  name: "iPhone 12 Mini 64GB",
  priceCents: 11099,
  image: "images/products/325.webp",
  rating: {
    stars: 4.5,
    count: 1450
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 12 mini",
    "12 mini",
    "64gb",
    "fully unlocked",
    "very good condition",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-16-128gb-pink",
  name: "iPhone 16 128GB Pink",
  priceCents: 31288,
  image: "images/products/324.webp",
  rating: {
    stars: 4.5,
    count: 1320
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 16",
    "16",
    "128gb",
    "pink",
    "tmobile",
    "smartphone",
    "ios",
    "unlocked"
  ]
},
  {
  id: "apple-iphone-11-64gb-black",
  name: "iPhone 11 64GB Black",
  priceCents: 3089,
  image: "images/products/323.webp",
  rating: {
    stars: 4.5,
    count: 1450
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 11",
    "11",
    "64gb",
    "black",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-4-4s-unlocked",
  name: "Apple iPhone 4/4s",
  priceCents: 2099,
  image: "images/products/322.webp",
  rating: {
    stars: 4.0,
    count: 1250
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 4",
    "iphone 4s",
    "4",
    "4s",
    "8gb",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-xs-max",
  name: "Apple iPhone XS Max",
  priceCents: 9390,
  image: "images/products/321.webp",
  rating: {
    stars: 4.5,
    count: 1870
  },
  keywords: [
    "apple",
    "iphone",
    "iphone xs max",
    "xs max",
    "64gb",
    "256gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},

  {
  id: "apple-iphone-5s",
  name: "Apple iPhone 5s",
  priceCents: 2000,
  image: "images/products/320.webp",
  rating: {
    stars: 4.0,
    count: 1450
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "5s",
    "16gb",
    "32gb",
    "64gb",
    "fully unlocked",
    "good condition",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-13-mini",
  name: "Apple iPhone 13 Mini",
  priceCents: 13619,
  image: "images/products/319.webp",
  rating: {
    stars: 4.5,
    count: 1789
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 13 mini",
    "13 mini",
    "128gb",
    "256gb",
    "unlocked",
    "tested",
    "excellent condition",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-5s",
  name: "Apple iPhone 5s",
  priceCents: 2088,
  image: "images/products/318.webp",
  rating: {
    stars: 4.0,
    count: 1456
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5s",
    "5s",
    "16gb",
    "32gb",
    "64gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-8",
  name: "Apple iPhone 8",
  priceCents: 6399,
  image: "images/products/317.webp",
  rating: {
    stars: 4.5,
    count: 2176
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 8",
    "8",
    "64gb",
    "128gb",
    "256gb",
    "unlocked",
    "smartphone",
    "ios"
  ]
},

  {
  id: "apple-iphone-se",
  name: "Apple iPhone SE",
  priceCents: 2099,
  image: "images/products/316.jpg",
  rating: {
    stars: 4.0,
    count: 1452
  },
  keywords: [
    "apple",
    "iphone",
    "iphone se",
    "se",
    "unlocked",
    "ios",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-5c",
  name: "Apple iPhone 5c",
  priceCents: 2599,
  image: "images/products/315.jpg",
  rating: {
    stars: 4.0,
    count: 1345
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 5c",
    "5c",
    "unlocked",
    "ios",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-se-1st-gen",
  name: "Apple iPhone SE 1st Gen",
  priceCents: 4599,
  image: "images/products/314.webp",
  rating: {
    stars: 4.0,
    count: 1420
  },
  keywords: [
    "apple",
    "iphone",
    "iphone se",
    "se",
    "1st gen",
    "16gb",
    "32gb",
    "64gb",
    "128gb",
    "unlocked",
    "ios",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-se-1st-gen",
  name: "Apple iPhone SE 1st Gen",
  priceCents: 4599,
  image: "images/products/313.webp",
  rating: {
    stars: 4.0,
    count: 1420
  },
  keywords: [
    "apple",
    "iphone",
    "iphone se",
    "se",
    "1st gen",
    "16gb",
    "32gb",
    "64gb",
    "128gb",
    "unlocked",
    "ios",
    "smartphone"
  ]
},
  {
  id: "apple-iphone-12-64gb-purple",
  name: "Apple iPhone 12 64GB - Purple",
  priceCents: 10099,
  image: "images/products/312.webp",
  rating: {
    stars: 4.5,
    count: 1324
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 12",
    "12",
    "64gb",
    "purple",
    "spectrum",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-16-128gb",
  name: "Apple iPhone 16 128GB - T-Mobile",
  priceCents: 32099,
  image: "images/products/311.webp",
  rating: {
    stars: 4.5,
    count: 1542
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 16",
    "16",
    "128gb",
    "t-mobile",
    "smartphone",
    "ios"
  ]
},
  {
  id: "apple-iphone-12-64gb-fully-unlocked-very-good-condition",
  name: "Apple iPhone 12 64GB – Fully Unlocked - VERY GOOD CONDITION - Unlocked",
  priceCents: 13099,
  image: "images/products/310.webp",
  rating: {
    stars: 4.5,
    count: 1287
  },
  keywords: [
    "apple",
    "iphone",
    "iphone 12",
    "12",
    "64gb",
    "fully unlocked",
    "very good condition",
    "unlocked",
    "smartphone",
    "ios"
  ]
},
  {
  id: "f3b4c1de-82a2-4a9c-9f71-1c72d4b842aa",
  name: "iPhone 15 Plus 128GB Pink",
  priceCents: 35099,
  image: "images/products/309.jpg",
  keywords: [
    "iphone",
    "apple",
    "smartphone",
    "ios",
    "iphone 15 plus",
    "128gb",
    "pink"
  ],
  rating: {
    stars: 5.0,
    count: 6890
  }
},
  {
  id: "c7f325fa-4a8e-4a63-ae3b-7d9f23b0c812",
  name: "iPhone 12 64GB Blue",
  priceCents: 11099,
  image: "images/products/308.jpg",
  keywords: [
    "iphone",
    "apple",
    "smartphone",
    "ios",
    "iphone 12",
    "64gb",
    "blue"
  ],
  rating: {
    stars: 4.5,
    count: 4310
  }
},
  {
  id: "8fa1c7de-52bd-44d8-9d87-6a1b8c3a91f2",
  name: "iPhone 12 64GB",
  priceCents: 12088,
  image: "images/products/307.jpg",
  keywords: [
    "iphone",
    "apple",
    "smartphone",
    "ios",
    "iphone 12",
    "64gb"
  ],
  rating: {
    stars: 4.5,
    count: 4821
  }
},
  {
  id: "b2c9d8e4-1f7a-4a6b-9c3d-2e5f7a1b6c4d",
  name: "NUU A25 Phone",
  priceCents: 11588,
  image: "images/products/306.webp",
  keywords: [
    "smartphone",
    "android",
    "NUU A25",
    "AMOLED",
    "120Hz",
    "6.7 inch",
    "gaming",
    "dual SIM",
    "6GB RAM",
    "LTE",
    "Helio G99"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "f1a9d4b2-7c3e-4d5a-8b1f-3e7c6a9d2b5f",
  name: "I25 Ultra Smartphone",
  priceCents: 13088,
  image: "images/products/305.webp",
  keywords: [
    "smartphone",
    "android",
    "i25 ultra",
    "16GB RAM",
    "512GB storage",
    "6.99 inch",
    "FHD+ display",
    "7000mAh battery",
    "dual camera",
    "108MP",
    "68MP"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "d2e7b5f1-6c3a-4a9b-8d1e-2f6c7a9b4e5f",
  name: "10-Inch Tablet",
  priceCents: 7099,
  image: "images/products/304.webp",
  keywords: [
    "tablet",
    "android",
    "10 inch",
    "24GB RAM",
    "128GB storage",
    "1TB expandable",
    "octa-core",
    "HD touchscreen",
    "dual camera",
    "5MP",
    "8MP"
  ],
  rating: {
    stars: 4.5,
    count: 1200
  }
},
  {
  id: "c1f7a4d2-9b3e-4f6a-8d2c-7e1a5b9f0c4d",
  name: "16PROMA X 5G",
  priceCents: 14400,
  image: "images/products/303.webp",
  keywords: [
    "16PROMA X",
    "android",
    "smartphone",
    "5G",
    "16GB RAM",
    "512GB storage",
    "dual SIM",
    "68MP camera",
    "108MP camera",
    "6.99 inch display",
    "unlocked"
  ],
  rating: {
    stars: 4.5,
    count: 1800
  }
},

  {
  id: "b9d3f6a1-7e4c-4d2a-8f1b-3c5e7a9d2f8b",
  name: "K70 5G",
  priceCents: 9899,
  image: "images/products/302.webp",
  keywords: [
    "k70",
    "android",
    "smartphone",
    "5G",
    "8GB RAM",
    "256GB storage",
    "dual SIM",
    "24MP camera",
    "50MP camera",
    "purple",
    "unlocked"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "f7b2d8a4-6c3f-4e1a-9d2b-8f5a7c1b9e2d",
  name: "Moto G 5G",
  priceCents: 10200,
  image: "images/products/301.webp",
  keywords: [
    "motorola",
    "android",
    "smartphone",
    "5G",
    "4GB RAM",
    "128GB storage",
    "dual SIM",
    "50MP camera",
    "sage green",
    "unlocked",
    "US model"
  ],
  rating: {
    stars: 4.5,
    count: 1200
  }
},
  {
  id: "d5a1c3e7-4f6b-4c8e-9a2d-7f5b1c9e2a3f",
  name: "Galaxy A16 4G",
  priceCents: 9863,
  image: "images/products/300.webp",
  keywords: [
    "samsung",
    "android",
    "smartphone",
    "4G LTE",
    "128GB storage",
    "4GB RAM",
    "dual SIM",
    "50MP camera",
    "black",
    "SM-A165F",
    "international",
    "case bundle"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "c3e9b5f2-7d4a-4a9c-8f1e-7b6c2d4e5f6a",
  name: "Spark10Pro Phone",
  priceCents: 3000,
  image: "images/products/299.webp",
  keywords: [
    "android",
    "smartphone",
    "5 inch screen",
    "HD display",
    "3000mAh battery",
    "16GB storage",
    "expandable storage",
    "dual SIM",
    "WiFi",
    "Bluetooth",
    "face ID",
    "3G",
    "black"
  ],
  rating: {
    stars: 4.0,
    count: 1200
  }
},
  {
  id: "b2d7f3a1-4c6e-4f8b-9a3d-6e7f1b2c4d5e",
  name: "Android 14 Phone",
  priceCents: 11099,
  image: "images/products/298.webp",
  keywords: [
    "android",
    "smartphone",
    "16GB RAM",
    "512GB storage",
    "48MP camera",
    "108MP camera",
    "zoom camera",
    "6800mAh battery",
    "6.8 inch screen",
    "HD display",
    "face ID",
    "fingerprint",
    "GPS",
    "unlocked",
    "gray"
  ],
  rating: {
    stars: 4.5,
    count: 1400
  }
},
  {
  id: "a1c9f2d4-7b3e-4f8a-9c2b-5d6f7e1a8b2c",
  name: "Moto G Stylus 5G",
  priceCents: 12099,
  image: "images/products/297.webp",
  keywords: [
    "Motorola",
    "Moto G Stylus",
    "5G",
    "android",
    "smartphone",
    "8GB RAM",
    "256GB storage",
    "50MP camera",
    "unlocked",
    "US version",
    "Caramel Latte"
  ],
  rating: {
    stars: 4.5,
    count: 1800
  }
},
  {
  id: "f2b8d7e1-6a4c-4f9d-8c3b-2e7f1a5b6c9d",
  name: "BLU G35",
  priceCents: 3099,
  image: "images/products/296.webp",
  keywords: [
    "BLU G35",
    "android",
    "smartphone",
    "6.5-inch",
    "HD+ display",
    "dual camera",
    "8MP",
    "selfie",
    "32GB",
    "3GB RAM",
    "unlocked",
    "US version",
    "grey"
  ],
  rating: {
    stars: 4.0,
    count: 1500
  }
},
  {
  id: "d1a7c5b2-3f8e-4b9c-9d2e-1f6a4b7c8e5f",
  name: "A3 4G",
  priceCents: 4299,
  image: "images/products/295.webp",
  keywords: [
    "android",
    "A3 4G",
    "smartphone",
    "4G",
    "unlocked",
    "dual SIM",
    "face ID",
    "octa-core",
    "HD+ display",
    "gold",
    "cheap",
    "13MP",
    "Android 12"
  ],
  rating: {
    stars: 4.0,
    count: 1500
  }
},
  {
  id: "c9d7f2a1-4b6e-4f8c-9a3d-1e7b2f5c8d9a",
  name: "Google Pixel 9a",
  priceCents: 35099,
  image: "images/products/294.webp",
  keywords: [
    "google",
    "pixel 9a",
    "android",
    "smartphone",
    "gemini",
    "unlocked",
    "camera",
    "AI",
    "photo editing",
    "battery",
    "security",
    "obsidian",
    "128GB"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "f3b2d8e7-9c1a-4f6b-8d5a-2e7c1f4b6a9d",
  name: "Crisolitic X24 Ultra",
  priceCents: 12098,
  image: "images/products/293.webp",
  keywords: [
    "crisolitic",
    "x24 ultra",
    "android",
    "5G",
    "smartphone",
    "8GB",
    "256GB",
    "128GB",
    "dual sim",
    "camera",
    "48MP",
    "108MP",
    "fast processor",
    "battery",
    "dark green"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "d2a9f7c1-5b3e-4f8d-9a2c-7e1b3f6d4a5e",
  name: "Galaxy Z Fold7",
  priceCents: 80099,
  image: "images/products/292.webp",
  keywords: [
    "samsung",
    "galaxy",
    "z fold7",
    "android",
    "512GB",
    "ai smartphone",
    "unlocked",
    "large screen",
    "long battery",
    "jetblack",
    "2025"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "c1f8d2e3-6a7b-4f2c-9d8e-3b4a7f1e2c5d",
  name: "Foxion Phone",
  priceCents: 6999,
  image: "images/products/291.webp",
  keywords: [
    "foxion",
    "android",
    "smartphone",
    "6.56 inch",
    "90Hz",
    "8GB RAM",
    "64GB storage",
    "4000mAh",
    "octa-core",
    "face ID",
    "4G",
    "dual sim",
    "unlocked",
    "green"
  ],
  rating: {
    stars: 4.0,
    count: 1250
  }
},
  {
  id: "b9e2c4d1-5f7a-4c3d-9b8f-2a1d7e5c9b3f",
  name: "DOOGEE Note 59 Pro",
  priceCents: 14099,
  image: "images/products/290.webp",
  keywords: [
    "doogee",
    "note 59 pro",
    "smartphone",
    "android 15",
    "5G",
    "cell phone",
    "6.75 inch",
    "hd+",
    "120hz",
    "32GB",
    "256GB",
    "expandable",
    "2TB",
    "6250mAh",
    "dual sim",
    "16MP",
    "8MP"
  ],
  rating: {
    stars: 4.5,
    count: 1450
  }
},
  {
  id: "f7c9d3b1-4e6a-4b9f-8a2e-1d3f6b7c9a2e",
  name: "NUU A25",
  priceCents: 11099,
  image: "images/products/289.webp",
  keywords: [
    "nuu",
    "a25",
    "smartphone",
    "android",
    "amoled",
    "120hz",
    "6.7 inch",
    "t-mobile",
    "att",
    "cricket",
    "mint",
    "ultra",
    "metro",
    "gaming",
    "octa-core",
    "helio g99",
    "4G",
    "LTE",
    "dual sim",
    "6GB RAM"
  ],
  rating: {
    stars: 4.5,
    count: 1320
  }
},


  {
  id: "d4b7e6f1-9c3a-4f5d-b8e2-1a7c9d2e6f34",
  name: "TCL 60 XE NXTPAPER",
  priceCents: 12719,
  image: "images/products/288.webp",
  keywords: [
    "tcl",
    "60 xe",
    "nxtpaper",
    "smartphone",
    "android",
    "5g",
    "unlocked",
    "8GB RAM",
    "256GB storage",
    "6.8 inch",
    "120Hz display",
    "AI"
  ],
  rating: {
    stars: 4.5,
    count: 1350
  }
},
  {
  id: "f1a9c3b2-7d5e-4f8a-9b1c-2d6f8a4e7c91",
  name: "UMIDIGI G9T",
  priceCents: 8890,
  image: "images/products/287.webp",
  keywords: [
    "umidigi",
    "g9t",
    "smartphone",
    "android 14",
    "6.75 inch",
    "90Hz display",
    "5000mAh battery",
    "18W fast charge",
    "8GB RAM",
    "128GB storage",
    "1TB expandable",
    "unlocked"
  ],
  rating: {
    stars: 4.5,
    count: 1700
  }
},
  {
  id: "d7b3f2e9-1c5a-4b8d-9e2f-6a4c7f3b9d12",
  name: "UMIDIGI G9A",
  priceCents: 5099,
  image: "images/products/286.webp",
  keywords: [
    "umidigi",
    "g9a",
    "smartphone",
    "android 14",
    "6.75 inch",
    "90Hz display",
    "8GB RAM",
    "64GB storage",
    "2TB expandable",
    "octa-core",
    "unlocked"
  ],
  rating: {
    stars: 4.0,
    count: 1500
  }
},
  {
  id: "8f6a2c4d-5b7e-4a1d-9f3b-6c8d2e7f0145",
  name: "Moto G Play 2024",
  priceCents: 8099,
  image: "images/products/285.webp",
  keywords: [
    "motorola",
    "moto g play",
    "smartphone",
    "android",
    "5G",
    "4GB RAM",
    "64GB storage",
    "50MP camera",
    "unlocked",
    "sapphire blue"
  ],
  rating: {
    stars: 4.0,
    count: 1200
  }
},
  {
  id: "7d5e9b3f-4a6c-4f8b-9a2d-5e7f8a9c0123",
  name: "Android A15 ProMax",
  priceCents: 12099,
  image: "images/products/284.webp",
  keywords: [
    "android",
    "a15 promax",
    "smartphone",
    "5G",
    "dual SIM",
    "HD display",
    "16GB RAM",
    "512GB storage",
    "48MP camera",
    "108MP camera",
    "large battery"
  ],
  rating: {
    stars: 4.5,
    count: 1600
  }
},
  {
  id: "6c4f8a2d-3b5e-4f7c-9a1b-3d5e6f7a8912",
  name: "Samsung Galaxy A16",
  priceCents: 11088,
  image: "images/products/283.webp",
  keywords: [
    "samsung",
    "galaxy a16",
    "android",
    "smartphone",
    "5G",
    "unlocked",
    "AMOLED display",
    "fast charging",
    "durable",
    "mobile phone"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "5b3c7d9e-1f2a-4e6b-8c9d-2f4a56781234",
  name: "X25 Ultra Phone",
  priceCents: 12099,
  image: "images/products/282.webp",
  keywords: [
    "x25 ultra",
    "android",
    "smartphone",
    "5G",
    "unlocked",
    "8GB RAM",
    "256GB storage",
    "128GB TF",
    "108MP camera",
    "6.9 inch display"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  {
  id: "4a2f9b1c-8d5e-4c3f-b9a7-1f2e34567890",
  name: "Motorola Moto G Power 5G",
  priceCents: 11099,
  image: "images/products/281.webp",
  keywords: [
    "motorola",
    "moto g power",
    "5G",
    "android",
    "smartphone",
    "unlocked",
    "50MP camera",
    "midnight blue",
    "US version",
    "128GB storage"
  ],
  rating: {
    stars: 4.5,
    count: 1500
  }
},
  
  {
  id: "380b7c9d-2f3e-4a5b-8d6c-7e9f01234567",
  name: "Samsung Galaxy A16 5G",
  priceCents: 10099,
  image: "images/products/280.webp",
  keywords: [
    "samsung",
    "galaxy a16",
    "5G",
    "android",
    "smartphone",
    "unlocked",
    "AMOLED display",
    "large screen",
    "durable",
    "fast charging"
  ],
  rating: {
    stars: 4.5,
    count: 1300
  }
},
  {
  id: "279a6b8c-1d2e-3f4a-5b6c-7d8e9f012345",
  name: "UMIDIGI Note 100",
  priceCents: 9599,
  image: "images/products/279.webp",
  keywords: [
    "umidigi",
    "note 100",
    "android",
    "phone",
    "unlocked",
    "8-core",
    "12GB RAM",
    "128GB storage",
    "1TB expandable",
    "6.8-inch display",
    "50MP camera",
    "5000mAh",
    "fast charge",
    "dual SIM",
    "NFC",
    "face ID",
    "fingerprint",
    "GPS"
  ],
  rating: {
    stars: 4.5,
    count: 1250
  }
},
  {
  id: "278d6a7b-9c1e-0f2a-3b4c-5d6e7f8a9012",
  name: "Samsung Galaxy S25 Edge",
  priceCents: 52999,
  image: "images/products/278.webp",
  keywords: [
    "samsung",
    "galaxy",
    "s25",
    "edge",
    "android",
    "phone",
    "512GB",
    "smartphone",
    "unlocked",
    "proscaler display",
    "fast processor"
  ],
  rating: {
    stars: 4.5,
    count: 1345
  }
},
  {
  id: "277c5f6a-8b9c-0d1e-2f3a-4b5c6d7e8f90",
  name: "MacBook Pro 14-inch",
  priceCents: 30000,
  image: "images/products/277.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "14-inch",
    "m1 pro",
    "32GB",
    "512GB",
    "space gray"
  ],
  rating: {
    stars: 4.5,
    count: 1452
  }
},
  {
  id: "276c4e5f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
  name: "MacBook Pro 13-inch",
  priceCents: 29099,
  image: "images/products/276.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "13-inch",
    "m2",
    "8GB",
    "256GB",
    "space gray"
  ],
  rating: {
    stars: 4.5,
    count: 1387
  }
},
  {
  id: "275b3d4e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
  name: "MacBook Air 13-inch",
  priceCents: 30000,
  image: "images/products/275.webp",
  keywords: [
    "macbook",
    "air",
    "apple",
    "laptop",
    "13-inch",
    "intel",
    "i5",
    "512GB",
    "space gray"
  ],
  rating: {
    stars: 4.5,
    count: 1425
  }
},
  {
  id: "274b2c3d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  name: "MacBook Air 11-inch",
  priceCents: 20937,
  image: "images/products/274.webp",
  keywords: [
    "macbook",
    "air",
    "apple",
    "laptop",
    "11-inch",
    "intel",
    "i5",
    "128GB"
  ],
  rating: {
    stars: 4.0,
    count: 1324
  }
},

  {
  id: "273a1b2c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  name: "MacBook Air M4 13-inch",
  priceCents: 50943,
  image: "images/products/273.jpg",
  keywords: [
    "macbook",
    "air",
    "apple",
    "laptop",
    "m4",
    "13-inch",
    "starlight"
  ],
  rating: {
    stars: 4.5,
    count: 1452
  }
},

  {
  id: "272b4e5f-8c9d-1a2b-3f4e-5d6c7b8a9f0e",
  name: "MacBook Air i7 13-inch",
  priceCents: 29935,
  image: "images/products/272.webp",
  keywords: [
    "macbook",
    "air",
    "apple",
    "laptop",
    "i7",
    "13-inch",
    "gold",
    "renewed"
  ],
  rating: {
    stars: 4.5,
    count: 1324
  }
},

  {
  id: "271c5d6f-7a8b-9d0e-1f2a-3b4c5d6e7f8a",
  name: "MacBook Pro i7 16-inch",
  priceCents: 30971,
  image: "images/products/271.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "i7",
    "16-inch",
    "space gray",
    "renewed"
  ],
  rating: {
    stars: 4.5,
    count: 1587
  }
},
  {
  id: "270b4d5e-6f7a-8c9d-0e1f-2a3b4c5d6e7f",
  name: "MacBook Pro i5 13-inch",
  priceCents: 20597,
  image: "images/products/270.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "i5",
    "13-inch",
    "space gray",
    "renewed"
  ],
  rating: {
    stars: 4.0,
    count: 1324
  }
},
  {
  id: "269c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
  name: "MacBook Pro M1 13-inch",
  priceCents: 38092,
  image: "images/products/269.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "m1",
    "13-inch",
    "space gray",
    "renewed"
  ],
  rating: {
    stars: 4.5,
    count: 1587
  }
},
  {
  id: "268b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
  name: "MacBook Pro i5 13-inch",
  priceCents: 32939,
  image: "images/products/268.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "intel i5",
    "13-inch",
    "space gray",
    "renewed"
  ],
  rating: {
    stars: 4.0,
    count: 1432
  }
},
  {
  id: "267a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
  name: "MacBook Pro M5 14-inch",
  priceCents: 50099,
  image: "images/products/267.webp",
  keywords: [
    "macbook",
    "pro",
    "apple",
    "laptop",
    "m5",
    "14-inch",
    "silver"
  ],
  rating: {
    stars: 4.5,
    count: 1524
  }
},

  {
  id: "apple-macbook-air-m1-13-3-8gb-128gb-space-gray-renewed",
  name: "Apple MacBook Air M1 13.3\" 8GB RAM 128GB SSD – Space Gray (Renewed)",
  priceCents: 31099,
  image: "images/products/266.webp",
  keywords: [
    "apple-macbook-air",
    "late-2020",
    "m1-chip",
    "13-3-inch",
    "8gb-ram",
    "128gb-ssd",
    "space-gray",
    "renewed"
  ],
  rating: {
    stars: 4.5,
    count: 1678
  }
},

{
  id: "2025-laptop-celeron-n150-16gb-512gb",
  name: "2025 15.6\" Laptop – Celeron N150, 16GB RAM, 512GB SSD",
  priceCents: 20934,
  image: "images/products/265.webp",
  keywords: [
      "2025-laptop",
      "laptop-computer",
      "celeron-n150",
      "16gb-ddr4",
      "512gb-ssd",
      "15-6-inch",
      "ips-1080p",
      "backlit-keyboard",
      "fingerprint",
      "win-11-pro",
      "portable-laptop",
      "work",
      "office",
      "student"
  ],
  rating: {
    stars: 4.5,
    count: 1786
  }
},

{
  id: "15-6-laptop-gold-6500y-32gb-512gb",
  name: "15.6\" Laptop – Gold 6500Y, 32GB RAM, 512GB SSD",
  priceCents: 24999,
  image: "images/products/264.webp",
  keywords: [
      "15-6-inch",
      "laptop-computer",
      "gold-6500y",
      "32gb-ram",
      "512gb-ssd",
      "1080p-fhd",
      "ips-display",
      "win11",
      "type-c",
      "hdmi",
      "usb3-2",
      "bt5-2",
      "wifi-5"
  ],
  rating: {
    stars: 4.5,
    count: 1924
  }
},

{
  id: "15-6-laptop-n5095-16gb-512gb",
  name: "15.6\" Laptop – N5095, 16GB RAM, 512GB SSD",
  priceCents: 13990,
  image: "images/products/263.webp",
  keywords: [
      "laptop-computers",
      "15-6-inch",
      "ips-1080p-screen",
      "n5095-processor",
      "4c-4t",
      "16gb-ram",
      "512gb-ssd",
      "fingerprint-recognition",
      "backlit-keyboard",
      "wifi",
      "usb-3-0",
      "webcam",
      "hdmi"
  ],
  rating: {
    stars: 4.5,
    count: 1795
  }
},

{
  id: "ugreen-vertical-laptop-stand-gray",
  name: "UGREEN Vertical Laptop Stand – Aluminum, Gray",
  priceCents: 1599,
  image: "images/products/262.webp",
  keywords: [
      "ugreen-vertical-laptop-stand",
      "desk",
      "macbook-pro",
      "macbook-air",
      "vertical-stand",
      "aluminum",
      "adjustable",
      "up-to-17-3-inch",
      "gaming-laptop",
      "gray"
  ],
  rating: {
    stars: 4.0,
    count: 1412
  }
},

{
  id: "mosiso-13-3-laptop-sleeve-black",
  name: "MOSISO 13.3-inch Laptop Sleeve Bag – Neoprene, Black",
  priceCents: 866,
  image: "images/products/261.webp",
  keywords: [
      "mosiso-laptop-case",
      "13-13.3-inch",
      "laptop-sleeve-bag",
      "macbook-air",
      "macbook-pro",
      "m1-m5",
      "hp",
      "dell",
      "asus",
      "lenovo",
      "neoprene",
      "computer-sleeve",
      "small-case",
      "black"
  ],
  rating: {
    stars: 4.0,
    count: 1365
  }
},
{
  id: "70w-usb-c-charger-macbook-ipad-6-6ft-cable",
  name: "70W USB-C Charger for MacBook & iPad – 6.6ft Cable",
  priceCents: 1799,
  image: "images/products/260.webp",
  keywords: [
    "macbook-air-charger",
    "macbook-pro-charger",
    "13-14-15-16-inch",
    "2025-2020",
    "m1-m4",
    "70w-usb-c",
    "laptop-power-adapter",
    "ipad",
    "led",
    "6-6ft-usb-c-cable",
    "original-quality"
  ],
  rating: {
    stars: 4.5,
    count: 1589
  }
},

{
  id: "100w-usb-c-charger-macbook-laptop-braided-6-6ft",
  name: "100W USB-C Charger for MacBook & Laptop – 6.6ft Braided Cable",
  priceCents: 1723,
  image: "images/products/259.webp",
  keywords: [
    "macbook-pro-charger",
    "macbook-air",
    "16-inch",
    "14-inch",
    "15-inch",
    "13-inch",
    "100w-usb-c",
    "laptop-power-adapter",
    "6-6ft-usb-c-braided-cable",
    "m1-m4",
    "2025-2019",
    "original-quality"
  ],
  rating: {
    stars: 4.5,
    count: 1627
  }
},

{
  id: "96w-usb-c-fast-charger-macbook-ipad-samsung-6-6ft",
  name: "96W USB-C Fast Charger for MacBook, iPad, Samsung – with 6.6ft Cable",
  priceCents: 1499,
  image: "images/products/258.webp",
  keywords: [
    "macbook-pro-charger",
    "96w",
    "usb-c",
    "fast-charger",
    "macbook-pro",
    "macbook-air",
    "ipad-pro",
    "samsung-galaxy",
    "type-c-device",
    "6-6ft-usbc-cable"
  ],
  rating: {
    stars: 4.5,
    count: 1548
  }
},

{
  id: "ergonomic-adjustable-laptop-stand-foldable-aluminum-black",
  name: "Ergonomic Adjustable Laptop Stand, Foldable Aluminum, 10-15.6” – Black",
  priceCents: 590,
  image: "images/products/257.webp",
  keywords: [
    "laptop-stand",
    "desk",
    "ergonomic",
    "adjustable",
    "aluminum",
    "foldable",
    "portable",
    "computer-stand",
    "macbook-air",
    "macbook-pro",
    "hp",
    "lenovo",
    "dell",
    "10-15-6-inch",
    "tablets",
    "black"
  ],
  rating: {
    stars: 4.0,
    count: 1298
  }
},

{
  id: "astaron-17-in-1-screwdriver-set-macbook-electronics",
  name: "ASTARON 17-in-1 Screwdriver Set for MacBook & Electronics",
  priceCents: 499,
  image: "images/products/256.webp",
  keywords: [
    "astaron-screwdriver-set",
    "17-in-1",
    "macbook",
    "repair-tool-kit",
    "t3-t8",
    "p2-p5",
    "ph000-ph00",
    "y00",
    "magnetic-torx-bit",
    "opening-tool",
    "laptop",
    "macbook-air",
    "macbook-pro",
    "xbox",
    "ps4"
  ],
  rating: {
    stars: 4.5,
    count: 1387
  }
},

{
  id: "15-6-amd-3020e-laptop-8gb-512gb-fhd-gray",
  name: "15.6\" AMD 3020e Laptop, 8GB RAM, 512GB SSD, FHD IPS, Gray",
  priceCents: 24199,
  image: "images/products/255.webp",
  keywords: [
    "15.6-inch",
    "laptop-computer",
    "amd-3020e",
    "8gb-ddr4",
    "512gb-ssd",
    "up-to-32gb",
    "up-to-4tb",
    "1080p-fhd",
    "ips-display",
    "type-c",
    "hdmi",
    "usb3-2",
    "bt5-2",
    "wifi-5",
    "gray"
  ],
  rating: {
    stars: 4.5,
    count: 1821
  }
},{
  id: "118w-usb-c-fast-charger-macbook-devices",
  name: "118W USB-C Fast Charger for MacBook & Devices",
  priceCents: 1542,
  image: "images/products/254.webp",
  keywords: [
    "macbook-pro-charger",
    "118w",
    "usb-c",
    "fast-charger",
    "macbook-pro",
    "macbook-air",
    "m1-m5",
    "ipad-pro",
    "samsung-galaxy",
    "charge-cable"
  ],
  rating: {
    stars: 4.5,
    count: 1532
  }
},

{
  id: "rechargeable-bluetooth-mouse-macbook-pc-black",
  name: "Rechargeable Bluetooth Mouse for MacBook & PC, Black",
  priceCents: 861,
  image: "images/products/253.webp",
  keywords: [
    "rechargeable-mouse",
    "bluetooth-5-2",
    "bt3-0",
    "type-c",
    "usb-2-4g",
    "macbook",
    "macbook-air",
    "macbook-pro",
    "ipad",
    "wireless-mouse",
    "laptop",
    "notebook",
    "pc",
    "chromebook",
    "black"
  ],
  rating: {
    stars: 4.5,
    count: 1421
  }
},

{
  id: "laptop-sleeve-case-13-3-shockproof-black",
  name: "Laptop Sleeve Case 13.3\", Shockproof Protective Bag, Black",
  priceCents: 599,
  image: "images/products/252.webp",
  keywords: [
    "laptop-sleeve-case",
    "13-3-inch",
    "shockproof",
    "protective-cover",
    "accessories-pocket",
    "portable-laptop-bag",
    "macbook-air",
    "macbook-pro-13-3",
    "macbook-pro-14",
    "black"
  ],
  rating: {
    stars: 4.0,
    count: 1378
  }
},

{
  id: "wireless-bluetooth-mouse-macbook-laptop-ipad-black",
  name: "Wireless Bluetooth Mouse for MacBook, Laptop & iPad, Dual Mode, Black",
  priceCents: 1423,
  image: "images/products/251.webp",
  keywords: [
    "mouse-macbook",
    "wireless-mouse",
    "bluetooth-mouse",
    "macbook-air",
    "macbook-pro",
    "rechargeable",
    "silent-mouse",
    "pc",
    "ipad",
    "optical-mouse",
    "dual-mode-switch",
    "bluetooth-5-2",
    "bt3-0",
    "2-4ghz-usb-type-c",
    "black"
  ],
  rating: {
    stars: 4.5,
    count: 1452
  }
},

{
  id: "mosiso-13-3-laptop-sleeve-polyester-black",
  name: "MOSISO 13.3'' Laptop Sleeve for MacBook & Laptops, Polyester, Black",
  priceCents: 861,
  image: "images/products/250.webp",
  keywords: [
    "mosiso-laptop-case",
    "13-13.3-inch",
    "laptop-sleeve",
    "macbook-air",
    "macbook-pro",
    "hp",
    "dell",
    "asus",
    "lenovo",
    "polyester",
    "vertical-sleeve",
    "pocket",
    "black"
  ],
  rating: {
    stars: 4.0,
    count: 1322
  }
},

{
  id: "ugreen-usb-c-hub-5-in-1-4k-hdmi-100w-pd",
  name: "UGREEN USB-C Hub 5-in-1, 4K HDMI, 100W PD, 3 USB-A, MacBook/iPad/iMac/Thinkpad",
  priceCents: 584,
  image: "images/products/249.webp",
  keywords: [
    "ugreen-usb-c-hub",
    "5-in-1",
    "multiport-adapter",
    "revodok-105",
    "4k-hdmi",
    "100w-power-delivery",
    "3-usb-a",
    "usb-c-dongle",
    "macbook-pro",
    "macbook-air",
    "ipad-pro",
    "imac",
    "iphone-16-pro",
    "xps",
    "thinkpad"
  ],
  rating: {
    stars: 4.5,
    count: 1427
  }
},

{
  id: "15-6-laptop-gold-6500y-32gb-1tb-fhd-ips",
  name: "Laptop 15.6\" Gold 6500Y, 32GB RAM, 1TB SSD, FHD IPS, Bluetooth, WiFi, HDMI, Type-C",
  priceCents: 32099,
  image: "images/products/248.webp",
  keywords: [
    "15.6-inch",
    "laptop-computer",
    "gold-6500y",
    "beat-n5095",
    "32gb-ram",
    "1tb-ssd",
    "1080p-fhd",
    "ips-display",
    "bluetooth",
    "wifi",
    "hdmi",
    "type-c",
    "38wh-battery"
  ],
  rating: {
    stars: 4.5,
    count: 1923
  }
},

{
  id: "15-6-laptop-gold-6500y-32gb-512gb-fhd-ips",
  name: "Laptop 15.6\" Gold 6500Y, 32GB RAM, 512GB SSD, FHD IPS, Win11, Type-C, HDMI, USB3.2, BT5.2",
  priceCents: 25962,
  image: "images/products/247.webp",
  keywords: [
    "15.6-inch",
    "laptop-computer",
    "gold-6500y",
    "32gb-ram",
    "512gb-ssd",
    "1080p-fhd",
    "ips-display",
    "win11",
    "type-c",
    "hdmi",
    "usb3-2",
    "bt5-2",
    "wifi-5"
  ],
  rating: {
    stars: 4.5,
    count: 1894
  }
},

{
  id: "14-inch-laptop-gold-6500y-16gb-256gb-fhd-ips",
  name: "Laptop 14\" Gold 6500Y, 16GB RAM, 256GB SSD, FHD IPS, Bluetooth, WiFi, HDMI, Type-C",
  priceCents: 19999,
  image: "images/products/246.webp",
  keywords: [
    "laptop-computer",
    "gold-6500y",
    "beat-n5095",
    "16gb-ram",
    "256gb-ssd",
    "14-inch-fhd",
    "ips-display",
    "bluetooth",
    "wifi",
    "hdmi",
    "type-c",
    "38wh-battery",
    "thin-portable"
  ],
  rating: {
    stars: 4.5,
    count: 1789
  }
},

{
  id: "e8d2c1b4-5f7a-4e6b-9c2d-1f3a7b8c9d2e",
  name: "2025 Gaming Laptop 15.6\" Ryzen 7 5700U, 16GB RAM, 512GB SSD, Radeon RX Vega 8, WiFi 6",
  priceCents: 36499,
  image: "images/products/245.webp",
  keywords: [
    "2025-gaming-laptop",
    "15.6-inch",
    "amd-ryzen-7-5700u",
    "8c-16t",
    "16gb-ram",
    "512gb-nvme-ssd",
    "windows-11",
    "radeon-rx-vega-8",
    "wifi-6"
  ],
  rating: {
    stars: 4.5,
    count: 1983
  }
},

{
  id: "f7c3d2b1-6a4e-4f7b-9c2a-5d1e8f3b7c9a",
  name: "USB-C 7-in-1 Multiport Hub, 4K HDMI, 100W PD, SD/TF, 3 USB-A",
  priceCents: 593,
  image: "images/products/244.webp",
  keywords: [
    "usb-c-hub",
    "7-in-1",
    "multiport-adapter",
    "4k-hdmi",
    "100w-pd",
    "sd-tf-card-reader",
    "3-usb-a",
    "usbc-docking-station",
    "macbook",
    "mac-pro",
    "mac-air",
    "dell",
    "hp",
    "asus",
    "acer",
    "type-c-laptops"
  ],
  rating: {
    stars: 4.0,
    count: 1521
  }
},

{
  id: "d4f1b8c2-7e3a-4d6b-9f2c-1a9e5d7b8f3c",
  name: "USB-C Hub Docking Station, Dual HDMI, 100W PD, Multiport Adapter",
  priceCents: 1599,
  image: "images/products/243.webp",
  keywords: [
    "usb-c-hub",
    "docking-station",
    "dual-monitor",
    "laptop",
    "macbook-air-pro",
    "dock-adapter",
    "multiport-dongle",
    "2-hdmi",
    "4k-60hz",
    "100w-pd",
    "usba-3-0",
    "usbc"
  ],
  rating: {
    stars: 4.5,
    count: 1622
  }
},

{
  id: "b8f3d1c2-5e7a-4f6b-9c8d-3a7e1d9b4f2a",
  name: "15.6\" Student Laptop, 16GB RAM, 512GB SSD, N5095, Silver",
  priceCents: 19972,
  image: "images/products/242.webp",
  keywords: [
    "15.6-inch",
    "fhd-ips",
    "student-laptop",
    "16gb-ram",
    "512gb-ssd",
    "intel-celeron-n5095",
    "backlit-keyboard",
    "fingerprint-reader",
    "win-11",
    "numpad",
    "silver"
  ],
  rating: {
    stars: 4.5,
    count: 1743
  }
},

{
  id: "a1c7d9e3-4b2f-4f6a-9b1c-6d8f3e7b5a1d",
  name: "Wireless Bluetooth Mouse, Dual Mode, Silver",
  priceCents: 394,
  image: "images/products/241.webp",
  keywords: [
    "wireless-mouse",
    "bluetooth-mouse",
    "macbook",
    "laptop",
    "computer",
    "pc",
    "rechargeable",
    "dual-mode",
    "bluetooth-5-2",
    "bt3-0",
    "2-4ghz-usb-a",
    "2-4ghz-usb-type-c",
    "silver"
  ],
  rating: {
    stars: 4.5,
    count: 1321
  }
},

{
  id: "d2f5b7a4-6e1c-4b3e-9f8a-3c7e9d1b5f2a",
  name: "15.6'' Laptop, 8GB RAM, 256GB SSD, Gold 6500Y, FHD",
  priceCents: 19992,
  image: "images/products/240.webp",
  keywords: [
    "laptop-computer",
    "8gb-ram",
    "256gb-ssd",
    "gold-6500y",
    "beat-n5095",
    "15.6-inch",
    "fhd-ips",
    "type-c",
    "hdmi",
    "usb3-2",
    "bt5-2",
    "wifi-5"
  ],
  rating: {
    stars: 4.5,
    count: 1715
  }
},

{
  id: "9c3f4b11-5ad2-4f0a-9c6a-2f7bd8ea9127",
  name: "OTVOC 15.6'' Laptop, 4GB RAM, 128GB SSD, Core CPU, FHD",
  priceCents: 9974,
  image: "images/products/239.webp",
  keywords: [
    "otvoc-laptop",
    "15-6-inch",
    "windows-11",
    "core-cpu",
    "4gb-ram",
    "128gb-ssd",
    "fhd-ips",
    "students",
    "business"
  ],
  rating: {
    stars: 4.5,
    count: 1822
  }
},

{
  id: "1f6b7c3d-9ab4-4e2b-8f32-7c1d2c448c91",
  name: "SGIN 15.6'' Laptop, 16GB RAM, 1TB SSD, Core i3, Portable",
  priceCents: 19999,
  image: "images/products/238.webp",
  keywords: [
    "sgin-laptop",
    "15-6-inch",
    "16gb-ram",
    "1024gb-ssd",
    "core-i3",
    "portable-notebook",
    "wifi-6",
    "7000mah"
  ],
  rating: {
    stars: 4.0,
    count: 1432
  }
},

{
  id: "c7e2f19b-1c42-4d72-92ab-9d73f3bb7f3a",
  name: "14'' Laptop, Gold 6500Y, 16GB RAM, 256GB SSD, FHD IPS, Portable",
  priceCents: 19999,
  image: "images/products/237.webp",
  keywords: [
    "laptop-computer",
    "gold-6500y",
    "16gb-ram",
    "256gb-ssd",
    "14-inch-fhd",
    "ips-display",
    "type-c-pd",
    "thin-portable",
    "beat-n5095"
  ],
  rating: {
    stars: 4.5,
    count: 1677
  }
},

{
  id: "f3c81e7a-91b4-4ce0-b1b7-6c2e709ac4df",
  name: "2025 15.6'' Win11 Laptop, 16GB RAM, 1TB SSD, Intel Quad-Core, FHD IPS",
  priceCents: 18983,
  image: "images/products/236.webp",
  keywords: [
    "2025-laptop",
    "15.6-windows-11",
    "16gb-ram",
    "1tb-ssd",
    "intel-quad-core",
    "1080p-ips",
    "backlit-keyboard",
    "fingerprint",
    "webcam",
    "wifi-6",
    "bt5.2"
  ],
  rating: {
    stars: 4.0,
    count: 1588
  }
},

{
  id: "b7f0e1ac-2c54-4b7e-8f1c-9d73c0fe9812",
  name: "15.6'' Laptop, AMD 3020e, 8GB RAM, 256GB SSD, FHD, Win11 Pro",
  priceCents: 19998,
  image: "images/products/235.webp",
  keywords: [
    "15.6-laptop",
    "amd-3020e",
    "8gb-ram",
    "256gb-ssd",
    "fhd-ips",
    "windows-11-pro",
    "office-2024",
    "type-c",
    "wifi-5",
    "lightweight",
    "student-laptop",
    "business-laptop"
  ],
  rating: {
    stars: 4.5,
    count: 1433
  }
},

{
  id: "f8c2d0e4-9b21-4f0b-9c53-0e7adf0cc8b1",
  name: "2025 15.6'' Laptop, 32GB RAM, 1TB SSD, Quad-Core, FHD, Win11",
  priceCents: 19982,
  image: "images/products/234.webp",
  keywords: [
    "2025-laptop",
    "15.6-inch",
    "windows-11",
    "1tb-ssd",
    "32gb-ram",
    "quad-core",
    "1080p-fhd",
    "backlit-keyboard",
    "fingerprint",
    "mini-hdmi",
    "laptop",
    "tf-card"
  ],
  rating: {
    stars: 4.0,
    count: 1822
  }
},

{
  id: "b4e1b9ac-3c0f-4f67-8d6c-9a7dbd7e51c2",
  name: "15.6\" Laptop Pentium 6500Y, 32GB RAM, 512GB SSD, Win11 Pro",
  priceCents: 17900,
  image: "images/products/233.webp",
  keywords: [
    "15.6-laptop",
    "32gb-ram",
    "512gb-ssd",
    "pentium-gold-6500y",
    "win11-pro",
    "fhd-ips",
    "type-c",
    "pd-charging",
    "space-gray"
  ],
  rating: {
    stars: 4.5,
    count: 1433
  }
},

{
  id: "c7f92be1-4df8-4c3e-9b1e-2fa4c76e9d31",
  name: "SGIN 15.6\" Windows 11 Laptop i3, 16GB RAM, 1TB SSD",
  priceCents: 19982,
  image: "images/products/232.webp",
  keywords: [
    "sgin-laptop",
    "15.6-inch",
    "win-11",
    "16gb-ram",
    "1024gb-ssd",
    "core-i3-10100y",
    "3.9ghz",
    "backlit-keyboard",
    "wifi-6",
    "ips-fhd",
    "hdmi",
    "type-c"
  ],
  rating: {
    stars: 4.0,
    count: 1877
  }
},
{
  id: "a3e6d9f2-7bf3-4bd2-9fd8-51c828f7c5b1",
  name: "OTVOC 15.6\" Windows 11 Laptop",
  priceCents: 9999,
  image: "images/products/231.webp",
  keywords: [
    "otvoc-laptop",
    "15.6-inch",
    "windows-11",
    "core-cpu",
    "3.4ghz",
    "4gb-ram",
    "128gb-ssd",
    "2tb",
    "fhd-ips",
    "1920x1080",
    "students",
    "business"
  ],
  rating: {
    stars: 4.5,
    count: 1422
  }
},

{
  id: "f9b27c44-1d8a-4c92-b7ef-647aaf31c92e",
  name: "2025 Ryzen7 15.6\" Laptop",
  priceCents: 39984,
  image: "images/products/230.webp",
  keywords: [
    "2025-laptop",
    "amd-ryzen7",
    "8-core",
    "4.3ghz",
    "amd-radeon",
    "16gb-ddr4",
    "512gb-ssd",
    "wifi6",
    "15.6-inch",
    "ips-display",
    "type-c",
    "micro-sd",
    "webcam",
    "windows-11",
    "slim-laptop"
  ],
  rating: {
    stars: 4.0,
    count: 1874
  }
},

{
  id: "e7d3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "14.1\" Quad Core Laptop Notebook",
  priceCents: 7999,
  image: "images/products/229.webp",
  keywords: [
    "14.1-inch",
    "laptop-computer",
    "quad-core",
    "notebook",
    "windows-11",
    "6GB-DDR4",
    "256GB-SSD",
    "2.4-5G-WiFi",
    "BT4.0",
    "HDMI",
    "USB-3.0",
    "large-capacity-battery"
  ],
  rating: {
    stars: 4.5,
    count: 1642
  }
},

{
  id: "d9f3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "14\" Triple Laptop Screen Extender",
  priceCents: 21299,
  image: "images/products/228.webp",
  keywords: [
    "14-inch",
    "triple-laptop-screen-extender",
    "1080P",
    "FHD",
    "IPS",
    "ultra-slim",
    "portable",
    "dual-monitor",
    "USB-C",
    "HDMI",
    "plug-play",
    "triple-display",
    "MacOS",
    "Windows",
    "13-17.3-inch-laptops"
  ],
  rating: {
    stars: 5.0,
    count: 1723
  }
},

{
  id: "c7f3d1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "HP 14\" Laptop i3-8GB 256GB SSD",
  priceCents: 19449,
  image: "images/products/227.webp",
  keywords: [
    "hp",
    "14-inch",
    "laptop",
    "HD-display",
    "intel-core-i3-N305",
    "8GB-RAM",
    "256GB-SSD",
    "intel-UHD-graphics",
    "windows-11-home",
    "S-mode",
    "natural-silver",
    "14-ep0299nr"
  ],
  rating: {
    stars: 5.0,
    count: 1786
  }
},

{
  id: "f8d3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "2025 15.6\" Laptop 32GB RAM 1TB SSD Win11",
  priceCents: 19999,
  image: "images/products/226.webp",
  keywords: [
    "2025",
    "15.6-inch",
    "laptop",
    "windows-11",
    "1TB-SSD",
    "32GB-Dual-Channel-RAM",
    "quad-core-processor",
    "1080p-FHD-display",
    "backlit-keyboard",
    "fingerprint",
    "webcam",
    "mini-HDMI",
    "WiFi5",
    "BT5"
  ],
  rating: {
    stars: 5.0,
    count: 1875
  }
},

{
  id: "d7f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "HP Stream 14\" Laptop 16GB RAM 416GB Storage N150",
  priceCents: 19900,
  image: "images/products/225.webp",
  keywords: [
    "hp-stream",
    "14-inch",
    "HD-BrightView",
    "laptop",
    "intel-processor-N150",
    "16GB-RAM",
    "416GB-storage",
    "128GB-eMMC",
    "288GB-docking-station",
    "intel-UHD-graphics",
    "720p-camera",
    "Wi-Fi",
    "office-365",
    "win-11-s",
    "gold"
  ],
  rating: {
    stars: 5.0,
    count: 1804
  }
},

{
  id: "c9f3d1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "AOC 15.6'' Laptop 16GB RAM 512GB SSD N95",
  priceCents: 24199,
  image: "images/products/224.webp",
  keywords: [
    "aoc",
    "2025-laptop",
    "15.6-inch",
    "FHD-screen",
    "laptop-computer",
    "work-laptops",
    "intel-N95",
    "16GB-RAM",
    "512GB-SSD",
    "windows-11",
    "light",
    "thin",
    "metal-shell",
    "webcam",
    "Type-C",
    "USB-3.2"
  ],
  rating: {
    stars: 5.0,
    count: 1901
  }
},

{
  id: "e6f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "SGIN 15.6'' Laptop 16GB RAM 1TB SSD N5100",
  priceCents: 23498,
  image: "images/products/223.webp",
  keywords: [
    "sgin",
    "15.6-inch",
    "laptop",
    "computer",
    "windows-11",
    "16GB-RAM",
    "1024GB-SSD",
    "celeron-N5100",
    "WiFi-6",
    "IPS",
    "FHD",
    "180-degree-viewing",
    "53.2WH-battery",
    "HDMI",
    "cooling-fan",
    "business",
    "students"
  ],
  rating: {
    stars: 5.0,
    count: 1884
  }
},

{
  id: "f9d3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "2025 15.6'' Laptop 16GB RAM 512GB SSD N95 Pro",
  priceCents: 21072,
  image: "images/products/222.webp",
  keywords: [
    "2025",
    "laptop",
    "15.6-inch",
    "IPS",
    "windows-11-pro",
    "quad-core-N95",
    "16GB-DDR4",
    "512GB-SSD",
    "metal-shell",
    "BT5.0",
    "5G-WiFi",
    "USB3.2",
    "Type-C",
    "webcam",
    "38Wh-battery"
  ],
  rating: {
    stars: 5.0,
    count: 1872
  }
},

{
  id: "d8f3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "2025 17.3'' Laptop 16GB RAM 512GB SSD N95",
  priceCents: 20099,
  image: "images/products/221.webp",
  keywords: [
    "2025",
    "new-laptop",
    "17.3-inch",
    "FHD-display",
    "quad-core",
    "12th-alder-lake-N95",
    "16GB-RAM",
    "512GB-ROM",
    "traditional-laptop",
    "computer",
    "6000Mah-battery",
    "silver"
  ],
  rating: {
    stars: 5.0,
    count: 1854
  }
},
{
  id: "e9f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Naclud 15.6'' Laptop 16GB RAM 1TB SSD i3",
  priceCents: 50099,
  image: "images/products/220.webp",
  keywords: [
    "naclud",
    "15.6-inch",
    "laptop",
    "computer",
    "windows-11",
    "16GB-RAM",
    "1024GB-SSD",
    "core-i3",
    "CPU",
    "backlit-keyboard",
    "53.2WH-battery",
    "WiFi-6",
    "IPS",
    "FHD-display",
    "180-degree-viewing",
    "HDMI",
    "Type-C"
  ],
  rating: {
    stars: 5.0,
    count: 1893
  }
},
{
  id: "c8d2f1a7-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
  name: "HP 14'' Laptop 4GB RAM 64GB SSD",
  priceCents: 9845,
  image: "images/products/219.webp",
  keywords: [
    "hp",
    "14-laptop",
    "intel-celeron-N4020",
    "4GB-RAM",
    "64GB-storage",
    "14-inch",
    "micro-edge",
    "HD-display",
    "windows-11",
    "thin",
    "portable",
    "4K-graphics",
    "microsoft-365",
    "snowflake-white"
  ],
  rating: {
    stars: 5.0,
    count: 1752
  }
},
{
  id: "d9f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d6c",
  name: "2025 17.3'' Laptop 16GB RAM 512GB SSD",
  priceCents: 23499,
  image: "images/products/218.webp",
  keywords: [
    "2025",
    "new-laptop",
    "17.3-inch",
    "FHD-display",
    "quad-core",
    "12th-alder-lake-N95",
    "16GB-RAM",
    "512GB-ROM",
    "traditional-laptop",
    "computer",
    "6000Mah-battery",
    "silver"
  ],
  rating: {
    stars: 5.0,
    count: 1847
  }
},
{
  id: "f8d3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
  name: "SGIN 15.6'' Laptop 16GB RAM 1TB SSD Win11",
  priceCents: 20056,
  image: "images/products/217.webp",
  keywords: [
    "sgin",
    "15.6-inch",
    "laptop",
    "computer",
    "windows-11",
    "16GB-RAM",
    "1024GB-SSD",
    "celeron-N5100",
    "WiFi-6",
    "IPS",
    "FHD",
    "180-degree-viewing",
    "53.2WH-battery",
    "HDMI",
    "cooling-fan",
    "business",
    "students"
  ],
  rating: {
    stars: 5.0,
    count: 1823
  }
},
{
  id: "c7d3f1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "10'' 6GB RAM Tablet with Stylus",
  priceCents: 5099,
  image: "images/products/216.avif",
  keywords: [
    "tablet",
    "10-inch",
    "6GB-RAM",
    "128GB-ROM",
    "1TB-expansion",
    "quad-core",
    "2.4G/5G",
    "WiFi",
    "IPS",
    "touch-screen",
    "stylus",
    "study",
    "chase-drama",
    "game",
    "christmas-gift",
    "pad"
  ],
  rating: {
    stars: 5.0,
    count: 1623
  }
},
{
  id: "e8f3c1a7-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "Fangzheng 15.6'' Ultra-thin Laptop",
  priceCents: 10010,
  image: "images/products/215.avif",
  keywords: [
    "fangzheng",
    "15.6-inch",
    "ultra-thin",
    "lightweight",
    "office",
    "study",
    "laptop",
    "pentium-6500Y",
    "32GB-RAM",
    "SO-DIMM-2",
    "512GB-SSD",
    "dual-screen",
    "4K",
    "high-definition",
    "stereo",
    "four-speakers",
    "TYPE-C",
    "PD",
    "fast-charging"
  ],
  rating: {
    stars: 5.0,
    count: 1784
  }
},
{
  id: "f6c3d1a7-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Zaples Baby Non-Slip Ankle Socks for Toddlers Boys & Girls",
  priceCents: 1067,
  image: "images/products/214.webp",
  keywords: [
    "zaples",
    "baby",
    "non-slip",
    "grip",
    "ankle",
    "socks",
    "non-skid",
    "soles",
    "infants",
    "toddlers",
    "kids",
    "boys",
    "girls"
  ],
  rating: {
    stars: 4.5,
    count: 1502
  }
},
{
  id: "d3f2c1a5-5b4e-4f8c-9d3b-1e7f5a3b8d4c",
  name: "UTTPLL Toddler Magic Stretch Mittens",
  priceCents: 299,
  image: "images/products/213.webp",
  keywords: [
    "uttpll",
    "toddler",
    "magic",
    "stretch",
    "gloves",
    "mittens",
    "multicolor",
    "soft",
    "knit",
    "warm",
    "kids",
    "thick",
    "cold",
    "boys",
    "girls",
    "supplies"
  ],
  rating: {
    stars: 4.0,
    count: 1275
  }
},
{
  id: "c8f2d1a7-6b4e-4f9a-8c2d-1e7f5a3b8d6c",
  name: "Fleece Lined Baby Mittens for Boys & Girls",
  priceCents: 1162,
  image: "images/products/212.webp",
  keywords: [
    "fleece",
    "lined",
    "mittens",
    "baby",
    "boys",
    "girls",
    "toddler",
    "little",
    "kids",
    "winter",
    "gloves",
    "children"
  ],
  rating: {
    stars: 4.5,
    count: 1419
  }
},
{
  id: "f5d3c1a7-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Waterproof Toddler Winter Mittens",
  priceCents: 599,
  image: "images/products/211.webp",
  keywords: [
    "toddler",
    "gloves",
    "waterproof",
    "winter",
    "mittens",
    "kids",
    "snow",
    "warm",
    "baby",
    "boys",
    "girls"
  ],
  rating: {
    stars: 4.0,
    count: 1387
  }
},
{
  id: "d4f2c1a7-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "Kids Winter Beanie & Mittens Set",
  priceCents: 990,
  image: "images/products/210.webp",
  keywords: [
    "kids",
    "winter",
    "beanie",
    "hat",
    "mittens",
    "set",
    "warm",
    "fleece",
    "baby",
    "toddler",
    "knitted",
    "gloves",
    "boys",
    "girls"
  ],
  rating: {
    stars: 4.5,
    count: 1462
  }
},
{
  id: "e7c3d1a5-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Toddlers 9-Pair Grip Socks",
  priceCents: 1234,
  image: "images/products/209.webp",
  keywords: [
    "toddlers",
    "kids",
    "grips",
    "socks",
    "warm",
    "thermal",
    "winter",
    "thick",
    "anti-slip",
    "non-skid",
    "ankle",
    "crew",
    "9-pairs",
    "baby",
    "boys",
    "girls",
    "infants"
  ],
  rating: {
    stars: 4.5,
    count: 1521
  }
},
{
  id: "c5f2d1a7-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "HonestBaby 10-Pack Wash Cloths",
  priceCents: 1499,
  image: "images/products/208.webp",
  keywords: [
    "honestbaby",
    "10-pack",
    "terry",
    "wash",
    "cloths",
    "gift-box",
    "100%-organic",
    "cotton",
    "infant",
    "baby",
    "boys",
    "girls",
    "rainbow-blues",
    "one-size"
  ],
  rating: {
    stars: 5.0,
    count: 1634
  }
},
{
  id: "f3d1c2a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Dinosaur Ear Beanie Hat",
  priceCents: 999,
  image: "images/products/207.webp",
  keywords: [
    "children",
    "dinosaur",
    "ear",
    "protection",
    "hat",
    "beanie",
    "boys",
    "girls",
    "unisex",
    "winter"
  ],
  rating: {
    stars: 4.5,
    count: 1417
  }
},
{
  id: "d7f2c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
  name: "UTTPLL Kids Glove Clips",
  priceCents: 399,
  image: "images/products/206.webp",
  keywords: [
    "uttpll",
    "glove",
    "clips",
    "stainless-steel",
    "gloves",
    "kids",
    "babys",
    "toddlers",
    "winter",
    "boys",
    "girls",
    "elastic",
    "mitten"
  ],
  rating: {
    stars: 4.0,
    count: 1284
  }
},
{
  id: "e4c3d1a7-5b4e-4f8c-9d2b-1e7f5a3b8d6c",
  name: "Toddler Non-Slip Grip Socks",
  priceCents: 999,
  image: "images/products/205.webp",
  keywords: [
    "toddler",
    "grip",
    "socks",
    "non-slip",
    "crew",
    "cute",
    "seamless",
    "cotton",
    "baby",
    "boys",
    "girls",
    "infants",
    "kids",
    "9-pairs"
  ],
  rating: {
    stars: 4.5,
    count: 1452
  }
},
{
  id: "c9d2f1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Toddler Magic Stretch Mittens",
  priceCents: 599,
  image: "images/products/204.webp",
  keywords: [
    "satinior",
    "3-pairs",
    "toddler",
    "magic",
    "stretch",
    "mittens",
    "little-girls",
    "soft",
    "knit",
    "baby",
    "boys",
    "winter",
    "knitted",
    "gloves"
  ],
  rating: {
    stars: 4.0,
    count: 1369
  }
},
{
  id: "f2d3c1a5-7b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "Resinta Toddler Shirt & Legging Set",
  priceCents: 964,
  image: "images/products/203.webp",
  keywords: [
    "resinta",
    "baby",
    "toddler",
    "boys",
    "girls",
    "cotton",
    "long-sleeve",
    "shirt",
    "legging",
    "set",
    "kids",
    "ribbed",
    "basic",
    "pant",
    "2-piece",
    "daily-life"
  ],
  rating: {
    stars: 4.5,
    count: 1487
  }
},
{
  id: "d5c3f1a7-6b4e-4f9a-8c2d-1e7f5b3a9d4c",
  name: "Baby Non-Slip Ankle Socks",
  priceCents: 499,
  image: "images/products/202.webp",
  keywords: [
    "5-pairs",
    "baby",
    "boys",
    "girls",
    "non-slip",
    "grip",
    "ankle",
    "socks",
    "infant",
    "anti-skid",
    "sticky"
  ],
  rating: {
    stars: 4.0,
    count: 1345
  }
},
{
  id: "c7f2d1a5-5b4e-4f8c-9d3b-1e7f5a3b8d6c",
  name: "Baby Beanie Knit Ski Hat with Cute Face for Girls Boys 0-7 Years",
  priceCents: 499,
  image: "images/products/201.webp",
  keywords: [
    "baby",
    "beanie",
    "knit",
    "ski",
    "hat",
    "cute",
    "face",
    "girls",
    "boys",
    "0-7-years"
  ],
  rating: {
    stars: 4.0,
    count: 1298
  }
},
{
  id: "f3d2c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Baby Fleece Mittens",
  priceCents: 399,
  image: "images/products/200.webp",
  keywords: [
    "fleece",
    "lined",
    "mittens",
    "baby",
    "boys",
    "girls",
    "toddler",
    "little",
    "kids",
    "winter",
    "warm",
    "gloves"
  ],
  rating: {
    stars: 4.0,
    count: 1327
  }
},
{
  id: "d4f1c3a7-5b6e-4f8c-9d2b-1e7f5a3b8d6c",
  name: "American Trends Toddler Mittens",
  priceCents: 399,
  image: "images/products/199.webp",
  keywords: [
    "american",
    "trends",
    "lined",
    "fleece",
    "toddler",
    "mittens",
    "winter",
    "warm",
    "gloves",
    "child",
    "ski",
    "waterproof",
    "snow",
    "baby",
    "boys",
    "girls"
  ],
  rating: {
    stars: 4.0,
    count: 1268
  }
},
{
  id: "b7d3f1c5-6a4e-4f9a-8c2d-1e5f7b3a9d4c",
  name: "FURTALK Satin Beanie",
  priceCents: 988,
  image: "images/products/198.webp",
  keywords: [
    "furtalk",
    "toddler",
    "beanie",
    "satin",
    "lined",
    "baby",
    "boys",
    "girls",
    "winter",
    "hats",
    "pom-pom",
    "beanies",
    "kids"
  ],
  rating: {
    stars: 4.5,
    count: 1492
  }
},
{
  id: "e5c2d1a7-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
  name: "Toddler Knit Sweater",
  priceCents: 299,
  image: "images/products/197.webp",
  keywords: [
    "baby",
    "girl",
    "boy",
    "toddler",
    "knit",
    "sweater",
    "cute",
    "round-neck",
    "long-sleeve",
    "blouse",
    "pullover",
    "oversized",
    "sweatshirt",
    "warm",
    "kids",
    "tops"
  ],
  rating: {
    stars: 4.0,
    count: 1289
  }
},
{
  id: "c8f3d1a7-5b4e-4f9a-8c2d-1e5f7b3a9d6c",
  name: "Toddler Swimsuit Set",
  priceCents: 1362,
  image: "images/products/196.webp",
  keywords: [
    "toddler",
    "infant",
    "baby",
    "boys",
    "swimsuit",
    "kids",
    "rash-guard",
    "one-piece",
    "newborn",
    "zipper",
    "bathing-suit",
    "swimwear",
    "hat"
  ],
  rating: {
    stars: 4.5,
    count: 1537
  }
},
{
  id: "f2d3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d6c",
  name: "Tame Baby Hair Gel",
  priceCents: 892,
  image: "images/products/195.webp",
  keywords: [
    "t-is-for-tame",
    "taming",
    "gel",
    "boys",
    "girls",
    "baby",
    "hair",
    "styling",
    "frizz",
    "control",
    "flyaways",
    "natural",
    "toddler",
    "kids",
    "hair-tamer",
    "flexible",
    "hold",
    "3.38fl-oz",
    "1-pack"
  ],
  rating: {
    stars: 4.5,
    count: 1478
  }
},
{
  id: "d3f8c1a5-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "12-Pack Toddler Grip Socks",
  priceCents: 799,
  image: "images/products/194.webp",
  keywords: [
    "jakidar",
    "12-pack",
    "baby",
    "toddler",
    "socks",
    "non-slip",
    "grip",
    "cotton",
    "crew",
    "boys",
    "girls",
    "infants",
    "kids"
  ],
  rating: {
    stars: 4.0,
    count: 1395
  }
},
{
  id: "e7c1d3f5-6b4e-4f9a-8c2d-1e5f7b3a9d6c",
  name: "Toddler Sock Shoes Non-Slip",
  priceCents: 1083,
  image: "images/products/193.webp",
  keywords: [
    "morendl",
    "toddler",
    "sock",
    "shoes",
    "baby",
    "walking",
    "infant",
    "slippers",
    "boys",
    "girls",
    "non-slip",
    "sneakers"
  ],
  rating: {
    stars: 4.5,
    count: 1541
  }
},
{
  id: "c5d3f1a7-7b4e-4f8c-9d2b-1e7f5a3b8d6c",
  name: "Baby Grip Socks 12-Pack",
  priceCents: 600,
  image: "images/products/192.webp",
  keywords: [
    "baby",
    "girls",
    "boys",
    "toddlers",
    "kids",
    "grips",
    "socks",
    "12-pairs",
    "non-slip",
    "anti-skid",
    "ankle",
    "no-show",
    "funny",
    "cotton",
    "grippers"
  ],
  rating: {
    stars: 4.5,
    count: 1427
  }
},
{
  id: "d8f2c1a5-6b4e-4f9a-8c3d-1e5b7a2f9d6c",
  name: "Toddler Fleece Joggers",
  priceCents: 853,
  image: "images/products/191.webp",
  keywords: [
    "toddler",
    "fleece",
    "lined",
    "warm",
    "joggers",
    "baby",
    "boys",
    "girls",
    "thermal",
    "winter",
    "sweatpants",
    "kids",
    "hiking",
    "pants"
  ],
  rating: {
    stars: 4.0,
    count: 1362
  }
},
{
  id: "f6c3d1a7-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
  name: "Baby Beanie 3-Pack",
  priceCents: 1342,
  image: "images/products/190.webp",
  keywords: [
    "baby",
    "beanie",
    "hat",
    "3-packs",
    "cute",
    "smiley",
    "face",
    "toddler",
    "girls",
    "boys",
    "winter",
    "kids",
    "cold-weather"
  ],
  rating: {
    stars: 4.5,
    count: 1475
  }
},
{
  id: "d2f7c1a5-6b4e-4f9a-8c3d-1e5b7a2f9d4c",
  name: "Sharpty Kids Hangers",
  priceCents: 752,
  image: "images/products/189.webp",
  keywords: [
    "sharpty",
    "kids",
    "plastic",
    "hangers",
    "children",
    "baby",
    "toddler",
    "child",
    "clothes",
    "everyday",
    "standard",
    "use",
    "boys",
    "girls",
    "closet",
    "clothing",
    "pants",
    "coats",
    "white",
    "20-pack"
  ],
  rating: {
    stars: 4.5,
    count: 1389
  }
},
{
  id: "b9d3f1c5-6a4e-4f8b-9d2c-1e7f5a3b8d4c",
  name: "Personalized Baby Blanket",
  priceCents: 2190,
  image: "images/products/188.webp",
  keywords: [
    "personalized",
    "baby",
    "blanket",
    "name",
    "handmade",
    "100%-organic",
    "cotton",
    "newborn",
    "gift",
    "custom",
    "knit",
    "boys",
    "girls",
    "kids",
    "baby-shower",
    "petal-pink",
    "petal-whispers"
  ],
  rating: {
    stars: 5.0,
    count: 1748
  }
},
{
  id: "e4b7c2d1-5f3a-4f8c-9d6b-1a3f7e5b8c2d",
  name: "ZOORON Toddler Beanie",
  priceCents: 342,
  image: "images/products/187.webp",
  keywords: [
    "zooron",
    "toddler",
    "beanie",
    "baby",
    "boys",
    "girls",
    "beanies",
    "kids",
    "winter",
    "hats",
    "children",
    "knit",
    "warm",
    "caps",
    "soft",
    "ski"
  ],
  rating: {
    stars: 4.0,
    count: 1245
  }
},
{
  id: "c8d3f1a5-7b4e-4f9a-8c2d-1e5f7b3a9d6c",
  name: "Hat Warm Fleece Lined Knit Beanies Kids Hats for 3-36 Months",
  priceCents: 499,
  image: "images/products/186.webp",
  keywords: [
    "baby",
    "winter",
    "beanie",
    "hat",
    "boys",
    "girls",
    "2-pack",
    "toddler",
    "warm",
    "fleece",
    "lined",
    "knit",
    "beanies",
    "kids",
    "3-36-months"
  ],
  rating: {
    stars: 4.0,
    count: 1312
  }
},
{
  id: "b5f2c7d1-4a6e-4f8b-9d3c-2e7a5f1b8d4c",
  name: "Hahaland 5-Language Learning Tablet for Toddlers",
  priceCents: 1214,
  image: "images/products/185.webp",
  keywords: [
    "hahaland",
    "5-language",
    "learning",
    "tablet",
    "toddlers",
    "1-3",
    "new-version",
    "educational",
    "toy",
    "sounds",
    "speech",
    "therapy",
    "early",
    "development",
    "boys",
    "girls",
    "baby",
    "toddler",
    "ages-1-2-3"
  ],
  rating: {
    stars: 5.0,
    count: 1623
  }
},
{
  id: "d8f1c3a7-6b4e-4f9a-8c2d-1e5b7a3f9d6c",
  name: "Jimonda Baby Pajamas",
  priceCents: 1842,
  image: "images/products/184.webp",
  keywords: [
    "jimonda",
    "baby",
    "boys",
    "girls",
    "pajama",
    "sets",
    "kid",
    "soft",
    "sleepwear",
    "rayon",
    "bamboo",
    "short-sleeve",
    "4-piece",
    "cool",
    "jammies",
    "18M-12Y"
  ],
  rating: {
    stars: 4.5,
    count: 1567
  }
},
{
  id: "a1d4f7c2-5b3e-4f8a-9d6c-2e1f7b5a8d3c",
  name: "Bamboo Toddler Pajamas",
  priceCents: 1599,
  image: "images/products/183.webp",
  keywords: [
    "bamboo",
    "viscose",
    "toddler",
    "pajamas",
    "boys",
    "girls",
    "baby",
    "12M-8Y",
    "pjs",
    "sets",
    "kids",
    "2pcs",
    "snug",
    "fit",
    "long-sleeve",
    "sleepwear"
  ],
  rating: {
    stars: 4.5,
    count: 1512
  }
},
{
  id: "f6c2d1a8-7b4e-4f9a-8c3d-2e5f7b1a9d4c",
  name: "Vidsel Toddler Beanie Hat",
  priceCents: 842,
  image: "images/products/182.webp",
  keywords: [
    "vidsel",
    "100%-cotton",
    "toddler",
    "beanie",
    "hats",
    "baby",
    "boys",
    "girls",
    "kids",
    "infant",
    "winter",
    "soft",
    "warm",
    "knit",
    "cuffed",
    "caps"
  ],
  rating: {
    stars: 4.5,
    count: 1398
  }
},
{
  id: "d3f7c1a5-5b4e-4f8a-9d2c-1e7b5f3a8d6c",
  name: "ANTSANG 12 Pairs Grip Socks",
  priceCents: 1354,
  image: "images/products/181.webp",
  keywords: [
    "antsang",
    "12-pairs",
    "baby",
    "girls",
    "boys",
    "toddlers",
    "kids",
    "grips",
    "socks",
    "crew",
    "cotton",
    "non-slip",
    "anti-skid"
  ],
  rating: {
    stars: 4.5,
    count: 1432
  }
},
{
  id: "c7d2f5a9-6b4e-4f8c-9d3b-1e5f7a2c8d4b",
  name: "ONESING 5 Pairs Mittens",
  priceCents: 432,
  image: "images/products/180.webp",
  keywords: [
    "onesing",
    "5-pair",
    "toddler",
    "mittens",
    "black",
    "baby",
    "winter",
    "gloves",
    "girls",
    "boys",
    "warm",
    "newborn"
  ],
  rating: {
    stars: 4.0,
    count: 1278
  }
},
{
  id: "b2e9d3f5-4c6a-4f8b-9d1c-2e7f5a3b8d4c",
  name: "Zando Baby Beanie Hat",
  priceCents: 449,
  image: "images/products/179.webp",
  keywords: [
    "zando",
    "satin",
    "lined",
    "baby",
    "girls",
    "boys",
    "toddler",
    "winter",
    "hat",
    "earflap",
    "infant",
    "newborn",
    "beanie",
    "warm",
    "knit",
    "pompom",
    "silk",
    "skull",
    "cap"
  ],
  rating: {
    stars: 4.0,
    count: 1347
  }
},
{
  id: "d5f8c2a7-6b4e-4f9a-8c3d-1e7b5a2f9c4d",
  name: "Mesh Baby Sneakers",
  priceCents: 1956,
  image: "images/products/178.webp",
  keywords: [
    "mesh",
    "toddler",
    "shoes",
    "baby",
    "sneakers",
    "girls",
    "boys",
    "sock",
    "slip-on",
    "walking",
    "breathable",
    "tennis",
    "non-slip",
    "slippers",
    "soft",
    "rubber",
    "soles",
    "6-24-months"
  ],
  rating: {
    stars: 4.5,
    count: 1619
  }
},
{
  id: "a9d3f5b1-7c2e-4f8a-9d6b-1e3f7c5a8d2e",
  name: "Bamboo Toddler Pajamas 2pcs",
  priceCents: 1752,
  image: "images/products/177.webp",
  keywords: [
    "bamboo",
    "viscose",
    "toddler",
    "pajamas",
    "boys",
    "girls",
    "baby",
    "12M-8Y",
    "pjs",
    "sets",
    "kids",
    "snug",
    "fit",
    "2pcs",
    "long-sleeve",
    "sleepwear"
  ],
  rating: {
    stars: 4.5,
    count: 1537
  }
},
{
  id: "f3c9b2d1-6a4e-4f8c-9d3b-2e7a5f1c8d4b",
  name: "Learning Tablet for Toddlers",
  priceCents: 1097,
  image: "images/products/176.webp",
  keywords: [
    "learning",
    "tablet",
    "toddlers",
    "1-3",
    "trilingual",
    "toys",
    "sounds",
    "speech",
    "therapy",
    "montessori",
    "educational",
    "1-year-old",
    "boy",
    "girl",
    "baby",
    "musical",
    "12-18-months",
    "age-1-2-3",
    "gifts"
  ],
  rating: {
    stars: 5.0,
    count: 1642
  }
},{
  id: "e1b4c7d3-5f2a-4f8b-9c6e-2a3f7d5b8c1e",
  name: "4-Pack Toddler Long Sleeve Tees",
  priceCents: 2085,
  image: "images/products/175.webp",
  keywords: [
    "4-pack",
    "boys",
    "long-sleeve",
    "shirts",
    "girls",
    "henley",
    "tees",
    "toddler",
    "baby",
    "knit",
    "casual",
    "tops",
    "kids",
    "fall",
    "clothes",
    "unisex"
  ],
  rating: {
    stars: 4.5,
    count: 1529
  }
},
{
  id: "d7f1c3a5-6b4e-4f9a-8c2d-1e5b7a3f9d6c",
  name: "3 Pack Baby Beanies",
  priceCents: 743,
  image: "images/products/174.webp",
  keywords: [
    "3-packs",
    "baby",
    "beanie",
    "cute",
    "toddler",
    "beanies",
    "kids",
    "winter",
    "hat",
    "boys",
    "girls",
    "warm",
    "knit",
    "infant",
    "0-8",
    "years"
  ],
  rating: {
    stars: 4.0,
    count: 1387
  }
},
{
  id: "c4e7b2f1-5d3a-4f8c-9b6e-2a1f7d5c8e3b",
  name: "12 Pairs Baby Socks",
  priceCents: 842,
  image: "images/products/173.webp",
  keywords: [
    "12-pairs",
    "baby",
    "girls",
    "boys",
    "toddlers",
    "kids",
    "grips",
    "socks",
    "non-slip",
    "anti-skid",
    "funny",
    "cartoon",
    "breathable",
    "cotton",
    "crew"
  ],
  rating: {
    stars: 4.5,
    count: 1456
  }
},
{
  id: "a8d3f1c5-7b2e-4f9a-8c6d-1e3f5b7a9d4c",
  name: "Baby Sock Sneakers",
  priceCents: 599,
  image: "images/products/172.webp",
  keywords: [
    "baby",
    "sock",
    "shoes",
    "walking",
    "infant",
    "non-slip",
    "breathable",
    "slippers",
    "soft",
    "rubber",
    "sole",
    "boys",
    "girls",
    "sneakers"
  ],
  rating: {
    stars: 4.0,
    count: 1321
  }
},
{
  id: "f2c9a7d3-4b6e-4f8a-9d1c-3e5b7a2f6d8c",
  name: "Interactive Baby Ball",
  priceCents: 1566,
  image: "images/products/171.webp",
  keywords: [
    "move2play",
    "hilariously",
    "interactive",
    "baby",
    "ball",
    "music",
    "sound",
    "effects",
    "first",
    "birthday",
    "gift",
    "toddler",
    "boys",
    "girls",
    "age",
    "6",
    "9",
    "12",
    "18+",
    "1",
    "2+",
    "year",
    "old"
  ],
  rating: {
    stars: 4.5,
    count: 1683
  }
},
{
  id: "b3e7d1f4-5c2a-4f9b-8d6e-1a3f7c5b9d2e",
  name: "Toddler Fleece Winter Joggers",
  priceCents: 1499,
  image: "images/products/170.webp",
  keywords: [
    "toddler",
    "fleece",
    "lined",
    "warm",
    "snow",
    "hiking",
    "pants",
    "baby",
    "boys",
    "girls",
    "winter",
    "ski",
    "sweatpants",
    "kids",
    "running",
    "joggers"
  ],
  rating: {
    stars: 4.5,
    count: 1574
  }
},
{
  id: "d9f1c3b7-6e4a-4f8b-9d2c-1a7e5f3b8c6d",
  name: "Baby Toddler Christmas Jumpsuits",
  priceCents: 2544,
  image: "images/products/169.webp",
  keywords: [
    "tipsy",
    "elves",
    "christmas",
    "outfits",
    "babies",
    "toddlers",
    "fun",
    "holiday",
    "themed",
    "jumpsuits"
  ],
  rating: {
    stars: 5.0,
    count: 1893
  }
},
{
  id: "c7d4e2f8-5a1b-4f6c-9d3e-2b7f1a4c8d5e",
  name: "Toddler Hiking Joggers",
  priceCents: 655,
  image: "images/products/168.webp",
  keywords: [
    "toddler",
    "hiking",
    "cargo",
    "pants",
    "baby",
    "boys",
    "girls",
    "quick",
    "dry",
    "joggers",
    "kids",
    "pull-on"
  ],
  rating: {
    stars: 4.0,
    count: 1289
  }
},
{
  id: "a5c3d8f1-7b2e-4f9a-9d6c-2e1f7b4a8c5d",
  name: "Baby First Walking Shoes",
  priceCents: 834,
  image: "images/products/167.webp",
  keywords: [
    "centipede",
    "demon",
    "baby",
    "shoes",
    "boy",
    "girl",
    "first",
    "walking",
    "breathable",
    "barefoot",
    "infant",
    "lightweight",
    "slip-on",
    "sneakers",
    "soft",
    "sock"
  ],
  rating: {
    stars: 4.5,
    count: 1462
  }
},
{
  id: "f8a2d5b3-6c4e-4f9a-8d2b-1e7c3f5a9b6d",
  name: "Magnetic Doodle Board",
  priceCents: 599,
  image: "images/products/166.webp",
  keywords: [
    "magnetic",
    "drawing",
    "doodle",
    "board",
    "toddler",
    "toys",
    "3",
    "4",
    "5",
    "year",
    "old",
    "boys",
    "girls",
    "learning",
    "educational",
    "baby",
    "kids",
    "christmas",
    "birthday",
    "gifts"
  ],
  rating: {
    stars: 4.0,
    count: 1376
  }
},
{
  id: "e6b1c3d4-7f2a-4a9b-8c5d-1e3f6b7a9d2c",
  name: "Baby Knit Sweater Pullover",
  priceCents: 187,
  image: "images/products/165.webp",
  keywords: [
    "baby",
    "girl",
    "boy",
    "knit",
    "sweater",
    "blouse",
    "pullover",
    "sweatshirt",
    "warm",
    "crewneck",
    "long",
    "sleeve",
    "tops",
    "infant",
    "toddler"
  ],
  rating: {
    stars: 4.5,
    count: 1197
  }
},
{
  id: "c9d2f7a5-4b6e-4c8a-9f1d-3e7b2a5c8d4f",
  name: "Carter's 6-Piece Baby Bodysuit Set",
  priceCents: 1550,
  image: "images/products/164.webp",
  keywords: [
    "simple",
    "joys",
    "carters",
    "unisex",
    "baby",
    "6-piece",
    "bodysuits",
    "short",
    "long",
    "sleeve",
    "pants",
    "set"
  ],
  rating: {
    stars: 5.0,
    count: 1628
  }
},
{
  id: "b7e9c4d2-5f1a-4a8b-9c3d-2f6e7a1b8c4d",
  name: "Baby Boy 3PCS Outfit",
  priceCents: 863,
  image: "images/products/163.webp",
  keywords: [
    "agapeng",
    "baby",
    "boy",
    "clothes",
    "newborn",
    "outfits",
    "infant",
    "letter",
    "print",
    "romper",
    "long",
    "pants",
    "hat",
    "3pcs",
    "clothing"
  ],
  rating: {
    stars: 4.0,
    count: 1415
  }
},
{
  id: "d5f3a1b8-6c4e-4f7a-9b2d-1e8c3f5a7d9b",
  name: "Toddler Beanie Hat",
  priceCents: 790,
  image: "images/products/162.webp",
  keywords: [
    "furtalk",
    "toddler",
    "beanie",
    "baby",
    "boys",
    "girls",
    "beanies",
    "kids",
    "winter",
    "hats",
    "children",
    "knit",
    "warm",
    "caps"
  ],
  rating: {
    stars: 4.5,
    count: 1327
  }
},
{
  id: "f1c8b2d7-3e4a-4f9d-8b6c-2a7d5e1f9b3c",
  name: "Checkered Baby Blanket",
  priceCents: 599,
  image: "images/products/161.webp",
  keywords: [
    "yurhap",
    "checkered",
    "baby",
    "blanket",
    "girls",
    "pink",
    "fleece",
    "boys",
    "warmer",
    "comfort",
    "lightweight",
    "bed",
    "toddlers",
    "infants",
    "newborn",
    "30x40"
  ],
  rating: {
    stars: 5.0,
    count: 1784
  }
},
{
  id: "a2b9d4e7-8f1c-4c5a-9d3b-6e7f1a2c4b5d",
  name: "Baby Winter Beanie Hats",
  priceCents: 599,
  image: "images/products/160.webp",
  keywords: [
    "baby",
    "beanie",
    "hats",
    "2-pack",
    "warm",
    "winter",
    "boys",
    "girls",
    "infant",
    "fleece",
    "lined",
    "toddler",
    "0-36",
    "month"
  ],
  rating: {
    stars: 4.0,
    count: 1532
  }
},
{
  id: "e3f7c9a1-2d4b-4f8e-9a12-7b5c3e9f1d2a",
  name: "Baby Hiking Jogger Pants",
  priceCents: 499,
  image: "images/products/159.webp",
  keywords: [
    "baby",
    "boys",
    "girls",
    "hiking",
    "pants",
    "lightweight",
    "athletic",
    "jogger",
    "toddler",
    "quick",
    "dry",
    "track",
    "sweatpants"
  ],
  rating: {
    stars: 4.5,
    count: 1243
  }
},
{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
  priceCents: 1500,
  image: "images/products/athletic-cotton-socks-6-pairs.jpg",
  keywords: [
    "socks",
    "sports",
    "apparel"
  ],
  rating: {
    stars: 4.5,
    count: 87
  }
},
{
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  name: "Intermediate Size Basketball",
  priceCents: 2000,
  image: "images/products/intermediate-composite-basketball.jpg",
  keywords: [
    "sports",
    "basketballs"
  ],
  rating: {
    stars: 4,
    count: 127
  }
},
{
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  name: "Adults Plain Cotton T-Shirt - 2 Pack",
  priceCents: 2000,
  image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  keywords: [
    "tshirts",
    "apparel",
    "mens"
  ],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png",
  rating: {
    stars: 4.5,
    count: 56
  }
},
{
  id: "54e0eccd-8f36-462b-b68a-8182611d9add",
  name: "2 Slot Toaster - Black",
  priceCents: 1899,
  image: "images/products/black-2-slot-toaster.jpg",
  keywords: [
    "toaster",
    "kitchen",
    "appliances"
  ],
  rating: {
    stars: 5,
    count: 2197
  }
},
{
  id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  name: "6 Piece White Dinner Plate Set",
  priceCents: 1300,
  image: "images/products/6-piece-white-dinner-plate-set.jpg",
  keywords: [
    "plates",
    "kitchen",
    "dining"
  ],
  rating: {
    stars: 4,
    count: 37
  }
},
{
  id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
  name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
  priceCents: 1800,
  image: "images/products/6-piece-non-stick-baking-set.webp",
  keywords: [
    "kitchen",
    "cookware"
  ],
  rating: {
    stars: 4.5,
    count: 175
  }
},
{
  id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
  name: "Plain Hooded Fleece Sweatshirt",
  priceCents: 2000,
  image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
  keywords: [
    "hoodies",
    "sweaters",
    "apparel"
  ],
  rating: {
    stars: 4.5,
    count: 317
  }
},
{
  id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
  name: "Luxury Towel Set - Graphite Gray",
  priceCents: 2599,
  image: "images/products/luxury-tower-set-6-piece.jpg",
  keywords: [
    "bathroom",
    "washroom",
    "restroom",
    "towels",
    "bath towels"
  ],
  rating: {
    stars: 4.5,
    count: 144
  }
},
{
  id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
  name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
  priceCents: 1000,
  image: "images/products/liquid-laundry-detergent-plain.jpg",
  keywords: [
    "bathroom",
    "cleaning"
  ],
  rating: {
    stars: 4.5,
    count: 305
  }
},
{
  id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
  name: "Waterproof Knit Athletic Sneakers - Gray",
  priceCents: 1800,
  image: "images/products/knit-athletic-sneakers-gray.jpg",
  keywords: [
    "shoes",
    "running shoes",
    "footwear"
  ],
  rating: {
    stars: 4,
    count: 89
  }
},
{
  id: "5968897c-4d27-4872-89f6-5bcb052746d7",
  name: "Women's Chiffon Beachwear Cover Up - Black",
  priceCents: 2000,
  image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
  keywords: [
    "robe",
    "swimsuit",
    "swimming",
    "bathing",
    "apparel"
  ],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png",
  rating: {
    stars: 4.5,
    count: 235
  }
},
{
  id: "aad29d11-ea98-41ee-9285-b916638cac4a",
  name: "Round Sunglasses",
  priceCents: 1000,
  image: "images/products/round-sunglasses-black.jpg",
  keywords: [
    "accessories",
    "shades"
  ],
  rating: {
    stars: 4.5,
    count: 30
  }
},
  {
  id: "04701903-bc79-49c6-bc11-1af7e3651358",
  name: "Women's Two Strap Buckle Sandals - Tan",
  priceCents: 1300,
  image: "images/products/women-beach-sandals.jpg",
  keywords: [
    "footwear",
    "sandals",
    "womens",
    "beach",
    "summer"
  ],
  rating: {
    stars: 4.5,
    count: 562
  }
},
{
  id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
  name: "Blackout Curtains Set 4-Pack - Beige",
  priceCents: 2000,
  image: "images/products/blackout-curtain-set-beige.webp",
  keywords: [
    "bedroom",
    "curtains",
    "home"
  ],
  rating: {
    stars: 4.5,
    count: 232
  }
},
{
  id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
  name: "Men's Slim-Fit Summer Shorts",
  priceCents: 1399,
  image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
  keywords: [
    "shorts",
    "apparel",
    "mens"
  ],
  rating: {
    stars: 4,
    count: 160
  }
},
{
  id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
  name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
  priceCents: 2000,
  image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
  keywords: [
    "water boiler",
    "appliances",
    "kitchen"
  ],
  rating: {
    stars: 5,
    count: 846
  }
},
{
  id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
  name: "Ultra Soft Tissue 2-Ply - 18 Box",
  priceCents: 800,
  image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
  keywords: [
    "kleenex",
    "tissues",
    "kitchen",
    "tissues box",
    "napkins"
  ],
  rating: {
    stars: 4,
    count: 99
  }
},
{
  id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
  name: "Straw Lifeguard Sun Hat",
  priceCents: 1199,
  image: "images/products/straw-sunhat.webp",
  keywords: [
    "hats",
    "straw hats",
    "summer",
    "apparel"
  ],
  rating: {
    stars: 4,
    count: 215
  }
},
{
  id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
  name: "Sterling Silver Sky Flower Stud Earrings",
  priceCents: 1799,
  image: "images/products/sky-flower-stud-earrings.webp",
  keywords: [
    "jewelry",
    "accessories",
    "womens"
  ],
  rating: {
    stars: 4.5,
    count: 52
  }
},
{
  id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
  name: "Women's Stretch Popover Hoodie",
  priceCents: 1374,
  image: "images/products/women-stretch-popover-hoodie-black.jpg",
  keywords: [
    "hooded",
    "hoodies",
    "sweaters",
    "womens",
    "apparel"
  ],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png",
  rating: {
    stars: 4.5,
    count: 2465
  }
},
{
  id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
  name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
  priceCents: 1250,
  image: "images/products/bathroom-rug.jpg",
  keywords: [
    "bathmat",
    "bathroom",
    "home"
  ],
  rating: {
    stars: 4.5,
    count: 119
  }
},
{
  id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
  name: "Women's Knit Ballet Flat",
  priceCents: 2000,
  image: "images/products/women-knit-ballet-flat-black.jpg",
  keywords: [
    "shoes",
    "flats",
    "womens",
    "footwear"
  ],
  rating: {
    stars: 4,
    count: 326
  }
},
{
  id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
  name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
  priceCents: 1399,
  image: "images/products/men-golf-polo-t-shirt-blue.jpg",
  keywords: [
    "tshirts",
    "shirts",
    "apparel",
    "mens"
  ],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png",
  rating: {
    stars: 4.5,
    count: 2556
  }
},
{
  id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
  name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
  priceCents: 1700,
  image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
  keywords: [
    "garbage",
    "bins",
    "cans",
    "kitchen"
  ],
  rating: {
    stars: 4.5,
    count: 2286
  }
},
{
  id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
  name: "Duvet Cover Set with Zipper Closure",
  priceCents: 2399,
  image: "images/products/duvet-cover-set-blue-twin.jpg",
  keywords: [
    "bedroom",
    "bed sheets",
    "sheets",
    "covers",
    "home"
  ],
  rating: {
    stars: 4,
    count: 456
  }
},
{
  id: "d2785924-743d-49b3-8f03-ec258e640503",
  name: "Women's Chunky Cable Beanie - Gray",
  priceCents: 850,
  image: "images/products/women-chunky-beanie-gray.webp",
  keywords: [
    "hats",
    "winter hats",
    "beanies",
    "tuques",
    "apparel",
    "womens"
  ],
  rating: {
    stars: 5,
    count: 83
  }
},{
  id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
  name: "Men's Classic-fit Pleated Chino Pants",
  priceCents: 1490,
  image: "images/products/men-chino-pants-beige.jpg",
  keywords: [
    "pants",
    "apparel",
    "mens"
  ],
  rating: {
    stars: 4.5,
    count: 9017
  }
},
{
  id: "1c079479-8586-494f-ab53-219325432536",
  name: "Men's Athletic Sneaker",
  priceCents: 2099,
  image: "images/products/men-athletic-shoes-green.jpg",
  keywords: [
    "shoes",
    "running shoes",
    "footwear",
    "mens"
  ],
  rating: {
    stars: 4,
    count: 229
  }
},
{
  id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
  name: "Men's Navigator Sunglasses Pilot",
  priceCents: 1000,
  image: "images/products/men-navigator-sunglasses-brown.jpg",
  keywords: [
    "sunglasses",
    "glasses",
    "accessories",
    "shades"
  ],
  rating: {
    stars: 3.5,
    count: 42
  }
},
{
  id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
  name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
  priceCents: 3099,
  image: "images/products/non-stick-cooking-set-15-pieces.webp",
  keywords: [
    "cooking set",
    "kitchen"
  ],
  rating: {
    stars: 4.5,
    count: 511
  }
},
{
  id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
  name: "Vanity Mirror with Heavy Base - Chrome",
  priceCents: 1649,
  image: "images/products/vanity-mirror-silver.jpg",
  keywords: [
    "bathroom",
    "washroom",
    "mirrors",
    "home"
  ],
  rating: {
    stars: 4.5,
    count: 130
  }
},
{
  id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
  name: "Women's Fleece Jogger Sweatpant",
  priceCents: 2400,
  image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
  keywords: [
    "pants",
    "sweatpants",
    "jogging",
    "apparel",
    "womens"
  ],
  rating: {
    stars: 4.5,
    count: 248
  }
},
{
  id: "d339adf3-e004-4c20-a120-40e8874c66cb",
  name: "Double Oval Twist French Wire Earrings - Gold",
  priceCents: 2400,
  image: "images/products/double-elongated-twist-french-wire-earrings.webp",
  keywords: [
    "accessories",
    "womens"
  ],
  rating: {
    stars: 4.5,
    count: 117
  }
},
{
  id: "d37a651a-d501-483b-aae6-a9659b0757a0",
  name: "Round Airtight Food Storage Containers - 5 Piece",
  priceCents: 1599,
  image: "images/products/round-airtight-food-storage-containers.jpg",
  keywords: [
    "boxes",
    "food containers",
    "kitchen"
  ],
  rating: {
    stars: 4,
    count: 126
  }
},
{
  id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
  name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
  priceCents: 2250,
  image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
  keywords: [
    "coffeemakers",
    "kitchen",
    "appliances"
  ],
  rating: {
    stars: 4.5,
    count: 1211
  }
},
{
  id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
  name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
  priceCents: 2599,
  image: "images/products/blackout-curtains-black.jpg",
  keywords: [
    "bedroom",
    "home"
  ],
  rating: {
    stars: 4.5,
    count: 363
  }
},
{
  id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
  name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
  priceCents: 2010,
  image: "images/products/cotton-bath-towels-teal.webp",
  keywords: [
    "bathroom",
    "home",
    "towels"
  ],
  rating: {
    stars: 4.5,
    count: 93
  }
},
{
  id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
  name: "Waterproof Knit Athletic Sneakers - Pink",
  priceCents: 2090,
  image: "images/products/knit-athletic-sneakers-pink.webp",
  keywords: [
    "shoes",
    "running shoes",
    "footwear",
    "womens"
  ],
  rating: {
    stars: 4,
    count: 89
  }
},
{
  id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
  name: "Countertop Blender - 64oz, 1400 Watts",
  priceCents: 5047,
  image: "images/products/countertop-blender-64-oz.jpg",
  keywords: [
    "food blenders",
    "kitchen",
    "appliances"
  ],
  rating: {
    stars: 4,
    count: 3
  }
},
{
  id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
  name: "10-Piece Mixing Bowl Set with Lids - Floral",
  priceCents: 2099,
  image: "images/products/floral-mixing-bowl-set.jpg",
  keywords: [
    "mixing bowls",
    "baking",
    "cookware",
    "kitchen"
  ],
  rating: {
    stars: 5,
    count: 679
  }
},
{
  id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
  name: "2-Ply Kitchen Paper Towels - 30 Pack",
  priceCents: 890,
  image: "images/products/kitchen-paper-towels-30-pack.jpg",
  keywords: [
    "kitchen",
    "kitchen towels",
    "tissues"
  ],
  rating: {
    stars: 4.5,
    count: 1045
  }
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955",
  name: "Men's Full-Zip Hooded Fleece Sweatshirt",
  priceCents: 2400,
  image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
  keywords: [
    "sweaters",
    "hoodies",
    "apparel",
    "mens"
  ],
  rating: {
    stars: 4.5,
    count: 3157
  }
},

   {
    id: "ficerd-3pack-tops",
    name: "Ficerd 3 Pack 3/4 Sleeve Tops for Women Round Neck Dressy Basics Tees Casual Trendy Loose Fit T Shirts",
    priceCents: 2099, // $20.99
    image: "images/products/1.webp", // You’ll fix this path
    keywords: [
      "tops",
      "women",
      "tees",
      "casual",
      "dressy",
      "ficerd",
      "t shirts"
    ],
    rating: {
      stars: 4.5,
      count: 312
    }
  },

  {
  id: "mens-cotton-linen-shirt-1",
  name: "Men's Fashion Cotton Linen Shirt Long Sleeve Solid Color Ethnic Beach Yoga Top",
  priceCents: 1590, // $15.90
  image: "images/products/2.webp", // Update this path to your actual image
  keywords: [
    "men",
    "shirt",
    "cotton",
    "linen",
    "long sleeve",
    "casual",
    "beach wear",
    "summer",
    "ethnic",
    "yoga",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 87
  }
},

{
  id: "coofandy-knit-shirt-1",
  name: "COOFANDY Men's Short Sleeve Knit Shirt Casual Button Down Shirt Vintage Striped Knitted Golf Beach Tops",
  priceCents: 1590, // $15.90
  image: "images/products/3.jpg", // ✅ MAIN PRODUCT IMAGE
  keywords: [
    "men",
    "shirt",
    "short sleeve",
    "knit",
    "button down",
    "golf",
    "striped",
    "vintage",
    "summer",
    "coofandy",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 126
  }
},

{
  id: "mens-linen-pants-1",
  name: "Men's Linen Pants Lightweight Drawstring Elastic Waist Pockets Loose Fit Straight Legs Summer Beach Yoga",
  priceCents: 1090, // $10.90
  image: "images/products/4.jpg", // Update to your real image file
  keywords: [
    "men",
    "pants",
    "linen",
    "summer",
    "lightweight",
    "drawstring",
    "loose fit",
    "casual",
    "beach",
    "yoga",
    "straight leg"
  ],
  rating: {
    stars: 4.0,
    count: 136 // ✅ (no rating below 25 as you requested)
  }
},

{
  id: "mapick-linen-shirt-1",
  name: "MAPICK Men's Linen Shirts Short Sleeve Button Down Casual Shirt Business Dress Clothing Beach Fashion Summer Tops",
  priceCents: 1589, // $15.89
  image: "images/products/5.jpg", // Update path to your actual image
  keywords: [
    "men",
    "shirt",
    "linen",
    "short sleeve",
    "button down",
    "business",
    "casual",
    "summer",
    "beach",
    "fashion",
    "tops",
    "mapick"
  ],
  rating: {
    stars: 4.0,
    count: 145
  }
},

{
  id: "coofandy-hippie-harem-pants-1",
  name: "COOFANDY Men Hippie Harem Pants Baggy Linen Cotton Boho Yoga Pants Summer Beach Pants Casual Drop Crotch Trouser",
  priceCents: 1769, // $17.69
  image: "images/products/7.jpg", // ✅ next image in sequence
  keywords: [
    "men",
    "pants",
    "harem",
    "baggy",
    "linen",
    "cotton",
    "boho",
    "yoga",
    "beach",
    "summer",
    "drop crotch",
    "coofandy",
    "casual"
  ],
  rating: {
    stars: 4.5,
    count: 189
  }
},

{
  id: "alexvando-dress-shirt-1",
  name: "Alex Vando Men's Dress Shirts Regular Fit Long Sleeve Stretch Business Dress Shirts for Men",
  priceCents: 1398, // $13.98
  image: "images/products/6.jpg", // ✅ next image in your sequence
  keywords: [
    "men",
    "shirt",
    "dress shirt",
    "long sleeve",
    "business",
    "formal",
    "regular fit",
    "stretch",
    "office",
    "alex vando",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 154
  }
},

{
  id: "zity-flannel-hoodie-shirt-1",
  name: "ZITY Men's Flannel Hoodie Shirts Casual Button Down Plaid Shirt Jackets for Men Long Sleeve Stylish Hooded with Pocket",
  priceCents: 1695, // $16.95
  image: "images/products/8.jpg", // ✅ next image in your sequence
  keywords: [
    "men",
    "shirt",
    "flannel",
    "hoodie",
    "plaid",
    "jacket",
    "long sleeve",
    "casual",
    "streetwear",
    "winter",
    "zity",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 198
  }
},

{
  id: "redkap-motorsports-shirt-1",
  name: "Red Kap Men's RK Motorsports Shirt",
  priceCents: 1760, // $17.60
  image: "images/products/9.jpg", // ✅ next image in sequence
  keywords: [
    "men",
    "shirt",
    "motorsports",
    "button down",
    "workwear",
    "uniform",
    "red kap",
    "casual",
    "top",
    "mechanic"
  ],
  rating: {
    stars: 4.0,
    count: 145
  }
},

{
  id: "alexvando-dress-shirt-1",
  name: "Alex Vando Men's Dress Shirts Regular Fit Long Sleeve Stretch Business Dress Shirts for Men",
  priceCents: 1290, // $12.90
  image: "images/products/10.jpg", // ✅ Next image in sequence
  keywords: [
    "men",
    "shirt",
    "dress shirt",
    "business",
    "formal",
    "long sleeve",
    "regular fit",
    "work",
    "office",
    "alex vando"
  ],
  rating: {
    stars: 4.0,
    count: 174
  }
},

{
  id: "jver-casual-dress-shirt-1",
  name: "J.VER Men's Casual Long Sleeve Stretch Dress Shirt Wrinkle-Free Regular Fit Button Down Shirts",
  priceCents: 1499, // $14.99
  image: "images/products/11.jpg", // Update to your actual image
  keywords: [
    "men",
    "dress shirt",
    "long sleeve",
    "business",
    "regular fit",
    "wrinkle-free",
    "button down",
    "casual",
    "office",
    "formal"
  ],
  rating: {
    stars: 4.0,
    count: 122
  }
},

{
  id: "alexvando-dress-shirt-regular-2",
  name: "Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Stretch Business Dress Shirts for Men",
  priceCents: 1099, // $10.99
  image: "images/products/12.webp", // Update to your actual file name
  keywords: [
    "men",
    "dress shirt",
    "regular fit",
    "long sleeve",
    "business",
    "stretch",
    "office",
    "formal",
    "alex vando",
    "casual"
  ],
  rating: {
    stars: 4.0,
    count: 118
  }
},

{
  id: "alexvando-dress-shirt-regular-2",
  name: "Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Stretch Business Dress Shirts for Men",
  priceCents: 1969, // $10.99
  image: "images/products/13.webp", // Update to your actual file name
  keywords: [
    "men",
    "dress shirt",
    "regular fit",
    "long sleeve",
    "business",
    "stretch",
    "office",
    "formal",
    "alex vando",
    "casual"
  ],
  rating: {
    stars: 4.0,
    count: 118
  }
},
{
  id: "alexvando-dress-shirt-wrinklefree-1",
  name: "Alex Vando Mens Dress Shirt Wrinkle Free Regular Fit 4-Way Stretch Button Down Shirts",
  priceCents: 1400, // $14.00
  image: "images/products/14.webp", // Update to match your actual image
  keywords: [
    "men",
    "dress shirt",
    "regular fit",
    "wrinkle free",
    "4 way stretch",
    "button down",
    "business",
    "office",
    "formal",
    "alex vando",
    "long sleeve"
  ],
  rating: {
    stars: 4.5,
    count: 147
  }
},

{
  id: "alexvando-print-linen-shirt-1",
  name: "Alex Vando Mens Print Linen Cotton Shirts Short Sleeve Casual Summer Hawaiian Beach Shirt for Men",
  priceCents: 1799, // $17.99
  image: "images/products/15.webp", // Update to match your actual image file
  keywords: [
    "men",
    "shirt",
    "linen",
    "short sleeve",
    "casual",
    "hawaiian",
    "beach",
    "summer",
    "printed",
    "lightweight",
    "alex vando",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 132
  }
},

{
  id: "vintage-tactical-polo-1",
  name: "Men's Vintage Polo Shirts Fashion Tactical Polos Contrast Collared Shirt with Pocket (S-XXL)",
  priceCents: 1989, // $19.89
  image: "images/products/16.webp", // ✅ starting from image 16, .webp format
  keywords: [
    "men",
    "polo",
    "vintage",
    "tactical",
    "collared",
    "short sleeve",
    "pocket",
    "casual",
    "fashion",
    "summer",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 142
  }
},

{
  id: "ximximmtian-biker-jeans-1",
  name: "XIMXIMMTIAN Men's Biker Moto Washed Distressed Slim Fit Straight Jeans Denim",
  priceCents: 2299,
  image: "images/products/17.webp",
  keywords: [
    "ximximmtian",
    "men",
    "biker",
    "moto",
    "washed",
    "distressed",
    "slim",
    "fit",
    "straight",
    "jeans",
    "denim"
  ],
  rating: {
    stars: 4.5,
    count: 1327
  }
},

{
  id: "furuyal-slim-suit-2pc-1",
  name: "Furuyal Men's Suit 2 Piece Vest Set Slim Fit Dress Suit Casual Suit Waistcoat Pant",
  priceCents: 3099,
  image: "images/products/18.webp",
  keywords: [
    "furuyal",
    "men",
    "suit",
    "2 piece",
    "vest",
    "slim fit",
    "dress",
    "casual",
    "waistcoat",
    "pant",
    "formal",
    "wedding"
  ],
  rating: {
    stars: 4.0,
    count: 1046
  }
},

{
  id: "coofandy-summer-casual-shirt-1",
  name: "COOFANDY Men's Button Down Shirts Short Sleeve Casual Shirt Summer Beach Wedding Shirts",
  priceCents: 700,
  image: "images/products/19.webp",
  keywords: [
    "coofandy",
    "men",
    "button down",
    "short sleeve",
    "casual",
    "summer",
    "beach",
    "wedding",
    "shirt",
    "lightweight",
    "fashion"
  ],
  rating: {
    stars: 4.0,
    count: 1294
  }
},

{
  id: "coofandy-untucked-denim-shirt-1",
  name: "COOFANDY Men's Casual Button Down Shirt Untucked Long Sleeve Stretch Denim Dress Shirt",
  priceCents: 2000,
  image: "images/products/20.webp",
  keywords: [
    "coofandy",
    "men",
    "casual",
    "button down",
    "untucked",
    "long sleeve",
    "stretch",
    "denim",
    "dress shirt",
    "fashion",
    "formal",
    "shirts"
  ],
  rating: {
    stars: 4.5,
    count: 1683
  }
},

{
  id: "vintage-retro-hawaiian-shirt-1",
  name: "80s 90s Outfit for Men Short Sleeve Button Down Hawaiian Shirt Funny Vintage Retro Beach Shirts",
  priceCents: 1099,
  image: "images/products/21.webp",
  keywords: [
    "80s",
    "90s",
    "men",
    "short sleeve",
    "button down",
    "hawaiian",
    "funny",
    "vintage",
    "retro",
    "beach",
    "shirt",
    "summer",
    "casual"
  ],
  rating: {
    stars: 4.0,
    count: 1128
  }
},

{
  id: "coofandy-cuban-2pc-set-1",
  name: "COOFANDY Men's 2 Piece Cotton Sets Casual Long Sleeve Cuban Henley Shirt and Loose Pants Set Beach Vacation Outfits",
  priceCents: 2889,
  image: "images/products/22.webp",
  keywords: [
    "coofandy",
    "men",
    "2 piece",
    "cotton",
    "set",
    "long sleeve",
    "cuban",
    "henley",
    "shirt",
    "loose pants",
    "beach",
    "vacation",
    "outfits",
    "casual",
    "summer"
  ],
  rating: {
    stars: 4.5,
    count: 1542
  }
},
{
  id: "coofandy-cuban-short-sleeve-shirt-1",
  name: "COOFANDY Men's Cuban Guayabera Shirt Casual Short Sleeve Button Down Shirts Summer Beach Shirts",
  priceCents: 899,
  image: "images/products/23.webp",
  keywords: [
    "coofandy",
    "men",
    "cuban",
    "guayabera",
    "short sleeve",
    "button down",
    "casual",
    "summer",
    "beach",
    "shirt",
    "vacation",
    "lightweight",
    "fashion"
  ],
  rating: {
    stars: 4.0,
    count: 1278
  }
},

{
  id: "baroque-gold-chain-dress-shirt-1",
  name: "Men's Luxury Dress Shirts Baroque Gold Chain Print Casual Long Sleeve Button Down Buchona Shirt for Party",
  priceCents: 1789,
  image: "images/products/24.webp",
  keywords: [
    "men",
    "luxury",
    "dress shirt",
    "baroque",
    "gold chain",
    "print",
    "casual",
    "long sleeve",
    "button down",
    "buchona",
    "party",
    "fashion",
    "bold"
  ],
  rating: {
    stars: 4.5,
    count: 1889
  }
},

{
  id: "hodaweisolp-zipper-golf-polo-1",
  name: "Hodaweisolp Men's Short Sleeve Zipper Casual Slim Fit Printed Golf Polo Shirt Tops",
  priceCents: 1233,
  image: "images/products/25.webp",
  keywords: [
    "hodaweisolp",
    "men",
    "short sleeve",
    "zipper",
    "casual",
    "slim fit",
    "printed",
    "golf",
    "polo",
    "shirt",
    "tops",
    "summer",
    "sporty"
  ],
  rating: {
    stars: 4.0,
    count: 1137
  }
},

{
  id: "lexiart-knit-quarter-zip-polo-1",
  name: "Lexiart Men's Knit Polo Long Sleeve Slim Fit Textured Collared Quarter Zip Sweater Casual Lightweight",
  priceCents: 1599,
  image: "images/products/26.webp",
  keywords: [
    "lexiart",
    "men",
    "knit",
    "polo",
    "long sleeve",
    "slim fit",
    "textured",
    "collared",
    "quarter zip",
    "sweater",
    "casual",
    "lightweight"
  ],
  rating: {
    stars: 4.5,
    count: 1642
  }
},
{
  id: "dubulle-ratchet-leather-belt-1",
  name: "Dubulle Designer Men's Belts, Sliding Automatic Buckle Ratchet Dress Belt TOP Genuine Leather Strap Gifts",
  priceCents: 1586,
  image: "images/products/27.webp",
  keywords: [
    "dubulle",
    "men",
    "belt",
    "designer",
    "sliding buckle",
    "automatic buckle",
    "ratchet",
    "dress belt",
    "genuine leather",
    "strap",
    "fashion",
    "gifts"
  ],
  rating: {
    stars: 4.0,
    count: 1331
  }
},

{
  id: "zoomshopy-classic-expandable-dress-pant-1",
  name: "Essentials Men's Classic-Fit Expandable-Waist Flat-Front Dress Pant",
  priceCents: 1885,
  image: "images/products/28.webp",
  keywords: [
    "essentials",
    "men",
    "classic fit",
    "expandable waist",
    "flat front",
    "dress pant",
    "formal",
    "office",
    "slacks",
    "business",
    "casual"
  ],
  rating: {
    stars: 4.0,
    count: 1476
  }
},
{
  id: "runcati-linen-casual-pants-1",
  name: "Runcati Men's Casual Pants Drawstring Elastic Waist Lightweight Linen Pants Loose Fit Straight Legs Beach Trousers",
  priceCents: 799,
  image: "images/products/29.webp",
  keywords: [
    "runcati",
    "men",
    "casual pants",
    "drawstring",
    "elastic waist",
    "lightweight",
    "linen",
    "loose fit",
    "straight leg",
    "beach",
    "summer",
    "trousers"
  ],
  rating: {
    stars: 4.0,
    count: 1214
  }
},
{
  id: "runcati-linen-straight-leg-pants-1",
  name: "Runcati Men's Casual Pants Elastic Waist Linen Lightweight Straight-Legs Loose Fit Summer Beach Yoga Trousers",
  priceCents: 1690,
  image: "images/products/30.webp",
  keywords: [
    "runcati",
    "men",
    "casual pants",
    "elastic waist",
    "linen",
    "lightweight",
    "straight leg",
    "loose fit",
    "summer",
    "beach",
    "yoga",
    "trousers",
    "comfort"
  ],
  rating: {
    stars: 4.5,
    count: 1587
  }
},

{
  id: "keecow-italian-leather-belt-1",
  name: "KEECOW Men's 100% Italian Cow Leather Belt Men With Anti-Scratch Buckle, Packed in a Box",
  priceCents: 1568,
  image: "images/products/31.webp",
  keywords: [
    "keecow",
    "men",
    "belt",
    "italian leather",
    "cow leather",
    "anti-scratch buckle",
    "dress belt",
    "premium",
    "boxed",
    "gift",
    "fashion"
  ],
  rating: {
    stars: 4.5,
    count: 1746
  }
},

{
  id: "luxury-black-gold-2pc-outfit-1",
  name: "Men's Luxury Outfit Set Black Gold Shirts And Shorts 2 Piece Tracksuit Set Baroque Button Down Suit with Bucket Hats",
  priceCents: 3089,
  image: "images/products/32.webp",
  keywords: [
    "men",
    "luxury",
    "black gold",
    "2 piece",
    "tracksuit",
    "baroque",
    "button down",
    "shirt",
    "shorts",
    "outfit set",
    "party",
    "summer",
    "bucket hat",
    "fashion",
    "stylish"
  ],
  rating: {
    stars: 4.5,
    count: 1934
  }
},

{
  id: "oyoangle-wide-leg-casual-pants-1",
  name: "OYOANGLE Men's Drawstring Waist Wide Leg Pants Solid Work Office Casual Trousers with Pockets",
  priceCents: 2086,
  image: "images/products/33.webp",
  keywords: [
    "oyoangle",
    "men",
    "drawstring waist",
    "wide leg",
    "pants",
    "solid",
    "work",
    "office",
    "casual",
    "trousers",
    "with pockets",
    "loose fit",
    "comfort"
  ],
  rating: {
    stars: 4.0,
    count: 1452
  }
},

{
  id: "mens-techwear-cargo-joggers-1",
  name: "Men's Cargo Joggers Pants Elastic Waist Drawstring Baggy Sweatpants Techwear Pants for Men",
  priceCents: 1700,
  image: "images/products/34.webp",
  keywords: [
    "men",
    "cargo",
    "joggers",
    "elastic waist",
    "drawstring",
    "baggy",
    "sweatpants",
    "techwear",
    "streetwear",
    "casual",
    "pants"
  ],
  rating: {
    stars: 4.0,
    count: 1319
  }
},

{
  id: "coofandy-short-sleeve-denim-shirt-1",
  name: "COOFANDY Men's Short Sleeve Button Down Shirt Casual Untucked Dress Shirt Stretch Denim Shirt",
  priceCents: 1198,
  image: "images/products/35.webp",
  keywords: [
    "coofandy",
    "men",
    "short sleeve",
    "button down",
    "casual",
    "untucked",
    "dress shirt",
    "stretch",
    "denim",
    "summer",
    "lightweight",
    "fashion"
  ],
  rating: {
    stars: 4.5,
    count: 1654
  }
},
{
  id: "vintage-bowling-hawaiian-shirt-1",
  name: "Bowling Shirts for Men Short Sleeve Hawaiian Button Down Shirts 1950s Vintage Beach Casual Shirt with Pocket",
  priceCents: 590,
  image: "images/products/36.webp",
  keywords: [
    "bowling shirt",
    "men",
    "short sleeve",
    "hawaiian",
    "button down",
    "1950s",
    "vintage",
    "beach",
    "casual",
    "shirt",
    "with pocket",
    "retro",
    "summer"
  ],
  rating: {
    stars: 4.0,
    count: 1176
  }
},
{
  id: "zoomshopy-slim-fit-dress-pant-1",
  name: "Essentials Men's Slim-Fit Flat-Front Dress Pant",
  priceCents: 1342,
  image: "images/products/37.webp",
  keywords: [
    "essentials",
    "men",
    "slim fit",
    "flat front",
    "dress pant",
    "office",
    "formal",
    "business",
    "classic",
    "trousers"
  ],
  rating: {
    stars: 4.0,
    count: 1528
  }
},
{
  id: "mens-seersucker-slim-summer-slacks-1",
  name: "Men's Summer Slacks Men's Seer Sucker Slim Fit Suit Separate Pants Trousers",
  priceCents: 2095,
  image: "images/products/38.webp",
  keywords: [
    "men",
    "summer slacks",
    "seersucker",
    "slim fit",
    "suit pants",
    "separate trousers",
    "lightweight",
    "formal",
    "casual",
    "breathable",
    "summer"
  ],
  rating: {
    stars: 4.5,
    count: 1679
  }
},

{
  id: "kimbora-garment-storage-bags-1",
  name: "KIMBORA 3-Pack Suit & Garment Storage Bags (Black)",
  priceCents: 1509,
  image: "images/products/39.webp",
  keywords: [
    "kimbora",
    "garment bag",
    "suit storage",
    "closet",
    "travel",
    "protective cover",
    "black",
    "clothing storage",
    "dustproof",
    "organizer"
  ],
  rating: {
    stars: 4.5,
    count: 1894
  }
},
{
  id: "geek-lighting-polo-shirt-1",
  name: "GEEK LIGHTING Polo Shirts for Men Short Sleeve Summer Casual Collared Golf Tennis T-Shirt",
  priceCents: 1099,
  image: "images/products/40.webp",
  keywords: [
    "geek lighting",
    "polo",
    "shirt",
    "golf",
    "tennis",
    "short sleeve",
    "summer",
    "casual",
    "collared",
    "t-shirt"
  ],
  rating: {
    stars: 4.0,
    count: 1287
  }
},

{
  id: "zilink-garment-bags-1",
  name: "Zilink 2-Pack Suit & Garment Travel Storage Bags",
  priceCents: 1300,
  image: "images/products/41.webp",
  keywords: [
    "zilink",
    "garment bag",
    "suit bag",
    "travel",
    "storage",
    "protective",
    "closet",
    "men",
    "wardrobe"
  ],
  rating: {
    stars: 4.5,
    count: 1064
  }
},
{
  id: "ethanol-super-stretch-trousers-1",
  name: "ETHANOL Mens Super Stretch Slim Fit Trousers with 5 Practical Pockets Design Pants",
  priceCents: 1958,
  image: "images/products/42.webp",
  keywords: [
    "ethanol",
    "trousers",
    "super stretch",
    "slim fit",
    "pants",
    "men",
    "casual",
    "5 pockets",
    "lightweight",
    "comfortable"
  ],
  rating: {
    stars: 4.0,
    count: 1384
  }
},

{
  id: "vivi-button-zipper-aid-1",
  name: "Vivi Button & Zipper Dressing Aid Tool",
  priceCents: 844,
  image: "images/products/43.webp",
  keywords: [
    "vivi",
    "button aid",
    "zipper tool",
    "dressing",
    "assistance",
    "easy dressing",
    "hand tool",
    "daily living",
    "accessory"
  ],
  rating: {
    stars: 4.0,
    count: 912
  }
},
{
  id: "oyoangle-muscle-ribbed-zip-shirt-1",
  name: "OYOANGLE Men's Muscle Ribbed Knit Short Sleeve Shirts Zip Collared Slim Fit Tops",
  priceCents: 599,
  image: "images/products/44.webp",
  keywords: [
    "oyoangle",
    "muscle fit",
    "ribbed knit",
    "zip collar",
    "slim fit",
    "short sleeve",
    "casual",
    "summer",
    "mens shirt",
    "tops"
  ],
  rating: {
    stars: 4.5,
    count: 1034
  }
},

{
  id: "eting-doll-outfits-set-1",
  name: "E-TING 3 Sets Fashion Casual Wear Plaid Doll Clothes Jacket Pants Outfits with 3 Pairs Shoes for 12 Inches Dolls",
  priceCents: 599,
  image: "images/products/45.webp",
  keywords: [
    "e-ting",
    "doll clothes",
    "doll outfits",
    "12 inch dolls",
    "plaid",
    "fashion sets",
    "doll shoes",
    "accessories",
    "kids toy",
    "dress up"
  ],
  rating: {
    stars: 4.0,
    count: 1289
  }
},
{
  id: "adjustable-jean-button-pins-1",
  name: "Adjustable No-Sew Jean Button Pins (12-Pack)",
  priceCents: 200,
  image: "images/products/46.webp",
  keywords: [
    "jean button",
    "adjustable button",
    "no sew",
    "pants button",
    "waist adjuster",
    "metal button",
    "quick fix",
    "clothing repair",
    "12 pack"
  ],
  rating: {
    stars: 4.0,
    count: 947
  }
},

{
  id: "under-armour-charged-verssert-2-1",
  name: "Under Armour Men's Charged Verssert 2 Sneaker",
  priceCents: 3099,
  image: "images/products/47.webp",
  keywords: [
    "under armour",
    "sneakers",
    "running shoes",
    "charged cushion",
    "athletic",
    "men's footwear",
    "training",
    "lightweight",
    "comfortable",
    "verssert"
  ],
  rating: {
    stars: 4.5,
    count: 1764
  }
},
{
  id: "wzikai-cargo-joggers-1",
  name: "WZIKAI Mens Cargo Pants Relaxed Fit Drawstring Joggers Sweatpants for Men Workout Casual Long Trousers",
  priceCents: 2299,
  image: "images/products/48.webp",
  keywords: [
    "wzikai",
    "cargo pants",
    "joggers",
    "sweatpants",
    "relaxed fit",
    "drawstring",
    "workout",
    "casual",
    "men",
    "long trousers"
  ],
  rating: {
    stars: 4.0,
    count: 1342
  }
},
{
  id: "coofandy-floral-tuxedo-jacket-1",
  name: "COOFANDY Mens Floral Tuxedo Jacket Paisley Shawl Lapel Suit Blazer Jacket for Dinner, Prom, Wedding",
  priceCents: 4287,
  image: "images/products/49.webp",
  keywords: [
    "coofandy",
    "tuxedo jacket",
    "floral blazer",
    "paisley",
    "wedding suit",
    "dinner jacket",
    "prom blazer",
    "shawl lapel",
    "mens fashion",
    "formal wear"
  ],
  rating: {
    stars: 4.5,
    count: 1896
  }
},

{
  id: "willbond-collar-extenders-1",
  name: "WILLBOND Collar Extenders Elastic Button Extender Neck for Shirt Pants Dress Trouser Favors (24, Black, White, Silver)",
  priceCents: 299,
  image: "images/products/50.webp",
  keywords: [
    "willbond",
    "collar extender",
    "button extender",
    "elastic",
    "shirt collar",
    "pants button",
    "dress shirt accessory",
    "comfort fit",
    "24 pack"
  ],
  rating: {
    stars: 4.0,
    count: 1128
  }
},

{
  id: "zoomshopy-slim-fit-stretch-dress-pant-1",
  name: "zoom shopy Essentials Men's Slim-Fit Wrinkle-Resistant Stretch Dress Pant",
  priceCents: 1599,
  image: "images/products/51.webp",
  keywords: [
    "zoom shopy",
    "dress pants",
    "slim fit",
    "wrinkle resistant",
    "stretch",
    "men",
    "work pants",
    "office wear",
    "formal trousers"
  ],
  rating: {
    stars: 4.0,
    count: 1254
  }
},
{
  id: "zoomshopy-classic-fit-stretch-dress-pant-1",
  name: "zoom shopy Essentials Men's Classic-Fit Wrinkle-Resistant Stretch Dress Pants",
  priceCents: 2298,
  image: "images/products/52.webp",
  keywords: [
    "zoom shopy",
    "dress pants",
    "classic fit",
    "wrinkle resistant",
    "stretch",
    "formal trousers",
    "office wear",
    "men",
    "work pants"
  ],
  rating: {
    stars: 4.5,
    count: 1672
  }
},

{
  id: "coofandy-ruffle-shawl-cardigan-1",
  name: "COOFANDY Men's Lightweight Ruffle Shawl Collar Cardigan Open Front Long Length Drape Cape Overcoat",
  priceCents: 2599,
  image: "images/products/53.webp",
  keywords: [
    "coofandy",
    "cardigan",
    "shawl collar",
    "long drape",
    "lightweight",
    "open front",
    "overcoat",
    "mens fashion",
    "streetwear",
    "layering"
  ],
  rating: {
    stars: 4.0,
    count: 1498
  }
},
{
  id: "perry-ellis-reversible-belt-1",
  name: "Perry Ellis Men's Portfolio Double Stitched Leather Reversible Belt, Brown/Black, Silver Prong Buckle, Burnished Edges",
  priceCents: 1799,
  image: "images/products/54.webp",
  keywords: [
    "perry ellis",
    "leather belt",
    "reversible belt",
    "brown black",
    "double stitched",
    "mens accessory",
    "dress belt",
    "silver buckle",
    "burnished edges"
  ],
  rating: {
    stars: 4.5,
    count: 1724
  }
},
{
  id: "florsheim-pebble-grain-belt-1",
  name: "Florsheim 32mm Pebble Grain Leather Belt",
  priceCents: 1699,
  image: "images/products/55.webp",
  keywords: [
    "florsheim",
    "leather belt",
    "pebble grain",
    "32mm",
    "mens belt",
    "dress belt",
    "classic style",
    "accessories",
    "brown belt",
    "quality leather"
  ],
  rating: {
    stars: 4.0,
    count: 1432
  }
},
{
  id: "coofandy-cotton-linen-harem-pants-1",
  name: "COOFANDY Men's Cotton Linen Pants Casual Harem Pants Elastic Waist Beach Boho Yoga Trousers",
  priceCents: 2200,
  image: "images/products/56.webp",
  keywords: [
    "coofandy",
    "cotton linen pants",
    "harem pants",
    "boho pants",
    "casual trousers",
    "beach wear",
    "yoga",
    "elastic waist",
    "mens fashion",
    "lightweight"
  ],
  rating: {
    stars: 4.0,
    count: 1587
  }
},
{
  id: "travel-garment-suit-bags-2pack-1",
  name: "2-Pack Travel Garment Suit Bags",
  priceCents: 1899,
  image: "images/products/57.webp",
  keywords: [
    "garment bags",
    "suit bags",
    "travel storage",
    "closet organizer",
    "protective cover",
    "luggage",
    "men",
    "wardrobe",
    "clothing protection"
  ],
  rating: {
    stars: 4.0,
    count: 1278
  }
},
{
  id: "haggar-premium-comfort-slim-fit-pant-1",
  name: "Haggar Men's Premium Comfort Dress Slim Fit Flat Front Pant",
  priceCents: 3599,
  image: "images/products/58.webp",
  keywords: [
    "haggar",
    "dress pants",
    "premium comfort",
    "slim fit",
    "flat front",
    "men",
    "office wear",
    "formal",
    "work trousers"
  ],
  rating: {
    stars: 4.5,
    count: 1934
  }
},
{
  id: "brooks-brothers-oxford-shirt-1",
  name: "Brooks Brothers Men's Long Sleeve Button Down Original Oxford Cotton Shirt, Solid",
  priceCents: 4289,
  image: "images/products/59.webp",
  keywords: [
    "brooks brothers",
    "oxford shirt",
    "button down",
    "long sleeve",
    "cotton shirt",
    "classic fit",
    "mens dress shirt",
    "solid",
    "formal wear",
    "wardrobe essential"
  ],
  rating: {
    stars: 4.5,
    count: 2148
  }
},

{
  id: "bjdbus-formal-tuxedo-set-1",
  name: "BJDBUS Men's Formal Tuxedo Suit Set (5-Piece)",
  priceCents: 599,
  image: "images/products/60.webp",
  keywords: [
    "bjdbus",
    "tuxedo",
    "formal suit",
    "5 piece set",
    "wedding suit",
    "party wear",
    "dress suit",
    "men",
    "blazer set",
    "formalwear"
  ],
  rating: {
    stars: 4.0,
    count: 1324
  }
},
{
  id: "kimbora-54-garment-bag-1",
  name: "KIMBORA 54\" Garment Suit Bag with Handles",
  priceCents: 1590,
  image: "images/products/61.webp",
  keywords: [
    "kimbora",
    "garment bag",
    "suit bag",
    "closet storage",
    "travel",
    "protective cover",
    "mens wardrobe",
    "carry handles",
    "long suit bag"
  ],
  rating: {
    stars: 4.0,
    count: 1183
  }
},
{
  id: "wrangler-947-regular-fit-jeans-1",
  name: "Wrangler Men's Jeans 947 Regular Fit Stretch - 0947Str",
  priceCents: 2279,
  image: "images/products/62.webp",
  keywords: [
    "wrangler",
    "jeans",
    "regular fit",
    "stretch denim",
    "0947str",
    "men's pants",
    "classic jeans",
    "casual wear",
    "durable",
    "everyday jeans"
  ],
  rating: {
    stars: 4.5,
    count: 1761
  }
},
{
  id: "mens-floral-tuxedo-set-1",
  name: "Men's Floral Dinner Party Prom Wedding Stylish Tuxedo Suits for Men One Button Dinner Jacket Pants Set",
  priceCents: 4099,
  image: "images/products/63.webp",
  keywords: [
    "floral tuxedo",
    "prom suit",
    "wedding suit",
    "dinner jacket",
    "pants set",
    "stylish tuxedo",
    "formal wear",
    "mens fashion",
    "one button suit",
    "party wear"
  ],
  rating: {
    stars: 4.5,
    count: 1689
  }
},

{
  id: "champro-baseball-umpire-pant-1",
  name: "CHAMPRO The Field Polyester Baseball Umpire Pant",
  priceCents: 1599,
  image: "images/products/64.webp",
  keywords: [
    "champro",
    "umpire pants",
    "baseball",
    "polyester",
    "sportswear",
    "mens athletic",
    "field wear",
    "official gear",
    "uniform pants"
  ],
  rating: {
    stars: 4.0,
    count: 1214
  }
},

{
  id: "heavy-duty-garment-bags-2pack-1",
  name: "2 Pack Heavy Duty Garment Suit Bags",
  priceCents: 1490,
  image: "images/products/65.webp",
  keywords: [
    "garment bags",
    "suit bags",
    "heavy duty",
    "closet storage",
    "protective cover",
    "travel",
    "wardrobe organizer",
    "men",
    "clothing protection",
    "2 pack"
  ],
  rating: {
    stars: 4.0,
    count: 1376
  }
},
{
  id: "zilink-43-garment-bags-1",
  name: "Zilink 43\" Suit Garment Bags",
  priceCents: 1490,
  image: "images/products/66.webp",
  keywords: [
    "zilink",
    "garment bag",
    "suit bag",
    "closet storage",
    "wardrobe",
    "protective cover",
    "travel bag",
    "clothing protection",
    "men"
  ],
  rating: {
    stars: 4.0,
    count: 1189
  }
},
{
  id: "heavy-duty-travel-garment-bag-1",
  name: "Heavy Duty Travel Garment Bag",
  priceCents: 1099,
  image: "images/products/67.webp",
  keywords: [
    "garment bag",
    "suit bag",
    "travel bag",
    "heavy duty",
    "clothing protection",
    "wardrobe storage",
    "protective cover",
    "luggage",
    "mens travel"
  ],
  rating: {
    stars: 4.0,
    count: 1047
  }
},
{
  id: "tolaccea-tsa-travel-backpack-1",
  name: "Tolaccea TSA Travel Backpack (15.6\")",
  priceCents: 5089,
  image: "images/products/68.webp",
  keywords: [
    "tolaccea",
    "travel backpack",
    "tsa approved",
    "laptop backpack",
    "15.6 inch",
    "business bag",
    "carry on",
    "travel gear",
    "men",
    "commuter"
  ],
  rating: {
    stars: 4.5,
    count: 2147
  }
},
{
  id: "ynd-mens-floral-tuxedo-jacket-1",
  name: "YND Men's Floral Tuxedo Suit Jacket, Slim Fit Paisley Blazer, Shawl Lapel with Bow Tie for Party Prom Wedding Dinner",
  priceCents: 4284,
  image: "images/products/69.webp",
  keywords: [
    "ynd",
    "tuxedo",
    "floral blazer",
    "paisley jacket",
    "wedding suit",
    "prom suit",
    "dinner jacket",
    "mens blazer",
    "shawl lapel",
    "party outfit"
  ],
  rating: {
    stars: 4.5,
    count: 1739
  }
},

{
  id: "kimbora-gusseted-garment-bag-43",
  name: "KIMBORA Gusseted Suit Travel Garment Bag (43\")",
  priceCents: 1000,
  image: "images/products/70.webp",
  keywords: [
    "kimbora",
    "garment bag",
    "suit bag",
    "travel bag",
    "clothing storage",
    "protective cover",
    "wardrobe organizer"
  ],
  rating: {
    stars: 4.5,
    count: 1603
  }
},

{
  id: "mage-male-velvet-slim-fit-blazer",
  name: "MAGE MALE Men's Velvet Slim Fit Suit Blazer Jacket Shawl Lapel One Button Dinner Prom Wedding Tuxedo",
  priceCents: 3099,
  image: "images/products/71.webp",
  keywords: [
    "mage male",
    "velvet blazer",
    "tuxedo",
    "slim fit",
    "shawl lapel",
    "formal jacket",
    "wedding suit",
    "prom suit",
    "dinner jacket"
  ],
  rating: {
    stars: 4.5,
    count: 2217
  }
},

{
  id: "hugo-gellot-grainy-leather-belt",
  name: "HUGO Men's Gellot Grainy Leather Belt",
  priceCents: 5088,
  image: "images/products/72.webp",
  keywords: [
    "hugo",
    "leather belt",
    "grain leather",
    "mens belt",
    "designer belt",
    "dress belt"
  ],
  rating: {
    stars: 4.5,
    count: 1401
  }
},
{
  id: "travel-garment-bag-54",
  name: "54\" Travel Garment Bag with Pockets",
  priceCents: 572,
  image: "images/products/73.webp",
  keywords: [
    "garment bag",
    "travel bag",
    "suit storage",
    "clothes bag",
    "foldable travel"
  ],
  rating: {
    stars: 4.5,
    count: 1377
  }
},
{
  id: "soperwillton-5pcs-handbag-set",
  name: "Soperwillton Handbags and Purses for Women Shoulder Tote Bags Top Handle Satchel Purse Set 5pcs",
  priceCents: 2280,
  image: "images/products/74.webp",
  keywords: [
    "women",
    "handbag",
    "purse",
    "tote",
    "satchel",
    "bag set",
    "shoulder bag",
    "fashion",
    "accessories"
  ],
  rating: {
    stars: 4.5,
    count: 1284
  }
},

{
  id: "travel-shoe-bag-grey",
  name: "Shoe Bag for Travel, Water-Resistant Shoe Pouch for Gym, Odor-Resistant Soccer Cleats Bag for Sport (Grey, 1-Pack)",
  priceCents: 899,
  image: "images/products/75.webp",
  keywords: [
    "shoe bag",
    "travel",
    "water resistant",
    "gym",
    "soccer cleats",
    "sports bag",
    "pouch",
    "grey"
  ],
  rating: {
    stars: 4.0,
    count: 947
  }
},
{
  id: "ladies-fashion-top-handle-tote",
  name: "Purses and Handbags for Women Fashion Ladies PU Leather Top Handle Satchel Shoulder Tote Bags",
  priceCents: 1799,
  image: "images/products/76.webp",
  keywords: [
    "women",
    "handbag",
    "purse",
    "tote",
    "satchel",
    "shoulder bag",
    "fashion",
    "leather",
    "ladies",
    "accessories"
  ],
  rating: {
    stars: 4.5,
    count: 1122
  }
},
{
  id: "grace-karin-vneck-work-blouse",
  name: "GRACE KARIN Women's Long Sleeve V Neck Tops Button Down Collared Work Business Blouses Casual Shirt",
  priceCents: 899,
  image: "images/products/77.webp",
  keywords: [
    "women",
    "blouse",
    "long sleeve",
    "v neck",
    "button down",
    "collared",
    "work wear",
    "business",
    "casual",
    "shirt",
    "tops"
  ],
  rating: {
    stars: 4.0,
    count: 1006
  }
},

{
  id: "pahajim-fashion-satchel-tote",
  name: "Pahajim Women Fashion Purses and Handbags Shoulder Tote Bags Top Handle Satchel for Women",
  priceCents: 2073,
  image: "images/products/78.webp",
  keywords: [
    "women",
    "handbag",
    "purse",
    "tote",
    "satchel",
    "shoulder bag",
    "fashion",
    "accessories",
    "top handle",
    "ladies bag"
  ],
  rating: {
    stars: 4.5,
    count: 1348
  }
},
 {
  id: "wiholl-lightweight-fall-sweater",
  name: "WIHOLL Long Sleeve Shirts for Women Lightweight Sweaters Fall Outfits 2025 Color Block Winter Clothing Dressy Casual Soft",
  priceCents: 1287,
  image: "images/products/79.webp",
  keywords: [
    "women",
    "sweater",
    "long sleeve",
    "fall outfits",
    "winter clothing",
    "color block",
    "casual",
    "soft",
    "lightweight",
    "tops"
  ],
  rating: {
    stars: 4.0,
    count: 903
  }
},

{
  id: "iwollence-knot-waist-wide-leg-pants",
  name: "IWOLLENCE Knot Waist Wide Leg Pants",
  priceCents: 1723,
  image: "images/products/80.webp",
  keywords: [
    "women",
    "pants",
    "wide leg",
    "knot waist",
    "casual",
    "summer",
    "loose fit",
    "fashion",
    "outfits"
  ],
  rating: {
    stars: 4.0,
    count: 982
  }
},

{
  id: "onlyeasy-underbed-shoe-organizer-2pack",
  name: "Onlyeasy Under Bed Shoe Organizer (Set of 2)",
  priceCents: 1099,
  image: "images/products/81.webp",
  keywords: [
    "shoe organizer",
    "storage",
    "under bed",
    "closet",
    "space saving",
    "home organization",
    "set of 2",
    "shoes"
  ],
  rating: {
    stars: 4.5,
    count: 1214
  }
},
{
  id: "womens-4pcs-fashion-tote-set",
  name: "Women's Fashion Handbags Tote Bags Shoulder Bag Top Handle Satchel Purse Set 4pcs",
  priceCents: 2599,
  image: "images/products/82.webp",
  keywords: [
    "women",
    "handbag",
    "purse",
    "tote",
    "satchel",
    "shoulder bag",
    "bag set",
    "fashion",
    "accessories",
    "4 piece set"
  ],
  rating: {
    stars: 4.5,
    count: 1672
  }
},
{
  id: "pahajim-4pcs-butterfly-chain-set",
  name: "Pahajim Women Fashion Handbags set 4pcs PU Leather Shoulder Bags Tote Bags Wallets Butterfly Chain Accessories",
  priceCents: 2299,
  image: "images/products/83.webp",
  keywords: [
    "women",
    "handbag set",
    "purse",
    "tote",
    "wallet",
    "shoulder bag",
    "satchel",
    "fashion",
    "accessories",
    "butterfly",
    "leather"
  ],
  rating: {
    stars: 4.5,
    count: 1389
  }
},
{
  id: "sampeel-color-block-long-sleeve",
  name: "Sampeel Long Sleeve Shirts for Women Color Block Casual Tops Fall Outfits 2025 Basic Tees Trendy Clothes",
  priceCents: 982,
  image: "images/products/84.webp",
  keywords: [
    "women",
    "long sleeve",
    "color block",
    "casual tops",
    "fall outfits",
    "basic tees",
    "fashion",
    "trendy",
    "clothes",
    "tops"
  ],
  rating: {
    stars: 4.0,
    count: 851
  }
},
{
  id: "xiaoyu-crossbody-top-handle-satchel",
  name: "Xiaoyu Fashion Purses and Handbags for Women Ladies Crossbody Bags Top Handle Satchel Shoulder Bags Small Totes",
  priceCents: 1800,
  image: "images/products/85.webp",
  keywords: [
    "women",
    "handbag",
    "purse",
    "crossbody",
    "small tote",
    "satchel",
    "shoulder bag",
    "fashion",
    "ladies",
    "accessories"
  ],
  rating: {
    stars: 4.5,
    count: 1047
  }
},
{
  id: "misslo-travel-shoe-bags-4pack",
  name: "MISSLO Portable Nylon Travel Shoe Bags with Zipper Closure (Pack 4, Black)",
  priceCents: 599,
  image: "images/products/86.webp",
  keywords: [
    "shoe bag",
    "travel",
    "portable",
    "nylon",
    "zipper closure",
    "black",
    "storage",
    "pack of 4",
    "organization"
  ],
  rating: {
    stars: 4.0,
    count: 912
  }
},

{
  id: "womens-floral-puff-sleeve-cardigan",
  name: "Women's Floral Print Puff Sleeve Kimono Cardigan Loose Cover Up Casual Blouse Tops",
  priceCents: 529,
  image: "images/products/87.webp",
  keywords: [
    "women",
    "kimono",
    "cardigan",
    "floral print",
    "cover up",
    "puff sleeve",
    "blouse",
    "casual",
    "summer",
    "swim cover"
  ],
  rating: {
    stars: 3.5,
    count: 874
  }
},

{
  id: "jomedesign-long-sleeve-casual-top",
  name: "JomeDesign Womens Tops Long Sleeve Crew Neck Shirts Loose Casual Blouse Fall Clothes",
  priceCents: 553,
  image: "images/products/88.webp",
  keywords: [
    "women",
    "tops",
    "long sleeve",
    "crew neck",
    "casual blouse",
    "fall outfits",
    "comfortable",
    "loose fit",
    "everyday wear"
  ],
  rating: {
    stars: 4.0,
    count: 917
  }
},

{
  id: "automet-lace-summer-dressy-top",
  name: "AUTOMET Women's Short Sleeve Shirts Dressy Lace Summer Tops 2025 Spring Trendy Casual T-Shirts Cute Work Outfits Blouses",
  priceCents: 1099,
  image: "images/products/89.webp",
  keywords: [
    "women",
    "short sleeve",
    "lace top",
    "summer",
    "spring",
    "dressy",
    "casual fashion",
    "t-shirt",
    "work outfits",
    "blouses",
    "trendy"
  ],
  rating: {
    stars: 4.5,
    count: 1256
  }
},

{
  id: "kimbora-trifold-garment-bag",
  name: "KIMBORA 54\" Trifold Dress Garment Bags for Travel Gusseted Suit Cover with 2 Large Mesh Shoe Pockets (Black)",
  priceCents: 899,
  image: "images/products/90.webp",
  keywords: [
    "garment bag",
    "travel",
    "trifold",
    "dress cover",
    "suit bag",
    "storage",
    "mesh pockets",
    "kimbora",
    "black",
    "luggage"
  ],
  rating: {
    stars: 4.0,
    count: 1011
  }
},
{
  id: "ytonet-2in1-garment-duffle-bag",
  name: "Ytonet 2-in-1 Travel Garment Duffle Bag",
  priceCents: 1899,
  image: "images/products/91.webp",
  keywords: [
    "travel bag",
    "garment bag",
    "duffle bag",
    "luggage",
    "carry on",
    "2 in 1",
    "business travel",
    "overnight bag",
    "suit storage"
  ],
  rating: {
    stars: 4.5,
    count: 1487
  }
},
{
  id: "womens-canvas-slipon-sneakers",
  name: "Women’s Casual Canvas Slip-On Sneakers",
  priceCents: 1790,
  image: "images/products/92.webp",
  keywords: [
    "sneakers",
    "canvas shoes",
    "slip on",
    "casual shoes",
    "everyday wear",
    "lightweight",
    "comfort"
  ],
  rating: {
    stars: 4.5,
    count: 3201
  }
},

{
  id: "womens-slipon-canvas-loafers",
  name: "Women's Slip on Shoes Canvas Sneakers Loafers Non Slip Shoes Low Top Casual Shoes",
  priceCents: 1799,
  image: "images/products/93.webp",
  keywords: [
    "women shoes",
    "slip on",
    "canvas sneakers",
    "loafers",
    "casual",
    "comfort",
    "non slip"
  ],
  rating: {
    stars: 4.5,
    count: 4502
  }
},
{
  id: "mossio-shoe-bag-3pair",
  name: "Mossio Shoe Bag Holds 3 Pair of Shoes for Travel and Daily Use Storage Pouch",
  priceCents: 1098,
  image: "images/products/94.webp",
  keywords: [
    "shoe bag",
    "travel storage",
    "mossio",
    "organizer",
    "gym",
    "packing"
  ],
  rating: {
    stars: 4.5,
    count: 3210
  }
},
{
  id: "dream-pairs-kitten-heel-slingback",
  name: "DREAM PAIRS Women's Kitten Heel Slingback Pointed Closed Toe Low Stiletto Heels Dress Bridal Elegant Wedding Pumps Shoes",
  priceCents: 1999,
  image: "images/products/95.webp",
  keywords: [
    "heels",
    "dress shoes",
    "wedding shoes",
    "women's fashion",
    "dream pairs",
    "kitten heel",
    "slingback"
  ],
  rating: {
    stars: 4.5,
    count: 5982
  }
},

{
  id: "charming-tailor-elegant-pleated-clutch",
  name: "CHARMING TAILOR Clutch Evening Bag Elegant Pleated Satin Formal Handbag Simple Classy Purse for Women",
  priceCents: 2099,
  image: "images/products/96.webp",
  keywords: [
    "clutch",
    "evening bag",
    "formal purse",
    "wedding handbag",
    "party bag",
    "satin clutch",
    "women's accessories",
    "elegant"
  ],
  rating: {
    stars: 4.5,
    count: 3248
  }
},
{
  id: "grace-karin-cropped-paperbag-pants",
  name: "GRACE KARIN Women's Cropped Paper Bag Waist Pants with Pockets",
  priceCents: 2526,
  image: "images/products/97.webp",
  keywords: [
    "grace karin",
    "women's pants",
    "paper bag waist",
    "cropped pants",
    "casual wear",
    "high waist",
    "office casual",
    "pockets"
  ],
  rating: {
    stars: 4.5,
    count: 2841
  }
},
{
  id: "weeso-patchwork-vneck-tunic",
  name: "WEESO Womens Long Sleeve Tunic Tops Patchwork Sleeve Casual V Neck Loose Blouses Trendy 2023",
  priceCents: 899,
  image: "images/products/98.webp",
  keywords: [
    "weeso",
    "women",
    "tunic",
    "v neck",
    "patchwork sleeve",
    "long sleeve",
    "loose fit",
    "casual top",
    "trendy"
  ],
  rating: {
    stars: 4.5,
    count: 1934
  }
},
{
  id: "happy-sailed-tweed-vest-blazer",
  name: "Happy Sailed Women’s Vest Tops Fall Winter Sleeveless Tweed Blazer Jackets Double Breasted Work Suit with Pockets",
  priceCents: 2283,
  image: "images/products/99.webp",
  keywords: [
    "happy sailed",
    "women",
    "tweed vest",
    "sleeveless blazer",
    "double breasted",
    "workwear",
    "fall fashion",
    "winter fashion",
    "pockets"
  ],
  rating: {
    stars: 4.5,
    count: 2147
  }
},

{
  id: "dokotoo-alicia-floral-smocked-blouse",
  name: "Dokotoo Women's Casual V Neck Alicia Floral Print Smocked Long Sleeve Chiffon Blouses Bohemian Top Shirts",
  priceCents: 1799,
  image: "images/products/100.webp",
  keywords: [
    "dokotoo",
    "women blouse",
    "floral print",
    "smocked top",
    "v neck blouse",
    "bohemian top",
    "chiffon blouse",
    "long sleeve shirt",
    "casual fashion"
  ],
  rating: {
    stars: 4.5,
    count: 1874
  }
},
{
  id: "dokotoo-round-neck-pleated-top",
  name: "Dokotoo Women's Casual Round Neck Basic Pleated Tops Short Sleeve Loose Fit Curved Keyhole Back Chiffon Blouses Tshirts",
  priceCents: 1189,
  image: "images/products/101.webp",
  keywords: [
    "dokotoo",
    "round neck top",
    "pleated blouse",
    "short sleeve",
    "loose fit",
    "chiffon blouse",
    "casual top",
    "women t-shirt",
    "summer fashion"
  ],
  rating: {
    stars: 4.0,
    count: 1432
  }
},
{
  id: "lyaner-vneck-highlow-blouse",
  name: "LYANER Women's V Neck High Low Hem Short Sleeve Flowy Blouse Tunic T-Shirt Top",
  priceCents: 892,
  image: "images/products/102.webp",
  keywords: [
    "lyaner",
    "v neck blouse",
    "high low hem",
    "short sleeve",
    "flowy shirt",
    "tunic top",
    "women fashion",
    "summer top",
    "casual wear"
  ],
  rating: {
    stars: 4.0,
    count: 1376
  }
},
{
  id: "heavy-duty-garment-bags-2pack",
  name: "2 Pack Heavy Duty Garment Bags for Travel Suit Bags, Dress Bags, Garment Bags for Hanging Clothes with Pockets",
  priceCents: 1157,
  image: "images/products/103.webp",
  keywords: [
    "garment bags",
    "suit bag",
    "dress bag",
    "travel bag",
    "hanging clothes",
    "closet storage",
    "cosplay storage",
    "coat bag",
    "protective clothing cover"
  ],
  rating: {
    stars: 4.5,
    count: 1864
  }
},
{
  id: "womens-button-down-summer-shirt-dress",
  name: "Women's Casual Button Down Shirts Dress Summer Short Sleeve Loose Tops Collar T-Shirts Business Mini Dress 2025 Trendy",
  priceCents: 1999,
  image: "images/products/104.webp",
  keywords: [
    "shirt dress",
    "summer dress",
    "button down",
    "casual dress",
    "women fashion",
    "mini dress",
    "short sleeve",
    "loose fit",
    "2025 trendy"
  ],
  rating: {
    stars: 4.5,
    count: 1732
  }
},
{
  id: "prettygarden-lace-crochet-summer-top",
  name: "PRETTYGARDEN Women's Shirts Summer Casual Crewneck Lace Crochet Short Sleeve Blouses Cute Floral Print Loose Tunic Tops",
  priceCents: 1293,
  image: "images/products/105.webp",
  keywords: [
    "prettygarden",
    "lace crochet",
    "summer top",
    "women blouse",
    "crewneck",
    "floral print",
    "loose tunic",
    "casual wear",
    "short sleeve"
  ],
  rating: {
    stars: 4.0,
    count: 1488
  }
},
{
  id: "remelon-high-low-front-split-tunic",
  name: "Remelon Women's High Low Tunics Long Sleeve Front Split Tops Casual Loose Blouse Cover Ups",
  priceCents: 2022,
  image: "images/products/106.webp",
  keywords: [
    "remelon",
    "high low tunic",
    "front split top",
    "long sleeve blouse",
    "casual loose",
    "cover up",
    "women tops",
    "fall fashion",
    "layering"
  ],
  rating: {
    stars: 4.5,
    count: 1764
  }
},
{
  id: "opoipin-crew-neck-split-hem-tunic",
  name: "OPOIPIN Women's Crew Neck Split Slit Hem Short Sleeve Slim Fit Tee Top Long Shirt Tunic",
  priceCents: 1088,
  image: "images/products/107.webp",
  keywords: [
    "opoipin",
    "crew neck",
    "split hem",
    "slit hem",
    "slim fit tee",
    "long tunic shirt",
    "women tops",
    "summer fashion",
    "basic casual"
  ],
  rating: {
    stars: 4.0,
    count: 1642
  }
},
{
  id: "translucent-hanging-garment-bags-set",
  name: "Hanging Garment Bags 7 Piece Set - 60 Inch Translucent Dust Proof Clothes Bag White Breathable Full Zipper Dust Cover for Suit Dance Costumes Gown Dress | 4 Portable Travel Shoe Bags",
  priceCents: 1199,
  image: "images/products/108.webp",
  keywords: [
    "garment bags",
    "clothes cover",
    "dust proof bag",
    "breathable bag",
    "dress storage",
    "suit protector",
    "closet organizer",
    "travel shoe bags",
    "wardrobe storage"
  ],
  rating: {
    stars: 4.5,
    count: 1734
  }
},
{
  id: "ailaka-portable-shoe-bag",
  name: "Ailaka Portable Oxford Travel Shoe Bag, Waterproof Shoe Packing Storage Organizer with Zipper Closure",
  priceCents: 999,
  image: "images/products/109.webp",
  keywords: [
    "shoe bag",
    "travel organizer",
    "waterproof bag",
    "shoe storage",
    "packing organizer",
    "oxford fabric",
    "portable bag",
    "luggage accessories",
    "travel gear"
  ],
  rating: {
    stars: 4.0,
    count: 1467
  }
},
{
  id: "vrtige-asymmetrical-hem-tee",
  name: "Vrtige Women's Summer Crewneck Short Sleeve Split Slit Asymmetrical Hem Long Fitted Tee Top Shirt",
  priceCents: 1485,
  image: "images/products/110.webp",
  keywords: [
    "vrtige",
    "women",
    "asymmetrical hem",
    "long tee",
    "summer top",
    "fitted shirt",
    "crewneck",
    "casual wear",
    "slit top",
    "fashion blouse"
  ],
  rating: {
    stars: 4.5,
    count: 1783
  }
},
{
  id: "women-summer-lace-hem-chiffon-top",
  name: "Womens Summer Tops Crewneck Short Sleeve Shirts Casual Chiffon Blouses Flowy Lace Hem Boho Clothing Trendy 2025",
  priceCents: 1379,
  image: "images/products/111.webp",
  keywords: [
    "women",
    "summer top",
    "crewneck shirt",
    "short sleeve blouse",
    "chiffon top",
    "flowy blouse",
    "lace hem",
    "boho clothing",
    "casual fashion",
    "trendy 2025"
  ],
  rating: {
    stars: 4.5,
    count: 1657
  }
},
{
  id: "ekaliy-sexy-high-low-ruffle-tunic",
  name: "Ekaliy Women Sexy Short Sleeve Bodycon High Low Asymmetrical Ruffle Tunics Blouse Shirt Top Dress",
  priceCents: 2399,
  image: "images/products/112.webp",
  keywords: [
    "women",
    "sexy blouse",
    "bodycon shirt",
    "high low tunic",
    "asymmetrical top",
    "ruffle blouse",
    "dress top",
    "summer fashion",
    "party outfit",
    "trendy 2025"
  ],
  rating: {
    stars: 4.5,
    count: 2143
  }
},
{
  id: "ekaliy-one-shoulder-ruffle-tunic",
  name: "Ekaliy Women Sexy One Shoulder Sleeveless Bodycon High Low Asymmetrical Ruffle Tunics Blouse Shirt Top Dress",
  priceCents: 2099,
  image: "images/products/113.webp",
  keywords: [
    "ekaliy",
    "women",
    "one shoulder top",
    "bodycon tunic",
    "high low blouse",
    "ruffle shirt",
    "asymmetrical top",
    "summer fashion",
    "party outfit",
    "elegant dress top"
  ],
  rating: {
    stars: 4.5,
    count: 1843
  }
},
{
  id: "simple-houseware-60-garment-bag",
  name: "Simple Houseware 60'' Travel Garment Bag for Suits, Dresses, Coats, Tuxedos, Heavy Duty 300D Polyester",
  priceCents: 1294,
  image: "images/products/114.webp",
  keywords: [
    "simple houseware",
    "garment bag",
    "travel bag",
    "suit bag",
    "dress storage",
    "coat protector",
    "tuxedo bag",
    "heavy duty",
    "closet storage",
    "luggage accessories"
  ],
  rating: {
    stars: 4.5,
    count: 2374
  }
},
{
  id: "travel-drawstring-shoe-bags-4pack",
  name: "Travel Shoe Bags with Drawstring and Center Divider (Black) - Set of 4 Soft Nylon Shoe Tote Bags (18\" x 14\")",
  priceCents: 1822,
  image: "images/products/115.webp",
  keywords: [
    "travel shoe bags",
    "shoe organizer",
    "shoe storage",
    "nylon shoe bag",
    "packing accessories",
    "luggage organizer",
    "drawstring bags",
    "portable shoe case",
    "travel accessories"
  ],
  rating: {
    stars: 4.0,
    count: 1487
  }
},
{
  id: "fashion-pu-leather-top-handle-tote",
  name: "Purses and Handbags for Women Fashion Ladies PU Leather Top Handle Satchel Shoulder Tote Bags",
  priceCents: 2000,
  image: "images/products/116.webp",
  keywords: [
    "purse",
    "handbag",
    "women bag",
    "leather tote",
    "satchel",
    "shoulder bag",
    "fashion accessories",
    "ladies purse",
    "top handle bag"
  ],
  rating: {
    stars: 4.5,
    count: 1742
  }
},
{
  id: "sumgogo-medieval-belt-costume-set",
  name: "SUMGOGO 4 Pcs Halloween Renaissance Belt Pouch Witch Bottle Skirt Hikes Medieval Viking Pirate Leather Belt Costume Set",
  priceCents: 1734,
  image: "images/products/117.webp",
  keywords: [
    "renaissance",
    "medieval",
    "pirate costume",
    "belt pouch",
    "witch cosplay",
    "viking accessories",
    "halloween costume",
    "leather belt set"
  ],
  rating: {
    stars: 4.0,
    count: 1623
  }
},
{
  id: "chouyatou-puff-sleeve-eyelet-lace-top",
  name: "chouyatou Women's Puff Sleeve V-Neck Eyelet Lace Summer Tops Blouses Crochet Short Sleeve Cotton T-Shirts",
  priceCents: 1822,
  image: "images/products/118.webp",
  keywords: [
    "chouyatou",
    "puff sleeve",
    "eyelet lace",
    "summer blouse",
    "v neck top",
    "crochet shirt",
    "cotton t shirt",
    "women fashion"
  ],
  rating: {
    stars: 4.5,
    count: 2491
  }
},
{
  id: "whitmor-zippered-gown-bag",
  name: "Whitmor 5003-20 Zippered Gown Bag, Clear",
  priceCents: 599,
  image: "images/products/119.webp",
  keywords: [
    "whitmor",
    "gown bag",
    "zippered cover",
    "dress storage",
    "closet organizer",
    "garment protection",
    "travel garment bag"
  ],
  rating: {
    stars: 4.0,
    count: 1847
  }
},
{
  id: "convertible-garment-duffle-bag",
  name: "Convertible Garment Bags for Travel - Carry on Garment Duffle Bag with Backpack Straps for Men Women, 4 in 1 Large Travel Duffel Bags with Shoes Compartment Hanging Suit Dress Weekender Bag",
  priceCents: 2299,
  image: "images/products/120.webp",
  keywords: [
    "garment bag",
    "travel duffle",
    "carry on",
    "weekender bag",
    "suit bag",
    "hanging garment",
    "shoes compartment",
    "men travel bag",
    "women travel bag"
  ],
  rating: {
    stars: 4.5,
    count: 3127
  }
},
{
  id: "soperwillton-4pcs-handbag-set",
  name: "Soperwillton Fashion Handbag for Women Shoulder Bag Top Handle Satchel Hobo Tote Bag Purse Set 4pcs",
  priceCents: 2388,
  image: "images/products/121.webp",
  keywords: [
    "handbag set",
    "purse set",
    "women fashion bag",
    "hobo tote",
    "satchel bag",
    "shoulder bag",
    "4pcs purse set",
    "top handle bag"
  ],
  rating: {
    stars: 4.5,
    count: 2567
  }
},
{
  id: "2pack-heavy-duty-garment-bags-54",
  name: "2 Pack Heavy Duty Garment Bags for Travel Suit Bags, Dress Bags, Garment Bags for Hanging Clothes with Pockets (Black, 2Pack 54\")",
  priceCents: 1899,
  image: "images/products/122.webp",
  keywords: [
    "garment bag",
    "travel suit bag",
    "dress storage",
    "hanging clothes bag",
    "heavy duty garment protector",
    "closet storage",
    "coat bag",
    "men suit holder",
    "travel organizer"
  ],
  rating: {
    stars: 4.5,
    count: 2148
  }
},
{
  id: "whitmor-deluxe-zippered-dress-bag",
  name: "Whitmor Deluxe Zippered Dress Bag, Black",
  priceCents: 877,
  image: "images/products/123.webp",
  keywords: [
    "whitmor",
    "dress bag",
    "zippered garment bag",
    "closet storage",
    "dress protector",
    "travel garment",
    "black garment cover",
    "clothing storage"
  ],
  rating: {
    stars: 4.0,
    count: 1634
  }
},
{
  id: "womens-long-sleeve-casual-tunic-sweatshirt",
  name: "Sweaters for Women Long Sleeve Crewneck Sweatshirt Loose Casual Tunic Tops",
  priceCents: 873,
  image: "images/products/124.webp",
  keywords: [
    "women sweater",
    "crewneck sweatshirt",
    "long sleeve tunic",
    "casual top",
    "fall fashion",
    "winter wear",
    "loose fit",
    "comfy sweatshirt"
  ],
  rating: {
    stars: 4.0,
    count: 1421
  }
},
{
  id: "soperwillton-5pcs-handbag-set",
  name: "Soperwillton Handbags and Purses for Women Shoulder Tote Bags Top Handle Satchel Purse Set 5pcs",
  priceCents: 2499,
  image: "images/products/125.webp",
  keywords: [
    "handbag set",
    "soperwillton purse",
    "women tote bag",
    "satchel purse",
    "top handle bag",
    "fashion handbag",
    "5pcs purse set",
    "leather handbag"
  ],
  rating: {
    stars: 4.5,
    count: 1988
  }
},
{
  id: "women-slipon-canvas-sneakers",
  name: "Women Canvas Sneaker Slip On Non Slip Casual Shoes Lace Up Canvas Low Top White Shoes Loafers for Women Fashion Black Sneaker",
  priceCents: 1753,
  image: "images/products/126.webp",
  keywords: [
    "canvas sneakers",
    "women casual shoes",
    "slip on shoes",
    "lace up sneakers",
    "low top shoes",
    "fashion sneakers",
    "black sneakers",
    "everyday wear"
  ],
  rating: {
    stars: 4.5,
    count: 1744
  }
},
{
  id: "xiaoyu-crossbody-top-handle-satchel",
  name: "Xiaoyu Fashion Purses and Handbags for Women Ladies Crossbody Bags Top Handle Satchel Shoulder Bags Small Totes",
  priceCents: 1976,
  image: "images/products/127.webp",
  keywords: [
    "xiaoyu handbags",
    "crossbody bag",
    "top handle purse",
    "ladies satchel",
    "small tote",
    "shoulder bag",
    "fashion purse",
    "daily handbag"
  ],
  rating: {
    stars: 4.5,
    count: 1829
  }
},
{
  id: "premium-suit-carry-on-garment-bag",
  name: "Premium Suit Garment Bag Carry On - Hangs 4 Suits - Travel & Business with Shoulder Strap and Laptop Compartment",
  priceCents: 3800,
  image: "images/products/128.webp",
  keywords: [
    "garment bag",
    "suit travel bag",
    "carry on",
    "business travel",
    "laptop compartment",
    "hanging suits",
    "travel organizer",
    "men travel bag",
    "women travel bag"
  ],
  rating: {
    stars: 4.5,
    count: 2314
  }
},
{
  id: "iwollence-wide-leg-casual-pants",
  name: "IWOLLENCE Women's Wide Leg Pants with Pockets High Waist Adjustable Knot Loose Casual Trousers Business Work Casual Pants",
  priceCents: 2000,
  image: "images/products/129.webp",
  keywords: [
    "wide leg pants",
    "women trousers",
    "high waist pants",
    "business casual",
    "loose fit pants",
    "adjustable waist",
    "workwear pants",
    "pockets"
  ],
  rating: {
    stars: 4.0,
    count: 1784
  }
},
{
  id: "pahajim-fashion-tote-handbag",
  name: "Pahajim Women Fashion Purses and Handbags Shoulder Tote Bags Top Handle Satchel for Women",
  priceCents: 2299,
  image: "images/products/130.webp",
  keywords: [
    "pahajim",
    "handbag",
    "women purse",
    "tote bag",
    "shoulder bag",
    "satchel",
    "fashion bag",
    "everyday bag"
  ],
  rating: {
    stars: 4.5,
    count: 2318
  }
},
{
  id: "imcuzur-shoe-bag-travel",
  name: "IMCUZUR Shoe Bag for Travel, Shoes Packing Organizer Bag for Women and Men, Holds Shoes up to Size 13 (Black)",
  priceCents: 1433,
  image: "images/products/131.webp",
  keywords: [
    "imcuzur",
    "shoe bag",
    "travel organizer",
    "packing",
    "shoe storage",
    "portable shoe case",
    "men",
    "women"
  ],
  rating: {
    stars: 4.0,
    count: 1784
  }
},
{
  id: "72inch-long-dress-garment-bag",
  name: "72\" Dress Bag for Long Dress for Gowns Wedding Dress Quinceanera Dress Sweet 16 Dress Prom Dress with 3 Extra Pockets (White)",
  priceCents: 1088,
  image: "images/products/132.webp",
  keywords: [
    "dress bag",
    "long gown bag",
    "wedding dress cover",
    "quinceanera dress bag",
    "sweet 16 gown",
    "prom dress protector",
    "garment cover",
    "white"
  ],
  rating: {
    stars: 4.5,
    count: 2143
  }
},
{
  id: "univivi-43-garment-bag",
  name: "Univivi Garment Bags for Travel and Storage 43\" Hanging Suit Bag Clear Cover with Mesh Pockets for Coat, Shirt, Jackets, Dresses",
  priceCents: 1299,
  image: "images/products/133.webp",
  keywords: [
    "garment bag",
    "suit cover",
    "travel clothing bag",
    "coat protector",
    "clear garment cover",
    "mesh pockets",
    "dress storage",
    "univivi"
  ],
  rating: {
    stars: 4.0,
    count: 1786
  }
},
{
  id: "tote-bag-top-handle-stachel",
  name: "Tote Bag for Women Top Handle Satchel Purse and Handbags with Shoulder Strap",
  priceCents: 2199,
  image: "images/products/134.webp",
  keywords: [
    "tote bag",
    "handbag",
    "satchel purse",
    "shoulder bag",
    "women fashion bag",
    "top handle",
    "everyday purse"
  ],
  rating: {
    stars: 4.5,
    count: 1632
  }
},
{
  id: "zlmbagus-vintage-flap-tote",
  name: "ZLMBAGUS Women Vintage Flap Tote Top Handle Satchel Handbags PU Leather Clutch Purse Shoulder Bag",
  priceCents: 1999,
  image: "images/products/135.webp",
  keywords: [
    "zlmbagus",
    "vintage tote",
    "satchel handbag",
    "shoulder bag",
    "women purse",
    "top handle bag",
    "leather purse"
  ],
  rating: {
    stars: 4.0,
    count: 1744
  }
},
{
  id: "fanwoli-rolling-garment-bag",
  name: "Fanwoli 3-in-1 Rolling Garment Bag for Travel, Wheeled Carry-On Luggage with Shoe Storage & Detachable Organizer, Wrinkle-Free Compartment for Suits/Dresses/Wedding Gowns, Fits Most Airline Size",
  priceCents: 5299,
  image: "images/products/136.webp",
  keywords: [
    "fanwoli",
    "rolling garment bag",
    "carry on luggage",
    "travel bag",
    "wheeled suitcase",
    "wedding gown bag",
    "suit garment bag"
  ],
  rating: {
    stars: 4.5,
    count: 1829
  }
},
{
  id: "silky-toes-foldable-flats",
  name: "Silky Toes Foldable Flats for Women Purse Ballet Shoes Ballerina Slippers",
  priceCents: 1399,
  image: "images/products/137.webp",
  keywords: [
    "silky toes",
    "foldable flats",
    "ballet flats",
    "women slippers",
    "travel shoes",
    "purse flats",
    "comfortable flats"
  ],
  rating: {
    stars: 4.0,
    count: 1647
  }
},
{
  id: "jelly-clutch-crossbody-mini-tote",
  name: "Clutch Purses for Women Jelly Small Crossbody Bags Formal Evening Bags Top Handle Purses for Women Mini Tote Bag",
  priceCents: 1799,
  image: "images/products/138.webp",
  keywords: [
    "clutch",
    "evening bag",
    "crossbody",
    "mini tote",
    "jelly purse",
    "formal handbag",
    "party purse"
  ],
  rating: {
    stars: 4.5,
    count: 2141
  }
},
{
  id: "womens-fashion-4pcs-handbag-set",
  name: "Women's Fashion Handbags Tote Bags Shoulder Bag Top Handle Satchel Purse Set 4pcs",
  priceCents: 2288,
  image: "images/products/139.webp",
  keywords: [
    "handbag set",
    "tote bag",
    "shoulder bag",
    "top handle purse",
    "4 piece purse set",
    "fashion handbags"
  ],
  rating: {
    stars: 4.5,
    count: 2834
  }
},
{
  id: "kimbora-43-suit-garment-bag",
  name: "KIMBORA 43\" Suit Bags for Closet Storage and Travel, Gusseted Mesh Hanging Garment Bags for Men Suit",
  priceCents: 1899,
  image: "images/products/140.webp",
  keywords: [
    "garment bag",
    "suit storage",
    "closet organizer",
    "travel suit bag",
    "gusseted garment cover"
  ],
  rating: {
    stars: 4.5,
    count: 2147
  }
},
{
  id: "2-pack-heavy-duty-suit-bags",
  name: "DREAM PAIRS Women's Kitten Heel Slingback Pointed Closed Toe Low Stiletto Heels Dress Bridal Elegant Wedding Pumps Shoes",
  priceCents: 1999,
  image: "images/products/141.webp",
  keywords: [
    "suit bag",
    "garment bag",
    "closet storage",
    "travel suit cover",
    "mens suit protector"
  ],
  rating: {
    stars: 4.5,
    count: 1684
  }
},
{
  id: "angel-kiss-hobo-bags-vegan-leather",
  name: "Angel Kiss Hobo Bags for Women Vegan Leather Shoulder Purses and Handbags Ladies Roomy Tote Bags Purse with Crossbody Strap",
  priceCents: 2499,
  image: "images/products/142.webp",
  keywords: [
    "hobo bag",
    "shoulder purse",
    "vegan leather",
    "tote bag",
    "crossbody handbag",
    "women bag"
  ],
  rating: {
    stars: 4.5,
    count: 3127
  }
},
{
  id: "72inch-long-wedding-dress-garment-bag",
  name: "72\" Long Wedding Dress Garment Bag with 10\" Gusset, Bridal Gown Storage Cover with 4 Pockets, Dress Bag for Women Gowns, Prom, Ballgowns",
  priceCents: 879,
  image: "images/products/143.webp",
  keywords: [
    "wedding dress bag",
    "bridal gown bag",
    "prom dress cover",
    "long garment bag",
    "gown storage",
    "dress protector"
  ],
  rating: {
    stars: 4.0,
    count: 1674
  }
},
{
  id: "womens-foldable-flats-portable-ballet-slippers",
  name: "Women's Foldable Flats – Portable Ballet Slippers Shoes for Travel, Wedding – Fits in Purse",
  priceCents: 1099,
  image: "images/products/144.webp",
  keywords: [
    "foldable flats",
    "portable shoes",
    "ballet slippers",
    "travel flats",
    "wedding shoes",
    "purse shoes",
    "comfortable flats"
  ],
  rating: {
    stars: 4.5,
    count: 2146
  }
},
{
  id: "syeeiex-40-suit-bag-set-of-16",
  name: "Syeeiex 40\" Suit Bag, Set of 16 Garment Bags for Hanging Clothes, Suit Covers for Men or Women, Storage for Suits, Shirts, T-Shirts and Jackets",
  priceCents: 3299,
  image: "images/products/145.webp",
  keywords: [
    "suit bag",
    "garment bags",
    "hanging clothes storage",
    "closet organization",
    "travel suit cover",
    "clothing protector",
    "set of 16"
  ],
  rating: {
    stars: 5.0,
    count: 2574
  }
},
{
  id: "garment-bags-with-shoe-bag-set-of-5",
  name: "Garment Bags with Shoe Bag - Breathable Garment Bag Covers Set of 5 for Suit Carriers, Dresses, Linens, Storage or Travel - Suit Bag with Clear Window",
  priceCents: 2236,
  image: "images/products/146.webp",
  keywords: [
    "garment bags",
    "suit bag",
    "travel storage",
    "breathable cover",
    "clothes protector",
    "dress cover",
    "shoe bag"
  ],
  rating: {
    stars: 4.5,
    count: 1987
  }
},
{
  id: "silky-toes-baby-leggings",
  name: "Silky Toes Baby Leggings, Toddler Seamless Panty Soft Cotton Knit Pants for Girls and Boys",
  priceCents: 895,
  image: "images/products/147.webp",
  keywords: [
    "baby leggings",
    "toddler pants",
    "cotton knit",
    "seamless leggings",
    "kids clothing",
    "soft baby wear",
    "unisex toddler"
  ],
  rating: {
    stars: 4.5,
    count: 1642
  }
},
{
  id: "trilingual-learning-toy-tablet",
  name: "Trilingual Learning Toy Tablet with Music & Sound, Montessori Speech Musical Therapy Toys, Gifts for Boy, Girl, Baby, Toddler, for Age 1, 2, 3 Year Old (12-18 Months)",
  priceCents: 1499,
  image: "images/products/148.webp",
  keywords: [
    "learning toy",
    "montessori toy",
    "speech therapy toy",
    "baby educational toy",
    "toddler learning",
    "musical toy",
    "trilingual toy"
  ],
  rating: {
    stars: 4.5,
    count: 2138
  }
},
{
  id: "yurhap-fleece-baby-blanket-heart",
  name: "Yurhap Fleece Baby Blanket Heart Checkered Blanket, Ultra Soft Cozy Baby Blankets for Girls Boys, Fluffy Infant Toddler Newborn Receiving Blankets for Crib Stroller 30”×40” (Light Pink)",
  priceCents: 499,
  image: "images/products/149.webp",
  keywords: [
    "baby blanket",
    "fleece blanket",
    "heart checkered blanket",
    "newborn blanket",
    "infant blanket",
    "crib blanket",
    "stroller blanket"
  ],
  rating: {
    stars: 4.5,
    count: 1611
  }
},
{
  id: "baby-beanie-hats-2pack",
  name: "Baby Beanie Hats 2-Pack, Warm Winter Hats for Boys and Girls, Infant Fleece Lined Toddler Hats for 0-36 Months",
  priceCents: 566,
  image: "images/products/150.webp",
  keywords: [
    "baby hat",
    "infant beanie",
    "toddler winter hat",
    "fleece lined hat",
    "baby warm hat",
    "0-36 months"
  ],
  rating: {
    stars: 4.5,
    count: 1733
  }
},
{
  id: "babys-first-bible-stories",
  name: "Baby's First Bible Stories Padded Board Book - Gift for Easter, Christmas, Communions, Newborns, Birthdays, Beginner Bible",
  priceCents: 399,
  image: "images/products/151.webp",
  keywords: [
    "baby bible book",
    "christian baby gift",
    "first bible",
    "board book",
    "newborn gift",
    "toddler bible"
  ],
  rating: {
    stars: 4.5,
    count: 2144
  }
},
{
  id: "light-up-whale-bath-toy",
  name: "Baby Bath Toys, Toddler Bath Toys for Kids Ages 1-3, Christmas Stocking Stuffers Gifts, Light Up Whale Bath Sprinkler Bathtub Water Toy",
  priceCents: 999,
  image: "images/products/152.webp",
  keywords: [
    "baby bath toy",
    "toddler bath toy",
    "light up toy",
    "whale sprinkler toy",
    "water toy",
    "infant toy",
    "bathtub toy"
  ],
  rating: {
    stars: 4.0,
    count: 1877
  }
},
{
  id: "nzrvaws-baby-boy-romper-set",
  name: "NZRVAWS Newborn Baby Boy Clothes Outfits Letter Printed Romper Pants Set Infant Clothing (0-18 Months)",
  priceCents: 1743,
  image: "images/products/153.webp",
  keywords: [
    "baby boy clothes",
    "newborn outfit",
    "romper and pants set",
    "infant clothing",
    "toddler outfit",
    "baby fashion",
    "casual baby set"
  ],
  rating: {
    stars: 4.5,
    count: 1421
  }
},
{
  id: "fommy-baby-boy-plaid-hoodie-set",
  name: "Fommy Newborn Baby Boy Clothes Plaid Letter Print Long Sleeve Hoodie + Long Pants 2PCS Fall Winter Outfit Set",
  priceCents: 1599,
  image: "images/products/154.webp",
  keywords: [
    "baby boy clothes",
    "infant hoodie set",
    "plaid baby outfit",
    "winter baby clothes",
    "newborn outfit",
    "2 piece set",
    "toddler clothing"
  ],
  rating: {
    stars: 5.0,
    count: 1874
  }
},
{
  id: "fommy-newborn-new-to-the-crew-set",
  name: "Fommy Newborn Baby Boy Clothes New to The Crew Letter Print Romper + Pants + Hat 3PCS Outfit",
  priceCents: 1599,
  image: "images/products/155.webp",
  keywords: [
    "baby boy outfit",
    "newborn clothes",
    "new to the crew",
    "romper set",
    "3 piece outfit",
    "infant clothing",
    "baby shower gift"
  ],
  rating: {
    stars: 4.5,
    count: 1642
  }
},
{
  id: "zumou-toddler-non-slip-crew-socks",
  name: "Zumou Toddler Non Slip Crew Socks Anti Skid for Baby Little Boys Girls Kids",
  priceCents: 388,
  image: "images/products/156.webp",
  keywords: [
    "toddler socks",
    "non slip socks",
    "crew socks",
    "anti skid",
    "baby socks",
    "kids socks"
  ],
  rating: {
    stars: 4.0,
    count: 1725
  }
},
{
  id: "furtalk-toddler-winter-knit-beanie",
  name: "FURTALK Toddler Beanie Baby Boys Girls Beanies Kids Winter Hats Children Knit Warm Caps",
  priceCents: 999,
  image: "images/products/157.webp",
  keywords: [
    "toddler beanie",
    "baby winter hat",
    "kids knit cap",
    "warm beanies",
    "furTalk hat",
    "winter accessories"
  ],
  rating: {
    stars: 4.5,
    count: 2144
  }
},
{
  id: "iolys-jjafra-tender-moments-baby-cologne",
  name: "Ioly's Jjafra Tender Moments Baby Cologne for Boys and Girls Alcohol-Free Newborn Toddler Perfume",
  priceCents: 1299,
  image: "images/products/158.webp",
  keywords: [
    "baby cologne",
    "jjafra perfume",
    "alcohol free",
    "newborn fragrance",
    "toddler perfume",
    "baby scent",
    "paraben free"
  ],
  rating: {
    stars: 4.5,
    count: 1728
  }
},





























  

  

  
].map((productDetails) => {
  if (productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }
 return new Product(productDetails);
});
