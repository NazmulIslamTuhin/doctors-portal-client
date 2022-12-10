import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card shadow-xl mt-10">
            <div className="card-body text-center">
                {<h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>}
                <p>{ slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>available Now
                <div className="card-actions justify-center">
                    
                <label
                    disabled={slots.length === 0 }
                    htmlFor="booking-modal-3" 
                    className="btn btn-primary text-white"
                    onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;