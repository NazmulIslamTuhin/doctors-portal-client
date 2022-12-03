import React from 'react';
import chair from'../../../assets/images/chair.png';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">Gone are the days when only one dentist treated an entire town’s dental problems. Now, each street may have more than two or three dentists itself. As more and more people started getting health-conscious, the demand for healthcare increased. Today, there is a specialized doctor for every health condition</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;