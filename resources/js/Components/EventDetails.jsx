import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function EventDetails({ event }) {
    const [numberOfSeats, setNumberOfSeats] = useState(1);

    const handleDecrease = () => {
        setNumberOfSeats(prev => Math.max(1, prev - 1));
    };

    const handleIncrease = () => {
        setNumberOfSeats(prev => prev + 1);
    };

    function handleBookNow(e) {
        e.preventDefault(); 
        Inertia.post(route('events.book', event.id), { numberOfSeats: numberOfSeats });
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <img src={event.movie.image} alt={event.movie.title} className="w-full h-auto rounded-lg mb-4" />
            <p className="text-lg font-semibold mb-2">{event.movie.title}</p>
            <p className="text-gray-600 mb-4">{event.movie.description}</p>
            <div className="flex flex-col mb-4">
                <p className="text-sm text-gray-500">Date: {event.screened_at}</p>
                <p className="text-sm text-gray-500">Time: {event.time}</p>
                <p className="text-sm text-gray-800">Available Seats: {event.available_seats}</p>
                <p className="text-sm text-gray-500">City: {event.theater.city.name}</p>
            </div>
            <div className="flex justify-between items-end">
                <div className="flex items-center mb-2">
                    <button onClick={handleDecrease} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-l">
                        -
                    </button>
                    <input
                        type="number"
                        value={numberOfSeats}
                        onChange={(e) => setNumberOfSeats(parseInt(e.target.value))}
                        className="text-center w-16 border-gray-300 rounded-none border-l border-r py-1"
                    />
                    <button onClick={handleIncrease} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-r">
                        +
                    </button>
                </div>
                <button onClick={handleBookNow} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Book Now
                </button>
            </div>
        </div>
    );
}
