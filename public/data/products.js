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
    id: "e6f4d3c2-5a6b-4d7f-9b3c-1e7f2d4a5c3e",
    image: "images/products/266.webp",
    name: "Apple MacBook Air M1 13.3\" 8GB RAM 128GB SSD – Space Gray (Renewed)",
    rating: {
      stars: 4.5,
      count: 1678
    },
    priceCents: 31099,
    keywords: [
      "apple-macbook-air",
      "late-2020",
      "m1-chip",
      "13-3-inch",
      "8gb-ram",
      "128gb-ssd",
      "space-gray",
      "renewed"
    ]
},

  {
    id: "f5d3c2b1-6a5e-4d7f-9b3c-1e7f2d4a5c2d",
    image: "images/products/265.webp",
    name: "2025 15.6\" Laptop – Celeron N150, 16GB RAM, 512GB SSD",
    rating: {
      stars: 4.5,
      count: 1786
    },
    priceCents: 20934,
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
    ]
},

  {
    id: "e3f2d1b4-6a5e-4d7f-9b3c-1e7f2d4a5c1b",
    image: "images/products/264.webp",
    name: "15.6\" Laptop – Gold 6500Y, 32GB RAM, 512GB SSD",
    rating: {
      stars: 4.5,
      count: 1924
    },
    priceCents: 24999,
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
    ]
},

  {
    id: "f1d2c3b4-6a5e-4d7f-9b3c-1e7f2d4a5c0d",
    image: "images/products/263.webp",
    name: "15.6\" Laptop – N5095, 16GB RAM, 512GB SSD",
    rating: {
      stars: 4.5,
      count: 1795
    },
    priceCents: 13990,
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
    ]
},

  {
    id: "d2f1c3b4-6a5e-4d7f-9b3c-1e7f2d4a5b9c",
    image: "images/products/262.webp",
    name: "UGREEN Vertical Laptop Stand – Aluminum, Gray",
    rating: {
      stars: 4.0,
      count: 1412
    },
    priceCents: 1599,
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
    ]
},

  {
    id: "f4d3c2b1-6a5e-4d7f-9b3c-1e7f2d4a5b7c",
    image: "images/products/261.webp",
    name: "MOSISO 13.3-inch Laptop Sleeve Bag – Neoprene, Black",
    rating: {
      stars: 4.0,
      count: 1365
    },
    priceCents: 866,
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
    ]
},


  {
    id: "e1f2d3c4-5a6b-4d7f-9c2e-1b3d5f7a4c6e",
    image: "images/products/260.webp",
    name: "70W USB-C Charger for MacBook & iPad – 6.6ft Cable",
    rating: {
      stars: 4.5,
      count: 1589
    },
    priceCents: 1799,
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
    ]
},

  {
    id: "f3d1c2b4-6a5e-4d7f-9b3c-1e7f2d4a5c9d",
    image: "images/products/259.webp",
    name: "100W USB-C Charger for MacBook & Laptop – 6.6ft Braided Cable",
    rating: {
      stars: 4.5,
      count: 1627
    },
    priceCents: 1723,
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
    ]
},

  {
    id: "d5f3c2b1-7a4e-4d9f-9c2a-5e1b7f3d8a5c",
    image: "images/products/258.webp",
    name: "96W USB-C Fast Charger for MacBook, iPad, Samsung – with 6.6ft Cable",
    rating: {
      stars: 4.5,
      count: 1548
    },
    priceCents: 1499,
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
    ]
},

  {
    id: "f2d3c1b4-6a5e-4d7f-9b3c-1e7f2d4a5c8b",
    image: "images/products/257.webp",
    name: "Ergonomic Adjustable Laptop Stand, Foldable Aluminum, 10-15.6” – Black",
    rating: {
      stars: 4.0,
      count: 1298
    },
    priceCents: 590,
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
    ]
},

  {
    id: "e7f1d3c2-5a6b-4d8e-9c2f-1b3d5e7a4f6c",
    image: "images/products/256.webp",
    name: "ASTARON 17-in-1 Screwdriver Set for MacBook & Electronics",
    rating: {
      stars: 4.5,
      count: 1387
    },
    priceCents: 499,
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
    ]
},

  {
    id: "f4c2d1b3-6a5e-4d7f-9b3c-1e7f2d4a5b8c",
    image: "images/products/255.webp",
    name: "15.6\" AMD 3020e Laptop, 8GB RAM, 512GB SSD, FHD IPS, Gray",
    rating: {
      stars: 4.5,
      count: 1821
    },
    priceCents: 24199,
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
    ]
},

  {
    id: "d3e1f2b4-7c5a-4d8e-9b2f-6a1c3d5e7f8b",
    image: "images/products/254.webp",
    name: "118W USB-C Fast Charger for MacBook & Devices",
    rating: {
      stars: 4.5,
      count: 1532
    },
    priceCents: 1542,
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
    ]
},

  {
    id: "f7d2c3b4-6a5e-4d7f-9b3c-1e7f2d4a5b6c",
    image: "images/products/253.webp",
    name: "Rechargeable Bluetooth Mouse for MacBook & PC, Black",
    rating: {
      stars: 4.5,
      count: 1421
    },
    priceCents: 861,
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
    ]
},

  {
    id: "e4c1d2b7-5f6a-4d8c-9b3e-2f7a1c3d4b5f",
    image: "images/products/252.webp",
    name: "Laptop Sleeve Case 13.3\", Shockproof Protective Bag, Black",
    rating: {
      stars: 4.0,
      count: 1378
    },
    priceCents: 599,
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
    ]
},

  {
    id: "d1f3e2b7-6c4a-4f8d-9b2f-5a7c3d1e8b4f",
    image: "images/products/251.webp",
    name: "Wireless Bluetooth Mouse for MacBook, Laptop & iPad, Dual Mode, Black",
    rating: {
      stars: 4.5,
      count: 1452
    },
    priceCents: 1423,
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
    ]
},

  {
    id: "c6d3e2b1-5f7a-4c9d-9b2e-1f3a7d8c4b5f",
    image: "images/products/250.webp",
    name: "MOSISO 13.3'' Laptop Sleeve for MacBook & Laptops, Polyester, Black",
    rating: {
      stars: 4.0,
      count: 1322
    },
    priceCents: 861,
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
    ]
},

  {
    id: "f2b1d8c3-7a4e-4d9f-9c2a-5e1b7f3d8a4c",
    image: "images/products/249.webp",
    name: "UGREEN USB-C Hub 5-in-1, 4K HDMI, 100W PD, 3 USB-A, MacBook/iPad/iMac/Thinkpad",
    rating: {
      stars: 4.5,
      count: 1427
    },
    priceCents: 584,
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
    ]
},

  {
    id: "e5d3f1b7-6c4a-4f8d-9b2e-1f7c3d5a8b4f",
    image: "images/products/248.webp",
    name: "Laptop 15.6\" Gold 6500Y, 32GB RAM, 1TB SSD, FHD IPS, Bluetooth, WiFi, HDMI, Type-C",
    rating: {
      stars: 4.5,
      count: 1923
    },
    priceCents: 32099,
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
    ]
},

  {
    id: "d3f7c1e4-8b5a-4c9d-9f2b-6e1a7c3d5f2b",
    image: "images/products/247.webp",
    name: "Laptop 15.6\" Gold 6500Y, 32GB RAM, 512GB SSD, FHD IPS, Win11, Type-C, HDMI, USB3.2, BT5.2",
    rating: {
      stars: 4.5,
      count: 1894
    },
    priceCents: 25962,
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
    ]
},

  {
    id: "c9f3e2a1-7b4d-4f6c-9d2e-5a7f1b8c3d4f",
    image: "images/products/246.webp",
    name: "Laptop 14\" Gold 6500Y, 16GB RAM, 256GB SSD, FHD IPS, Bluetooth, WiFi, HDMI, Type-C",
    rating: {
      stars: 4.5,
      count: 1789
    },
    priceCents: 19999,
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
    ]
},

  {
    id: "e8d2c1b4-5f7a-4e6b-9c2d-1f3a7b8c9d2e",
    image: "images/products/245.webp",
    name: "2025 Gaming Laptop 15.6\" Ryzen 7 5700U, 16GB RAM, 512GB SSD, Radeon RX Vega 8, WiFi 6",
    rating: {
      stars: 4.5,
      count: 1983
    },
    priceCents: 36499,
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
    ]
},

  {
    id: "f7c3d2b1-6a4e-4f7b-9c2a-5d1e8f3b7c9a",
    image: "images/products/244.webp",
    name: "USB-C 7-in-1 Multiport Hub, 4K HDMI, 100W PD, SD/TF, 3 USB-A",
    rating: {
      stars: 4.0,
      count: 1521
    },
    priceCents: 593,
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
    ]
},

  {
    id: "d4f1b8c2-7e3a-4d6b-9f2c-1a9e5d7b8f3c",
    image: "images/products/243.webp",
    name: "USB-C Hub Docking Station, Dual HDMI, 100W PD, Multiport Adapter",
    rating: {
      stars: 4.5,
      count: 1622
    },
    priceCents: 1599,
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
    ]
},

  {
    id: "b8f3d1c2-5e7a-4f6b-9c8d-3a7e1d9b4f2a",
    image: "images/products/242.webp",
    name: "15.6\" Student Laptop, 16GB RAM, 512GB SSD, N5095, Silver",
    rating: {
      stars: 4.5,
      count: 1743
    },
    priceCents: 19972,
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
    ]
},

  {
    id: "a1c7d9e3-4b2f-4f6a-9b1c-6d8f3e7b5a1d",
    image: "images/products/241.webp",
    name: "Wireless Bluetooth Mouse, Dual Mode, Silver",
    rating: {
      stars: 4.5,
      count: 1321
    },
    priceCents: 394,
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
    ]
},

  {
    id: "d2f5b7a4-6e1c-4b3e-9f8a-3c7e9d1b5f2a",
    image: "images/products/240.webp",
    name: "15.6'' Laptop, 8GB RAM, 256GB SSD, Gold 6500Y, FHD",
    rating: {
      stars: 4.5,
      count: 1715
    },
    priceCents: 19992,
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
    ]
},


  
  {
    id: "9c3f4b11-5ad2-4f0a-9c6a-2f7bd8ea9127",
    image: "images/products/239.webp",
    name: "OTVOC 15.6'' Laptop, 4GB RAM, 128GB SSD, Core CPU, FHD",
    rating: {
      stars: 4.5,
      count: 1822
    },
    priceCents: 9974,
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
    ]
},

  {
    id: "1f6b7c3d-9ab4-4e2b-8f32-7c1d2c448c91",
    image: "images/products/238.webp",
    name: "SGIN 15.6'' Laptop, 16GB RAM, 1TB SSD, Core i3, Portable",
    rating: {
      stars: 4.0,
      count: 1432
    },
    priceCents: 19999,
    keywords: [
      "sgin-laptop",
      "15-6-inch",
      "16gb-ram",
      "1024gb-ssd",
      "core-i3",
      "portable-notebook",
      "wifi-6",
      "7000mah"
    ]
},

  {
    id: "c7e2f19b-1c42-4d72-92ab-9d73f3bb7f3a",
    image: "images/products/237.webp",
    name:"14'' Laptop, Gold 6500Y, 16GB RAM, 256GB SSD, FHD IPS, Portable",
    rating: {
      stars: 4.5,
      count: 1677
    },
    priceCents: 19999,
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
    ]
},

  {
    id: "f3c81e7a-91b4-4ce0-b1b7-6c2e709ac4df",
    image: "images/products/236.webp",
    name: "2025 15.6'' Win11 Laptop, 16GB RAM, 1TB SSD, Intel Quad-Core, FHD IPS",
    rating: {
      stars: 4.0,
      count: 1588
    },
    priceCents: 18983,
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
    ]
},

  {
    id: "b7f0e1ac-2c54-4b7e-8f1c-9d73c0fe9812",
    image: "images/products/235.webp",
    name: "15.6'' Laptop, AMD 3020e, 8GB RAM, 256GB SSD, FHD, Win11 Pro",
    rating: {
      stars: 4.5,
      count: 1433
    },
    priceCents: 19998,
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
    ]
},

  {
    id: "f8c2d0e4-9b21-4f0b-9c53-0e7adf0cc8b1",
    image: "images/products/234.webp",
    name: "2025 15.6'' Laptop, 32GB RAM, 1TB SSD, Quad-Core, FHD, Win11",
    rating: {
      stars: 4.0,
      count: 1822
    },
    priceCents: 19982,
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
    ]
},

  {
    id: "b4e1b9ac-3c0f-4f67-8d6c-9a7dbd7e51c2",
    image: "images/products/233.webp",
    name: "15.6\" Laptop Pentium 6500Y, 32GB RAM, 512GB SSD, Win11 Pro",
    rating: {
      stars: 4.5,
      count: 1433
    },
    priceCents: 17900,
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
    ]
},

  {
    id: "c7f92be1-4df8-4c3e-9b1e-2fa4c76e9d31",
    image: "images/products/232.webp",
    name: "SGIN 15.6\" Windows 11 Laptop i3, 16GB RAM, 1TB SSD",
    rating: {
      stars: 4.0,
      count: 1877
    },
    priceCents: 19982,
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
    ]
},

  {
    id: "a3e6d9f2-7bf3-4bd2-9fd8-51c828f7c5b1",
    image: "images/products/231.webp",
    name: "OTVOC 15.6\" Windows 11 Laptop",
    rating: {
      stars: 4.5,
      count: 1422
    },
    priceCents: 9999,
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
    ]
},

  {
    id: "f9b27c44-1d8a-4c92-b7ef-647aaf31c92e",
    image: "images/products/230.webp",
    name: "2025 Ryzen7 15.6\" Laptop",
    rating: {
      stars: 4.0,
      count: 1874
    },
    priceCents: 39984,
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
    ]
},

  {
    id: "e7d3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/229.webp",
    name:"14.1\" Quad Core Laptop Notebook",
    rating: {
      stars: 4.5,
      count: 1642
    },
    priceCents: 7999,
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
    ]
},

  {
    id: "d9f3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/228.webp",
    name: "14\" Triple Laptop Screen Extender",
    rating: {
      stars: 5.0,
      count: 1723
    },
    priceCents: 21299,
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
    ]
},

  {
    id: "c7f3d1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/227.webp",
    name: "HP 14\" Laptop i3-8GB 256GB SSD",
    rating: {
      stars: 5.0,
      count: 1786
    },
    priceCents: 19449,
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
    ]
},

  {
    id: "f8d3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/226.webp",
    name: "2025 15.6\" Laptop 32GB RAM 1TB SSD Win11",
    rating: {
      stars: 5.0,
      count: 1875
    },
    priceCents: 19999,
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
    ]
},

  {
    id: "d7f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/225.webp",
    name: "HP Stream 14\" Laptop 16GB RAM 416GB Storage N150",
    rating: {
      stars: 5.0,
      count: 1804
    },
    priceCents: 19900,
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
    ]
},

  {
    id: "c9f3d1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/224.webp",
    name: "AOC 15.6'' Laptop 16GB RAM 512GB SSD N95",
    rating: {
      stars: 5.0,
      count: 1901
    },
    priceCents: 24199,
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
    ]
},

  {
    id: "e6f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/223.webp",
    name: "SGIN 15.6'' Laptop 16GB RAM 1TB SSD N5100",
    rating: {
      stars: 5.0,
      count: 1884
    },
    priceCents: 23498,
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
    ]
},

  {
    id: "f9d3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/222.webp",
    name: "2025 15.6'' Laptop 16GB RAM 512GB SSD N95 Pro",
    rating: {
      stars: 5.0,
      count: 1872
    },
    priceCents: 21072,
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
    ]
},

  {
    id: "d8f3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/221.webp",
    name: "2025 17.3'' Laptop 16GB RAM 512GB SSD N95",
    rating: {
      stars: 5.0,
      count: 1854
    },
    priceCents: 20099,
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
    ]
},

  {
    id: "e9f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/220.webp",
    name: "Naclud 15.6'' Laptop 16GB RAM 1TB SSD i3",
    rating: {
      stars: 5.0,
      count: 1893
    },
    priceCents: 50099,
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
    ]
},

  {
    id: "c8d2f1a7-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
    image: "images/products/219.webp",
    name: "HP 14'' Laptop 4GB RAM 64GB SSD",
    rating: {
      stars: 5.0,
      count: 1752
    },
    priceCents: 9845,
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
    ]
},

  {
    id: "d9f3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d6c",
    image: "images/products/218.webp",
    name: "2025 17.3'' Laptop 16GB RAM 512GB SSD",
    rating: {
      stars: 5.0,
      count: 1847
    },
    priceCents: 23499,
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
    ]
},

  {
    id: "f8d3c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
    image: "images/products/217.webp",
    name: "SGIN 15.6'' Laptop 16GB RAM 1TB SSD Win11",
    rating: {
      stars: 5.0,
      count: 1823
    },
    priceCents: 20056,
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
    ]
},

  {
    id: "c7d3f1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/216.avif",
    name: "10'' 6GB RAM Tablet with Stylus",
    rating: {
      stars: 5.0,
      count: 1623
    },
    priceCents: 5099,
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
    ]
},

  {
    id: "e8f3c1a7-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/215.avif",
    name: "Fangzheng 15.6'' Ultra-thin Laptop",
    rating: {
      stars: 5.0,
      count: 1784
    },
    priceCents: 10010,
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
    ]
},

  {
    id: "f6c3d1a7-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/214.webp",
    name: "Zaples Baby Non-Slip Ankle Socks for Toddlers Boys & Girls",
    rating: {
      stars: 4.5,
      count: 1502
    },
    priceCents: 1067,
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
    ]
},

  {
    id: "d3f2c1a5-5b4e-4f8c-9d3b-1e7f5a3b8d4c",
    image: "images/products/213.webp",
    name: "UTTPLL Toddler Magic Stretch Mittens",
    rating: {
      stars: 4.0,
      count: 1275
    },
    priceCents: 299,
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
    ]
},

  {
    id: "c8f2d1a7-6b4e-4f9a-8c2d-1e7f5a3b8d6c",
    image: "images/products/212.webp",
    name: "Fleece Lined Baby Mittens for Boys & Girls",
    rating: {
      stars: 4.5,
      count: 1419
    },
    priceCents: 1162,
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
    ]
},

  {
    id: "f5d3c1a7-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/211.webp",
    name: "Waterproof Toddler Winter Mittens",
    rating: {
      stars: 4.0,
      count: 1387
    },
    priceCents: 599,
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
    ]
},

  {
    id: "d4f2c1a7-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/210.webp",
    name: "Kids Winter Beanie & Mittens Set",
    rating: {
      stars: 4.5,
      count: 1462
    },
    priceCents: 990,
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
    ]
},

  {
    id: "e7c3d1a5-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/209.webp",
    name: "Toddlers 9-Pair Grip Socks",
    rating: {
      stars: 4.5,
      count: 1521
    },
    priceCents: 1234,
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
    ]
},

  {
    id: "c5f2d1a7-6b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/208.webp",
    name: "HonestBaby 10-Pack Wash Cloths",
    rating: {
      stars: 5.0,
      count: 1634
    },
    priceCents: 1499,
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
    ]
},

  {
    id: "f3d1c2a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/207.webp",
    name: "Dinosaur Ear Beanie Hat",
    rating: {
      stars: 4.5,
      count: 1417
    },
    priceCents: 999,
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
    ]
},

  {
    id: "d7f2c1a5-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
    image: "images/products/206.webp",
    name: "UTTPLL Kids Glove Clips",
    rating: {
      stars: 4.0,
      count: 1284
    },
    priceCents: 399,
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
    ]
},

  {
    id: "e4c3d1a7-5b4e-4f8c-9d2b-1e7f5a3b8d6c",
    image: "images/products/205.webp",
    name: "Toddler Non-Slip Grip Socks",
    rating: {
      stars: 4.5,
      count: 1452
    },
    priceCents: 999,
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
    ]
},

  {
    id: "c9d2f1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/204.webp",
    name: "Toddler Magic Stretch Mittens",
    rating: {
      stars: 4.0,
      count: 1369
    },
    priceCents: 599,
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
    ]
},

  {
    id: "f2d3c1a5-7b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/203.webp",
    name: "Resinta Toddler Shirt & Legging Set",
    rating: {
      stars: 4.5,
      count: 1487
    },
    priceCents: 964,
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
    ]
},

  {
    id: "d5c3f1a7-6b4e-4f9a-8c2d-1e7f5b3a9d4c",
    image: "images/products/202.webp",
    name: "Baby Non-Slip Ankle Socks",
    rating: {
      stars: 4.0,
      count: 1345
    },
    priceCents: 499,
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
    ]
},

  {
    id: "c7f2d1a5-5b4e-4f8c-9d3b-1e7f5a3b8d6c",
    image: "images/products/201.webp",
    name: "Baby Beanie Knit Ski Hat with Cute Face for Girls Boys 0-7 Years",
    rating: {
      stars: 4.0,
      count: 1298
    },
    priceCents: 499,
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
    ]
},

  {
    id: "f3d2c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/200.webp",
    name:"Baby Fleece Mittens",
    rating: {
      stars: 4.0,
      count: 1327
    },
    priceCents: 399,
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
    ]
},

  {
    id: "d4f1c3a7-5b6e-4f8c-9d2b-1e7f5a3b8d6c",
    image: "images/products/199.webp",
    name: "American Trends Toddler Mittens",
    rating: {
      stars: 4.0,
      count: 1268
    },
    priceCents: 399,
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
    ]
},

  {
    id: "b7d3f1c5-6a4e-4f9a-8c2d-1e5f7b3a9d4c",
    image: "images/products/198.webp",
    name: "FURTALK Satin Beanie",
    rating: {
      stars: 4.5,
      count: 1492
    },
    priceCents: 988,
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
    ]
},

  {
    id: "e5c2d1a7-6b4e-4f8c-9d3b-1e7f5a3b8d4c",
    image: "images/products/197.webp",
    name: "Toddler Knit Sweater",
    rating: {
      stars: 4.0,
      count: 1289
    },
    priceCents: 299,
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
    ]
},

  {
    id: "c8f3d1a7-5b4e-4f9a-8c2d-1e5f7b3a9d6c",
    image: "images/products/196.webp",
    name: "Toddler Swimsuit Set",
    rating: {
      stars: 4.5,
      count: 1537
    },
    priceCents: 1362,
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
    ]
},

  {
    id: "f2d3c1a5-6b4e-4f8c-9d2b-1e7f5a3b8d6c",
    image: "images/products/195.webp",
    name:"Tame Baby Hair Gel",
    rating: {
      stars: 4.5,
      count: 1478
    },
    priceCents: 892,
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
    ]
},

  {
    id: "d3f8c1a5-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/194.webp",
    name: "12-Pack Toddler Grip Socks",
    rating: {
      stars: 4.0,
      count: 1395
    },
    priceCents: 799,
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
    ]
},

  {
    id: "e7c1d3f5-6b4e-4f9a-8c2d-1e5f7b3a9d6c",
    image: "images/products/193.webp",
    name: "Toddler Sock Shoes Non-Slip",
    rating: {
      stars: 4.5,
      count: 1541
    },
    priceCents: 1083,
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
    ]
},

  {
    id: "c5d3f1a7-7b4e-4f8c-9d2b-1e7f5a3b8d6c",
    image: "images/products/192.webp",
    name:"Baby Grip Socks 12-Pack",
    rating: {
      stars: 4.5,
      count: 1427
    },
    priceCents: 600,
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
    ]
},

  {
    id: "d8f2c1a5-6b4e-4f9a-8c3d-1e5b7a2f9d6c",
    image: "images/products/191.webp",
    name: "Toddler Fleece Joggers",
    rating: {
      stars: 4.0,
      count: 1362
    },
    priceCents: 853,
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
    ]
},

  {
    id: "f6c3d1a7-5b4e-4f8c-9d2b-1e7f5a3b8d4c",
    image: "images/products/190.webp",
    name: "Baby Beanie 3-Pack",
    rating: {
      stars: 4.5,
      count: 1475
    },
    priceCents: 1342,
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
    ]
},

  {
    id: "d2f7c1a5-6b4e-4f9a-8c3d-1e5b7a2f9d4c",
    image: "images/products/189.webp",
    name: "Sharpty Kids Hangers",
    rating: {
      stars: 4.5,
      count: 1389
    },
    priceCents: 752,
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
    ]
},

  {
    id: "b9d3f1c5-6a4e-4f8b-9d2c-1e7f5a3b8d4c",
    image: "images/products/188.webp",
    name: "Personalized Baby Blanket",
    rating: {
      stars: 5.0,
      count: 1748
    },
    priceCents: 2190,
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
    ]
},

  {
    id: "e4b7c2d1-5f3a-4f8c-9d6b-1a3f7e5b8c2d",
    image: "images/products/187.webp",
    name: "ZOORON Toddler Beanie",
    rating: {
      stars: 4.0,
      count: 1245
    },
    priceCents: 342,
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
    ]
},

  {
    id: "c8d3f1a5-7b4e-4f9a-8c2d-1e5f7b3a9d6c",
    image: "images/products/186.webp",
    name: "Hat Warm Fleece Lined Knit Beanies Kids Hats for 3-36 Months",
    rating: {
      stars: 4.0,
      count: 1312
    },
    priceCents: 499,
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
    ]
},

  {
    id: "b5f2c7d1-4a6e-4f8b-9d3c-2e7a5f1b8d4c",
    image: "images/products/185.webp",
    name: "Hahaland 5-Language Learning Tablet for Toddlers",
    rating: {
      stars: 5.0,
      count: 1623
    },
    priceCents: 1214,
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
    ]
},

  {
    id: "d8f1c3a7-6b4e-4f9a-8c2d-1e5b7a3f9d6c",
    image: "images/products/184.webp",
    name: "Jimonda Baby Pajamas",
    rating: {
      stars: 4.5,
      count: 1567
    },
    priceCents: 1842,
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
    ]
},

  {
    id: "a1d4f7c2-5b3e-4f8a-9d6c-2e1f7b5a8d3c",
    image: "images/products/183.webp",
    name: "Bamboo Toddler Pajamas",
    rating: {
      stars: 4.5,
      count: 1512
    },
    priceCents: 1599,
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
    ]
},

  {
    id: "f6c2d1a8-7b4e-4f9a-8c3d-2e5f7b1a9d4c",
    image: "images/products/182.webp",
    name: "Vidsel Toddler Beanie Hat",
    rating: {
      stars: 4.5,
      count: 1398
    },
    priceCents: 842,
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
    ]
},

  {
    id: "d3f7c1a5-5b4e-4f8a-9d2c-1e7b5f3a8d6c",
    image: "images/products/181.webp",
    name: "ANTSANG 12 Pairs Grip Socks",
    rating: {
      stars: 4.5,
      count: 1432
    },
    priceCents: 1354,
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
    ]
},

  {
    id: "c7d2f5a9-6b4e-4f8c-9d3b-1e5f7a2c8d4b",
    image: "images/products/180.webp",
    name: "ONESING 5 Pairs Mittens",
    rating: {
      stars: 4.0,
      count: 1278
    },
    priceCents: 432,
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
    ]
},

  {
    id: "b2e9d3f5-4c6a-4f8b-9d1c-2e7f5a3b8d4c",
    image: "images/products/179.webp",
    name: "Zando Baby Beanie Hat",
    rating: {
      stars: 4.0,
      count: 1347
    },
    priceCents: 449,
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
    ]
},

  {
    id: "d5f8c2a7-6b4e-4f9a-8c3d-1e7b5a2f9c4d",
    image: "images/products/178.webp",
    name: "Mesh Baby Sneakers",
    rating: {
      stars: 4.5,
      count: 1619
    },
    priceCents: 1956,
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
    ]
},

  {
    id: "a9d3f5b1-7c2e-4f8a-9d6b-1e3f7c5a8d2e",
    image: "images/products/177.webp",
    name: "Bamboo Toddler Pajamas 2pcs",
    rating: {
      stars: 4.5,
      count: 1537
    },
    priceCents: 1752,
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
    ]
},

  {
    id: "f3c9b2d1-6a4e-4f8c-9d3b-2e7a5f1c8d4b",
    image: "images/products/176.webp",
    name: "Learning Tablet for Toddlers",
    rating: {
      stars: 5.0,
      count: 1642
    },
    priceCents: 1097,
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
    ]
},

  {
    id: "e1b4c7d3-5f2a-4f8b-9c6e-2a3f7d5b8c1e",
    image: "images/products/175.webp",
    name: "4-Pack Toddler Long Sleeve Tees",
    rating: {
      stars: 4.5,
      count: 1529
    },
    priceCents: 2085,
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
    ]
},

  {
    id: "d7f1c3a5-6b4e-4f9a-8c2d-1e5b7a3f9d6c",
    image: "images/products/174.webp",
    name: "3 Pack Baby Beanies",
    rating: {
      stars: 4.0,
      count: 1387
    },
    priceCents: 743,
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
    ]
},

  {
    id: "c4e7b2f1-5d3a-4f8c-9b6e-2a1f7d5c8e3b",
    image: "images/products/173.webp",
    name: "12 Pairs Baby Socks",
    rating: {
      stars: 4.5,
      count: 1456
    },
    priceCents: 842,
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
    ]
},

  {
    id: "a8d3f1c5-7b2e-4f9a-8c6d-1e3f5b7a9d4c",
    image: "images/products/172.webp",
    name: "Baby Sock Sneakers",
    rating: {
      stars: 4.0,
      count: 1321
    },
    priceCents: 599,
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
    ]
},

  {
    id: "f2c9a7d3-4b6e-4f8a-9d1c-3e5b7a2f6d8c",
    image: "images/products/171.webp",
    name: "Interactive Baby Ball",
    rating: {
      stars: 4.5,
      count: 1683
    },
    priceCents: 1566,
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
    ]
},

  {
    id: "b3e7d1f4-5c2a-4f9b-8d6e-1a3f7c5b9d2e",
    image: "images/products/170.webp",
    name: "Toddler Fleece Winter Joggers",
    rating: {
      stars: 4.5,
      count: 1574
    },
    priceCents: 1499,
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
    ]
},

  {
    id: "d9f1c3b7-6e4a-4f8b-9d2c-1a7e5f3b8c6d",
    image: "images/products/169.webp",
    name: "Baby Toddler Christmas Jumpsuits",
    rating: {
      stars: 5.0,
      count: 1893
    },
    priceCents: 2544,
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
    ]
},

  {
    id: "c7d4e2f8-5a1b-4f6c-9d3e-2b7f1a4c8d5e",
    image: "images/products/168.webp",
    name: "Toddler Hiking Joggers",
    rating: {
      stars: 4.0,
      count: 1289
    },
    priceCents: 655,
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
    ]
},

  {
    id: "a5c3d8f1-7b2e-4f9a-9d6c-2e1f7b4a8c5d",
    image: "images/products/167.webp",
    name: "Baby First Walking Shoes",
    rating: {
      stars: 4.5,
      count: 1462
    },
    priceCents: 834,
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
    ]
},

  {
    id: "f8a2d5b3-6c4e-4f9a-8d2b-1e7c3f5a9b6d",
    image: "images/products/166.webp",
    name: "Magnetic Doodle Board",
    rating: {
      stars: 4.0,
      count: 1376
    },
    priceCents: 599,
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
    ]
},

  {
    id: "e6b1c3d4-7f2a-4a9b-8c5d-1e3f6b7a9d2c",
    image: "images/products/165.webp",
    name: "Baby Knit Sweater Pullover",
    rating: {
      stars: 4.5,
      count: 1197
    },
    priceCents: 187,
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
    ]
},


  {
    id: "c9d2f7a5-4b6e-4c8a-9f1d-3e7b2a5c8d4f",
    image: "images/products/164.webp",
    name: "Carter's 6-Piece Baby Bodysuit Set",
    rating: {
      stars: 5.0,
      count: 1628
    },
    priceCents: 1550,
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
    ]
},

  {
    id: "b7e9c4d2-5f1a-4a8b-9c3d-2f6e7a1b8c4d",
    image: "images/products/163.webp",
    name: "Baby Boy 3PCS Outfit",
    rating: {
      stars: 4.0,
      count: 1415
    },
    priceCents: 863,
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
    ]
},


  {
    id: "d5f3a1b8-6c4e-4f7a-9b2d-1e8c3f5a7d9b",
    image: "images/products/162.webp",
    name: "Toddler Beanie Hat",
    rating: {
      stars: 4.5,
      count: 1327
    },
    priceCents: 790,
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
    ]
},

  {
    id: "f1c8b2d7-3e4a-4f9d-8b6c-2a7d5e1f9b3c",
    image: "images/products/161.webp",
    name: "Checkered Baby Blanket",
    rating: {
      stars: 5.0,
      count: 1784
    },
    priceCents: 599,
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
    ]
},

  {
    id: "a2b9d4e7-8f1c-4c5a-9d3b-6e7f1a2c4b5d",
    image: "images/products/160.webp",
    name:  "Baby Winter Beanie Hats",
    rating: {
      stars: 4.0,
      count: 1532
    },
    priceCents: 599,
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
    ]
},



  {
    id: "e3f7c9a1-2d4b-4f8e-9a12-7b5c3e9f1d2a",
    image: "images/products/159.webp",
    name:  "Baby Hiking Jogger Pants",
    rating: {
      stars: 4.5,
      count: 1243
    },
    priceCents: 499,
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
    ]
},


  
  
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1500,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2000,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 2000,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 1300,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 1800,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2000,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 2599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 1000,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 1800,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2000,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1000,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 1300,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 2000,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1399,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 2000,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 800,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 1199,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2000,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1399,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 1700,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 850,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 1490,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 2099,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1000,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 3099,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 1599,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 2599,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2010,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 2090,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 5047,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 2099,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 890,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
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
