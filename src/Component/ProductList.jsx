import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 1200,
      category: "Footwear",
    },
    {
      id: 2,
      name: "Headphones",
      price: 1800,
      category: "Electronics",
    },
    {
      id: 3,
      name: "T-Shirt",
      price: 700,
      category: "Clothing",
    },
    {
      id: 4,
      name: "Handbag",
      price: 1500,
      category: "Fashion",
    },
    {
      id: 5,
      name: "Water Bottle",
      price: 500,
      category: "Accessories",
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 900,
      category: "Fashion",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Product List
        </h1>

        <p className="text-purple-200 text-lg">
          Explore our latest products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
              {product.category}
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-3">
              {product.name}
            </h2>

            <div className="mt-5 border-t border-gray-200 pt-4">
              <p className="text-gray-500 text-sm">
                Product ID: {product.id}
              </p>

              <p className="text-2xl font-bold text-green-600 mt-2">
                ₹{product.price}
              </p>
            </div>

            <button
              className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl
              font-semibold hover:bg-purple-700 active:scale-95
              transition-all duration-200"
            >
              Buy Now
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;