import React from 'react'
import hero from '../../assets/hero.jpg'

export default function Hero() {
  return (
    <div className="">
      <div className=" ">
        <img src={hero} alt="" className="block w-full h-dvh object-cover" />
      </div>
      <div className="absolute top-50 w-full ps-5 py-10 lg:text-center backdrop-blur-sm bg-black/40">
        <h3 className="text-white font-semibold text-3xl">Transformasikan Ide Bisnis Anda Menjadi Solusi Digital Berkelas Dunia.</h3>
        <p className="mt-5 text-white">Kami membantu bisnis dan startup membangun aplikasi web dan mobile yang modern, cepat, dan berskala besar menggunakan teknologi mutakhir.</p>
        <button className="mt-5 me-5 bg-white  py-2 px-3 rounded-lg">Mulai Konsultasi</button>
        <button className="mt-5 border text-white border-white py-2 px-3 rounded-lg">Lihat Portfolio</button>
      </div>
    </div>
  );
}
