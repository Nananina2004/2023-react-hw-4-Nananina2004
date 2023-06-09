'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime/${params.id}`);
                setData(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex m-10">
            <div className="w-64 h-96">
                <img
                    src={data.attributes.posterImage.original}
                    alt={data.attributes.canonicalTitle}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="max-w-2xl mx-auto px-4 mt-8">
                <h1 className="text-3xl font-semibold">{data.attributes.canonicalTitle}</h1>
                <div className="flex items-center mt-2">
                    <span className="inline-block bg-red-800 text-white text-xs px-2 py-1 rounded-full">
                        Rating {data.attributes.averageRating}
                    </span>
                </div>
                <p className="text-dark-200 mt-4">{data.attributes.description}</p>
            </div>
        </div>
    );
};

export default Page;
