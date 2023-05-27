import { createContext } from "react";
export const IsShowModalAccountContext = createContext();
export const UsersContext = createContext();
export const WhichUserIsLoggedInContext = createContext();
export const CommentsProductsContext = createContext();
export const AllSelectedCustomerContext = createContext();
export const data = [
  {
    idP: 1,
    titleP: "T-shirt 9518",
    category: "T-shirts",
    avgPrice: 5000000,
    selectImgSrc: "../../images-products/T-shirt/9518/red/1.jpg",
    infoP: [
      {
        color: "red",
        oldPrice: [100000],
        newPrice: [95000],
        sizes: ["small"],
        srcImgs: [
          "../../images-products/T-shirt/9518/red/1.jpg",
          "../../images-products/T-shirt/9518/red/2.jpg",
          "../../images-products/T-shirt/9518/red/3.jpg",
          "../../images-products/T-shirt/9518/red/4.jpg",
        ],
      },
      {
        color: "blue",
        oldPrice: [600000, 600000],
        newPrice: [580000, 600000],
        sizes: ["small", "medium"],
        srcImgs: [
          "./../../images-products/T-shirt/9518/blue/1.jpg",
          "./../../images-products/T-shirt/9518/blue/2.jpg",
          "./../../images-products/T-shirt/9518/blue/3.jpg",
          "./../../images-products/T-shirt/9518/blue/4.jpg",
        ],
      },
      {
        color: "green",
        oldPrice: [70000, 72000, 73000],
        newPrice: [70000, 68000, 370000],
        sizes: ["small", "medium", "large"],
        srcImgs: [
          "./../../images-products/T-shirt/9518/green/1.jpg",
          "./../../images-products/T-shirt/9518/green/2.jpg",
          "./../../images-products/T-shirt/9518/green/3.jpg",
          "./../../images-products/T-shirt/9518/green/4.jpg",
        ],
      },
      {
        color: "yellow",
        oldPrice: [8000, 810000, 82000, 830000],
        newPrice: [79000, 800000, 810000, 820000],
        sizes: ["small", "medium", "large", "ex"],
        srcImgs: [
          "./../../images-products/T-shirt/9518/yellow/1.jpg",
          "./../../images-products/T-shirt/9518/yellow/2.jpg",
          "./../../images-products/T-shirt/9518/yellow/3.jpg",
          "./../../images-products/T-shirt/9518/yellow/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 2,
    titleP: "Polo-shirt 9312",
    category: "polo-shirts",
    avgPrice: 680000,
    selectImgSrc: "../../images-products/polo-shirt/9312/blue/1.jpg",
    infoP: [
      {
        color: "bisque",
        oldPrice: [1, 1, 1, 1],
        newPrice: [680000, 690000, 700000],
        sizes: ["small", "medium", "large"],
        srcImgs: [
          "../../images-products/polo-shirt/9312/bisque/1.jpg",
          "../../images-products/polo-shirt/9312/bisque/2.jpg",

          "../../images-products/polo-shirt/9312/bisque/3.jpg",
          "../../images-products/polo-shirt/9312/bisque/4.jpg",
        ],
      },
      {
        color: "blue",
        oldPrice: [450000, 450000],
        newPrice: [3999999, 3999999],
        sizes: ["medium", "large"],
        srcImgs: [
          "../../images-products/polo-shirt/9312/blue/1.jpg",
          "../../images-products/polo-shirt/9312/blue/2.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 3,
    titleP: "shirts 2040",
    category: "shirts",
    avgPrice: 987000,
    selectImgSrc: "../../images-products/shirts/2040/green/1.jpg",
    infoP: [
      {
        color: "green",
        oldPrice: [987000, 987000],
        newPrice: [985000, 985000],
        sizes: ["small", "large"],
        srcImgs: [
          "../../images-products/shirts/2040/green/1.jpg",
          "../../images-products/shirts/2040/green/2.jpg",
          "../../images-products/shirts/2040/green/3.jpg",
          "../../images-products/shirts/2040/green/4.jpg",
        ],
      },
      {
        color: "gray",
        oldPrice: [987000, 987000, 987000],
        newPrice: [985000, 986000, 987000],
        sizes: ["small", "medium", "large"],
        srcImgs: [
          "../../images-products/shirts/2040/gray/1.jpg",
          "../../images-products/shirts/2040/gray/2.jpg",
          "../../images-products/shirts/2040/gray/3.jpg",
          "../../images-products/shirts/2040/gray/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 4,
    titleP: "shirts 2041",
    category: "shirts",
    avgPrice: 865000,
    selectImgSrc: "../../images-products/shirts/2041/blue/1.jpg",
    infoP: [
      {
        color: "blue",
        oldPrice: [865000],
        newPrice: [85000],
        sizes: ["small"],
        srcImgs: [
          "../../images-products/shirts/2041/blue/1.jpg",
          "../../images-products/shirts/2041/blue/2.jpg",
          "../../images-products/shirts/2041/blue/3.jpg",
          "../../images-products/shirts/2041/blue/4.jpg",
        ],
      },
      {
        color: "lightblue",
        oldPrice: [900000, 900000],
        newPrice: [850000, 845000],
        sizes: ["small", "medium"],
        srcImgs: [
          "./../../images-products/shirts/2041/lightblue/1.jpg",
          "./../../images-products/shirts/2041/lightblue/2.jpg",
          "./../../images-products/shirts/2041/lightblue/3.jpg",
          "./../../images-products/shirts/2041/lightblue/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 5,
    titleP: "T-shirt 9519",
    category: "T-shirts",
    avgPrice: 560000,
    selectImgSrc: "../../images-products/T-shirt/9519/crimson/1.jpg",
    infoP: [
      {
        color: "crimson",
        oldPrice: [550000],
        newPrice: [560000],
        sizes: ["large"],
        srcImgs: [
          "../../images-products/T-shirt/9519/crimson/1.jpg",
          "../../images-products/T-shirt/9519/crimson/2.jpg",
          "../../images-products/T-shirt/9519/crimson/3.jpg",
          "../../images-products/T-shirt/9519/crimson/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 6,
    titleP: "T-shirt 9520",
    category: "T-shirts",
    avgPrice: 560000,
    selectImgSrc: "../../images-products/T-shirt/9520/white/1.jpg",
    infoP: [
      {
        color: "white",
        oldPrice: [550000, 550000, 550000],
        newPrice: [560000, 560000, 560000],
        sizes: ["small", "medium", "large"],
        srcImgs: [
          "../../images-products/T-shirt/9520/white/1.jpg",
          "../../images-products/T-shirt/9520/white/2.jpg",
          "../../images-products/T-shirt/9520/white/3.jpg",
          "../../images-products/T-shirt/9520/white/4.jpg",
        ],
      },
      {
        color: "green",
        oldPrice: [650000, 650000, 650000],
        newPrice: [550000, 550000, 540000],
        sizes: ["small", "medium", "large"],
        srcImgs: [
          "./../../images-products/T-shirt/9520/green/1.jpg",
          "./../../images-products/T-shirt/9520/green/2.jpg",
          "./../../images-products/T-shirt/9520/green/3.jpg",
          "./../../images-products/T-shirt/9520/green/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 7,
    titleP: "polo-shirt 9313",
    category: "Polo-shirts",
    avgPrice: 765000,
    selectImgSrc: "../../images-products/polo-shirt/9313/black/1.jpg",
    infoP: [
      {
        color: "black",
        oldPrice: [765000, 765000],
        newPrice: [760000, 760000],
        sizes: ["small", "large"],
        srcImgs: [
          "../../images-products/polo-shirt/9313/black/1.jpg",
          "../../images-products/polo-shirt/9313/black/2.jpg",
          "../../images-products/polo-shirt/9313/black/3.jpg",
          "../../images-products/polo-shirt/9313/black/4.jpg",
        ],
      },
      {
        color: "navy",
        oldPrice: [763000, 764000],
        newPrice: [760000, 760000],
        sizes: ["small", "medium"],
        srcImgs: [
          "../../images-products/polo-shirt/9313/navy/1.jpg",
          "../../images-products/polo-shirt/9313/navy/2.jpg",
          "../../images-products/polo-shirt/9313/navy/3.jpg",
          "../../images-products/polo-shirt/9313/navy/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
  {
    idP: 8,
    titleP: "T-shirt 9521 ",
    category: "T-shirts",
    avgPrice: 5000000,
    selectImgSrc: "../../images-products/T-shirt/9521/white/1.jpg",
    infoP: [
      {
        color: "white",
        oldPrice: [680000],
        newPrice: [630000],
        sizes: ["small"],
        srcImgs: [
          "../../images-products/T-shirt/9521/white/1.jpg",
          "../../images-products/T-shirt/9521/white/2.jpg",
          "../../images-products/T-shirt/9521/white/3.jpg",
          "../../images-products/T-shirt/9521/white/4.jpg",
        ],
      },
      {
        color: "black",
        oldPrice: [680000, 670000],
        newPrice: [680000, 699000],
        sizes: ["small", "medium"],
        srcImgs: [
          "../../images-products/T-shirt/9521/black/1.jpg",
          "../../images-products/T-shirt/9521/black/2.jpg",
          "../../images-products/T-shirt/9521/black/3.jpg",
          "../../images-products/T-shirt/9521/black/4.jpg",
        ],
      },
    ],
    Offer: true,
  },
];
