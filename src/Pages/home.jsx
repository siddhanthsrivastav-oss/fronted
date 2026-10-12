import React from "react";
// import Header from "../Components/Header";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      name: "Leather Jacket",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "₹5,499",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 4,
      name: "Headphones",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
  ];

  return (
<>
      {/* <Header /> */}
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Your <br /> Perfect Style
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Shop the latest fashion and lifestyle products with exclusive
              discounts.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700"
              alt="Fashion"
              className="rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-4xl">🚚</h2>
          <h3 className="font-bold mt-3">Free Shipping</h3>
          <p className="text-gray-500 mt-2">
            On orders above ₹999
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-4xl">💳</h2>
          <h3 className="font-bold mt-3">Secure Payment</h3>
          <p className="text-gray-500 mt-2">
            100% Safe Checkout
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-4xl">🔄</h2>
          <h3 className="font-bold mt-3">Easy Returns</h3>
          <p className="text-gray-500 mt-2">
            7 Days Return Policy
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-4xl">🎧</h2>
          <h3 className="font-bold mt-3">24/7 Support</h3>
          <p className="text-gray-500 mt-2">
            We are here to help
          </p>
        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto py-10 px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {["Men", "Women", "Shoes", "Accessories"].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={`https://picsum.photos/400/300?random=${item}`}
                alt={item}
                className="h-52 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-xl">{item}</h3>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-60 w-full object-cover hover:scale-105 duration-300"
              />

              <div className="p-5">

                <h3 className="font-bold text-lg">{item.name}</h3>

                <p className="text-blue-600 font-bold mt-2">
                  {item.price}
                </p>

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Banner */}

      <section className="bg-blue-700 text-white py-16 text-center">

        <h2 className="text-5xl font-bold">
          50% OFF
        </h2>

        <p className="mt-4 text-xl">
          Summer Collection Sale
        </p>

        <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold">
          Explore Now
        </button>

      </section>

    </div>
    </>
  );
  
};

export default Home;