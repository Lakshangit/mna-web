import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    // <Footer container className='bg-gray-800'>
    //   <div className="w-full">
    //     <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
    //       <div className='space-y-3 mb-8'>
    //         <Footer.Brand
    //           href="/"
    //           src="/assets/images/Screenshot from 2025-01-24 20-49-31.png"
    //           alt="Flowbite Logo"
    //           name="M&A Engineering"
    //         />
    //         <p>Copyright @ 2025 M&A</p>
    //         <p>All right reserved</p>
    //       </div>
    //       <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
    //         <div>
    //           <Footer.Title title="about" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Flowbite</Footer.Link>
    //             <Footer.Link href="#">Tailwind CSS</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Follow us" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Github</Footer.Link>
    //             <Footer.Link href="#">Discord</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Legal" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Privacy Policy</Footer.Link>
    //             <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //       </div>
    //     </div>
    //     <Footer.Divider />
    //     <div className="w-full bg-gray-700 sm:flex sm:items-center sm:justify-between">
    //       <Footer.Copyright href="#" by="Flowbite™" year={2022} />
    //       <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    //         <Footer.Icon href="#" icon={BsFacebook} />
    //         <Footer.Icon href="#" icon={BsInstagram} />
    //         <Footer.Icon href="#" icon={BsTwitter} />
    //         <Footer.Icon href="#" icon={BsGithub} />
    //         <Footer.Icon href="#" icon={BsDribbble} />
    //       </div>
    //     </div>
    //   </div>
    // </Footer>
    <footer className='bg-gray-900 text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-8'>
        {/* logo */}
        <div>
          <div className='flex items-center mb-4'>
            <div>
              {/* Logo Icon */}
              <span className='text-white font-bold text-lg'>⚡</span>
            </div>
            <span className='ml-2 text-lg font-semibold'>Company</span>
          </div>
          <p className='text-gray-400'>
            Making the world a better place through constructing elegant hierarchies.
          </p>
          {/* social media icons */}
          <div className='flex space-x-4 mt-4'>
            <a href="" className='text-gray-400 hover:text-white'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <i className='fab fa-x-twitter'></i>
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <i className='fab fa-github'></i>
            </a>
            <a href="" className='text-gray-400 hover:text-white'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
        {/* links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Solutions</h3>
          <ul className='text-gray-400 space-y-2'>
          <li><a href="#" className="hover:text-white">Marketing</a></li>
          <li><a href="#" className="hover:text-white">Analytics</a></li>
          <li><a href="#" className="hover:text-white">Automation</a></li>
          <li><a href="#" className="hover:text-white">Commerce</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Submit ticket</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Guides</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">License</a></li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div className='mt-10 pt-6 border-t border-gray-700 text-center text-gray-400'>
        &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default MyFooter