'use client';
import React, { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import { styles } from "@/app/style"
import { navLinks } from "../constants";
import {AiOutlineLinkedin, AiOutlineGithub, AiFillMediumCircle} from 'react-icons/ai'

import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-center items-center max-w-7xl mx-auto'>
        <div className="flex items-center gap-8">
        <Link
          href='https://www.linkedin.com/in/mihyeon'
          className=''
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex gap-5'>
            <AiOutlineLinkedin size={30}/>
          </p>
        </Link>
        <Link href='https://github.com/cocoball200'
          className=''
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
        <AiOutlineGithub size={30}/>
        </Link>
        <Link href='https://medium.com/@cocoball200'
          className=''
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
        <AiFillMediumCircle size={30}/>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
