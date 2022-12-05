import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectDate}
                setSelectedDate={setSelectDate}
            ></AppointmentBanner>
            <AvailableAppointments selectedDate={selectDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;