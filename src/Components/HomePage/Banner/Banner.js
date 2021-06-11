import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div class="text-center w-3/6 mx-auto py-32 banner-section">
            <h1 class="font-bold text-lg text-5xl text-white">We are in Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officiis rem consequatur in quas cum aliquam, magnam, veniam mollitia alias illum quisquam deleniti repellat doloribus animi aliquid vero! A, ipsum quas fugiat repellat sit dicta!</p>
            <button class="text-white hover:bg-indigo-600 px-10 py-3 text-xl bg-purple-500 rounded-full">
                Hover me
            </button>
        </div>
    );
};

export default Banner;