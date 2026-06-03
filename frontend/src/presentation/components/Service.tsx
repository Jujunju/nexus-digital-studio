import { Code2, Cpu, Palette, Smartphone } from 'lucide-react';
// import React from 'react';

const service = [
  {
    id: 1,
    title: 'Web Development',
    tech: 'MERN Stack & TypeScript',
    desc: 'Pembuatan website kustom, landing page, hingga platform e-commerce dan dashboard admin yang responsif serta interaktif.',
    icon: Code2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'High-Performance Backend',
    tech: 'Golang & Gin Framework',
    desc: 'Pengembangan sistem backend dan API yang cepat, aman, dan mampu menangani jutaan data lalu lintas tinggi dengan lancar.',
    icon: Cpu,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 3,
    title: 'Mobile Apps Development',
    tech: 'Android & iOS Apps',
    desc: 'Aplikasi mobile Android dan iOS yang lancar dengan performa native untuk memberikan pengalaman pengguna terbaik.',
    icon: Smartphone,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 4,
    title: 'UI/UX Design & Branding',
    tech: 'Figma & Wireframing',
    desc: 'Perancangan antarmuka aplikasi yang modern, estetik, dan intuitif yang disesuaikan dengan identitas brand bisnis Anda.',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function Service() {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <h1 className="after:bg-emerald-950 text-3xl font-extrabold  after:h-1 after:border after:flex after:w-12 after:mx-auto after:mt-2">Services</h1>
        <p className="mt-2 text-gray-700 text-sm">Kami menghadirkan solusi teknologi mutakhir untuk membantu mentransformasikan bisnis Anda ke ekosistem digital.</p>
      </div>
      <div className="mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 lg:mx-10">
        {service.map((service) => {
          const IconCom = service.icon;

          return (
              <div key={service.id} className=" m-3 bg-white shadow-lg p-3 rounded-lg flex flex-col ">
                <div className={`w-fit ${service.bgColor} p-1 rounded-lg mb-2 my-2`}>
                  <IconCom size={30} className={`rounded-lg ${service.color}`} />
                </div>
                <span className="font-bold">{service.title}</span>
                <span className="text-xs w-fit my-2 bg-emerald-50 p-1 text-emerald-700">{service.tech}</span>
                <span className="text-sm">{service.desc}</span>
              <div>
                <button className='text-sm mt-5 mb-2 text-emerald-600'>
                  Lihat Selengkapnya 
                </button>
              </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}
