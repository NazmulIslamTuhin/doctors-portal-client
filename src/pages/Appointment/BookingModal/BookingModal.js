import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDafault();
        const form = event.target;
        // const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        console.log(date,  name, email, phone);
        


        // PROBLEM
        const booking = {
        appointmentDate: date,
        patiant: name,
        treatment: name,
        slots,
         email,
         phone,
     }
    //  console.log(date, slot, name, email, phone);


       
    }
    
    return (
        <>
            <input type="checkbox" id="booking-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full ">
                            <option>Who shot first?</option>
                            {
                                slots.map((slot, i) => <option 
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn=accent w-full ' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;