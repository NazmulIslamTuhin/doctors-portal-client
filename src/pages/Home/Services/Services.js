import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const ServicesData = [
        {
            id: 1,
            name: 'Flurido Treatment',
            description:' Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description:'A cavity filling brings back the functionality and appearance of the tooth',
            img: cavity
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            description:'Teeth whitening involves bleaching your teeth to make them lighter.',
            img: whitening
        },
    ]

    
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl text-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ServicesData.map(srv => <Service
                    srv={srv}
                    key={srv.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;