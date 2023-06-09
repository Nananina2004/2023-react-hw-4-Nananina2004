import React from 'react';
import Header from '@/modules/Header/Header';
import Link from "next/link";

const Card = ({ item }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
            <img src={item.attributes.posterImage.original} alt={item.attributes.canonicalTitle} className="w-64 h-64 object-cover" />
            <h2 className="text-xl font-bold mb-2 truncate">{item.attributes.canonicalTitle}</h2>
            <div className="mt-4">
                <Link href={`/home/${item.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
                        See more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
