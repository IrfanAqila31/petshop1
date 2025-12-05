import "./App.css";

export default function Home() {
  return (
    <>
      <section id="home" className="pt-36 lg:px-20 bg-orange-50">
        <div className="container ">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-5 lg:w-1/2">
              <h2 className="text-base font-semibold text-slate-500 md:text-lg lg:text-2xl">
                Hello 👋
              </h2>

              <h2 className="text-4xl font-bold text-orange-500 mt-2 lg:text-5xl">
                Welcome to PawHaven Petshop
              </h2>
              <p className="text-slate-500 mt-3">
                Kami menyediakan produk pilihan untuk menjaga kenyamanan dan
                kesehatan mereka—mulai dari makanan bergizi hingga aksesori yang
                aman digunakan.
              </p>
              <a
                href="https://wa.me/6287795528998"
                target="_blank"
                className="text-white py-3 px-5 bg-orange-400 rounded-2xl mt-8 inline-block hover:bg-orange-500 transition duration-500 shadow-xl"
              >
                Hubungi Kami
              </a>
            </div>
            <div className="w-full px-5 lg:w-1/2 md:flex justify-center">
              <div className=" mt-15 lg:mt-0 relative lg:right-0 ">
                <img
                  src="src/img/2.png"
                  alt="Kucing"
                  width={600}
                  className="drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
