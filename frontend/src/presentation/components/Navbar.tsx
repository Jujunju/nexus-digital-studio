import React, { useEffect, useState } from 'react';
import { TextAlignEnd, TextAlignJustify } from 'lucide-react';

const links = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'About',
  },
  {
    id: 3,
    title: 'Services',
  },
  {
    id: 4,
    title: 'Contact',
  },
];

export default function Navbar() {
  const [active, setIsActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <nav className={`flex justify-between md:hidden px-5 py-5 z-10 ${isScroll ? 'bg-white' : ''} fixed left-0 right-0  ${active ? 'bg-white' : ''}`}>
        <div>
          <span className="font-bold text-lg text-emerald-950">N D S</span>
        </div>
        <div className="">
          <ul className={`lg:flex lg:gap-5 bg-white transition-all duration-150 absolute top-14 flex flex-col gap-3 w-full left-0 ps-2 pe-10 py-5 ${active ? 'opacity-100' : 'opacity-0 left-96'}`}>
            {links.map((e) => (
              <li key={e.id} className="hover:bg-emerald-100/50 p-3 rounded-lg">
                <a href="" className="font-semibold">
                  {e.title}
                </a>
              </li>
            ))}
            <ul className="flex flex-col gap-3 ps-2 text-center">
              <li className="bg-emerald-950 text-white p-3 rounded-lg">
                <a href="">Masuk</a>
              </li>
              <li className="border-emerald-950 border text-black p-3 rounded-lg">
                <a href="">Daftar</a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="cursor-pointer " onClick={() => setIsActive(!active)}>
          {active ? <TextAlignJustify size={30} /> : <TextAlignEnd size={30} />}
        </div>
      </nav>

      <nav className={` justify-evenly fixed items-center hidden md:flex left-0 right-0 z-20 ${isScroll ? 'backdrop-blur-xl' : ''}`}>
        <div>
          <span className="font-bold text-lg text-emerald-950">N D S</span>
        </div>
        <div className="">
          <ul className={`flex  pt-5 pb-2`}>
            {links.map((e) => (
              <li key={e.id} className="hover:bg-emerald-100/50 p-3 rounded-lg">
                <a href="" className="font-semibold text-md">
                  {e.title}
                </a>
              </li>
            ))}
            <ul className="flex items-center gap-3 ps-2 text-center ms-5">
              <li className="">
                <a href="" className="text-md bg-emerald-950 text-white py-2 px-2 rounded-lg block">
                  Masuk
                </a>
              </li>
              <li className="lg:hidden">
                <a href="" className="text-md  border py-2 px-2 rounded-lg">
                  Daftar
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
}
