import React from 'react';
import Image from 'next/image';

const MobileLayout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen py-2 bg-white">
        <header className="flex justify-between items-center w-full px-4 py-2 bg-black">
          <nav className="flex space-x-4 bg-black">
            <Image src="/logo.jpeg" alt="Logo" width={60} height={60} className="rounded-[20%]" />
          </nav>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center text-black">
          {children}
        </main>
      </div>
    );
  };
  
  export default MobileLayout;