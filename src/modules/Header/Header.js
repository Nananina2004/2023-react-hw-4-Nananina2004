import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap items-center mx-auto max-w-screen-xl">
                    <Link href="/home" passHref>
            <span className="flex items-center mr-4 cursor-pointer">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Anime
              </span>
            </span>
                    </Link>
                    <div className="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1"></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
