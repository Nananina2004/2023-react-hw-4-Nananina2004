'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';


const Page = () => {
    const [princess, setPrincess] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://kitsu.io/api/edge/anime');
                const data = response.data.data;
                console.log(data);
                setPrincess(data);
            } catch (error) {
                console.error('Error fetching princess data:', error);
                setPrincess([]);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-screen grid grid-cols-4 gap-2 p-10">
            {princess.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Page;
