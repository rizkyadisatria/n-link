import Head from "next/head";

export default function Home() {
  return (
    <div className="font-ProductSans">
      <Head>
        <title>N-Link - Internet Paling Baik!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header>
        <div className="container flex items-center py-4 mt-4 sm:mt-12">
          <img className="py-1 h-14 cursor-pointer" src="/Nlink.jpeg" alt="" />
          <div className="hidden sm:flex flex-1 justify-end items-center gap-12 text-nlink-green uppercase text-xs">
            <a href="#Features" className="cursor-pointer">
              Features
            </a>
            <a href="#Pricing" className="cursor-pointer">
              Pricing
            </a>
            <a href="#Contact" className="cursor-pointer">
              Contact
            </a>
          </div>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="text-2xl fas fa-bars"></i>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-nlink-green text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Internet Cepat dan Unlimited
            </h2>
            <p className="text-nlink-grey text-lg text-center lg:text-left mb-6">
              Bebas akses internet dengan stabil, telepon rumah jernih dan
              tayangan TV interaktif terpopuler dengan N-Link.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/hero-bg.png"
              alt=""
            />
          </div>
        </div>

        {/* Rounded Rectangle */}
        <div
          className="hidden
          md:block
          overflow-hidden
          bg-nlink-blue
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          "
        ></div>
      </section>

      {/* Features */}
      <section className="bg-nlink-white py-20 mt-20 lg:mt-60">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 id="Features" className="text-3xl text-center text-nlink-green">
            Features
          </h1>
          <p className="text-center text-nlink-grey mt-4">
            Tujuan kami adalah untuk mempercepat dan memudahkan Anda mengakses
            Internet Anda dengan N-Link. Kami menggunakan perangkat terbaik,
            sehingga Anda dapat mengaksesnya kapan saja.
          </p>
        </div>
        {/* Feature #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="/illustration-features-tab-1.png"
                alt=""
              />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-nlink-green">Fiber Optic</h1>
              <p className="text-nlink-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Menggunakan teknologi Fiber Optic, memiliki kecepatan transmisi
                data yang super cepat, yang mencapai 1 GB/detik.
              </p>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-nlink-blue
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            
          "
          ></div>
        </div>

        {/* Feature #2 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="/illustration-features-tab-2.png"
                alt=""
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-nlink-green">Kuota Unlimited</h1>
              <p className="text-nlink-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Dapat menggunakan internet sepuasnya dengan stabil, tanpa batas
                atau tanpa FUP (Fair Usage Policy).
              </p>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-nlink-blue
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            right-0
          "
          ></div>
        </div>

        {/* Feature #3 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="/illustration-features-tab-3.png"
                alt=""
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-nlink-green">Boardband</h1>
              <p className="text-nlink-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Denga koneksi internet yang digunakan di rumah, dimana kecepatan
                dan performance-nya dapat dibagi ke setiap pengguna/perangkat.
              </p>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-nlink-blue
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
          ></div>
        </div>
      </section>

      {/* Download */}
      <section className="py-20 mt-20">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 id="Pricing" className="text-3xl text-center text-nlink-green">
            Daftar Paket & Harga Bulanan
          </h1>
          <p className="text-center text-nlink-grey mt-4">
            Kami Menyediakan berbagai paket data dan Harga bulanan-nya.
          </p>
        </div>
        {/* Cards */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* Card #1 */}
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <img src="https://img.icons8.com/color/144/000000/home.png" />
              <h3 className="mt-5 mb-2 text-nlink-green text-lg">Home User</h3>
              <p className="mb-2 text-nlink-grey font-light">Wireless</p>
            </div>
            <hr className="border-b border-nlink-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 shadow-md py-3 px-6 rounded-md transition duration-300 bg-nlink-green text-white cursor-default"
              >
                Up to 5Mbps
              </button>
            </div>
          </div>
          {/* Card #2 */}
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <img src="https://img.icons8.com/color/144/000000/link-company-parent.png" />
              <h3 className="mt-5 mb-2 text-nlink-green text-lg">
                Office & Hotel
              </h3>
              <p className="mb-2 text-nlink-grey font-light">
                Wireless/Fiber Optic
              </p>
            </div>
            <hr className="border-b border-nlink-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 shadow-md py-3 px-6 rounded-md transition duration-300 bg-nlink-green text-white cursor-default"
              >
                Up to 100 Mbps
              </button>
            </div>
          </div>

          {/* Card #3 */}
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <img src="https://img.icons8.com/color/144/000000/speed.png" />
              <h3 className="mt-5 mb-2 text-nlink-green text-lg">Dedicated</h3>
              <p className="mb-2 text-nlink-grey font-light">Fiber Optic</p>
            </div>
            <hr className="border-b border-nlink-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 shadow-md py-3 px-6 rounded-md transition duration-300 bg-nlink-green text-white cursor-default"
              >
                Up to 20 Mbps
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nlink-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-blue">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-nlink-grey mt-4">
              Berikut adalah beberapa FAQ kami. Jika Anda memiliki pertanyaan
              lain yang ingin Anda tanya, jangan ragu untuk mengirim email
              kepada kami.
            </p>
          </div>

          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Apa itu N-Link?</span>
              <i className="text-purple fas fa-chevron-down"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">
                Bagaimana cara saya untuk mendaftar di N-Link?
              </span>
              <i className="text-purple fas fa-chevron-down"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Dimana letak kantor N-Link?</span>
              <i className="text-purple fas fa-chevron-down"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Berapa lama pemasangan N-Link?</span>
              <i className="text-purple fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nlink-green text-nlink-white py-20">
        <div className="container">
          <div id="Contact" className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className="font-light uppercase text-center mb-8">
              35,000+ SUDAH BERGABUNG
            </p>
            <h1 className="text-3xl text-center">
              Tetap up-to-date dengan apa yang kami lakukan
            </h1>
            <div className="flex justify-center sm:flex-row gap-6 mt-8">
              <a href="https://wa.me/085933005036">
                <button
                  type="button"
                  className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-nlink-red hover:bg-nlink-white hover:text-black"
                >
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-nlink-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <h1 className="text-nlink-white">N-Link</h1>
          </div>
          <div className="flex gap-10 mt-5 md:mt-0 cursor-pointer">
            <a href="https://wa.me/085933005036">
              <img src="/whatsapp.png" />
            </a>
            <a href="https://gmail.com">
              <img src="/gmail.png" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
