import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div class="grid grid-cols-3 gap-6 py-8 text-center px-12 py-20 card-section">
            <div class="border-2 border-indigo-600 px-4 py-12 rounded-md bg-yellow-500 text-gray-500">
                <h1 class="text-2xl font-bold mb-4">Best Work From Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta, libero aut cupiditate deserunt deleniti explicabo, corporis mollitia voluptas accusamus at aspernatur obcaecati qui iusto.</p>
                <button class="text-white hover:bg-indigo-600 px-10 py-3 mt-14 text-xl bg-purple-500 rounded-full">Book Now</button>
            </div>

            <div class="border-2 border-indigo-600 px-4 py-12 rounded-md bg-yellow-500 text-gray-500">
                <h1 class="text-2xl font-bold mb-4">Best Work From Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta, libero aut cupiditate deserunt deleniti explicabo, corporis mollitia voluptas accusamus at aspernatur obcaecati qui iusto.</p>
                <button class="text-white hover:bg-indigo-600 px-10 py-3 mt-14 text-xl bg-purple-500 rounded-full">Book Now</button>
            </div>

            <div class="border-2 border-indigo-600 px-4 py-12 rounded-md bg-yellow-500 text-gray-500">
                <h1 class="text-2xl font-bold mb-4">Best Work From Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta, libero aut cupiditate deserunt deleniti explicabo, corporis mollitia voluptas accusamus at aspernatur obcaecati qui iusto.</p>
                <button class="text-white hover:bg-indigo-600 px-10 py-3 mt-14 text-xl bg-purple-500 rounded-full">Book Now</button>
            </div>
        </div>
    );
};

export default Card;