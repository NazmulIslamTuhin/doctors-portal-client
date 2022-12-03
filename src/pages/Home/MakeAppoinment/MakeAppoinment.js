import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (

        <section className='mt-32'
         style={{
            background: `url(${appoinment})`
        }}
        >

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg " />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appoinment</h4>
                        <h1 className="text-white text-4xl font-bold">Make an Appoinment Today</h1>
                        <p className="text-white py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Appoinment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;