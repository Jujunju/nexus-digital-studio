import React from 'react';
import about from '../../assets/about.jpg';

export default function About() {
  return (
    <div className="mt-10 ">
      <div className="pt-5 text-center">
        <h2 className="after:bg-emerald-950 text-3xl font-extrabold md:ms-5 after:h-1 after:border after:flex after:w-12 after:mx-auto ">About Us</h2>
        <p className="mt-2 text-gray-600 text-sm md:ms-5">Ingin tahu mengenai detail perusahaan kami?</p>
      </div>
      <div className="md:grid md:grid-cols-2 md:mt-10 justify-center items-center md:mx-5">
        <div className="m-10 md:m-5 bg-white p-2 rounded-lg">
          <img src={about} alt="" className="block mx-auto " />
        </div>
        <div className="m-2 rounded-lg bg-white p-2">
          <div>
            <p className="text-md w-fit my-2 bg-emerald-50 p-1 text-emerald-700">Our Identity</p>
            <h3 className="mb-3 text-2xl  mt-5 font-extrabold">Siapa Kami?</h3>
            <p>
              Di <span className="font-bold text-emerald-700">Nexus Digital Studio</span>, kami percaya bahwa kode yang baik adalah fondasi dari bisnis yang sukses. Kami adalah tim pengembang, desainer, dan pemikir strategi digital yang
              berkomitmen untuk menciptakan produk digital yang tidak hanya indah dipandang, tetapi juga tangguh dan mudah dikembangkan <span className="font-bold italic text-emerald-700">(scalable).</span>
            </p>
          </div>
          <hr className="my-5" />
          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="">
                <span className="text-sm font-bold text-emerald-700">Clean Architecture</span> <p className="text-xs">Kami menulis kode yang bersih, terstruktur, dan mudah dirawat jangka panjang.</p>
              </li>
              <li>
                <span className="text-sm font-bold text-emerald-700">Performa Tinggi</span> <p className="text-xs">Aplikasi super cepat dan aman menggunakan teknologi backend modern.</p>
              </li>
              <li>
                <span className="text-sm font-bold text-emerald-700">Berorientasi Hasil</span> <p className="text-xs">Setiap solusi digital dirancang penuh untuk mendukung pertumbuhan bisnis Anda.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
