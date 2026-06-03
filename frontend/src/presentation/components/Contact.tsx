import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

export default function Contact() {
  return (
    <div className="mt-20 lg:py-10">
      <div className="text-center">
        <h2 className="after:bg-emerald-950 text-3xl font-extrabold  after:h-1 after:border after:flex after:w-12 after:mx-auto after:mt-2">Contact Us</h2>
        <p className="text-sm mx-5 mt-3 text-gray-600">Punya ide luar biasa atau proyek yang ingin didiskusikan? Hubungi kami dan mari wujudkan bersama.</p>
      </div>
      <div className="bg-white rounded-xl lg:mx-20 md:grid md:grid-cols-2 md:justify-center md:items-center md:mt-10">
        <div className="mt-10 p-5">
          <div>
            <h3 className="text-xl font-bold">Mari Bangun Sesuatu yang Hebat</h3>
            <p className="mt-3 text-gray-600 text-md">Tim desainer dan pengembang kami siap membantu Anda mengesekusi ide bisnis menjadi produk digital berskala tinggi. Kirim pesan atau hubungi kami langsung lewat kontak di bawah.</p>
          </div>
          <div className="my-10 flex flex-col gap-8 justify-center items-center  md:items-start">
            <div className="">
              <span className=" mb-1 block bg-emerald-100 w-fit mx-auto md:mx-0 p-3">
                <Mail size={20} className="text-emerald-500" />
              </span>
              <p className="text-sm text-gray-700">example@gmail.com</p>
            </div>
            <div>
              <span className=" mb-1 block bg-emerald-100 w-fit mx-auto md:mx-0 p-3">
                <Phone size={20} className="text-emerald-500" />
              </span>
              <p className="text-sm text-gray-700">08776655443</p>
            </div>
            <div>
              <span className="mb-1 block bg-emerald-100 w-fit mx-auto md:mx-0 p-3">
                <MapPin size={20} className="text-emerald-500" />
              </span>
              <p className="text-sm text-gray-700">Cianjur, Jawa Barat</p>
            </div>
          </div>
        </div>
        <div className="">
          <form action="" className="m-5 flex flex-col gap-5">
            <div>
              <label htmlFor="" className="text-sm">
                Nama Lengkap
              </label>
              <input type="text" placeholder="Nama Lengkap" className=" w-full  p-1 py-2 rounded-lg placeholder:text-sm focus:border-emerald-700 focus:outline-none focus:border-2 mt-2 bg-gray-300" />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input type="emil" placeholder="Email" className=" bg-gray-300 w-full p-1 py-2 rounded-lg placeholder:text-sm focus:border-emerald-700 focus:outline-none focus:border-2 mt-2" />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Pilih Konsul
              </label>
              <p>
                <select name="" className="bg-gray-300 text-sm text-gray-600 rounded-md mt-2" id="">
                  <option value="Web Development">Web Development</option>
                  <option value="High-Performance Backend">High-Performance Backend</option>
                  <option value="Mobile Apps Development">Mobile Apps Development</option>
                  <option value="UI/UX Design & Branding">UI/UX Design & Branding</option>
                </select>
              </p>
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Pesan anda
              </label>
              <p className="mt-2">
                <textarea name="" id="" placeholder="Pesan" className="p-1 rounded-lg bg-gray-300 w-80 h-20"></textarea>
              </p>
            </div>
            <div>
              <button className="w-full bg-emerald-700 py-2 text-white rounded-lg">Kirim Pesan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
