import React, { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const navItems = [
  {link: "Home", path: "home"},
  {link: "About", path: "about"},
  {link: "Services", path: "services"},
  {link: "Contact", path: "contact"},
];

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  });

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-6 lg:px-14 px-8 bg-white ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <a href="/" className="text-3xl font-bold">M&A Engineering</a>
          <ul className='md:flex space-x-14 hidden text-xl'>
            {
              navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path}
              className='border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active'>{link}</Link>)
            }
          </ul>

          {/* Menu for mobile device */}
          <div className='md:hidden'>
            <button
            onClick={toggleMenu}
            className='focus:outline-none focus:text-gray-500'>
              {
                isMenuOpen ? (<FaXmark className='h-6 w-6 text-gray-400' />) : (<FaBars className='h-6 w-6 text-gray-400'/>)
              }
            </button>
          </div>
        </div>

        {/* nav for mobile */}
        <div className={`md:hidden space-y-4 px-4 mt-16 p-y-7 bg-blue-600 ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
          {
            navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path}
            className='block border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active'>{link}</Link>)
          }
        </div>
      </nav>
      {/* <nav className="bg-white-800 text-black p-8">
        <div className="container mx-auto flex justify-between">
          <a href="/" className="text-lg font-bold">M&A Engineering (PVT) Ltd.</a>
          <div className="space-x-12 text-xl">
            <a href="/" className="p-6 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">Home</a>
            <a href="/about" className="p-6 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">About</a>
            <a href="/services" className="p-6 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">Services</a>
            <a href="/contact" className="p-6 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">Contact</a>
          </div>
        </div>
      </nav> */}
    </header>
  );
};

export default Navbar;
