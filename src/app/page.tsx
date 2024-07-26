'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { useMediaQuery } from 'react-responsive';
import WebLayout from '@/app/components/WebLayout';
import MobileLayout from '@/app/components/MobileLayout';

export default function HomePage() {
  const router = useRouter();
  const [isImageClicked, setIsImageClicked] = useState(false);

  const words = [
    "👋 Hi! I'm Sarang Jeong, a fifth-year Ph.D. student studying linguistics at Stanford."
  ];

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const content = (
    <>
      <div className="flex items-center mb-20">
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          onClick={handleImageClick}
        >
          <Image src="/profile.jpeg" alt="Profile Picture" width={isMobile ? 150 : 250} height={isMobile ? 150 : 250} className="rounded-full" />
        </motion.div>
        {isImageClicked && (
          <div className="ml-4 p-4 rounded bg-gray-800 bg-opacity-70 text-white max-w-full overflow-y-auto max-h-96">
            <p className="text-black text-lg font-semibold">Sarang Jeong</p>
            <p className="text-black text-md inline">
              Hi! I'm Sarang Jeong, a fifth-year Ph.D. student studying <a href='https://linguistics.stanford.edu/' target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">linguistics at Stanford</a>.
              I am currently advised by <a href="https://web.stanford.edu/group/phonlab/cgi-bin/wordpress/" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Meghan Sumner</a>. <br />I was also advised by <a href="https://sites.google.com/view/snulixjun/home" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Jongho Jun</a> (master's at <a href="https://linguist.snu.ac.kr/" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Seoul National University</a>), <a href="https://web.stanford.edu/~anttila/" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Arto Anttila</a> (first qualifying paper at Stanford),<br />and <a href="https://web.stanford.edu/~cgpotts" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Chris Potts</a> & <a href="https://thegricean.github.io/" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Judith Degen</a> (second qualifying paper at Stanford).<br/><br/>
              I'm interested in phonology, phonetics, psycholinguistics, and computational methods.<br />
              Check out my most recent work:<br />
              <a href="https://escholarship.org/uc/item/8vv324wq" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">Is the asymmetry in negative strengthening the result of adjectival polarity or face considerations?</a>. <b>Jeong, S.</b>, Potts, C., and Degen, J.
              (2024).<br /> In <em>Proceedings of the 46th Annual Conference of the Cognitive Science Society.</em> <a href="https://github.com/sarangjeong/negated-adjectives/blob/master/writing/2024_cogsci/Jeong-et-al-2024_preprint.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">[preprint]</a> <a href="https://github.com/sarangjeong/negated-adjectives/blob/master/writing/2024_cogsci/Jeong-et-al-2024_CogSci-poster.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">[poster]</a> <a href="https://github.com/sarangjeong/negated-adjectives/" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">[git]</a><br/><br/>
              Here's my <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">resume</a> in case you would like to learn more about me.<br />
              Contact me at sarangj at stanford dot ee dee you or at my <a href="https://www.linkedin.com/in/sarang-jeong" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline">LinkedIn profile</a>.
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
    </>
  );

  return isMobile ? <MobileLayout>{content}</MobileLayout> : <WebLayout>{content}</WebLayout>;
}
