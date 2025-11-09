const products = [
  { name: "Laptop", category: "Electronics", price: 25000, inStock: true, rating: 4.7 },
  { name: "Smartphone", category: "Electronics", price: 15000, inStock: false, rating: 4.2 },
  { name: "Smart Watch", category: "Electronics", price: 900, inStock: true, rating: 4.5 },
  { name: "Headphones", category: "Electronics", price: 800, inStock: true, rating: 3.9 },
  { name: "T-shirt", category: "Clothing", price: 350, inStock: true, rating: 4.1 },
  { name: "Sneakers", category: "Clothing", price: 900, inStock: false, rating: 4.6 },
  { name: "Jacket", category: "Clothing", price: 1200, inStock: true, rating: 4.8 },
  { name: "Backpack", category: "Accessories", price: 500, inStock: true, rating: 4.3 },
  { name: "Sunglasses", category: "Accessories", price: 700, inStock: false, rating: 3.7 },
];




const filterInStock = products.filter((product) => product.inStock)
const filterProducts = products.filter((product) => product.price <= 1000)
const filterRating = products.filter((product) => product.rating >= 4.5)
const filterCategory = products.filter((product) => product.category === "Electronics" && product.inStock && product.price <5000)



function allProducts (title, array){
    console.log(title);
array.forEach((product) => {
    console.log(`✅${product.name} - ${product.price}EGP - ⭐${ product.rating}`)
  
    
});

    

}

allProducts(`💠المنتجات المتوفره `,filterInStock )
allProducts(`المنتجات الارخص من 1000💰` , filterProducts)
allProducts(` ⭐المنتجات ذات التقييم الاعلى`, filterRating)
allProducts(`💎الكترونيات اقل من 5000`, filterCategory)





