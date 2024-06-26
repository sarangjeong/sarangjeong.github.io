'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function HomePage() {
  const router = useRouter();
  const [isImageClicked, setIsImageClicked] = useState(false);

  const words = [
    "👋 Hi! I'm Sarang Jeong, a fifth-year Ph.D. student studying linguistics at Stanford."
  ];

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return (
    <div className={"flex flex-col min-h-screen py-2"}>
      <header className="flex justify-between items-center w-full px-8 py-2 bg-black">
        <nav className="flex space-x-10 bg-black">
          <Image src="/logo.jpeg" alt="Logo" width={60} height={60} className="rounded-[20%]" />
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-gray-300">
        <div className="flex items-center mb-20">
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="cursor-pointer"
            onClick={handleImageClick}
          >
            <Image src="/profile.jpeg" alt="Profile Picture" width={250} height={250} className="rounded-full" />
          </motion.div>
          {isImageClicked && (
            <div className="ml-4 p-4 rounded bg-gray-800 bg-opacity-70 text-gray-300">
              <p className="text-lg font-semibold">Sarang Jeong</p>
                <p className="text-md">
                  Hi! I'm Sarang Jeong, a fifth-year Ph.D. student studying <a href="https://linguistics.stanford.edu" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">linguistics at Stanford</a>.<br />
                  I am currently advised by <a href="https://web.stanford.edu/~cgpotts" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Chris Potts</a>.<br />
                  I was also advised by <a href="https://web.stanford.edu/~anttila" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Arto Anttila</a> (first qualifying paper at Stanford)<br />
                  and <a href="http://ling.snu.ac.kr/jun/Jun03.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Jongho Jun</a> (master's at <a href="https://linguist.snu.ac.kr" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Seoul National University</a>).<br />
                  I'm interested in phonology, phonetics, psycholinguistics, and computational methods.<br />
                  Here's my <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">resume</a> in case you would like to learn more about me.<br />
                  Contact me at sarangj at stanford dot ee dee you or at my <a href="https://www.linkedin.com/in/sarang-jeong" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn profile</a>.
                </p>
            </div>
          )}
        </div>
        <div className="text-center text-2xl font-bold">
          <Typewriter
            words={words}
            loop={1} // Set to 0 for infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000} // Delay between each word change
          />
        </div>
      </main>
    </div>
  );
}
