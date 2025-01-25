import { Carousel } from 'flowbite-react';
import React from 'react';

const Home = () => {
  return (
    <div className='bg-slate-500'>
      <div className='mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className='flex flex-col md:flex-row-reverse h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <img className='h-full w-full object-cover' src="/assets/images/istockphoto-1934009962.jpg" alt="..." />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 class="text-4xl md:text-6xl font-bold text-white">COMMERCIAL SERVICES</h2>
              <p class="text-lg md:text-xl text-white mt-4 max-w-2xl">
                Outdoor/Parking Lot Lighting, Lighting Design, Motors, Transformers, Isolated Computer Circuits and More!
              </p>
              <button class="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition">
                CONTACT US
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <img className='h-full w-full object-cover' src="/assets/images/electric-1080585_1280.jpg" alt="..." />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 class="text-4xl md:text-6xl font-bold text-white">COMMERCIAL SERVICES</h2>
              <p class="text-lg md:text-xl text-white mt-4 max-w-2xl">
                Outdoor/Parking Lot Lighting, Lighting Design, Motors, Transformers, Isolated Computer Circuits and More!
              </p>
              <button class="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition">
                CONTACT US
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <img className='h-full w-full object-cover' src="/assets/images/ai-generated-8866051_1280.webp" alt="..." />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 class="text-4xl md:text-6xl font-bold text-white">COMMERCIAL SERVICES</h2>
              <p class="text-lg md:text-xl text-white mt-4 max-w-2xl">
                Outdoor/Parking Lot Lighting, Lighting Design, Motors, Transformers, Isolated Computer Circuits and More!
              </p>
              <button class="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition">
                CONTACT US
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <img className='h-full w-full object-cover' src="/assets/images/television-tower-7176085_960_720.jpg" alt="..." />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 class="text-4xl md:text-6xl font-bold text-white">COMMERCIAL SERVICES</h2>
              <p class="text-lg md:text-xl text-white mt-4 max-w-2xl">
                Outdoor/Parking Lot Lighting, Lighting Design, Motors, Transformers, Isolated Computer Circuits and More!
              </p>
              <button class="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition">
                CONTACT US
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <img className='h-full w-full object-cover' src="/assets/images/tool-2766835_1280.jpg" alt="..." />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 class="text-4xl md:text-6xl font-bold text-white">COMMERCIAL SERVICES</h2>
              <p class="text-lg md:text-xl text-white mt-4 max-w-2xl">
                Outdoor/Parking Lot Lighting, Lighting Design, Motors, Transformers, Isolated Computer Circuits and More!
              </p>
              <button class="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition">
                CONTACT US
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
