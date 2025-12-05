import { useState } from "react";
export default function Produk() {
  const products = [
    {
      image: "src/img/whiskasBasah.jpg",
      name: "Whiskas",
      price: "7.000",
      category: "makanan",
    },
    {
      image: "src/img/whiskasKaleng.jpg",
      name: "Whiskas Kaleng",
      price: "15.000",
      category: "makanan",
    },
    {
      image: "src/img/bolt.jpg",
      name: "Bolt",
      price: "15.000",
      category: "makanan",
    },
    {
      image: "src/img/catChoize.jpg",
      name: "Cat Chooize",
      price: "20.000",
      category: "makanan",
    },
    {
      image: "src/img/Excel.jpg",
      name: "Excel",
      price: "12.000",
      category: "makanan",
    },
    {
      image: "src/img/lifeCat_kaleng.jpg",
      name: "Life Cat Kaleng",
      price: "15.000",
      category: "makanan",
    },
    {
      image: "src/img/lifeCat.jpg",
      name: "Life Cat",
      price: "7.000",
      category: "makanan",
    },
    {
      image: "src/img/me-o.jpg",
      name: "Me-o",
      price: "30.000",
      category: "makanan",
    },
    {
      image: "src/img/royalCanin.jpg",
      name: "Royal Canin",
      price: "50.000",
      category: "makanan",
    },
    {
      image: "src/img/royalCanin_kitten.jpg",
      name: "Royal Canin Kitten",
      price: "45.000",
      category: "makanan",
    },
    {
      image: "src/img/royalCanin_kaleng.jpg",
      name: "Royal Canin Kaleng",
      price: "45.000",
      category: "makanan",
    },
    {
      image: "src/img/felibite.jpg",
      name: "Felibite",
      price: "25.000",
      category: "makanan",
    },
    {
      image: "src/img/lickableTreat.jpg",
      name: "Lickable Treat",
      price: "15.000",
      category: "makanan",
    },
    {
      image: "src/img/meoCreamy.jpg",
      name: "Me-o Creamy",
      price: "15.000",
      category: "makanan",
    },
    {
      image: "src/img/susu.jpg",
      name: "Susu Kucing",
      price: "4.000",
      category: "makanan",
    },

    // non makanan
    {
      image: "src/img/ranselKucing.jpg",
      name: "Ransel Kucing",
      price: "150.000",
      category: "non-food",
    },
    {
      image: "src/img/rompiKucing.jpg",
      name: "Rompi Kucing",
      price: "60.000",
      category: "non-food",
    },
    {
      image: "src/img/sweeaterRajut.jpg",
      name: "Sweater Rajut Kucing",
      price: "80.000",
      category: "non-food",
    },
    {
      image: "src/img/tasCarrier.jpg",
      name: "Tas Carrier Kucing",
      price: "300.000",
      category: "non-food",
    },
    {
      image: "src/img/catSisalBall.jpg",
      name: "Cat Sisal Ball",
      price: "60.000",
      category: "non-food",
    },
    {
      image: "src/img/kalungKucing.jpg",
      name: "Kalung Kucing",
      price: "15.000",
      category: "non-food",
    },
  ];
  const [filter, setFilter] = useState("all");
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <>
      <section id="produk" className="pt-36 pb-20 lg:pb-32 bg-orange-50 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-5 mb-10 text-center">
              <div className="max-w-xl justify-center mx-auto text-center mb-40">
                <h2 className="text-2xl font-bold text-orange-500 mt-2 lg:text-4xl mb-3">
                  Produk Kami
                </h2>
                <p className="text-sm text-slate-500">
                  Temukan berbagai pilihan makanan dan aksesori terbaik untuk
                  hewan peliharaan Anda. Semua produk kami dipilih dengan hati
                  untuk memenuhi kebutuhan mereka setiap hari.
                </p>
              </div>
              {/* Filter Button */}
              <div className="flex justify-start md:gap-4 gap-2 mb-8 lg:px-20">
                <button
                  className={`md:px-4 md:py-2 px-3 py-2 rounded-lg border text-sm ${
                    filter === "all"
                      ? "bg-orange-500 text-white transition duration-300"
                      : "bg-white text-orange-500 border-orange-500"
                  }`}
                  onClick={() => setFilter("all")}
                >
                  Semua
                </button>

                <button
                  className={`md:px-4 md:py-2 px-3 py-2 rounded-lg border text-sm ${
                    filter === "makanan"
                      ? "bg-orange-500 text-white transition duration-300"
                      : "bg-white text-orange-500 border-orange-500"
                  }`}
                  onClick={() => setFilter("makanan")}
                >
                  Makanan Kucing
                </button>

                <button
                  className={`md:px-4 md:py-2 px-3 py-2 rounded-lg border ${
                    filter === "non-food"
                      ? "bg-orange-500 text-white transition duration-300"
                      : "bg-white text-orange-500 border-orange-500"
                  }`}
                  onClick={() => setFilter("non-food")}
                >
                  Produk Kucing
                </button>
              </div>
              {/* Scroll Area */}
              <div className="w-full  flex flex-wrap justify-center lg:px-20">
                <div className="overflow-y-auto max-h-150 bg-white p-5 rounded-lg w-full shadow-lg inset-shadow-sm">
                  <div className="flex flex-wrap gap-5 lg:gap-10 w-full justify-center lg:justify-center py-3">
                    {filteredProducts.map((item, idx) => (
                      <div
                        key={idx}
                        className="w-36 bg-orange-100 rounded-lg border border-slate-200 p-3 shadow-md hover:shadow-xl transition duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-28 object-cover rounded border border-slate-200"
                        />

                        <h3 className="text-sm font-semibold text-slate-700 mt-2">
                          {item.name}
                        </h3>

                        <p className="text-orange-600 text-sm font-bold mt-1">
                          Rp {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
