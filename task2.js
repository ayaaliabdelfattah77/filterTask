const products = [
  {
    name: "iPhone 14",
    brand: "Apple",
    category: "Mobile",
    price: 37000,
    inStock: true,
    rating: 4.8,
  },
  {
    name: "Galaxy S24",
    brand: "Samsung",
    category: "Mobile",
    price: 33000,
    inStock: false,
    rating: 4.6,
  },
  {
    name: "MacBook Air",
    brand: "Apple",
    category: "Laptop",
    price: 52000,
    inStock: true,
    rating: 4.9,
  },
  {
    name: "HP Pavilion",
    brand: "HP",
    category: "Laptop",
    price: 27000,
    inStock: true,
    rating: 4.3,
  },
  {
    name: "Dell XPS",
    brand: "Dell",
    category: "Laptop",
    price: 45000,
    inStock: false,
    rating: 4.5,
  },
  {
    name: "AirPods Pro",
    brand: "Apple",
    category: "Accessories",
    price: 8000,
    inStock: true,
    rating: 4.7,
  },
  {
    name: "Galaxy Buds",
    brand: "Samsung",
    category: "Accessories",
    price: 6000,
    inStock: true,
    rating: 4.4,
  },
  {
    name: "Apple Watch",
    brand: "Apple",
    category: "Smart Watch",
    price: 18000,
    inStock: false,
    rating: 4.8,
  },
  {
    name: "Fitbit Charge 6",
    brand: "Fitbit",
    category: "Smart Watch",
    price: 9000,
    inStock: true,
    rating: 4.2,
  },
];

const productLaptop = products.filter(
  (product) => product.category === "Laptop" && product.rating > 4.5
);

const filterApple = products.filter(
  (product) => product.brand === "Apple" && product.inStock
);

const filterPrice = products.filter(
  (product) => product.price < 10000 && product.inStock
);

const filterNames = products.filter(
  (product) => product.name && product.inStock
);

  const filterInstock = products.filter(
    (product) => product.inStock && product.price
  );
  //   console.log(filterInstock);

function allProducts(title, array) {
  console.log(title);
  array.forEach((product) => {
    console.log(
      `✅${product.name} 💰${product.price}  💠${product.category}  👜${product.inStock} ⭐${product.rating}  😊${product.brand}`
    );
  });


}
allProducts(`💻المنتجات من فئه لابتوب والاعلى تقييم`, productLaptop);
allProducts(`منتجات Apple المتوفره`, filterApple);
allProducts(` المنتجات اللى سعرها اقل من 10000 ومتوفره💰`, filterPrice);


  





  
  // the heighest rating

 const sorted =[...products].sort((a, b) => b.rating - a.rating);
  console.log(`المنتج الاعلى تقييما`, sorted[0]);

  //total price


  const totalPrice = filterInstock.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  console.log(`اجمالى الاسعار :`, totalPrice);
  
    //all names of products

  const productNames = filterNames.map((product) => product.name);
  console.log(`اسماء المنتجات المتوفره`, productNames);

