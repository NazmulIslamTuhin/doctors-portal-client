import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';


  const AvailableAppointments = ({ selectedDate }) => {
    const [AppointmentOption, setAppointmentOption] = useState([])
    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])
    return (
        <section className='my-16'>
            <p className="text-center font-bold">AvailableAppointments on {format(selectedDate, 'PP')} </p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                
                {
                    AppointmentOption.map(option => <AppointmentOptions
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOptions>)

                }
            </div>
        </section>

    );
};

export default AvailableAppointments;







